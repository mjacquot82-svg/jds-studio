import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

// Isolate the unchanged function: no actual environment or network access.
const source = readFileSync(new URL('../netlify/functions/contact.js', import.meta.url), 'utf8');
function fixture(providerOK = true, configured = true) {
  const calls = [];
  const context = vm.createContext({
    process: { env: configured ? { RESEND_API_KEY: 'test-only' } : {} },
    URLSearchParams,
    console: { error() {} },
    fetch: async (url, options) => {
      calls.push({ url, ...options });
      return { ok: providerOK, status: 502, text: async () => 'mock rejection' };
    },
  });
  vm.runInContext(source.replace('export const handler =', 'globalThis.handler ='), context);
  return { handler: context.handler, calls };
}
const payload = { name: 'Local Test', email: 'test@example.invalid', project: 'Test message', business: '', 'bot-field': '', 'form-name': 'consultation' };
const event = (data = payload) => ({ httpMethod: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });

test('simplified three-field form retains the backend contract', async () => {
  const { handler, calls } = fixture();
  assert.equal((await handler(event())).statusCode, 200);
  assert.equal(calls.length, 1);
  const sent = JSON.parse(calls[0].body);
  assert.equal(sent.reply_to, payload.email);
  assert.match(sent.text, /Business: Not provided/);
  assert.match(sent.text, /Test message/);
});
test('form-encoded compatibility retained', async () => {
  const { handler } = fixture();
  assert.equal((await handler({ httpMethod: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(payload).toString() })).statusCode, 200);
});
test('honeypot returns without sending', async () => {
  const { handler, calls } = fixture();
  assert.equal((await handler(event({ ...payload, 'bot-field': 'bot' }))).statusCode, 200);
  assert.equal(calls.length, 0);
});
test('required values and malformed requests rejected', async () => {
  const { handler, calls } = fixture();
  for (const key of ['name', 'email', 'project']) assert.equal((await handler(event({ ...payload, [key]: '' }))).statusCode, 400);
  assert.equal((await handler({ ...event(), body: '{' })).statusCode, 400);
  assert.equal((await handler({ httpMethod: 'GET' })).statusCode, 405);
  assert.equal(calls.length, 0);
});
test('provider rejection and missing configuration remain failures', async () => {
  assert.equal((await fixture(false).handler(event())).statusCode, 502);
  assert.equal((await fixture(true, false).handler(event())).statusCode, 500);
});

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const clean = (value) => String(value || '').trim();

const requiredEnv = ['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'CONTACT_TO_EMAIL'];

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  const missingEnv = requiredEnv.filter((key) => !clean(process.env[key]));
  if (missingEnv.length > 0) {
    return json(500, {
      error: 'Contact form is not configured',
      missingEnv,
    });
  }

  let payload;
  try {
    const contentType = event.headers['content-type'] || event.headers['Content-Type'] || '';
    if (contentType.includes('application/x-www-form-urlencoded')) {
      payload = Object.fromEntries(new URLSearchParams(event.body || ''));
    } else {
      payload = JSON.parse(event.body || '{}');
    }
  } catch {
    return json(400, { error: 'Invalid request payload' });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const business = clean(payload.business);
  const project = clean(payload.project);
  const botField = clean(payload['bot-field']);

  if (botField) {
    return json(200, { ok: true });
  }

  if (!name || !email || !project) {
    return json(400, { error: 'Name, email, and project are required' });
  }

  const subject = `New consultation request from ${name}`;
  const businessLine = business || 'Not provided';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject,
      text: [
        subject,
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${businessLine}`,
        '',
        'Project:',
        project,
      ].join('\n'),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error('Resend contact email failed', response.status, details);
    return json(502, { error: 'Email provider rejected the request' });
  }

  return json(200, { ok: true });
};

import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';

// Supply an installed Playwright package path; no runtime dependency is added.
const require = createRequire(import.meta.url);
const { chromium } = require(process.argv[2] || 'playwright');
const base = process.argv[3] || 'http://127.0.0.1:5173';
assert.match(base, /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/);
mkdirSync('artifacts/redesign', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [];
try {
  const context = await browser.newContext();
  const external = [], errors = [];
  let failContact = false;
  const submissions = [];
  await context.route('**/*', async route => {
    const request = route.request();
    if (new URL(request.url()).origin !== base) { external.push(request.url()); return route.abort(); }
    if (request.url().endsWith('/.netlify/functions/contact')) {
      submissions.push(request.postDataJSON());
      return route.fulfill({ status: failContact ? 502 : 200, contentType: 'application/json', body: JSON.stringify(failContact ? { error: 'mock' } : { ok: true }) });
    }
    return route.continue();
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error' && !failContact) errors.push(message.text()); });
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 960 });
    await page.goto(base);
    await page.locator('h1').waitFor();
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('.marc-portrait').getAttribute('src'), '/assets/marc-jacquot.webp');
    assert.equal(await page.locator('.portrait-placeholder').count(), 0);
    assert.equal(await page.locator('.personal-card').innerText().then(text => /belongs here|face behind|finishing touches/i.test(text)), false);
    assert.equal(await page.locator('iframe').count(), 0);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `overflow at ${width}`);
    await page.locator('#work').scrollIntoViewIfNeeded();
    for (const img of await page.locator('img:visible').all()) await img.evaluate(el => el.decode());
    assert.equal(await page.locator('img:visible').evaluateAll(images => images.every(img => img.complete && img.naturalWidth > 0)), true);
    assert.equal(await page.locator('a[href^="#"]').evaluateAll(links => links.every(a => document.getElementById(a.hash.slice(1)))), true);
    assert.deepEqual(await page.locator('.portfolio-project h3').allTextContents(), ['IPM 2026 Event App', 'Tee & Co']);
    assert.deepEqual(await page.locator('.project-status').allTextContents(), ['Live now', 'Live', 'In Development', 'In Development', 'Completed event']);
    assert.deepEqual(await page.locator('.additional-project h3').allTextContents(), ['Walkerton Homecoming']);
    assert.deepEqual(await page.locator('.development-card h4').allTextContents(), ['Wellington Apparel Co.', 'Freezer Fitness']);
    assert.equal(await page.locator('.development-card img, .development-card a, .development-card details, .development-card button').count(), 0);
    const cards = await page.locator('.primary-project-grid > article').evaluateAll(items => items.map(el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; }));
    assert.ok(Math.abs(cards[0].width - cards[1].width) < 1);
    if (width > 760) { assert.equal(cards[0].y, cards[1].y); assert.equal(cards[0].height, cards[1].height); }
    else { assert.equal(cards[0].x, cards[1].x); assert.ok(cards[1].y > cards[0].y); }
    assert.equal(await page.locator('body').innerText().then(text => /on the fridge/i.test(text)), false);
    for (const summary of await page.locator('summary').all()) {
      await summary.focus(); await page.keyboard.press('Enter');
      assert.equal(await summary.evaluate(el => el.parentElement.open), true);
    }
    for (const img of await page.locator('img').all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(el => el.decode());
    }
    assert.equal(await page.locator('.additional-work > summary > span').first().evaluate(el => getComputedStyle(el).transform), 'none', 'More work heading remains horizontal when expanded');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `expanded overflow at ${width}`);
    await page.locator('#work').screenshot({ path: `artifacts/redesign/work-expanded-${width}.png` });
    await page.locator('details').evaluateAll(items => items.forEach(item => { item.open = false; }));
    await page.locator('body').click({ position: { x: 2, y: 2 } });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `artifacts/redesign/home-${width}.png`, fullPage: true });
    await page.locator('.personal-card').screenshot({ path: `artifacts/redesign/marc-photo-${width}.png` });
    await page.locator('#work').screenshot({ path: `artifacts/redesign/work-${width}.png` });
    await page.locator('#contact').screenshot({ path: `artifacts/redesign/contact-${width}.png` });
    results.push(`${width}px: no overflow, valid anchors, loaded images, keyboard case studies, no iframes`);
  }
  for (const id of ['ipm-2026', 'tee-co', 'walkerton-homecoming']) {
    await page.goto(`${base}/#project-${id}`);
    await page.reload();
    await page.locator(`#project-${id}[open]`).waitFor();
    assert.equal(await page.locator(`#project-${id} .case-study`).isVisible(), true);
    const expectedStatus = { 'ipm-2026': 'Live now', 'tee-co': 'Live', 'freezer-fitness': 'In development', 'wellington-apparel': 'In development', 'walkerton-homecoming': 'Completed event' }[id];
    assert.equal(await page.locator(`#project-${id} h4`).first().textContent(), `Project status — ${expectedStatus}`);
    for (const imageLink of await page.locator(`#project-${id} a[href^="/assets/"]`).all()) {
      const href = await imageLink.getAttribute('href');
      const response = await page.request.get(base + href);
      assert.equal(response.status(), 200);
      assert.match(response.headers()['content-type'], /^image\//);
    }
    results.push(`/#project-${id}: direct link opens local case study; asset links load`);
  }
  for (const id of ['wellington-apparel', 'freezer-fitness']) {
    await page.goto(base + '/#project-' + id);
    await page.locator('h1').waitFor();
    assert.equal(await page.locator('#project-' + id).count(), 0);
    assert.equal(await page.locator('a[href*="project-' + id + '"]').count(), 0);
  }
  const removedImage = await page.request.get(base + '/assets/projects/wellington-apparel-storefront.webp');
  assert.ok(!removedImage.headers()['content-type']?.startsWith('image/'));
  await page.goto(base);
  const liveLink = page.getByRole('link', { name: /View the Live App/ });
  assert.equal(await page.locator('.ipm-production-hero img').count(), 2);
  assert.equal(await page.getByText('On your phone, go to', { exact: false }).count(), 1);
  assert.equal(await page.getByRole('link', { name: /Visit Live App/ }).getAttribute('href'), 'https://teeandco.jdsstudio.ca/');
  assert.equal(await liveLink.count(), 1);
  assert.equal(await liveLink.getAttribute('href'), 'https://theipm.ca');
  assert.equal(await liveLink.getAttribute('target'), '_blank');
  let liveDestination;
  await context.route('https://theipm.ca/**', route => {
    liveDestination = route.request().url();
    return route.fulfill({ contentType: 'text/html', body: '<title>Intercepted public destination</title>' });
  });
  const popupPromise = page.waitForEvent('popup');
  await liveLink.click();
  const popup = await popupPromise;
  await popup.waitForLoadState();
  assert.equal(liveDestination, 'https://theipm.ca/');
  await popup.close();
  results.push('Development cards: text only, no links or case-study targets; old Wellington screenshot not served as an image');
  results.push('IPM live link opens https://theipm.ca/ in a new tab (destination intercepted; no external network call)');
  await page.goto(base);
  await page.keyboard.press('Tab');
  assert.equal(await page.locator('.skip-link').evaluate(el => el === document.activeElement), true);
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('main').evaluate(el => el === document.activeElement), true);
  await page.locator('button[type="submit"]').click();
  assert.equal(submissions.length, 0, 'native validation blocks empty submissions');
  const fill = async () => {
    await page.locator('#name').fill('Local Test');
    await page.locator('#email').fill('test@example.invalid');
    await page.locator('#project').fill('A local mocked message.');
  };
  await fill(); await page.locator('button[type="submit"]').click();
  await page.getByRole('status').waitFor();
  assert.deepEqual(submissions[0], { 'form-name': 'consultation', 'bot-field': '', name: 'Local Test', email: 'test@example.invalid', business: '', project: 'A local mocked message.' });
  assert.equal(await page.locator('#name').inputValue(), '');
  failContact = true;
  await fill(); await page.locator('button[type="submit"]').click();
  await page.getByRole('alert').waitFor();
  assert.equal(await page.locator('#project').inputValue(), 'A local mocked message.');
  failContact = false;
  results.push('Contact: required validation, exact JSON contract, success reset, failure preserves message; all requests intercepted');
  for (const path of ['/privacy', '/eula']) {
    await page.goto(base + path);
    await page.locator('.legal-content').waitFor();
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://jdsstudio.ca' + path);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await page.screenshot({ path: `artifacts/redesign/${path.slice(1)}-mobile.png`, fullPage: true });
    results.push(`${path}: direct route, legal content, canonical, mobile layout passed`);
  }
  assert.deepEqual(errors, []);
  assert.deepEqual(external, []);
  results.push('Zero unexpected console errors, zero page errors, zero external requests');
  writeFileSync('artifacts/redesign/browser-results.json', JSON.stringify(results, null, 2));
  console.log(results.join('\n'));
} finally { await browser.close(); }

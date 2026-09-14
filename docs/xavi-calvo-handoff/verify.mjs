import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const { chromium } = require(
  process.env.PLAYWRIGHT_PATH ||
    'C:/Users/Usuari/AppData/Local/ms-playwright-go/1.57.0/package',
);
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
const output = 'docs/screenshots/handoff';
await mkdir(output, { recursive: true });
const errors = [];
const results = [];
const cardSizes = new Map();
const page = await browser.newPage();
page.on('pageerror', (error) => errors.push(error.message));
const paths = [
  '/',
  '/work/',
  '/work/fieldnote-research-library/',
  '/landing/',
  '/gallery/',
  '/about/',
  '/contact/',
  '/work/afterlight-cultural-archive/',
  '/work/interval-health-companion/',
  '/work/northstar-civic-platform/',
  '/work/morrow-studio/',
  '/work/ecam-entorns-produccio-virtual/',
  '/work/mckallan-personatges-3d/',
  '/work/audi-e-tron/',
];
try {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: width === 1440 ? 900 : 844 });
    for (const language of ['ca', 'es', 'en']) {
      for (const [index, path] of paths.entries()) {
        const route = `${language === 'en' ? '' : '/' + language}${path}`;
        const response = await page.goto(base + route);
        assert.equal(response.status(), 200, route);
        await page.evaluate(() => document.fonts.ready);
        assert.equal(await page.locator('html').getAttribute('lang'), language);
        assert.equal(await page.locator('h1').count(), 1, route);
        if (path === '/') {
          assert.equal(
            await page.locator('.hero-copy a, .hero-copy > span').count(),
            0,
          );
          assert.ok(
            await page
              .locator('h1')
              .evaluate((el) =>
                getComputedStyle(el).fontFamily.includes('Space Grotesk'),
              ),
          );
          assert.equal(await page.locator('.brand-logo img').count(), 2);
        } else if (path !== '/about/') {
          const spacing = await page
            .locator('.page-title')
            .evaluate(
              (el) =>
                el.nextElementSibling.getBoundingClientRect().top -
                el.getBoundingClientRect().bottom,
            );
          assert.ok(spacing >= 35, `heading spacing: ${route} ${spacing}`);
        }
        assert.ok(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          `overflow: ${route} ${width}`,
        );
        assert.equal(
          await page.locator('#navigation [aria-current="page"]').count(),
          1,
        );
        const links = await page
          .locator('a[href]')
          .evaluateAll((nodes) =>
            nodes
              .map((n) => n.href)
              .filter((href) => href.startsWith(location.origin)),
          );
        for (const link of new Set(links))
          assert.ok((await page.request.get(link)).ok(), `broken link ${link}`);
        if (width === 1440) {
          const box = await page.locator('.nav-list').boundingBox();
          assert.ok(
            Math.abs(box.x + box.width / 2 - width / 2) < 1,
            'menu centering',
          );
        }
        if (path === '/landing/') {
          assert.equal(await page.locator('.service-card').count(), 6);
          const boxes = await page
            .locator('.service-card')
            .evaluateAll((nodes) =>
              nodes.map((n) => ({
                width: n.getBoundingClientRect().width,
                height: n.getBoundingClientRect().height,
              })),
            );
          assert.ok(boxes.every((b) => Math.abs(b.width - boxes[0].width) < 1));
        }
        if (path === '/work/') {
          assert.equal(await page.locator('.work-card').count(), 8);
          const cover = await page
            .locator('.work-card img')
            .first()
            .boundingBox();
          assert.ok(
            Math.abs(cover.width / cover.height - 2.15) < 0.02,
            'horizontal project covers',
          );
          cardSizes.set(`${language}-${width}`, cover);
          assert.equal(
            await page.locator('.work-cover-placeholder').count(),
            2,
          );
        }
        if (path.startsWith('/work/') && path !== '/work/') {
          const cover = await page
            .locator('.detail-cover, .detail-cover-placeholder')
            .boundingBox();
          const card = cardSizes.get(`${language}-${width}`);
          assert.ok(
            Math.abs(cover.width - card.width) < 1 &&
              Math.abs(cover.height - card.height) < 1,
            'detail cover matches listing',
          );
        }
        if (path === '/gallery/') {
          assert.equal(
            await page.locator('.section-intro, .gallery-tile > span').count(),
            0,
          );
        }
        if (language === 'ca' && index < 7) {
          await page.locator('img').evaluateAll(async (nodes) => {
            await Promise.all(
              nodes.map((img) => {
                img.loading = 'eager';
                return img.decode().catch(() => {});
              }),
            );
          });
          await page.screenshot({
            path: `${output}/${String(index + 1).padStart(2, '0')}-${width}.png`,
            fullPage: true,
          });
        }
        results.push({ route, width, passed: true });
      }
    }
  }
  await page.goto(base + '/ca/gallery/');
  const galleryURL = page.url();
  await page.locator('[data-gallery-image]').first().focus();
  await page.keyboard.press('Enter');
  assert.ok(await page.locator('dialog').evaluate((el) => el.open));
  assert.equal(page.url(), galleryURL, 'lightbox preserves page URL');
  await page.screenshot({ path: `${output}/gallery-lightbox-mobile.png` });
  const initialCaption = await page.locator('#image-caption').textContent();
  await page.keyboard.press('ArrowRight');
  assert.notEqual(
    await page.locator('#image-caption').textContent(),
    initialCaption,
  );
  await page.keyboard.press('Escape');
  assert.ok(
    await page
      .locator('[data-gallery-image]')
      .first()
      .evaluate((el) => el === document.activeElement),
  );
  await page.locator('[data-gallery-image]').first().click();
  await page.locator('[data-close]').click();
  assert.equal(await page.locator('dialog').evaluate((el) => el.open), false);
  await page.locator('[data-gallery-image]').first().click();
  await page.mouse.click(2, 2);
  assert.equal(await page.locator('dialog').evaluate((el) => el.open), false);
  await page.locator('.menu-toggle').click();
  assert.equal(
    await page.locator('.menu-toggle').getAttribute('aria-expanded'),
    'true',
  );
  await page.locator('.mobile-languages a[lang="en"]').click();
  await page.waitForURL(base + '/gallery/');
  await page.locator('.menu-toggle').click();
  await page.locator('#navigation a').first().focus();
  await page.keyboard.press('Escape');
  assert.equal(
    await page.locator('.menu-toggle').getAttribute('aria-expanded'),
    'false',
  );
  assert.ok(
    await page
      .locator('.menu-toggle')
      .evaluate((el) => el === document.activeElement),
  );
  await page.goto(base + '/work/?lang=ca');
  await page.waitForURL('**/ca/work/');
  await page.goto(base + '/ca/work/?lang=en');
  await page.waitForURL(base + '/work/');
  await page.goto(base + '/work/?lang=es');
  await page.waitForURL(base + '/es/work/');
  await page.goto(base + '/en/work/');
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  await page.goto(base + '/ca/contact/');
  assert.ok(
    (await page.locator('form').getAttribute('action')).startsWith('mailto:'),
  );
  assert.equal(
    await page.locator('form').evaluate((form) => form.checkValidity()),
    false,
  );
  await page.locator('#name').fill('Local validation');
  await page.locator('#email').fill('test@example.invalid');
  await page.locator('#message').fill('Local validation only; do not send.');
  assert.equal(
    await page.locator('form').evaluate((form) => form.checkValidity()),
    true,
  );
  // Do not submit: this verifies the real mailto integration without sending mail.
  assert.deepEqual(errors, []);
  await writeFile(
    `${output}/verification.json`,
    JSON.stringify(
      {
        results,
        errors,
        keyboard: 'passed',
        legacyLanguage: 'passed',
        form: 'validation and mailto checked; not submitted',
      },
      null,
      2,
    ),
  );
  console.log(
    `PASS: ${results.length} page/viewport/language combinations, links, centering, gallery keyboard, mobile languages, Escape, legacy URLs and form validation.`,
  );
} finally {
  await browser.close();
}

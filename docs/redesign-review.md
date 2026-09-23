# Local redesign — September 23, 2026

Historical first-pass report. The subsequently approved, focused portfolio refinement is documented in [portfolio-refinement.md](portfolio-refinement.md); it supersedes the Fridge portfolio presentation and first-pass asset availability notes below.

## Audit before editing

- Clean working tree on main, base `8575659b9bb9d1d205e730f5bc36215e87abc320`.
- React 18 / Vite 6, npm lockfile, ESLint. No existing test script or browser suite.
- Single-page homepage plus `/privacy` and `/eula`, with route-specific title, description and canonical handling. Netlify SPA fallback supports these routes.
- Contact sends JSON to `/.netlify/functions/contact`; required keys are `name`, `email`, `project`. `business` is optional. Preserve form name `consultation`, `form-name`, `bot-field`, and the hidden discovery form in index.html. Backend uses Resend and existing environment configuration; no real test email is authorized.
- Preserve index metadata, JSON-LD, social preview asset, robots and sitemap. No analytics tracker found in repository; hosting-injected analytics cannot be determined locally and hosting settings remain untouched.
- Live dependencies: Fridge iframe/link and Home Coming iframe/link with Vite URL overrides. Replace both with local case studies. Existing `/homecoming` Netlify proxy is a separate production route and must remain untouched; redesigned portfolio does not reference it.
- Both case-colliding image paths have Git blob `b44732fc386e8f6a482197215012dff97f4498db`: identical real Fridge home screenshot, neither referenced in source. Consolidate to `public/assets/fridge-ordering-screenshot.png` without losing distinct content.
- Other assets are legacy logos and conceptual hero/site artwork. The person in the old mockup is not verified as Marc; do not reuse as a portrait. No verified IPM, Tee & Co, coffee ordering or Home Coming screenshots in this checkout. Use existing Home Coming descriptive content, clearly labelled workflow illustration, and the real Fridge screenshot. Keep all other media.

## Review notes

Working HTML lettermark, cream/pine palette, direct personal copy, native expandable static case studies, four-step process, photo placeholder and simplified contact presentation. Existing section anchors retained for incoming links.

Needed from Marc: real portrait; approved final lettermark if available; screenshots and factual project descriptions for additional portfolio work. Screenshot prices are historical, not current offers.

Preview: `npm run dev -- --host 127.0.0.1`. Vite serves the frontend only; it does not run Netlify Functions. Contact verification uses intercepted requests and mocked provider responses, never real delivery.

No deployment, push, merge, production configuration or environment-file changes are part of this work.

## Final validation

- Branch: `redesign/personal-jds-brand-20260923`.
- Main and HEAD remain `8575659b9bb9d1d205e730f5bc36215e87abc320`. No new commits. Only the case-collision consolidation is staged; the rest is available as working-tree changes.
- Dependency installation: initial `npm ci` failed certificate verification. Retried with the Windows system certificate store: `$env:NODE_OPTIONS = '--use-system-ca'; npm ci --ignore-scripts --no-audit --no-fund` — exit 0, 272 packages installed. No dependency or lockfile changes. This was a command-local runtime setting, not a project or production environment change.
- `npm run lint` — exit 0, no errors or warnings.
- `node --test tests/contact.test.mjs` — exit 0; 5 tests, 5 passed, 0 failed. Covers required fields, JSON and form encoding, optional business field, honeypot, malformed requests, unsupported method, missing configuration, and provider rejection. All provider calls are mocked in an isolated VM.
- `npm run build` — exit 0; 35 modules transformed; HTML 2.93 kB, CSS 12.36 kB, JavaScript 179.05 kB (gzip 1.03 / 3.47 / 56.21 kB). Windows sandbox subprocess denials on some runs were resolved by approved execution outside the sandbox.
- Browser command: `node scripts/verify-redesign.mjs <path-to-playwright-package> http://127.0.0.1:4173` — exit 0 against the final production build. Also passed against Vite on port 5173. Uses bundled Playwright and installed Edge; neither was added to package.json.
- At 1440, 768, 390 and 320 px: no horizontal overflow (including expanded case studies), images loaded, anchor targets present, one H1, no iframes. Both case studies open with the keyboard. Skip link focuses main content.
- Browser contact checks: empty-form validation; exact compatible JSON payload; success clears the form; failure preserves the typed message and shows an error. Every contact request intercepted locally. No real email delivery or production contact test.
- `/privacy` and `/eula`: direct navigation, content, canonicals and mobile layout pass.
- Zero page errors, zero unexpected console errors, zero external requests. The explicitly simulated contact failure produces the existing expected error log.
- Source and built bundle contain no former live-demo URLs or Vite demo configuration references. The unchanged Netlify `/homecoming` proxy remains separate from the portfolio.
- `git diff --check` and `git diff --cached --check` — pass; Git emits its existing Windows LF/CRLF conversion notices. An extra check with autocrlf forcibly disabled reported CRLF characters as whitespace; normal repository-configured checks pass.
- Critical-file diff verified empty: Netlify config/function, environment example, dependencies/lockfile, legal-page text, robots and sitemap.
- Desktop and mobile screenshots visually reviewed. Browser evidence: `artifacts/redesign/browser-results.json`; screenshots: `home-1440.png`, `home-768.png`, `home-390.png`, `home-320.png`, `privacy-mobile.png`, `eula-mobile.png` in the same directory.

## Files changed

- `README.md`, `index.html` (theme color only).
- `src/App.jsx`, `src/main.jsx`, `src/styles.css`; removed obsolete `src/hero.css`.
- `src/components/About.jsx`, `Contact.jsx`, `FeaturedProject.jsx`, `Footer.jsx`, `Header.jsx`, `Hero.jsx`, `LegalPage.jsx`, `Services.jsx`, `Solutions.jsx`.
- `src/data/siteContent.js`.
- Consolidated `public/assets/Untitled.png` and `public/assets/untitled.png` into `public/assets/fridge-ordering-screenshot.png`; original bytes retained.
- Added `docs/redesign-review.md`, `tests/contact.test.mjs`, `scripts/verify-redesign.mjs`.
- Local generated review evidence in `artifacts/redesign/` (screenshots, overview images, asset audit and JSON results).

## Remaining assets

The real portrait and final approved logo artwork can replace the intentional placeholder and working typographic lettermark. Additional portfolio projects need verified screenshots and factual descriptions from Marc; none were invented. The retained social preview image and favicon still use legacy artwork so existing SEO assets are not silently discarded.

# Jacquot Digital Solutions

Personal studio website for Marc Jacquot in Walkerton, Ontario. React 18 and Vite, with a cream/pine design, local static portfolio case studies, and the existing Netlify contact function.

## Local preview

```powershell
npm ci
npm run dev -- --host 127.0.0.1
```

Open http://127.0.0.1:5173. Vite does not run Netlify Functions, so it cannot deliver contact messages. Do not use real contact submissions for testing.

For a local preview of the production bundle:

```powershell
npm run build
npm run preview -- --host 127.0.0.1
```

## Validation

```powershell
npm run lint
node --test tests/contact.test.mjs
npm run build
git diff --check
```

`tests/contact.test.mjs` isolates the existing function with a fake environment and mocked email provider. It never reads real secrets or sends email.

The optional browser check uses an existing Playwright installation and headless Microsoft Edge, without adding project dependencies:

```powershell
node scripts/verify-redesign.mjs <path-to-playwright-package> http://127.0.0.1:5173
```

It checks four viewport widths, keyboard access, images, local anchors, legal pages and mocked contact success/failure. All contact requests are intercepted and all external requests blocked. Screenshots and results are written to `artifacts/redesign/`.

## Architecture and preserved integrations

- Homepage sections and copy: `src/components/`, `src/data/siteContent.js`.
- Design system: `src/styles.css`; working lettermark: `Brand` in `Header.jsx`.
- Public case studies: IPM 2026 (Live now), Tee & Co (Live), and Walkerton Homecoming (Completed event). IPM and Tee & Co use equal-width vertical cards; Homecoming remains under completed work.
- Static case-study links: `/#project-ipm-2026`, `/#project-tee-co`, `/#project-walkerton-homecoming`. Wellington and Freezer Fitness are text-only In Development cards with no images, links or case-study content.
- Real public portfolio assets: the IPM event banner and Tee & Co storefront capture. Homecoming retains a labelled illustration.
- Wellington development imagery has been moved out of `public/` to local review artifacts and is absent from the production build.
- IPM’s optional external link is `https://theipm.ca`. Tee & Co’s `liveUrl` remains `null` in `src/data/portfolio.js` pending Marc’s exact public URL; no placeholder link is rendered.
- The former Fridge project is no longer promoted. Its unreferenced screenshot remains archived at `public/assets/fridge-ordering-screenshot.png`; this preserves the earlier Windows filename-collision fix.
- Contact: `/.netlify/functions/contact`, using existing Resend configuration. The visible form has name, email and message; all backend field names, the optional business field, honeypot and Netlify discovery markup are preserved.
- `/privacy` and `/eula` retain existing legal text and metadata handling.
- Existing Netlify configuration, including the independent `/homecoming` proxy, remains unchanged. The redesigned portfolio does not use that proxy.
- SEO/social metadata, social image, robots and sitemap are retained. No analytics integration was found in source.

See `docs/portfolio-refinement.md` for the latest focused changes, asset provenance and validation. `docs/redesign-review.md` records the initial redesign audit. This branch is local only; nothing has been published.

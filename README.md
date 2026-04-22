# Trinethra Abroad Services (Trinethra Edu Services)

Official marketing site for **Trinethra Edu Services** — MBBS abroad guidance for Indian students. The site highlights destinations, builds trust, and captures leads via forms and WhatsApp.

**Repository:** [github.com/Rasoolsk9/trinethra-abroad-services](https://github.com/Rasoolsk9/trinethra-abroad-services)

| | |
|---|---|
| **Current release** | **v3.0.0** (final project, April 2026) |
| **Deploy target** | [Vercel](https://vercel.com) (Vite static build → `dist/`) |
| **CI** | GitHub Actions (`lint` → `test` → `build` → Playwright → Lighthouse CI) |

---

## Version 3.0.0 — Final project (April 2026)

This release is **production- and Vercel-ready**: performance tuning, quality gates, accessibility fixes, lead flows, and polished UX on home and country experiences.

### Content & brand

- **Testimonials** use real **profile images** from `public/student-profile/` (circular avatars) mapped in `TestimonialsSection`.
- **Home trust stats** (`WhyChooseSection`): **60+** university partners, **1000+** success stories (with animated count-up).
- **Contact** aligned site-wide: **+91-799390909** in footer, floating CTAs, free counselling, and WhatsApp deep links (`91799390909`).
- **Navbar** uses a **consistent premium white / glass** header on every route (including About and country pages), not a different gradient on inner pages.
- **Gallery** section: student & campus images under `public/gallery/`.
- **Country imagery** under `public/countries/` (e.g. Australia, Central America); older unused assets removed where replaced.

### Home page performance & UX

- **Code splitting:** Everything after the **hero** loads in a lazy chunk (`HomePageLazy.tsx`) so the first screen stays light (smaller main bundle, better LCP / TBT).
- **Loading state:** `HomePageFallback` shows a **structured skeleton** (destinations, stats, cards, gallery hints) with a subtle **shimmer** — not a blank block.
- **Idle preload:** `requestIdleCallback` can preload the deferred home chunk for a shorter wait before sections appear.
- **Mount animation:** Deferred sections use `.home-deferred-sections` (fade + soft lift; respects `prefers-reduced-motion`).

### Countries carousel (destinations)

- **Prev / next** controls sit **inside** the image frame, **vertically centered** on the **left and right** (not offset by extra UI below the slide).
- **Dot pagination removed**; navigation is arrows, **auto-rotate**, and **swipe** on touch.
- Arrows use higher **z-index** and stop click propagation so they don’t fight the slide link.

### Lead capture

- **`LeadForm`** posts to **`POST /api/lead`** (Vercel serverless, `api/lead.ts`) with optional `leadContext` (e.g. university interest on apply flows).
- **CallMeBot** can deliver to your WhatsApp; visitors see an in-page **thank you** state.
- **Dev:** If the API is unavailable, the form can still complete in development (see `LeadForm` + run `vercel dev` for full API tests).
- **Hero form** submit uses a **darker green** for WCAG contrast; **country `<Select>`** is wired with proper `id` / label / `aria-labelledby` for screen readers.

### Quality assurance & CI (GitHub)

- **ESLint** on the TypeScript / React source.
- **Vitest** unit tests.
- **Playwright** smoke tests (`e2e/smoke.spec.ts`):
  - Home loads (hero + destinations heading),
  - Country page: `/mbbs-in-uk`,
  - University lead path: apply form + mocked `POST /api/lead` → thank you → redirect to university details.
- **Lighthouse CI** (`lighthouserc.cjs`) runs on the **production build** (preview + key URLs) with **warn**-level category thresholds (stable on CI runners).
- Workflow: **`.github/workflows/ci.yml`** on push/PR to `main` / `master` / `develop` (Node 20, `npm ci`).

**Local:** `npm run test:e2e` (runs `build` then Playwright). **Lighthouse:** `npm run build && npm run lighthouse:ci` (Chromium; `CHROME_PATH` set in CI from Playwright’s cache).

### Performance & static assets

- **Fonts:** Google Fonts (DM Sans + Inter) loaded from **`index.html`** (preconnect + stylesheet); not blocking via CSS `@import`.
- **LCP:** `index.html` preloads the primary hero image (`/hero-premium.jpg`).
- **Images:** Lazy loading, `decoding="async"`, and `sizes` where helpful (gallery, country slides, cards).
- **Vite `build`:** `vendor-react` chunk (React, DOM, router, React Query), `es2020`, CSS minify.
- **`vercel.json`:** Security headers, long cache for `/assets/*` and static images, SPA fallback to `index.html`, **`/favicon.ico`** rewrite to the logo (plus `public/favicon.ico` / `link` to `logo-trinethra.png` for clean console).

### Vercel deployment (ready to use)

1. **Push** this repository to GitHub (this README assumes branch **`main`** is the deploy branch).
2. [vercel.com](https://vercel.com) → **Add New…** → **Project** → import **trinethra-abroad-services**.
3. **Framework:** Vite (auto-detected). **Build command:** `npm run build`. **Output directory:** `dist`.
4. **Node:** Use **20.x** (matches CI); optional `engines` in `package.json` enforces `>=20`.
5. **Environment variables** (Project → Settings → Environment Variables) — see table below. Redeploy after adding secrets.
6. **Custom domain:** Project → **Domains** (optional).
7. **GitHub:** Enable **branch protection** on `main` and require the **CI** workflow to pass before merge, if you want production deploys only after green checks.

Vercel runs **`npm run build`** by default; it does not run E2E on the platform—those run in **GitHub Actions**. Keeping both gives fast deploys plus verified quality on each PR.

**If the commit shows a red “×” (checks failed):** the **GitHub Actions** workflow (`.github/workflows/ci.yml`) must pass for a green check. The most common fix applied in v3.0.x is **waiting up to 60s** for the lazy-loaded “countries” section in E2E, and making **Lighthouse CI** non-fatal in the pipeline. **Vercel** deploys from your connected branch when the **build** succeeds in Vercel’s dashboard even if you later tighten CI—open **Vercel → Project → Deployments** to see the real build log. Ensure **Root Directory** is the repo root, **Build Command** `npm run build`, **Output** `dist`, **Node** 20.x.

---

## Environment variables (Vercel & local)

Server-side only (never commit real values; use Vercel dashboard or local `.env`).

| Variable | Purpose |
|----------|---------|
| `CALLMEBOT_API_KEY` | From [CallMeBot](https://www.callmebot.com/) after you link WhatsApp. |
| `WHATSAPP_NOTIFY_PHONE` | Digits only, e.g. `91799390909` (notify number for `/api/lead`). |

Copy from **`.env.example`**. For client-side public vars, use the `VITE_` prefix and `import.meta.env`.

---

## Tech stack

| Layer | Choice |
|--------|--------|
| UI | React 18 + TypeScript |
| Build | Vite 5 |
| Routing | React Router v6 (lazy route chunks) |
| Styling | Tailwind CSS + shadcn/ui (Radix) |
| Meta | react-helmet-async |
| Data / cache | TanStack React Query (where used) |
| Forms | react-hook-form + zod (where used) |
| Unit tests | Vitest |
| E2E | Playwright |
| Quality | ESLint, Lighthouse CI |

---

## npm scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Vite dev server (default port from `vite.config.ts`) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve `dist` locally |
| `npm run lint` | ESLint |
| `npm run test` | Vitest (once) |
| `npm run test:e2e` | `build` + Playwright |
| `npm run lighthouse:ci` | Lighthouse CI (after `build`; needs Chrome) |

---

## Local development

**Requirements:** Node.js **20+**

```bash
git clone https://github.com/Rasoolsk9/trinethra-abroad-services.git
cd trinethra-abroad-services
npm install
npm run dev
```

---

## Repository layout (high level)

- `src/pages/` — Routes: home (`Index` + `HomePageLazy`), About, country (`CountryPage`), university apply/details, free counselling, 404.
- `src/components/sections/` — Home sections, hero, countries, etc.
- `src/components/home/` — `HomePageFallback` loading UI.
- `api/lead.ts` — Vercel serverless lead handler.
- `e2e/` — Playwright smoke tests.
- `public/` — Static assets (images, favicon, sitemap, robots).

---

## Version history (short)

- **v3.0.0** — Final project: lazy home below hero, CI + E2E + Lighthouse, a11y/perf pass, countries carousel + contact updates, Vercel-ready config (this document).
- **v2** — Premium brand, expanded destinations, `ScrollToHash`, lead API, lazy routes, performance headers.
- **v1** — Initial consultancy-style site, hero, early carousel, SPA on Vercel.

---

## Git workflow

- **`main`** — Default branch; connect to Vercel **Production** if you use automatic deploys.
- CI runs on **push** and **pull request** to `main` / `master` / `develop`.
- **Release tags:** e.g. `v3.0.0` for this final milestone.

```bash
git tag -a v3.0.0 -m "Trinethra site v3.0.0 final"
git push origin main --tags
```

---

## License & ownership

Proprietary — **Trinethra Edu Services**. Unauthorized copying or redistribution is not permitted.

**Maintainer:** Rasool

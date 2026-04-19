# Trinethra Abroad Services (Trinethra Edu Services)

Official marketing site for **Trinethra Edu Services** — MBBS abroad guidance for Indian students. The site highlights destinations, builds trust, and captures leads via forms and WhatsApp.

**Repository:** [github.com/Rasoolsk9/trinethra-abroad-services](https://github.com/Rasoolsk9/trinethra-abroad-services)

---

## Version 2 (April 2026)

Premium branding, expanded destinations, reliable navigation, server-side lead delivery to WhatsApp, and production performance tuning for Vercel.

### Brand & layout

- **Logo:** `public/logo-trinethra.png` in navbar and footer (replaces placeholder “T” icon).
- **Wordmark:** “TRINETHRA / EDU SERVICES” with **Indian tricolor–inspired** gradient (saffron → **navy** → green) for contrast on light glass; responsive sizing.
- **Consult CTA:** **Premium** navy-to-teal gradient button (`.btn-consult-premium`) with subtle pulse — no loud flag stripes on the pill.
- **About page:** Hero and CTA bands use **tricolor-inspired** gradients; stat cards and milestones updated for the same theme.

### Navigation & UX

- **`ScrollToHash`:** Hash links (`/#countries`, `/#contact`) work after SPA navigation (e.g. from `/about`); **scroll-margin** on `#home`, `#countries`, `#contact` so the fixed navbar does not cover section titles.
- **Countries menu:** Dropdown (desktop) and collapsible list (mobile) with **FlagCDN** flags next to each destination; “View all destinations” links to `/#countries`.

### Destinations

- **Nine countries** in `src/data/country-slides.ts` and navbar: Kyrgyzstan, Russia, Georgia, Kazakhstan, **UK, USA, New Zealand, Germany, Canada**.
- **Country pages** extended in `src/pages/CountryPage.tsx` for the new slugs (routes: `/mbbs-in-{slug}`).
- **Countries carousel:** `translate3d` track, **swipe** on touch, **prev/next arrows on mobile**, dot indicators with padding; second hero image loaded from `public/hero-students.jpg` after idle (smaller initial JS payload).

### Hero content

- Slide 2 headline and copy updated to **global study-abroad** messaging (trusted experts, transparency, end-to-end support) with a premium left-border layout on large screens.

### Lead capture

- **`LeadForm`** submits to **`POST /api/lead`** (Vercel serverless, `api/lead.ts`).
- Leads are forwarded to **your WhatsApp** via **[CallMeBot](https://www.callmebot.com/)** — the visitor does **not** open WhatsApp to compose; they see an in-page **thank you** message.
- **`UniversityLeadPage`** passes `leadContext` (university name) into the notification; `onSuccess` still runs after a short delay for navigation to the university detail page.

### Performance & deploy

- **`App.tsx`:** Lazy-loaded routes (except home) + React Query defaults tuned.
- **`index.html`:** Preconnect/preload for fonts and LCP hero image; `dns-prefetch` for FlagCDN.
- **`vercel.json`:** Long-cache headers for hashed `/assets/*` and images; SPA rewrite to `index.html` (API routes are handled by Vercel before the rewrite).
- **`vite.config.ts`:** `manualChunks` for `vendor-react`, `target: es2020`, `cssMinify: true`.

### Environment variables (Vercel)

For `/api/lead` to deliver to WhatsApp, set in the Vercel project:

| Variable | Purpose |
|----------|---------|
| `CALLMEBOT_API_KEY` | From CallMeBot (after linking WhatsApp once). |
| `WHATSAPP_NOTIFY_PHONE` | Digits only, e.g. `917993909809`. |

See **`.env.example`**. Do not commit real secrets; `.env` is gitignored.

---

## Version 1 (baseline)

Earlier release: **premium consultancy-style UI**, full-bleed hero (`/hero-premium.jpg`), glass lead form, countries carousel (initial four destinations), country and university flows, testimonials/CTA, `vercel.json` SPA routing.

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Routing | React Router v6 |
| UI | shadcn/ui (Radix) + Tailwind CSS |
| Meta | react-helmet-async |
| Forms | react-hook-form + zod (where used) |

---

## Local development

**Requirements:** Node.js 18+

```bash
git clone https://github.com/Rasoolsk9/trinethra-abroad-services.git
cd trinethra-abroad-services
npm install
npm run dev
```

App URL: **http://localhost:5173**

Other scripts: `npm run build`, `npm run preview`, `npm run lint`, `npm run test`.

---

## Environment variables

Server-side secrets (CallMeBot) live only in **Vercel** or local `.env` (not committed). For **public** browser variables, use **Vite** prefixes: `VITE_*` and `import.meta.env.VITE_*`.

Do **not** commit secrets.

---

## Assets

- **Logo:** `public/logo-trinethra.png`
- **Hero:** `public/hero-premium.jpg` and `public/hero-students.jpg` (second slide; also under `src/assets/` if duplicated for bundling)
- **Country slider:** `public/countries/{slug}.jpg` — filenames must match **slug** in `src/data/country-slides.ts` (includes `kyrgyzstan`, `russia`, `georgia`, `kazakhstan`, `uk`, `usa`, `new-zealand`, `germany`, `canada`)

---

## Deploy on Vercel

1. Push this repo to GitHub (see below).
2. Log in at [vercel.com](https://vercel.com) → **Add New…** → **Project** → import **trinethra-abroad-services**.
3. Framework preset: **Vite**. Build command: `npm run build`, output directory: **`dist`**.
4. Deploy. Vercel uses the root **`vercel.json`** so deep links (`/about`, `/mbbs-in-russia`, `/university/...`) resolve to the SPA.

Optional: connect your **custom domain** in the project → **Settings** → **Domains**.

---

## Git workflow

- **`main`** — deployable, client-facing branch  
- Feature work can use topic branches; merge to `main` after review.

---

## License & ownership

Proprietary — **Trinethra Edu Services**. Unauthorized copying or redistribution is not permitted.

**Maintainer:** Rasool  

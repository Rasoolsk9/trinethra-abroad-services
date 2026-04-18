# Trinethra Abroad Services (Trinethra Edu Services)

Official marketing site for **Trinethra Edu Services** — MBBS abroad guidance for Indian students. The site highlights destinations, builds trust, and captures leads via forms and WhatsApp.

**Repository:** [github.com/Rasoolsk9/trinethra-abroad-services](https://github.com/Rasoolsk9/trinethra-abroad-services)

---

## What’s in this version

This release focuses on a **premium, consultancy-style UI** (clear hierarchy, strong hero, polished components) and a complete **country → university** browsing flow.

| Area | What changed |
|------|----------------|
| **Layout & chrome** | Sticky navbar (transparent → solid), footer, floating WhatsApp + call CTAs |
| **Hero** | Full-bleed imagery (`/hero-premium.jpg`, bundled student photo), glass-style lead form, dual messaging |
| **Countries** | Full-width carousel: **one slide at a time** on desktop (no side “peek”), **auto-advance every 3 seconds**, smooth transition, dot indicators, optional pause on hover/touch. Country images from `public/countries/{slug}.jpg`, flags via FlagCDN |
| **Country pages** | Routes like `/mbbs-in-kyrgyzstan` — deep content per destination |
| **Universities** | Listing and detail pages; apply flow at `/university/:slug/apply` then `/university/:slug` |
| **Why choose us** | Animated stat counters (Intersection Observer), benefit cards |
| **Testimonials & CTA** | Social proof section; CTA with expandable “Study abroad” copy |
| **Tech cleanup** | React Router routes aligned (no broken Contact import); `vercel.json` for SPA client-side routing on deploy |

Older README claims (CMS, blogs, admin panel, UK as active destination) are **aspirational / roadmap** — the **live app** currently centres on the four countries in the carousel (Kyrgyzstan, Russia, Georgia, Kazakhstan) plus the flows above.

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

There is no committed `.env` yet. If you add serverless or client secrets later, use **Vite** prefixes for public browser vars: `VITE_*` and read them with `import.meta.env.VITE_*`.

Do **not** commit secrets.

---

## Assets

- **Hero:** `public/hero-premium.jpg` and `src/assets/hero-students.jpg`
- **Country slider:** `public/countries/kyrgyzstan.jpg`, `russia.jpg`, `georgia.jpg`, `kazakhstan.jpg` (filename must match **slug** in `src/data/country-slides.ts`)

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

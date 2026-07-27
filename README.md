# Lumivance

Marketing-agency website for **Lumivance** — user acquisition for software & apps.
Built with **Next.js 14 (App Router)** + **Tailwind CSS**, with lightweight,
GPU-friendly animations designed to perform on any device.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.jsx          Root shell: fonts, navbar, footer, background
  page.jsx            Home
  services/           Services index + [slug] detail pages
  case-studies/       Case-study index + [slug] detail pages
  blog/               Blog index + [slug] article pages
  pricing/            Pricing
  about/              About + team
  contact/            Contact form
  feed.xml/           RSS feed route
  robots.js           robots.txt
  sitemap.js          sitemap.xml
  globals.css         Design tokens, keyframes, utilities
components/           Reusable UI (Hero, Stats, Reveal, FAQ, ...)
lib/
  site.js             Core copy & data: services, pricing, case studies, team
  blog.js             Blog posts (body blocks, figures, authors)
  caseStudyContent.js Case-study helpers & fallback narrative
  channels.js         Paid-channel detail content
scripts/dev-server.js Starts `next dev` with the project root as cwd
image-specs/          JSON prompt specs for generating brand imagery
```

## Customising

- **Copy, numbers, services, pricing, testimonials, team** → `lib/site.js`
- **Blog articles** → `lib/blog.js`. Each post's `body` is an array of blocks:
  `{ p }`, `{ h2 }`, `{ ul }`, `{ quote }`, and `{ fig, caption }` for inline
  illustrations (scene names are registered in `components/BlogArt.jsx`).
- **Case studies** → the `work` array (featured, with step-by-step timelines) and
  `caseStudies` array (compact library) in `lib/site.js`. To show a real client's
  official logo, drop the file in `public/logos/` and set `logoSrc` on that entry —
  it overrides the drawn wordmark everywhere, including the home-page marquee.
- **Brand colors, fonts, animations** → `tailwind.config.js` + `app/globals.css`
- **Logo mark** → `components/Logo.jsx` and `app/icon.svg`
- **Contact form** is front-end only. Wire the `onSubmit` in
  `components/ContactForm.jsx` to your email service / API route to receive leads.

> The case studies and client names shipped in this repo are illustrative
> examples, not named engagements. Replace them with real clients (and written
> permission to use their name, logo, and numbers) before launch.

## Design notes

- Dark canvas with a drifting **aurora** background (pure CSS, respects
  `prefers-reduced-motion`).
- Type: **Sora** (display) · **Inter** (body) · **Instrument Serif** (italic accents).
- Scroll reveals use a single `IntersectionObserver` wrapper (`components/Reveal.jsx`).
- All motion uses `transform` / `opacity` only and is disabled under reduced-motion.

## Accessibility

- Skip-to-content link, visible focus rings, labelled form fields,
  `aria` on icon-only controls, 44px+ touch targets, semantic landmarks.

# Lumivance

Website for **Lumivance** — an AI-native commercial studio making cinematic AI commercials, campaign imagery and showreels for brands on a monthly retainer.
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
  layout.jsx          Root shell: fonts, navbar, footer, backdrop
  page.jsx            Home: film hero, capabilities, showreel, formats, process,
                      facts, retainers, FAQ, CTA
  work/               Showreel, placement formats, what a month on retainer looks like
  services/           The four disciplines in detail
  pricing/            Retainer tiers + FAQ
  about/              Manifesto, principles, process
  contact/            Retainer enquiry form
  api/contact/        Form delivery over SMTP (see .env.example)
  privacy/, terms/    Legal pages
  robots.js           robots.txt
  sitemap.js          sitemap.xml
  globals.css         Design tokens, buttons, bands, reveal, utilities
components/
  Hero.jsx            Full-viewport film hero with inline blurred poster + mute toggle
  Showreel.jsx        Cinematic player: autoplays in view, custom transport
  Formats.jsx         The same spot reframed live into 16:9 / 9:16 / 1:1 / 4:5
  Capabilities.jsx    Editorial rate-card rows from `services`
  PricingTiers.jsx    Retainer cards; `excluded` items render struck through
  Marquee, Process, Facts, CTA, FAQ, Navbar, Footer, Logo, Backdrop, Reveal …
lib/
  site.js             All copy & data: services, process, facts, formats, month,
                      pricing, faqs, values, manifesto, projects
  heroPoster.js       96px blurred frame of the hero film, inlined as a data URL
  siteUrl.js          Canonical origin per environment
public/video/hero.mp4 The hero film / showreel (1920×1080, 10s)
scripts/dev-server.js Starts `next dev` with the project root as cwd
```

## Customising

- **Every word of copy, the tiers, FAQs and principles** → `lib/site.js`
- **Swap the hero film** → replace `public/video/hero.mp4` (16:9, H.264, ideally
  under 10MB), then regenerate `lib/heroPoster.js` from its first frame so the
  page paints in the right colours before the video arrives.
- **Add real projects to the Work page** → push entries into `projects` in
  `lib/site.js` (`{ title, client, year, src, poster }`); the grid renders itself.
- **Social links, phone, legal entity** → `site.social`, `site.phone`,
  `site.legal` in `lib/site.js`. Blank values are hidden, never shipped as dead links.
- **Brand colours, fonts, motion** → `tailwind.config.js` + `app/globals.css`
- **Logo mark** → `components/Logo.jsx` and `app/icon.svg`
- **Contact form delivery** needs `SMTP_USER` / `SMTP_PASS` in the host
  environment — see `.env.example`. Until then it fails honestly instead of
  pretending to send.

> Nothing on the site claims past clients, results or named staff. The facts
> block states offer terms (turnaround, formats, ownership), and the pricing is a
> starting point — adjust the tiers to your actual capacity before launch.

## Design notes

- Dark canvas with a drifting **aurora** background (pure CSS, respects
  `prefers-reduced-motion`).
- Type: **Sora** (display) · **Inter** (body) · **Instrument Serif** (italic accents).
- Scroll reveals use a single `IntersectionObserver` wrapper (`components/Reveal.jsx`).
- All motion uses `transform` / `opacity` only and is disabled under reduced-motion.

## Accessibility

- Skip-to-content link, visible focus rings, labelled form fields,
  `aria` on icon-only controls, 44px+ touch targets, semantic landmarks.

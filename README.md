# Square Root Solutions — Next.js

The Square Root Solutions marketing site, ported to **Next.js 14 (App Router) + TypeScript**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

Push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new). Next.js is
auto-detected — no configuration required.

## Project structure

- `app/layout.tsx` — root layout: fonts, global metadata, `<Header>`, `<Footer>`, and the
  shared animation scripts.
- `app/page.tsx` and `app/<route>/page.tsx` — one route per page, each exporting its own
  `metadata` (title, description, canonical, Open Graph) for SEO.
- `app/components/Header.tsx` / `Footer.tsx` — shared chrome. The header highlights the active
  nav item via `usePathname`.
- `app/globals.css` — the full design system (ported verbatim from the original site).
- `public/site.js`, `public/animations.js`, `public/image-slot.js` — the original animation /
  interaction layer (constellation background, scroll reveals, counters, marquee, mobile nav,
  demo lead form). Loaded after hydration via `next/script`.
- `app/sitemap.ts`, `app/robots.ts` — generated `sitemap.xml` and `robots.txt`.

## Notes

- Internal links use plain `<a>` so every page load re-runs the animation scripts exactly like
  the original static site. To convert to client-side (SPA) navigation with `<Link>`, move the
  scripts in `site.js` / `animations.js` into a client component that re-initialises on route
  change.
- Set your production domain in `app/layout.tsx` (`metadataBase`), `app/sitemap.ts` and
  `app/robots.ts` if it is not `https://squareroot.ie`.

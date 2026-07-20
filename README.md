# Shreyash Khare — Portfolio

A personal portfolio site for **Shreyash Khare**, a product designer and frontend developer based in Chennai, India. Built with Next.js and the App Router, it features an animated hero, interactive project cards, a photography gallery, and a Google-Maps-linked location tile — all styled from a small custom design-token system with no UI framework.

**Live projects featured:** [Aether](https://www.aethertech.space/) · [CampusPreps](https://campuspreps.vercel.app/) · [Aletheia](https://aletheia-front.vercel.app/)

---

## Tech stack

| | |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Plain CSS with custom design tokens (no Tailwind / CSS-in-JS) |
| Fonts / assets | Local `.webp` images in `public/img/` |

No component library is used — every element is hand-built and styled via `styles/styles.css` against variables defined in `styles/tokens.css`.

---

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 18.18+ (developed on Node 22).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit.

### Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run the Next.js ESLint checks |

---

## Project structure

```
.
├── app/
│   ├── layout.tsx        # Root layout, <html>/<body>, site metadata
│   └── page.tsx          # The single-page portfolio (all sections + PROJECTS data)
├── components/
│   ├── MagneticCluster.tsx  # Magnetic pointer-tracking name cluster in the hero
│   ├── TiltCard.tsx         # 3D pointer-tilt wrapper for project cards
│   ├── WorkStepper.tsx      # Stepper in the "Personal" section
│   └── Photography.tsx      # Photo-stack tile + "Behind the lens" gallery modal
├── styles/
│   ├── tokens.css        # Design tokens: colors, spacing, typography, shadows
│   └── styles.css        # All component and layout styles
├── public/img/           # Images: project covers, hobby photos, map, portrait
├── next.config.mjs
├── tsconfig.json
└── package.json
```

The entire page lives in `app/page.tsx`, organized into sections: **Hero → Stats → Projects → Personal → Footer**.

---

## Customizing content

Most edits happen in [`app/page.tsx`](app/page.tsx).

### Projects

Projects are defined in the `PROJECTS` array near the top of `app/page.tsx`. Each entry:

```ts
{
  name: "Aether",
  cover: "/img/aether-cover.webp",   // optional — falls back to a placeholder
  demo: "https://www.aethertech.space/", // optional — renders the clickable ↗ arrow
  tag: "AI Precision Farming Platform",
  lead: "One-line hook shown first.",
  body: "Longer description revealed on hover (or always, on touch devices).",
}
```

- **Cover images** render at a **4:3 aspect ratio**. Export around **1200×900px** (`.webp` preferred) and drop them in `public/img/`, then reference as `/img/<file>.webp`.
- The **demo arrow** (a black circular ↗ button) only appears when `demo` is set, and opens the link in a new tab.

### Social links & contact

- **Footer social links** (LinkedIn, GitHub, Behance, Instagram) — edit the `<a>` hrefs in the footer section of `app/page.tsx`.
- **"Get in touch"** button opens a Gmail compose window; the navbar shows a `mailto:` email.
- **Resume** — the "View my resume" button links to `/resume.pdf`. Add your `resume.pdf` to the `public/` folder.
- **Map tile** links to Google Maps for the coordinates shown in the caption.

### Design tokens

Colors, spacing, type scale, and shadows are centralized in [`styles/tokens.css`](styles/tokens.css). Change a token there to update it everywhere.

---

## Deployment

This is a standard Next.js app and deploys cleanly to [Vercel](https://vercel.com/):

1. Push the repo to GitHub.
2. Import it into Vercel — it auto-detects Next.js; no configuration needed.
3. Vercel runs `npm run build` and serves the app.

Any host that supports Node.js works too — run `npm run build` then `npm run start`.

---

## Notes

- Images are served locally from `public/img/`. Keep exported files reasonably compressed for fast loads.
- Animations respect `prefers-reduced-motion` — the rolling title, orbit, and entrance animations pause for users who prefer reduced motion.
- The layout is responsive: the navbar, project grid, stats strip, personal grid, and footer all reflow for tablet and mobile widths.

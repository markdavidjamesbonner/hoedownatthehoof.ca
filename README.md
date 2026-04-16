# Hoedown at The Hoof

Single-page event landing site for **The Annual Hoedown at The Hoof** — Saturday June 20th, 2026.

## Tech Stack

- **Vue 3** + **Quasar 2** (Vite bundler)
- SCSS for styling
- No backend — static SPA

## Quick Start

```bash
npm install
npx quasar dev
```

The dev server opens at `http://localhost:9000` (or next available port).

## Build for Production

```bash
npx quasar build
```

Output lands in `dist/spa/`.

## Swapping the Background Image

Replace the placeholder at:

```
src/assets/background.jpg
```

Any standard image format works (`.jpg`, `.png`, `.webp`). The CSS applies `background-size: cover` and `background-position: center`, so a landscape image ≥ 1920×1080 will look best. A dark overlay is applied automatically for text legibility.

No code changes needed — just drop in the file and the dev server hot-reloads it.

## Project Structure

```
hoedownatthehoof.ca/
├── public/                  # Static assets (favicons, etc.)
├── src/
│   ├── assets/
│   │   └── background.jpg   # ← swap this file
│   ├── css/
│   │   ├── app.scss          # Global styles, fonts, overlay
│   │   └── quasar.variables.scss
│   ├── layouts/
│   │   └── MainLayout.vue    # Bare wrapper (no nav/footer)
│   ├── pages/
│   │   └── IndexPage.vue     # The landing page
│   ├── router/
│   │   ├── index.js
│   │   └── routes.js
│   └── App.vue
├── index.html
├── package.json
└── quasar.config.js
```

## Event Details (as displayed)

| Field            | Value                                    |
| ---------------- | ---------------------------------------- |
| Date             | Saturday June 20th, 2026                 |
| Entry Fee        | $20 to the "non test"                    |
| Registration     | Starts 11 am                             |
| Categories       | Groms (under 16), Women's, Masters (over 40), Legends (over 50), Open, Best Trick |

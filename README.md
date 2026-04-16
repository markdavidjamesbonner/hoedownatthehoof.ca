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

## Background Slideshow

The hero background cycles through all images in `src/assets/` that match the naming pattern `background<N>.<ext>` (where `<ext>` is `.jpg`, `.png`, or `.webp`). Images rotate every **5 seconds** with a **1.5-second crossfade**.

### How It Works

```
┌─────────────────────────────────────────────────────┐
│                   Two-Layer Crossfade                │
│                                                     │
│  ┌───────────┐         ┌───────────┐                │
│  │  Layer A   │  fade   │  Layer B   │               │
│  │ (opacity 1)│ ──────► │ (opacity 1)│               │
│  │  image 1   │  1.5s   │  image 2   │               │
│  └───────────┘         └───────────┘                │
│        │                     │                      │
│        │  while hidden,      │  while hidden,       │
│        │  preload image 3    │  preload image 4     │
│        ▼                     ▼                      │
│  ┌───────────┐         ┌───────────┐                │
│  │  Layer A   │  fade   │  Layer B   │               │
│  │ (opacity 1)│ ◄────── │ (opacity 0)│               │
│  │  image 3   │  1.5s   │  image 2   │               │
│  └───────────┘         └───────────┘                │
│                                                     │
│  Layers ping-pong; hidden layer preloads next image │
│  All images eagerly preloaded on mount              │
└─────────────────────────────────────────────────────┘
```

### Adding / Removing Images

1. Drop the file into `src/assets/` following the naming convention (`background9.jpg`, `background10.jpg`, etc.).
2. In `src/pages/IndexPage.vue`, add an import and append it to the array:

   ```js
   import bg9 from '../assets/background9.jpg'
   // ...
   const images = [bg1, bg2, /* ... */ bg8, bg9]
   ```

3. Sequencing is determined by the order in the `images` array.
4. Supported formats: `.jpg`, `.png`, `.webp`.
5. Landscape images ≥ 1920×1080 look best (`background-size: cover` with center positioning).
6. A dark overlay is applied automatically for text legibility.

### Tuning

| Constant        | Location                  | Default | Purpose                     |
| --------------- | ------------------------- | ------- | --------------------------- |
| `ROTATION_MS`   | `IndexPage.vue` `<script>`| 5000    | Time each image is shown    |
| `FADE_MS`       | `IndexPage.vue` `<script>`| 1500    | Crossfade transition length |
| `transition`    | `app.scss` `.hero-bg`     | 1.5s    | Must match `FADE_MS`        |

## Project Structure

```
hoedownatthehoof.ca/
├── public/                  # Static assets (favicons, etc.)
├── src/
│   ├── assets/
│   │   ├── background1.jpg  # ← slideshow images (auto-discovered)
│   │   ├── background2.jpg
│   │   ├── ...              #    add more as backgroundN.{jpg,png,webp}
│   │   └── background8.jpg
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

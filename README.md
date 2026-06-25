# Grace Yang — Personal Portfolio

A colorful, hand-made / scrapbook-style personal portfolio for **Grace Yang**, a
CS + Applied Math student at Rice University. Built with **vanilla HTML, CSS, and
JavaScript** — no frameworks, no build step. Just open the file or deploy the
folder as-is.

## ✨ Features

- Landing page that doubles as a **photo-collage menu** — click a pinned photo to
  jump to its section (alongside a sticky nav bar)
- Hand-drawn doodles, pencil-sketch lettering, washi tape, bobby pins & stickers
- Vintage film treatment on photos + aged-paper section backgrounds
- Rotating role tagline, smooth scrolling, scroll-spy nav, and scroll-triggered
  fade-ins
- Fully responsive (mobile / tablet / desktop) and respects `prefers-reduced-motion`

## 📁 Project structure

```
.
├── index.html              # markup only
├── css/
│   └── styles.css          # all styling (design tokens, layout, components)
├── js/
│   └── main.js             # all interactive behavior
├── assets/
│   └── images/             # photos used across the site
│       ├── profile.jpg
│       ├── photo2.jpg … photo10.jpg
│       └── boothpic.jpg
└── README.md
```

## 🚀 Run locally

Open the file directly:

```bash
open index.html          # macOS
```

…or serve it (recommended, avoids any file:// quirks):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🌐 Deploy

The site is fully static, so any static host works:

- **GitHub Pages** — push to a repo, then Settings → Pages → deploy from `main` / root
- **Vercel** or **Netlify** — import the repo (no build command, output dir = root)

## 🛠 Customizing

- **Content / text** → edit `index.html`
- **Look & feel** → edit `css/styles.css` (colors live in the `:root` design tokens
  at the top)
- **Behavior** → edit `js/main.js`
- **Photos** → drop replacements into `assets/images/` (keep the same filenames, or
  update the `src` in `index.html`)
- **Company logos** (Experience cards) are pulled from Clearbit with a graceful
  monogram fallback — search for `TODO` in `index.html` to swap in official logos
- **Résumé** — there's a `TODO` in `index.html` where a hosted résumé link can go

## 🎨 Credits

- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces),
  [Caveat](https://fonts.google.com/specimen/Caveat),
  [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Google Fonts)
- Design & build: Grace Yang

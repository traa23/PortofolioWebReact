# Anugrah Putra Fajar — Portfolio

A modern, premium personal portfolio built with React — featuring a 3D-enhanced hero, smooth scroll, light/dark theme, glassmorphism UI, and a fully data-driven content layer.

**🔗 Live demo:** https://portofolio-web-react.vercel.app/

---

## ✨ Features

- **3D hero** (progressive enhancement) — particle field + floating ring with React Three Fiber, lazy-loaded and adaptive to device capability. The hero stays premium even when WebGL is disabled.
- **Distinct motion per section** — Blur Reveal (Hero), Fade Up (About), Scale + Number Ticker (Statistics), Bento Reveal (Skills), Card Reveal (Projects), Timeline Reveal (Experience).
- **Light / Dark / System theme** powered by design tokens (CSS variables).
- **Smooth scrolling** with Lenis, animated navbar, custom cursor, magnetic buttons.
- **Sections:** Hero · About · Statistics · Skills (Bento) · Projects · Experience (Timeline) · Certificates · Contact.
- **Accessibility-minded:** semantic HTML, keyboard navigation, focus management, and full `prefers-reduced-motion` support.
- **Performance-focused:** vendor code-splitting, lazy 3D, lazy images, no layout shift.
- **Data-driven:** all content lives in `src/data/*` — update the site without touching components.

---

## 🛠 Tech Stack

- **Framework:** React 19 + Vite (Rolldown) + React Compiler
- **Styling:** Tailwind CSS v4, design tokens, glassmorphism
- **UI:** shadcn/ui + Radix primitives, Magic UI–style components
- **Motion:** Motion (Framer Motion) + Lenis smooth scroll
- **3D:** Three.js + React Three Fiber + drei
- **Icons:** Lucide + React Icons (Simple Icons)
- **Routing:** React Router v7
- **Lint:** Oxlint

---

## 📁 Project Structure

```
src/
├── components/   # ui (shadcn), common, layout, animation, magic-ui, three
├── sections/     # hero, about, statistics, skills, projects, experience, certificates, contact
├── layouts/      # MainLayout (shell)
├── pages/        # Home, NotFound
├── routes/       # AppRoutes
├── providers/    # Theme, Lenis, Cursor, Tooltip, Toaster
├── contexts/     # theme, cursor
├── hooks/        # media query, scroll, active section, page visibility
├── data/         # ← all editable content lives here
├── lib/ utils/   # helpers (cn, preview, scroll, throttle, device, webgl)
├── seo/ config/  # SEO component + site config
└── styles/       # globals.css (design tokens + theme)
```

---

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# production build
npm run build

# preview the production build
npm run preview

# lint
npm run lint
```

---

## ✏️ Editing Content

All content is in `src/data/` — no component changes needed:

| File | Section |
|------|---------|
| `profile.js` | Hero (name, roles, description, photo) |
| `about.js` | About (narrative, facts, interests) |
| `stats.js` | Statistics |
| `skills.js` | Skills (Bento grid) |
| `projects.js` | Projects |
| `experience.js` | Experience timeline |
| `certificates.js` | Certificates |
| `contact.js` / `socials.js` | Contact & social links |

> In development, empty fields are auto-filled by `*.preview.js` files so the layout is always previewable. Preview content is **never** included in production builds.

Assets live in `public/` (profile photo, project screenshots in `public/projects/`, etc.).

---

## ☁️ Deployment

Deployed on **Vercel**. The included `vercel.json` adds SPA routing fallback and long-term caching for hashed assets. Build command `npm run build`, output directory `dist`.

---

## 👤 Author

**Anugrah Putra Fajar** — Information Systems student at Politeknik Caltex Riau · Frontend & Full Stack Developer.

- GitHub: [traa23](https://github.com/traa23) · [anugrah24si](https://github.com/anugrah24si)
- LinkedIn: [anugrah-putra](https://www.linkedin.com/in/anugrah-putra-20a91636b/)
- Email: putrafajar2366@gmail.com

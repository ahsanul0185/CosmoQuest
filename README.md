# CosmoQuest

> **Explore the universe from your screen.**

CosmoQuest is a visually immersive, frontend-only space explorer website that lets users discover planets, astronauts, space missions, galaxies, and cosmic facts through an animated, responsive interface. Built as a modern portfolio-grade React application, it delivers a smooth, educational, and engaging experience without requiring any backend.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 (with StrictMode) |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Routing** | React Router DOM 7 |
| **Animations** | Framer Motion (via `motion` package), GSAP, Lenis (smooth scroll) |
| **Icons** | React Icons |
| **Utilities** | clsx, tailwind-merge |
| **Linting** | ESLint 10 with React Hooks & Refresh plugins |

---

## Project Structure

```
CosmoQuest/
├── public/                  # Static assets (images, favicon, icons)
│   ├── astronauts/
│   ├── deep-space/
│   ├── missions/
│   ├── planets/
│   ├── favicon.svg
│   ├── hero.png
│   └── icons.svg
├── src/
│   ├── app/
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx      # Root layout with header, footer, smooth scroll
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Landing page with all sections
│   │   │   └── Explore.jsx         # Search & filter explorer page
│   │   └── router.jsx              # React Router configuration
│   ├── components/
│   │   ├── sections/               # Page sections (Hero, Planets, Astronauts, etc.)
│   │   │   ├── Hero.jsx
│   │   │   ├── Planets.jsx
│   │   │   ├── Astronauts.jsx
│   │   │   ├── Missions.jsx
│   │   │   ├── Galaxies.jsx
│   │   │   ├── Facts.jsx
│   │   │   ├── CTA.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/                     # Reusable UI components
│   │       ├── Card.jsx
│   │       ├── Modal.jsx
│   │       ├── FilterTabs.jsx
│   │       ├── SearchBar.jsx
│   │       ├── HeaderSearch.jsx
│   │       ├── MobileMenu.jsx
│   │       ├── ScrollToTopButton.jsx
│   │       ├── SectionHeader.jsx
│   │       └── star.jsx
│   ├── data/                       # Static data files
│   │   ├── planetData.js
│   │   ├── astronautData.js
│   │   ├── missionData.js
│   │   ├── galaxyData.js
│   │   ├── factData.js
│   │   └── spaceData.js
│   ├── hooks/                      # Custom React hooks
│   │   ├── useFilteredData.js
│   │   ├── useLenis.js
│   │   ├── useScrollReveal.js
│   │   └── useSpaceData.js
│   ├── utils/                      # Helper utilities
│   │   ├── helpers.js
│   │   └── utils.js
│   ├── App.css
│   ├── index.css
│   └── main.jsx                    # Application entry point
├── dist/                           # Production build output
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Features

- **Hero Section** — Animated starfield background with floating orbit visuals and smooth entrance animations
- **Planets Explorer** — Interactive cards for all 8 planets with hover effects and detail modals
- **Astronauts Gallery** — Cards showcasing famous astronauts with key details
- **Space Missions** — Mission cards with historical space exploration data
- **Galaxies Section** — Visual cards for notable galaxies
- **Space Facts** — Short, educational cosmic facts
- **Global Search & Filter** — Dedicated `/explore` page with real-time search, category filters, and URL-synced query parameters
- **Detail Modals** — Click any card to open a rich detail modal without leaving the page
- **Smooth Scrolling** — Lenis-powered buttery smooth scroll across the entire site
- **Scroll Reveal Animations** — GSAP/Framer Motion powered entrance animations as sections enter the viewport
- **Responsive Design** — Fully adaptive layout from mobile to desktop
- **Glassmorphism UI** — Modern translucent header and UI elements

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### 1. Get the source code

You can either clone the repository or download and unzip the source file:

**Option A — Clone via Git:**
```bash
git clone https://github.com/ahsanul0185/CosmoQuest.git
cd CosmoQuest
```

**Option B — Download ZIP:**
Download the source ZIP file, extract it, and open the `CosmoQuest` folder in your terminal.

### 2. Install dependencies

```bash
npm install
```

This will install all required packages including React, Vite, Tailwind CSS, Framer Motion, GSAP, Lenis, and other dependencies listed in `package.json`.

---

## Run Commands

### Start the development server

```bash
npm run dev
```

The Vite dev server will start. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173/`).

Features available in dev mode:
- Hot Module Replacement (HMR) — instant updates as you edit code
- React Fast Refresh — preserves component state during edits
- Source maps for debugging

---

## Build Commands

### Create a production build

```bash
npm run build
```

This command:
- Compiles and bundles the React application with Vite
- Optimizes assets for production
- Outputs static files to the `dist/` directory

### Preview the production build locally

```bash
npm run preview
```

Serves the `dist/` folder locally so you can verify the production build before deployment.

---

## Additional Commands

| Command | Description |
|---------|-------------|
| `npm run lint` | Run ESLint to check code quality and catch issues |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |

---

## Deployment

The project is configured for static hosting. The `dist/` folder generated by `npm run build` can be deployed to any static hosting platform such as:

- **Vercel** — zero-config deployment (see `vercel.json`)
- **Netlify**
- **GitHub Pages**
- **Any CDN or static web server**

---

## License

This project is private and was created as a frontend portfolio piece.

---

<p align="center">
  Built with React, Vite & Tailwind CSS
</p>

# Narain Ram R M — Developer Portfolio & Systems Architecture

A high-performance personal developer portfolio and engineering workstation for **Narain Ram R M** (B.Tech CSE – AI & Robotics, VIT Chennai, Class of 2027), positioned primarily as a **Software Engineer** specializing in *Systems · Networking · Robotics · Applied AI*.

Designed with an Apple-inspired spatial depth language, restrained glass translucency, and an interactive systems topology visualizer—built on a static-first, zero-runtime-overhead architecture.

---

## Built With

- **React 18** — Component-driven client architecture
- **TypeScript (Strict)** — End-to-end type safety with zero `any`
- **Vite 5** — Fast ES-module development and production bundling
- **Tailwind CSS** — Design token system, typography, and dark/light modes
- **React Router DOM 6** — Client-side SPA routing with 404 fallback handling
- **Lucide React** — Minimal, lightweight SVG icon system

---

## Architecture

- **Data-Driven Content Engine:** All projects, case studies, engineering investigations, capabilities, and profile data are centralized in typed static data files (`src/data/`), cleanly decoupled from UI components.
- **Component-Based Hierarchy:** Structured separation of layout containers, domain components (Home, Projects, Engineering, About), and reusable primitives (`GlassSurface`, `Reveal`, `Button`, `Badge`).
- **Interactive Spatial UI:** Pure CSS backdrop-filter layering (`--depth-0` to `--depth-3`) with graceful non-backdrop fallback, micro-interaction lifts, and reduced-motion safety.
- **Static Deployment:** Zero backend or runtime server required. Optimized for fast global CDN hosting via GitHub Pages with full client-side deep linking.

---

## Features

- **Interactive System Topology:** Animated SVG packet conduit flow, contextual subsystem inspector, and dynamic connectivity highlighting.
- **Project Case Study Engine:** In-depth technical specifications, multi-tier architectural diagrams, trade-off analyses, and deliverable metrics.
- **Engineering Notebook:** Grounded lab investigations on concurrency, thread pool sizing, hybrid retrieval (RRF), ROS costmap tuning, and network protocols.
- **Global Command Palette:** macOS Spotlight-style palette accessible via `Cmd+K` / `Ctrl+K` with real-time indexing across routes, projects, and themes.
- **Interactive Engineering Workflow:** Step-by-step visual engineering pipeline (`Problem → Model → Implement → Measure → Test → Iterate`).
- **Dark & Light Mode:** Anti-FOUC initial theme detection with synchronized CSS variable tokens.
- **Full Accessibility:** Semantic landmarks, WCAG AA contrast compliance, keyboard focus rings, and strict `prefers-reduced-motion` overrides.
- **GitHub Pages Static Deployment:** Fully configured SPA routing with automated GitHub Actions CI/CD.

---

## Local Development

```bash
# Clone repository
git clone https://github.com/narainram18/narainram18.github.io.git
cd narainram18.github.io

# Install dependencies
npm install

# Start local development server
npm run dev
```

---

## Production Build & Linting

```bash
# Run ESLint validation
npm run lint

# Build production assets (TypeScript compile + Vite bundle)
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

Automated deployment to GitHub Pages via GitHub Actions:
- **Workflow File:** [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- **Deployment URL:** [https://narainram18.github.io](https://narainram18.github.io)
- **Pipeline:** Lint check → Production build (`tsc && vite build`) → GitHub Pages artifact upload and deployment.

---

## License

MIT © [Narain Ram R M](https://github.com/narainram18)

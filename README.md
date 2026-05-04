# CH D S S S Baba — Personal Portfolio

A modern, fully responsive, and beautifully animated personal portfolio website built from scratch using React, Vite, and Tailwind CSS. The site features a premium glassmorphism aesthetic, parallax scrolling, on-scroll animations, and a sleek black and blue theme.

**Author:** Chitturi Dola Satya Siva Shankar Baba

**Live Demo:** [https://sivashankar-portfolio.vercel.app](https://sivashankar-portfolio.vercel.app)

---

## Tech Stack

| Category            | Technology                          |
|---------------------|-------------------------------------|
| Frontend Framework  | React 19 + Vite                     |
| Styling             | Tailwind CSS v3                     |
| Animations          | Framer Motion                       |
| Icons               | React Icons (Feather Icons + SI)    |
| Typography          | Google Fonts (Inter + Poppins)      |
| Deployment          | Vercel                              |
| Version Control     | Git + GitHub                        |

## Features

- **Glassmorphism UI** — Premium frosted-glass cards, translucent surfaces, and glow borders throughout the design
- **Parallax Scrolling** — Multi-layered depth effect in the Hero section using Framer Motion's `useScroll` and `useTransform`
- **On-Scroll Animations** — Fade-ups, staggered card reveals, slide-ins, and scale entries triggered as elements enter the viewport
- **Starfield Particles** — Animated floating particles in the Hero background for visual depth
- **Fully Responsive** — Optimized for mobile (375px), tablet (768px), and desktop (1280px) breakpoints
- **Accessibility** — Supports `prefers-reduced-motion` to disable animations for users with motion sensitivity
- **Component Architecture** — Modular, reusable React components with clean separation of concerns
- **Custom Scrollbar** — Blue gradient scrollbar matching the site's color palette
- **Animated Navigation** — Hamburger-to-X transition with numbered mobile menu items

## Sections

| Section  | Description                                                    |
|----------|----------------------------------------------------------------|
| Home     | Full-screen landing with name, title, and social links         |
| About    | Personal bio with avatar image and focus area cards             |
| Skills   | Technology grid with blue-themed hover interactions            |
| Projects | Featured project cards with GitHub links and tech stack badges  |
| Contact  | Professional contact cards with email, GitHub, and LinkedIn     |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/chdsssbaba/SivaShankar-Portfolio.git
cd SivaShankar-Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be output to the `dist/` directory.

### Preview the Production Build

```bash
npm run preview
```

## Project Structure

```
Siva-Portfolio/
├── public/
│   ├── avatar.png
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

## Lighthouse Targets

| Category       | Minimum Score |
|----------------|--------------|
| Performance    | 80           |
| Accessibility  | 90           |
| Best Practices | 90           |
| SEO            | 85           |

## Documentation

Detailed documentation is available in the `/docs` directory:

- [Project Overview](docs/PROJECT_OVERVIEW.md) — High-level summary of features and tech stack
- [Architecture](docs/ARCHITECTURE.md) — Component hierarchy and animation layer diagrams
- [Workflow](docs/WORKFLOW.md) — Development lifecycle and CI/CD pipeline
- [Folder Structure](docs/FOLDER_STRUCTURE.md) — File tree and purpose of each module
- [Deployment](docs/DEPLOYMENT.md) — Vercel deployment guide and verification checklist


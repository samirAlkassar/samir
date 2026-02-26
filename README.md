[![Website](https://img.shields.io/badge/Live-Demo-blue)](https://samir-puce.vercel.app)

# Samir Elkasar - Frontend Portfolio

A premium, high-performance portfolio website built with **Next.js 16 (Turbopack)**, **React 19**, and **Tailwind CSS 4**. This project showcases a blend of clean architecture, sophisticated animations, and high-end visual effects.

![Portfolio Preview](/public/images/Ezz-eldeen-home.png)

## Key Features

- **Premium Animations**: Powered by **Framer Motion** and **GSAP**, featuring staggered entry animations, blurred transitions, and a custom circular ripple effect for mobile navigation.
- **Advanced WebGL Effects**: A custom-built **LightRays** component using **OGL** for dynamic, high-performance background lighting that follows the mouse.
- **Responsive & Modern Design**: Fully responsive layout tailored for all devices, utilizing **Tailwind CSS 4** for a streamlined styling workflow.
- **Theme Orchestration**: Support for both Light and Dark modes with automatic persistence.
- **Performance Optimized**: Leveraging Next.js 16 latest features, including the Turbopack build engine for near-instant development and optimized production bundles.
- **Semantic UI**: Built with accessible, semantic HTML5 for better SEO and screen reader support.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/docs/v3/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [Formspree](https://formspree.io/)
- **WebGL Engine**: [OGL](https://github.com/o-g-l/ogl)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## Project Structure

```text
├── app/
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Major section components (Hero, Navbar, etc.)
│   │   └── ui/          # Low-level UI primitives (BlurText, ChromaGrid)
│   ├── constants/       # Static data (projects.json)
│   ├── projects/        # Projects page route
│   └── contact/         # Contact page route
├── public/              # Static assets (images, resumes)
├── lib/                 # Utility functions
└── tailwind.config.js   # Style configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samirAlkassar/samir.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Crafted with 🤍 by Samir Elkasar
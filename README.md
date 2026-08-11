# 🏋️‍♂️ Hsini Fitness — Enterprise Gym & High-Performance Athletic Training Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-fitness.hsini.dev-2ea44f?style=for-the-badge&logo=googlechrome&logoColor=white)](https://fitness.hsini.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.184-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> A state-of-the-art, luxury fitness & high-performance athletic training platform built for elite strength, conditioning, CrossFit, combat, and holistic wellness. Engineered with cutting-edge WebGL 3D particle dynamics, interactive class booking engines, dynamic membership pass configurators, and high-definition video showcases.

🔗 **Live Demo:** [https://fitness.hsini.dev](https://fitness.hsini.dev)  
🌐 **Developer Website:** [https://hsini.dev](https://hsini.dev)  
👤 **Maintained by:** [Mohamed Hsini](https://hsini.dev) (`contact@hsini.dev`)

---

## 🌟 Key Features & Capabilities

- ⚡ **Interactive 3D WebGL Particle Canvas**:
  - Custom 3D scene built with **Three.js** featuring over 2,000 active particles with additive blending.
  - Smooth mouse parallax interaction and dynamic orbital particle movement.
  - Exponential fog integration (`zinc-950` depth blending) paired with **GSAP** micro-animations.
- 🏋️‍♂️ **Comprehensive Athletic Program Engine**:
  - Dynamic nested program routes (`/programs/[slug]`) for **Strength & Conditioning**, **CrossFit / HIIT**, **Power Yoga**, **BodyCombat**, and **BodyBike**.
  - Detailed exercise catalogs, targeted muscle groups, specialized machinery breakdowns, and equipment toolkits per program.
  - Dynamic gallery viewer, weekly class schedule timetables, and high-resolution visual backgrounds.
- 🎟️ **Dynamic Membership Pass Configurator**:
  - Multi-tier membership profile selector (`ATHLETE`, `WARRIOR`, `ELITE`).
  - Interactive state toggles, highlighted active pass states, real-time pricing cards, and feature lists powered by React state.
- 📅 **Real-Time Class Schedule & Booking Wizard**:
  - Live class schedule breakdown with instructor assignment, start times, available spot tracking, and waitlist notifications.
  - Interactive modal booking wizard with real-time class capacity progress bars and instant client confirmation feedback.
- 🎥 **High-Definition Video Showcase & Media Engine**:
  - Integrated local MP4 video streams for CrossFit (`CrossFit_.mp4`), BodyCombat (`badycompat_.mp4`), and Gym overview (`gym.mp4`).
  - WebP image assets processed and optimized with **Sharp** for maximum performance and instant load times.
- 🏆 **Trainer Profile & Facility Metrics Showcase**:
  - Dedicated trainer cards featuring Head Trainers, CrossFit Coaches, and Yoga Instructors.
  - Live facility stats counter highlighting 15,000+ Sq. Ft, 40+ Weekly Classes, 12 Elite Trainers, and 24/7 Member Access.
- 🛡️ **Enterprise SEO & Structured Schema Compliance**:
  - Full `schema.org/HealthAndBeautyBusiness` JSON-LD structured metadata for rich search engine indexing.
  - Custom metadata configuration, OpenGraph optimization, and WCAG accessibility standards.

---

## 🛠️ Technology Stack

| Category | Technology / Library | Description |
| :--- | :--- | :--- |
| **Core Framework** | Next.js 16.2.6 (App Router) | Server Components, Client Components, Dynamic Routing |
| **UI & Styling** | React 19, Tailwind CSS v4 | Modern dark-mode aesthetic with curated zinc/orange tokens |
| **WebGL & 3D** | Three.js (v0.184.0) | Custom WebGL particle canvas & camera parallax controls |
| **Animations** | GSAP 3.15 | Smooth micro-animations and timeline-based UI transitions |
| **Data & HTTP** | Axios 1.16 | Client-side HTTP communications and data fetching |
| **Image & Media** | Sharp 0.34 | High-performance image processing and WebP optimization |
| **Type Safety** | TypeScript 5.x | Strict static typing and interface definitions |
| **Code Quality** | ESLint 9 | Code quality enforcement and linting standards |

---

## 📁 Project Directory Structure

```
gym/
├── 📁 src/
│   ├── 📁 app/                      # Next.js App Router (Pages & Layouts)
│   │   ├── 📁 programs/             # Program routes
│   │   │   └── 📁 [slug]/          # Dynamic program page & client component
│   │   │       ├── 📄 page.tsx      # Server page wrapper & metadata
│   │   │       └── 📄 ProgramClient.tsx # Rich interactive program view
│   │   ├── 📄 favicon.ico           # Site favicon icon
│   │   ├── 📄 globals.css           # Tailwind CSS directives & global styling
│   │   ├── 📄 layout.tsx            # Global root layout & metadata configuration
│   │   └── 📄 page.tsx              # Master homepage showcase & booking engine
│   └── 📁 components/               # Reusable UI components
│       ├── 📄 Navbar.tsx            # Sticky navigation bar & mobile drawer
│       └── 📄 ThreeHero.tsx         # 3D WebGL particle hero canvas (Three.js & GSAP)
├── 📁 public/                       # Static media, high-res assets & icons
│   ├── 📁 images/                   # Optimized WebP program & facility graphics
│   ├── 🎥 CrossFit_.mp4             # High-definition CrossFit training video
│   ├── 🎥 badycompat_.mp4           # BodyCombat cardio kickboxing video stream
│   ├── 🎥 gym.mp4                   # Facility showcase background video
│   ├── 📄 logo.png                  # Hsini Fitness brand identity logo
│   ├── 📄 robots.txt                # Search engine crawler instructions
│   └── 📄 sitemap.xml               # XML sitemap configuration
├── 📄 next.config.ts                # Next.js framework configuration
├── 📄 package.json                  # Project dependencies & script definitions
├── 📄 postcss.config.mjs            # PostCSS configuration for Tailwind CSS v4
├── 📄 README.md                      # High-top enterprise project documentation
└── 📄 tsconfig.json                 # TypeScript compiler rules
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have the following tools installed on your local environment:
- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`

### 2. Clone the Repository
```bash
git clone https://github.com/hsinidev/hsini-fitness.git
cd hsini-fitness
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

---

## 📦 Scripts Reference

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches Next.js local development server at port 3000 |
| `npm run build` | Compiles optimized production build bundle |
| `npm run start` | Boots the compiled production server |
| `npm run lint` | Runs ESLint analysis for code quality & style adherence |

---

## 🔒 Security & Performance

- **Optimized Rendering**: Dynamic client component hydration for interactive WebGL experiences without blocking initial server render.
- **Type-Safe Interfaces**: Exhaustive TypeScript interfaces for schedule slots, program matrices, and 3D scene parameters.
- **Media Compression**: High-efficiency WebP graphics and optimized MP4 video assets for smooth streaming across mobile and desktop devices.

---

## ✒️ Author & Credits

Designed, developed, and maintained with athletic precision by **Hsini Web Development**.

- 🌐 **Website**: [https://hsini.dev](https://hsini.dev)
- 📧 **Email**: [contact@hsini.dev](mailto:contact@hsini.dev)
- 🐙 **GitHub Account**: [@hsinidev](https://github.com/hsinidev)

---

## 📜 License

This project is open source and released under the terms of the [MIT License](LICENSE).

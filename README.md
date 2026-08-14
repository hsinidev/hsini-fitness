<div align="center">
# 🚀 Hsini Fitness
### *High-Performance Autonomous Intelligence & Modular TypeScript Engine*

<p align="center">
  [![Architect](https://img.shields.io/badge/Architect-Hsini%20Mohamed-0055ff?style=for-the-badge&logo=github&logoColor=white)](https://hsini.dev)
  [![Portfolio](https://img.shields.io/badge/Portfolio-hsini.dev-00c853?style=for-the-badge&logo=google-chrome&logoColor=white)](https://hsini.dev)
  [![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge)](https://github.com/hsinidev)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</p>

</div>

---
## 🌟 Executive Overview

**Hsini Fitness** is an enterprise-grade artificial intelligence solution engineered for low-latency reasoning, deterministic workflow automation, and high-accuracy data orchestration. Built with modern **TypeScript** and **TypeScript**, it delivers modular architecture and seamless developer ergonomics.

## ⚡ Key Highlights & Capabilities

- **Autonomous Orchestration**: Advanced state management and deterministic execution pipelines.
- **Modular Architecture**: Plug-and-play integrations with clean abstraction layers.
- **Zero-Overhead Processing**: High-throughput processing optimized for local and cloud environments.
- **Developer-First APIs**: Type-safe interfaces with comprehensive observability.

---
## 🏗️ Architecture & Technology Stack

- **Primary Language**: `TypeScript`
- **Design Pattern**: Modular Clean Architecture / Domain-Driven Design
- **License**: MIT Open Source Attribution

## 📖 Deep-Dive Technical Documentation

# 🏋️‍♂️ Hsini Fitness — Enterprise Gym & High-Performance Athletic Training Platform


> A state-of-the-art, luxury fitness & high-performance athletic training platform built for elite strength, conditioning, CrossFit, combat, and holistic wellness. Engineered with cutting-edge WebGL 3D particle dynamics, interactive class booking engines, dynamic membership pass configurators, and high-definition video showcases.

🔗 **Live Demo:** [https://fitness.hsini.dev](https://fitness.hsini.dev)  
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


Designed, developed, and maintained with athletic precision by **Hsini Web Development**.

- 🌐 **Website**: [https://hsini.dev](https://hsini.dev)
- 📧 **Email**: [contact@hsini.dev](mailto:contact@hsini.dev)
- 🐙 **GitHub Account**: [@hsinidev](https://github.com/hsinidev)

---

---
## 🚀 Quick Start & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/hsinidev/hsini-fitness.git
cd hsini-fitness
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch the Application
```bash
npm start
```


---

## 👨‍💻 System Architect & Author

<table align="center" style="border: none; background: transparent; width: 100%;">
  <tr>
    <td align="center" width="160" style="border: none; padding: 12px;">
      <img src="https://avatars.githubusercontent.com/u/232697467?v=4" width="120" height="120" style="border-radius: 50%; box-shadow: 0 8px 24px rgba(99,102,241,0.3); border: 2.5px solid #6366f1;" alt="Hsini Mohamed" />
      <br /><br />
      <b>Hsini Mohamed</b><br />
      <sub>Morocco 🇲🇦</sub>
    </td>
    <td style="border: none; padding: 12px; vertical-align: middle;">
      <h3 style="margin-top: 0;">🚀 System Architect & Full-Stack Engineer</h3>
      <p style="font-size: 0.95rem; line-height: 1.6; color: #475569;">
        Specializing in high-performance autonomous AI systems, deterministic multi-agent swarms, enterprise cloud architecture, and modern full-stack engineering.
      </p>
      <p>
        <a href="https://hsini.dev"><img src="https://img.shields.io/badge/Portfolio-hsini.dev-2563eb?style=flat-square&logo=google-chrome&logoColor=white" alt="Portfolio" /></a>
        <a href="mailto:contact@hsini.dev"><img src="https://img.shields.io/badge/Email-contact@hsini.dev-ea4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
        <a href="https://github.com/hsinidev"><img src="https://img.shields.io/badge/GitHub-@hsinidev-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
        <a href="https://linkedin.com/in/hsinidev/"><img src="https://img.shields.io/badge/LinkedIn-hsinidev-0077b5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
      </p>
    </td>
  </tr>
</table>

---

## 📄 License & Attribution

This project is distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete terms.

<div align="center">
  <sub>⚡ Designed, architected, and maintained with engineering precision by <b><a href="https://hsini.dev">Hsini Mohamed</a></b>.</sub>
</div>

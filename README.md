# Muhammad Rafly — Architecture Portfolio

Portfolio site for Muhammad Rafly (Architecture, Universitas Islam Indonesia). The four studio projects are rebuilt as procedural 3D maquettes on a single table, and the camera flies between them as you scroll.

- **01 Public Toilet**: Studio Design
- **02 The Living Unit (Bumi Basamo)**: Integrated Design Studio
- **03 After Hours, Creative Hub & Jazz Center**: Architectural Design Studio 1
- **04 Step by Step, Vertical Housing in Nairobi**: Architectural Design Studio 2

## Stack

Vite · Three.js · GSAP ScrollTrigger · Lenis (inertia scroll). There's no framework, and all 3D models are generated in code (`src/models.js`).

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` builds the site and publishes `dist/` to the `gh-pages` branch through GitHub Actions.

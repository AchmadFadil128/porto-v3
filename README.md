# Portfolio v3

Welcome to the third iteration of my personal portfolio website. Built from scratch with Next.js App Router, Tailwind CSS v4, and a Golang REST API for content management. 

The project features a clean, documentation-inspired design system modeled after Mintlify — emphasizing readability, generous whitespace, and subtle micro-interactions.

## 🚀 Tech Stack

- **Frontend:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion
- **Backend (API):** Go, PostgreSQL
- **Storage:** SeaweedFS (Local file server integration)
- **UI & 3D Elements:** React Three Fiber (3D Lanyard component), GSAP

## ✨ Features

- **Modern & Responsive UI:** Built with Tailwind CSS v4 and a documentation-inspired aesthetic.
- **Dynamic Content:** Projects, writings, and certifications are fetched dynamically from a Go REST API backend.
- **Interactive 3D Lanyard:** A fully functional, physics-simulated 3D lanyard component on the hero section.
- **Smooth Page Transitions:** Framer Motion enables horizontal sliding transitions between pages while maintaining a static navigation bar.
- **Centralized Data:** Static information and metadata are seamlessly sourced from a central `lib/data.ts` configuration.
- **SeaweedFS Integration:** Robust file upload system natively integrating with a local SeaweedFS cluster.

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Setup

Ensure you have your Go REST API and SeaweedFS instances running. Set the required environment variables:

```env
API_BASE_URL=http://localhost:4000
```

## 👤 Author

**Achmad Fadil Nur Ramdhani**
*Junior Cloud Engineer*

- GitHub: [@AchmadFadil128](https://github.com/AchmadFadil128)
- LinkedIn: [Achmad Fadil Nur Ramdhani](https://linkedin.com/in/achmad-fadil-nur-ramdhani/)
- Twitter: [@achmad128f](https://x.com/achmad128f)

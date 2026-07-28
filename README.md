# VIRUS For Electronics

Marketing and booking site for VIRUS electronic repair and waste recycling — service overview, online repair booking, quote calculator, and ticket tracking.

## Stack

| Layer | Tech |
| --- | --- |
| UI | React 19, TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 |
| Icons / motion | Lucide React, Motion |
| AI (optional) | Google GenAI (`@google/genai`) |

## Prerequisites

- **Node.js 20+** (recommended; Node 18+ may work)
- npm

> On Ubuntu 20.04 / older glibc, this repo overrides Rollup to `@rollup/wasm-node` so Vite can run without native glibc 2.32+ binaries.

## Run locally

```bash
# Install dependencies
npm install

# Optional: Gemini API key for AI features
cp .env.example .env.local
# Edit .env.local and set GEMINI_API_KEY

# Start dev server (http://localhost:3000)
npm run dev
```

## Deploy (Netlify)

Build command: `npm run build`  
Publish directory: `dist`  
Node version: `20`

Config is in `netlify.toml`. After pushing, trigger a new deploy (or wait for auto-deploy).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server on port **3000** (`0.0.0.0`) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Typecheck with `tsc --noEmit` |
| `npm run clean` | Remove `dist` and generated `server.js` |


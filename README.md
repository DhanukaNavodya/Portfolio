# My Sparkling Portfolio

A modern personal portfolio web app built with TanStack Start, React, TypeScript, and Vite.

## Features

- Multi-page portfolio with file-based routing
- Pages: Home, About, Projects, Contact
- Responsive UI with reusable component structure
- Tailwind CSS powered styling
- Cloudflare-ready Vite setup

## Tech Stack

- React 19
- TypeScript
- TanStack Router / TanStack Start
- Vite
- Tailwind CSS 4
- Radix UI + Lucide Icons

## Getting Started

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm

## Install

```bash
npm install
```

## Run in Development

```bash
npm run dev
```

Default local dev server is started by Vite.

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Lint and Format

```bash
npm run lint
npm run format
```

## Project Structure

```text
src/
  assets/             Images and static assets
  components/         Shared components (Navbar, Footer, UI primitives)
  hooks/              Custom React hooks
  lib/                Utilities and shared logic
  routes/             Route pages (/, /about, /projects, /contact)
  router.tsx          Router setup
  start.ts            App entry
  server.ts           Server entry
  styles.css          Global styles
```

## Customization

- Update personal details/content in `src/routes/*.tsx`.
- Replace hero image at `src/assets/hero-portrait.png`.
- Adjust global look and theme tokens in `src/styles.css`.

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build app
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier

## Notes

- This project currently uses portfolio placeholder content ("Dhanuka Navodya").
- Some route text appears to contain encoding artifacts (for example `—`) and can be cleaned if needed.

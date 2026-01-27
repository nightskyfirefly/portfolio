# Portfolio - Next.js

Modern portfolio website built with Next.js 14, featuring smooth animations, scroll-triggered effects, and a beautiful night sky theme.

## Features

- **Next.js 14** with App Router and TypeScript
- **Framer Motion** for smooth animations and transitions
- **Scroll-triggered animations** using react-intersection-observer
- **Chart.js** integration for interactive dashboards
- **Night sky theme** with aurora effects, fireflies, and moondust particles
- **Responsive design** with mobile-first approach
- **Performance optimized** with code splitting and lazy loading

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Background/         # Aurora, Fireflies, Moondust
│   ├── Hero/              # Hero section
│   ├── Apps/              # App showcase
│   ├── Cards/             # Card components
│   ├── Dashboards/        # Dashboard charts
│   ├── Experience/        # Work experience
│   ├── About/             # About section
│   ├── Contact/           # Contact section
│   └── Navigation/        # Navigation component
└── package.json
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- Framer Motion
- Chart.js / react-chartjs-2
- react-intersection-observer

## Notes

- Card parallax effects have been removed for smoother, less jarring animations
- Moondust particles remain but only affect background elements
- All animations respect `prefers-reduced-motion` preference

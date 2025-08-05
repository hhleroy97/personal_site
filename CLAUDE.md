# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A cyberpunk-themed personal portfolio website built with Next.js, showcasing software projects, AV/creative work, freelance services, and blog content.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Styling**: Tailwind CSS v4 with custom cyberpunk theme
- **UI Components**: shadcn/ui with Radix primitives
- **Animations**: Framer Motion
- **Typography**: JetBrains Mono (primary), Orbitron (headings)
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── portfolio/         # Portfolio showcase
│   ├── services/          # Freelance services
│   ├── blog/              # Blog posts
│   ├── contact/           # Contact information
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Layout components (Navigation)
│   ├── sections/          # Page sections (Hero)
│   └── ui/                # shadcn/ui components
└── lib/
    └── utils.ts           # Utility functions
```

## Design System

### Colors
- **Background**: #0D0D0D (dark cyberpunk base)
- **Primary**: #00FF88 (neon green)
- **Secondary**: #FF0080 (neon pink)
- **Accent**: #00BFFF (neon blue)
- **Destructive**: #FF4757 (neon red)

### Typography
- **Primary Font**: JetBrains Mono (monospace for cyberpunk feel)
- **Heading Font**: Orbitron (futuristic headings)

### Effects
- **Glitch Animation**: `.glitch` class for cyberpunk glitch effect
- **Glass Morphism**: `.glass` class for translucent panels
- **Terminal Borders**: `.terminal-border` class for neon borders
- **Glow Effects**: Custom shadow utilities for neon glow effects

## Key Features

- Responsive navigation with mobile menu
- Animated hero section with particle effects
- Cyberpunk design system with neon colors and effects
- Grid pattern background animations
- Font optimization with Next.js font loading
- Static generation for all pages

## Future Development

### Immediate Next Steps
- Complete About page with bio and resume download
- Build Portfolio pages (Software & AV/Creative sections)
- Create Services page for freelance offerings
- Implement Contact form with social links
- Add Blog structure (prepare for CMS integration)

### Optional Enhancements
- Terminal UI components
- Interactive playground (TouchDesigner embeds)
- "Now" page for current projects
- Advanced animations and micro-interactions
- CMS integration (Sanity or Notion)

## Deployment

Ready for Vercel deployment with zero configuration.
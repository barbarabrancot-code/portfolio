# Portfolio Project - Claude.md

## Project Overview
Barbara Branco's portfolio website - a modern, interactive design portfolio built from Figma Make with React, Vite, and Tailwind CSS.

**Type**: Portfolio / Personal Brand Website  
**Stack**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion  
**Status**: In Development

## Key Features
- Scroll-driven animations with Framer Motion
- Responsive grid layout for project cards
- Smooth typography transitions
- Dark theme with gradient backgrounds
- Mobile-optimized experience

## Project Structure
```
src/
├── app/
│   ├── App.tsx              # Main portfolio component
│   ├── components/
│   │   ├── ProjectCard.tsx  # Individual project card
│   │   ├── figma/           # Figma-generated components
│   │   └── ui/              # shadcn/ui components
│   ├── main.tsx
│   └── index.html
├── imports/                 # Figma-generated frames
├── styles/                  # Global styles & fonts
└── main.tsx                 # Entry point
```

## Commands
```bash
pnpm install      # Install dependencies
pnpm dev          # Start dev server (http://localhost:5173)
pnpm build        # Build for production
```

## Key Design Decisions
1. **Scroll-driven animations**: Uses Framer Motion's scroll tracking for smooth transitions
2. **Fixed navbar animation**: Name shrinks and moves to top nav as user scrolls
3. **Staggered card animation**: Project cards fade in with stagger effect
4. **Color transitions**: Background and border colors animate throughout scroll

## Next Steps
- [ ] Install dependencies and verify dev server
- [ ] Connect to GitHub repository
- [ ] Customize projects data if needed
- [ ] Test responsive design across devices
- [ ] Deploy to production

## Notes
- Generated from Figma Make - contains pre-built shadcn/ui components
- Uses pnpm workspace configuration
- Tailwind CSS v4 with Vite integration

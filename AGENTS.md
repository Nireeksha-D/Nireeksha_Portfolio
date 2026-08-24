# Project Guide

## Architecture

This is a single-page developer portfolio built with React, TypeScript, TanStack Start, and Tailwind CSS 4. The root route renders the complete portfolio while Netlify handles production deployment.

## Key Files

- `src/routes/__root.tsx`: document shell, SEO metadata, fonts, and global stylesheet loading.
- `src/routes/index.tsx`: root route entry point.
- `src/components/portfolio.tsx`: portfolio content, data, reusable section components, icons, navigation, and reveal behavior.
- `src/styles.css`: complete design system, layouts, animations, and responsive breakpoints.
- `public/Nireeksha-D-Resume.pdf`: downloadable resume asset.
- `netlify.toml`: Netlify build and output configuration.

## Conventions

- Keep resume facts in `src/components/portfolio.tsx` accurate and do not add unverified employers, links, achievements, or project claims.
- Reuse `SectionHeading`, shared button classes, cards, and icon mappings before adding new patterns.
- Preserve the dark industrial design direction and the cyan accent palette.
- Use Lucide for interface icons and React Icons for recognizable technology logos.
- Keep animation limited to opacity and transform and respect `prefers-reduced-motion`.
- Maintain keyboard-accessible links, buttons, and navigation states.

## Non-Obvious Decisions

The site intentionally omits project action buttons because no verified project URLs were supplied. The resume PDF was generated from the provided resume details because no uploaded binary resume was available in the workspace.

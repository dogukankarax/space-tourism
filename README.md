# Space Tourism

A multi-page space tourism website where users can explore destinations, meet the crew, and learn about launch technology. Built as a Frontend Mentor challenge solution.

🔗 **Live Demo:** [dogukankarax.github.io/space-tourism](https://dogukankarax.github.io/space-tourism/)

![Space Tourism Preview](public/img/Screenshot.png)

## Tech Stack

- **React 19** with React Compiler
- **TypeScript** (strict mode)
- **Vite 7** for blazing-fast builds
- **TanStack Router** — file-based routing with auto code-splitting
- **Tailwind CSS v4.2** — CSS-first config, fluid typography via `clamp()`
- **clsx + tailwind-merge** — conditional class composition via `cn()` helper

## Pages

| Route          | Description                                      |
| -------------- | ------------------------------------------------ |
| `/`            | Home — hero section with animated explore button |
| `/destination` | Pick a destination (Moon, Mars, Europa, Titan)   |
| `/crew`        | Meet the crew members                            |
| `/technology`  | Learn about launch vehicles and technology       |

## Getting Started

### Prerequisites

- Node.js >= 20.19
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm run dev
```

### Production Build

```bash
pnpm run build
pnpm run preview
```

## Project Structure

```text
src/
├── assets/         # Static data (data.json)
├── components/     # Shared UI (Header, Nav)
├── fonts/          # Self-hosted web fonts
├── lib/            # Utilities (cn helper)
├── routes/         # File-based route pages
├── types.ts        # TypeScript interfaces
└── index.css       # Global styles, Tailwind theme, backgrounds
```

## Features

- Responsive design (mobile → tablet → desktop)
- Fluid typography with CSS `clamp()` functions
- Animated explore button with pulse ring effect
- Self-hosted fonts (Barlow, Barlow Condensed, Bellefair)
- Semantic HTML with proper heading hierarchy
- Accessible navigation with ARIA attributes
- Auto code-splitting per route

## Acknowledgements

- Design by [Frontend Mentor](https://www.frontendmentor.io/)
- Crew and destination data inspired by real space missions

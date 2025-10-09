# @spexop/icons

[![npm version](https://img.shields.io/npm/v/@spexop/icons.svg?style=flat-square)](https://www.npmjs.com/package/@spexop/icons)
[![npm downloads](https://img.shields.io/npm/dm/@spexop/icons.svg?style=flat-square)](https://www.npmjs.com/package/@spexop/icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-%3E%3D16.8-61dafb.svg?style=flat-square)](https://reactjs.org/)

A modern, optimized icon library for the Spexop Design System. Built with React, TypeScript, and tree-shaking support.

**262 carefully curated icons** (including 15 filled variants + 30 brand icons) with a minimal, contemporary design perfect for modern web applications.

## Features

- 🎨 **Customizable**: Size, color, and all SVG props supported
- 🌲 **Tree-shakeable**: Only import icons you use
- 📦 **Optimized**: SVGs are automatically optimized with SVGO
- 🔷 **TypeScript**: Full type safety with TypeScript definitions
- ♿ **Accessible**: Built-in accessibility support with ARIA attributes
- ⚡ **Lightweight**: Minimal bundle size impact (~10KB gzipped)
- 📱 **Mobile-Friendly**: Clear and recognizable at all sizes
- 🎯 **Comprehensive**: 262 icons across 20+ categories
- 🎨 **Variant Support**: Filled versions of popular icons (heart, star, bookmark, etc.)
- 🏢 **Brand Icons**: 30+ social media and tech company logos (Facebook, Twitter, GitHub, etc.)

## 📋 Icon Catalog

**[View all 262 icons →](./ICONS.md)**

### Icon Categories

- **Navigation & Arrows** (27) - Including diagonal arrows and circle variants
- **Actions & Editing** (14) - Common operations
- **Communication** (11) - Messaging and notifications
- **Media & Entertainment** (14) - Playback and content
- **Files & Folders** (13) - File management with inbox variants
- **UI Controls** (17) - Interface elements
- **Social & Community** (15) - Including mic and headphones
- **Commerce & Shopping** (7) - E-commerce elements
- **System & Status** (20) - Including power and toggle states
- **Forms & Input** (6) - Authentication
- **Layout & Structure** (8) - Layout components
- **Devices & Technology** (11) - Device types
- **Text & Typography** (8) - Text formatting
- **Weather** (8) - Sun, moon, clouds, rain, snow, etc.
- **Development** (10) - Git, terminal, bug, package
- **Tools & Utilities** (20+) - Scissors, feather, wrench, etc.
- **Filled Variants** (15) - heart, star, bookmark, circle, alerts, etc.

## Installation

```bash
# Using pnpm (recommended)
pnpm add @spexop/icons

# Using npm
npm install @spexop/icons

# Using yarn
yarn add @spexop/icons
```

## Usage

### Basic Usage

```tsx
import { Home, User, Settings, Heart, HeartFilled, StarFilled } from '@spexop/icons';

function App() {
  return (
    <div>
      {/* Stroke icons (default) */}
      <Home />
      <User size={32} />
      <Settings color="#3b82f6" />
      
      {/* Filled variants */}
      <HeartFilled color="#ef4444" />
      <StarFilled color="#f59e0b" />
      
      {/* Mix and match */}
      <Heart strokeWidth={1.5} />
    </div>
  );
}
```

### With Props

All icons accept the following props:

```tsx
import { Search } from '@spexop/icons';

function SearchBar() {
  return (
    <Search
      size={24}           // Size in pixels (default: 24)
      color="currentColor" // Color (default: "currentColor")
      title="Search"      // Accessible title
      className="icon"    // Additional CSS class
      strokeWidth={2}     // Customize stroke width
    />
  );
}
```

### Custom Styling

Icons inherit the color from their parent's `color` CSS property by default:

```tsx
<div style={{ color: '#ef4444' }}>
  <Home /> {/* Will be red */}
</div>
```

Or style them directly:

```css
.icon {
  color: #3b82f6;
  transition: color 0.2s;
}

.icon:hover {
  color: #2563eb;
}
```

## Adding New Icons

1. Add your SVG files to the `assets/icons/` directory
2. Run the build script: `pnpm run build:icons`
3. Icons will be automatically generated as React components

### Icon Naming Convention

- File names should be in kebab-case: `arrow-right.svg`
- They'll be converted to PascalCase components: `ArrowRight`

## Development

```bash
# Install dependencies
pnpm install

# Build icons from SVG files
pnpm run build:icons

# Build the library
pnpm run build

# Watch mode for development
pnpm run dev

# Type checking
pnpm run typecheck

# Linting
pnpm run lint
```

## Publishing

The package is configured for automatic publishing:

```bash
# This will run the build automatically before publishing
pnpm publish
```

## Project Structure

```bash
@spexop/icons/
├── assets/
│   └── icons/              # Source SVG files
├── src/
│   ├── icons/              # Generated icon components
│   ├── Icon.tsx            # Base Icon component
│   ├── types.ts            # TypeScript types
│   ├── utils.ts            # Utility functions
│   └── index.ts            # Main entry point
├── scripts/
│   └── build-icons.ts      # Icon generation script
├── dist/                   # Build output (git ignored)
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## Icon Component API

### IconProps

```typescript
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;    // Default: 24
  color?: string;            // Default: "currentColor"
  title?: string;            // For accessibility
  className?: string;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please ensure all icons:

- Are properly optimized
- Follow the naming conventions
- Include appropriate licensing information

---

**Built by Spexop**  
Cuneyt Cakar ([@olmstedian](https://github.com/olmstedian))  
📧 <ccakar@spexop.com>  
🌐 [www.spexop.com](https://www.spexop.com)  
📦 [GitHub](https://github.com/spexop/icons)

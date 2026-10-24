> **Historical document — not current release guidance.** See [README](README.md) and [2026-10-24 verification](VERIFICATION.md) for current counts, source/npm differences, build evidence and unresolved licensing. Earlier production-ready, browser, bundle-size and publishing claims below have not been revalidated and do not authorize publication.

# Getting Started with @spexop/icons

This guide will help you set up and start using the Spexop Icons package.

## Prerequisites

- Node.js 18+ or 20+
- pnpm 8+ (this project uses pnpm as the package manager)

## Initial Setup

### 1. Install Dependencies

```bash
pnpm install
```

This will install all required dependencies including TypeScript, React, build tools, and more.

### 2. Build Sample Icons

The package comes with sample icons. Build them by running:

```bash
pnpm run build:icons
```

This will:

- Create the `assets/icons/` directory if it doesn't exist
- Generate 8 sample icons (Home, User, Settings, Search, Menu, Close, Check, ArrowRight)
- Generate React components for each icon in `src/icons/`
- Update `src/index.ts` with exports

### 3. Build the Package

```bash
pnpm run build
```

This compiles the TypeScript code and bundles the package for distribution. The output will be in the `dist/` directory.

### 4. Preview Icons (Optional)

Open `examples/preview.html` in your browser to see a visual preview of all icons.

## Development Workflow

### Adding New Icons

1. **Add SVG files** to `assets/icons/`
   - Use kebab-case naming: `my-icon.svg`
   - Ensure 24x24 viewBox for consistency
   - Use `stroke` instead of `fill` where possible

2. **Run the icon builder**

   ```bash
   pnpm run build:icons
   ```

3. **Build the package**

   ```bash
   pnpm run build
   ```

### Development Mode

Watch for changes and rebuild automatically:

```bash
pnpm run dev
```

### Type Checking

Verify TypeScript types:

```bash
pnpm run typecheck
```

### Linting

Check code quality:

```bash
pnpm run lint
```

## Testing Locally

### Option 1: Link Locally

In the icons package directory:

```bash
pnpm link --global
```

In your React app:

```bash
pnpm link --global @spexop/icons
```

### Option 2: Install from File Path

In your React app:

```bash
pnpm add /Users/olmstedian/__DEV__/Spexop-Website-v3
```

## Publishing to npm

### Initial Setup of npm

1. **Login to npm**

   ```bash
   npm login
   ```

2. **Update package.json**
   - Set the correct package name
   - Update version number
   - Update repository URL

3. **Build and publish**

   ```bash
   pnpm publish
   ```

### Automated Publishing

The package includes GitHub Actions workflows:

- **CI Workflow**: Runs on every push/PR to main/develop
  - Type checking
  - Linting
  - Building

- **Publish Workflow**: Runs on GitHub releases
  - Automatically publishes to npm
  - Requires `NPM_TOKEN` secret in GitHub

## Package Structure

```bash
@spexop/icons/
├── .github/
│   └── workflows/         # CI/CD workflows
├── assets/
│   └── icons/            # Source SVG files
├── dist/                 # Build output (git ignored)
├── examples/             # Usage examples
├── scripts/
│   └── build-icons.ts    # Icon generation script
├── src/
│   ├── icons/           # Generated icon components
│   ├── Icon.tsx         # Base Icon component
│   ├── types.ts         # TypeScript types
│   ├── utils.ts         # Utility functions
│   └── index.ts         # Main entry point
├── .editorconfig        # Editor configuration
├── .eslintrc.json       # ESLint configuration
├── .gitignore          # Git ignore rules
├── .npmignore          # npm ignore rules
├── .prettierrc         # Prettier configuration
├── CHANGELOG.md        # Version history
├── CONTRIBUTING.md     # Contribution guidelines
├── LICENSE             # MIT License
├── package.json        # Package configuration
├── pnpm-workspace.yaml # pnpm workspace config
├── README.md           # Main documentation
├── tsconfig.json       # TypeScript configuration
└── tsup.config.ts      # Build configuration
```

## Usage in React Apps

After publishing or linking:

```tsx
import { Home, User, Settings } from '@spexop/icons';

function App() {
  return (
    <div>
      <Home size={24} color="#3b82f6" />
      <User size={32} />
      <Settings title="Settings" className="icon" />
    </div>
  );
}
```

## Common Commands

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm run build` | Build everything |
| `pnpm run build:icons` | Generate icons from SVGs |
| `pnpm run build:lib` | Build the library only |
| `pnpm run dev` | Watch mode |
| `pnpm run clean` | Remove build artifacts |
| `pnpm run typecheck` | Check TypeScript types |
| `pnpm run lint` | Run ESLint |
| `pnpm publish` | Publish to npm |

## Troubleshooting

### Icons not generating

- Ensure SVG files are in `assets/icons/`
- Check SVG files are valid XML
- Run `pnpm run build:icons` again

### Build errors

- Clear the dist folder: `pnpm run clean`
- Reinstall dependencies: `rm -rf node_modules && pnpm install`
- Check for TypeScript errors: `pnpm run typecheck`

### Import errors

- Make sure the package is built: `pnpm run build`
- Check the dist folder exists and contains files
- Verify package.json exports configuration

## Next Steps

1. Replace sample icons with your own
2. Update package.json with your details
3. Update README.md with your documentation
4. Set up GitHub repository
5. Configure npm publishing
6. Add more icons as needed

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [pnpm Documentation](https://pnpm.io/)
- [SVGO Documentation](https://github.com/svg/svgo)
- [tsup Documentation](https://tsup.egoist.dev/)

---

**Built by Spexop**  
Cuneyt Cakar ([@olmstedian](https://github.com/olmstedian))  
📧 <ccakar@spexop.com>  
🌐 [www.spexop.com](https://spexop.com)

Need help? Check the [CONTRIBUTING.md](./CONTRIBUTING.md) guide or open an issue on GitHub.

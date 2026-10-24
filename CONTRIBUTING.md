# Contributing to @spexop/icons

Thank you for your interest in contributing to the Spexop Icons package!

## Adding New Icons

### 1. Prepare Your Icons

- Icons should be in SVG format
- Preferably 24x24 viewBox for consistency
- Use `stroke` instead of `fill` for consistent styling
- Remove any hardcoded colors (use `currentColor` instead)
- Ensure proper licensing for all icon sources

### 2. Add SVG Files

Place your SVG files in the `assets/icons/` directory with descriptive names:

```bash
assets/icons/
├── arrow-left.svg
├── arrow-right.svg
├── calendar.svg
└── ...
```

### 3. Naming Conventions

- Use kebab-case for file names: `arrow-right.svg`, `user-circle.svg`
- File names should be descriptive and concise
- Avoid special characters and spaces

### 4. Build Icons

Run the build script to generate React components:

```bash
pnpm run build:icons
```

This will:

- Optimize SVGs with SVGO
- Generate React components in `src/icons/`
- Update the main index file with exports

### 5. Test Your Icons

Build the package and test your icons:

```bash
pnpm run build
```

## Code Standards

- Follow TypeScript best practices
- Maintain consistent code style
- Add JSDoc comments for public APIs
- Ensure all exports have proper types

## Testing Guidelines

Before submitting:

1. Run type checking: `pnpm run typecheck`
2. Run linter: `pnpm run lint`
3. Build successfully: `pnpm run build`
4. Test in a real React application

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-icons`
3. Add your icons to `assets/icons/`
4. Run the build process
5. Commit your changes (including generated files)
6. Push to your fork
7. Create a Pull Request with:
   - Clear description of icons added
   - Source/license information for icons
   - Screenshots if applicable

## Icon Design Guidelines

### Consistency

- Maintain 24x24 viewBox size
- Use 2px stroke width as default
- Use rounded line caps and joins
- Keep visual weight consistent

### Accessibility

- Provide meaningful names
- Consider how icons appear at different sizes
- Test with color contrast tools

### Quality

- Ensure clean SVG markup
- Remove unnecessary elements
- Optimize path data
- Test rendering at various sizes

## Questions?

If you have questions or need help, please:

- Open an issue on GitHub
- Check existing documentation
- Review similar icon implementations

---

**Built by Spexop**  
Cuneyt Cakar ([@olmstedian](https://github.com/olmstedian))  
📧 <ccakar@spexop.com>  
🌐 [www.spexop.com](https://spexop.com)

Thank you for contributing to Spexop Icons! 🎨

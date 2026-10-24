> **Historical document — not current release guidance.** See [README](README.md) and [2026-10-24 verification](VERIFICATION.md) for current counts, source/npm differences, build evidence and unresolved licensing. Earlier production-ready, browser, bundle-size and publishing claims below have not been revalidated and do not authorize publication.

# Publishing Guide

This guide covers how to publish @spexop/icons to npm and maintain the GitHub repository.

## Pre-Publish Checklist

### 1. Code Quality

- [ ] All tests pass: `pnpm run build`
- [ ] TypeScript check passes: `pnpm run typecheck`
- [ ] Linting passes: `pnpm run lint`
- [ ] All 262 icons generated successfully
- [ ] Documentation is up to date
- [ ] CHANGELOG.md is updated with release notes

### 2. Version Management

- [ ] Update version in `package.json` following [Semantic Versioning](https://semver.org/)
- [ ] Update version in `PACKAGE_SUMMARY.md`
- [ ] Add release entry to `CHANGELOG.md`
- [ ] Commit version changes: `git commit -m "chore: bump version to X.Y.Z"`
- [ ] Create git tag: `git tag vX.Y.Z`

### 3. Build Verification

```bash
# Clean build
pnpm run clean

# Full build
pnpm run build

# Verify dist/ contents
ls -lh dist/

# Check package contents (what will be published)
pnpm pack --dry-run
```

### 4. Documentation Review

- [ ] README.md is accurate and complete
- [ ] ICONS.md catalog lists all icons
- [ ] Examples work correctly
- [ ] All links are valid
- [ ] Signatures present in all docs

## Publishing to npm

### First Time Setup

1. **Create npm Account** (if not already done)

   ```bash
   npm login
   ```

2. **Set npm Scope** (if using @spexop scope)
   - Ensure you have access to @spexop organization on npm
   - Or publish as @olmstedian/icons

3. **Verify package.json**

   ```json
   {
     "name": "@spexop/icons",
     "version": "0.1.0",
     "publishConfig": {
       "access": "public"
     }
   }
   ```

### Publishing Steps

1. **Final Check**

   ```bash
   # Verify you're on main branch
   git branch --show-current
   
   # Ensure no uncommitted changes
   git status
   
   # Pull latest changes
   git pull origin main
   ```

2. **Publish to npm**

   ```bash
   # Dry run first (recommended)
   pnpm publish --dry-run
   
   # Publish for real
   pnpm publish --access public
   ```

3. **Push to GitHub**

   ```bash
   git push origin main
   git push origin --tags
   ```

4. **Create GitHub Release**
   - Go to <https://github.com/olmstedian/spexop-icons/releases>
   - Click "Draft a new release"
   - Select the tag you just created
   - Title: "v0.1.0 - Initial Release"
   - Copy content from CHANGELOG.md
   - Publish release

## GitHub Repository Setup

### Initial Repository Creation

1. **Create Repository on GitHub**

   ```bash
   # On GitHub, create new repository: spexop-icons
   # Description: Professional icon library for modern web applications
   # Public repository
   # Don't initialize with README (we already have one)
   ```

2. **Push to GitHub**

   ```bash
   cd /Users/olmstedian/__DEV__/Spexop-Website-v3
   git init
   git add .
   git commit -m "feat: initial release v0.1.0 - 262 icons"
   git branch -M main
    git remote add origin https://github.com/olmstedian/spexop-icons.git
   git push -u origin main
   ```

3. **Configure Repository Settings**
   - Go to Settings → General
   - Enable "Issues"
   - Enable "Preserve this repository" (optional)
   - Set up branch protection for `main`

4. **Add Topics** (for discoverability)
   - react
   - icons
   - typescript
   - svg
   - design-system
   - ui-components
   - accessibility

### GitHub Actions Secrets

For automated publishing, add these secrets:

1. Go to Settings → Secrets and variables → Actions
2. Add `NPM_TOKEN`:
   - Generate at <https://www.npmjs.com/settings/YOUR_USERNAME/tokens>
   - Type: Automation token
   - Copy and paste into GitHub secret

## Post-Publish Tasks

### Immediately After Publishing

- [ ] Verify package on npm: <https://www.npmjs.com/package/@spexop/icons>
- [ ] Test installation in a fresh project:

  ```bash
  npx create-react-app test-icons
  cd test-icons
  pnpm add @spexop/icons
  ```

- [ ] Verify imports work correctly
- [ ] Check bundle size with bundlephobia

### Announcements

- [ ] Tweet about the release
- [ ] Post on relevant communities (Reddit r/reactjs, etc.)
- [ ] Update personal website/portfolio
- [ ] Share on LinkedIn

### Documentation

- [ ] Update shields/badges in README if needed
- [ ] Verify documentation on GitHub renders correctly
- [ ] Test all example code

## Troubleshooting

### npm publish fails

```bash
# Check if you're logged in
npm whoami

# Check if package name is available
npm info @spexop/icons

# Verify package.json is valid
npm pkg fix
```

### Version already exists

```bash
# If version already published, bump version
pnpm version patch  # 0.1.0 → 0.1.1
pnpm version minor  # 0.1.0 → 0.2.0
pnpm version major  # 0.1.0 → 1.0.0
```

### Build fails

```bash
# Clean and rebuild
pnpm run clean
rm -rf node_modules
pnpm install
pnpm run build
```

## Version Strategy

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes, major refactor
- **MINOR** (0.X.0): New icons, new features (backward compatible)
- **PATCH** (0.0.X): Bug fixes, documentation updates

## Maintenance

### Regular Tasks

- Review and respond to issues weekly
- Update dependencies monthly: `pnpm update`
- Add new icons based on community requests
- Keep documentation synchronized

### Release Cadence

- **Patch releases**: As needed for bug fixes
- **Minor releases**: Monthly or when 10+ new icons ready
- **Major releases**: Only for breaking changes

---

**Built by Spexop**  
Cuneyt Cakar ([@olmstedian](https://github.com/olmstedian))  
📧 <ccakar@spexop.com>  
🌐 [www.spexop.com](https://spexop.com)

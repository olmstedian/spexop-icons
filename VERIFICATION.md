# Source verification — 2026-10-24

Source: `olmstedian/spexop-icons`, commit `717b06f760d3c89f8141494647763e99d1304ae9`.

## Reproducible counts

Run from the repository root:

```python
from pathlib import Path
svg = sorted(Path('assets/icons').glob('*.svg'))
tsx = sorted(Path('src/icons').glob('*.tsx'))
print(len(svg))  # 262
print(len([p for p in svg if p.stem.endswith('-filled')]))  # 15
print(len(tsx))  # 263; includes legacy Close.tsx
```

After building, `Object.keys(require('./dist/index.js'))` has 263 runtime exports: 262 icons and `Icon`. `Close` is absent. These are different counting units; an index file's line count is not an icon inventory.

## Checks and limits

The isolated source build ran on Node v22.23.3. The manifest pins pnpm 8.15.0; the available invocation was pnpm 11.1.2. `pnpm install --frozen-lockfile --ignore-scripts`, `pnpm run typecheck`, `pnpm run lint`, and `pnpm run build` completed successfully, with the tracked source and lockfile unchanged. CJS, ESM and TypeScript declaration outputs were produced.

A local `npm pack --ignore-scripts` tarball was installed into a fresh consumer with React/React DOM 18.3.1. `renderToStaticMarkup` rendered `Home`, `StarFilled`, and `User`. Assertions checked three SVG elements, Home's title, size and color, decorative ARIA, and path geometry. The README TSX example passed:

```sh
tsc --noEmit --jsx react --lib es2020,dom --moduleResolution node --esModuleInterop example.tsx
```

Without `esModuleInterop`, the generated declaration's React default import produced TS1259. The successful check therefore requires that configuration. The manifest advertises React >=16.8, but older/newer versions were not exercised. There is no repository test script; no browser/device suite, bundle-size benchmark or complete accessibility audit was run. These are local checks, not a claim that a new CI/release run passed.

The source manifest exports `./styles.css`, but no `dist/styles.css` was built. Do not use that import. No package code, manifest, version, lockfile, SVG or generated component was changed by this documentation work.

## npm provenance

Registry metadata checked on 2026-10-24:

| Version | npm gitHead | Repository recorded by npm |
| --- | --- | --- |
| 0.1.0 | `583a7778bfc0aabfe8f1606f305d90dcc99fdedf` | `spexop-ui/icons` |
| 0.6.0 (`latest`) | `22dc2d539387b3d2838d87b4c0561afdebcaf32f` | `spexop-ui/spexop-public`, `packages/icons` |

The current public repository's manifest is 0.1.0, but its HEAD differs from both recorded npm commits. This check does not establish byte-for-byte source equivalence or reproducible published tarballs. The local consumer above used this source build, not the npm 0.6.0 artifact. Neither checked registry version carried a deprecation field at inspection; no registry metadata was changed.

## Licensing and publication gate

SPX-OSS-002's shape comparison at the same source HEAD identified 205 Feather matches and 57 unresolved files. The comparison ignores root SVG styling and compares child elements/attributes; it is a provenance finding, not a legal clearance. [Third-party notices](THIRD_PARTY_NOTICES.md) preserve the Feather 4.29.2 MIT notice and list the 205 files. Remaining sources, brand/trademark rights, selected dependency licenses and release provenance must be resolved before a new publication.

The old readiness and publishing documents are historical. Their original success statements are not current release acceptance. No npm publish, deprecation, deployment or private-source disclosure is part of this change.

# @spexop/icons

React SVG icons from the Spexop UI project.

**Status: source and license review in progress.** This repository is an existing icon implementation, not a verified release of the rebuilt Spexop UI project. New Spexop UI core capabilities will be free and open source. There is no PRO or paid feature tier.

[Spexop UI organization](https://github.com/spexop-ui) · [Sponsor Spexop UI](https://github.com/sponsors/spexop-ui) · [Source](https://github.com/olmstedian/spexop-icons)

## What is verified

At source commit `717b06f760d3c89f8141494647763e99d1304ae9` on 2026-10-24:

- `assets/icons/*.svg` contains **262 SVG files**, including **15** names ending in `-filled.svg`.
- `src/icons/*.tsx` contains **263 files**. `Close.tsx` is an extra legacy file without a corresponding source SVG; it is not exported by the generated build.
- The build exports **262 icon components**, plus the base `Icon` component. A TypeScript index line count is not an icon count; no 269/281 icon total is established by this source.
- Frozen-lockfile installation, typecheck, lint and build passed in an isolated checkout. A locally packed consumer rendered `Home`, `StarFilled` and `User` with React 18.3.1, and its TSX example typechecked with TypeScript 5.9.3 and `esModuleInterop` enabled.
- No `test` script exists. These checks are not a browser, accessibility, performance or full React-version compatibility certification.

See [verification details](VERIFICATION.md) and the [historical icon catalog](ICONS.md). Category totals and brand ownership in that catalog are still under review.

## Package status and installation

The checked-in manifest says **0.1.0**; npm `latest` is **0.6.0**. Neither npm version's recorded `gitHead` equals the source commit above. Installing `@spexop/icons` from npm therefore does **not** reproduce this checkout. Release provenance and redistribution clearance remain open; no new package is published by this documentation update.

For local source evaluation in a disposable directory:

```sh
git clone https://github.com/olmstedian/spexop-icons.git
cd spexop-icons
git checkout 717b06f760d3c89f8141494647763e99d1304ae9
pnpm install --frozen-lockfile --ignore-scripts
pnpm run typecheck
pnpm run lint
pnpm run build
npm pack --ignore-scripts
```

The declared package manager is pnpm 8.15.0. Build and evaluate locally; do not treat the commands as clearance to redistribute unresolved assets. A local tarball can be installed into a separate React consumer with `npm install /absolute/path/to/spexop-icons-0.1.0.tgz`. This checks the source build, not npm 0.6.0.

Do not import `@spexop/icons/styles.css`: the source manifest declares that path, but the verified build does not produce it. The package metadata also contains an obsolete repository URL; correcting package metadata is a separate change.

## React and TypeScript example

```tsx
import * as React from 'react';
import { Home, StarFilled, User, type IconProps } from '@spexop/icons';

const homeProps: IconProps = { size: 32, title: 'Home', color: '#123456' };

export function Example() {
  return <div><Home {...homeProps} /><StarFilled size={24} /><User size={20} /></div>;
}
```

Icons accept SVG props plus `size`, `color`, `title` and `className`, and use forwarded SVG refs. A title produces `role="img"` and a `<title>`; untitled icons are decorative (`aria-hidden="true"`). Test the surrounding UI with your actual accessibility requirements. The manifest declares React >=16.8; this review exercised React 18.3.1 only. Consumers of the generated declaration file need TypeScript `esModuleInterop` (or an equivalent compatible configuration).

## License and attribution review

The repository contains an [MIT license](LICENSE), but that alone does not establish the provenance of every SVG. The SPX-OSS-002 comparison found **205 of 262 SVGs** with the same child shapes and attributes as `feather-icons@4.29.2` when root styling is ignored. Feather's Cole Bemis copyright and MIT notice must be retained in applicable redistribution. See [third-party notices](THIRD_PARTY_NOTICES.md).

The remaining **57 SVGs**, including unresolved brand/logo sources, still require provenance and rights review. Trademark rights are separate from a software license. **This review does not clear the complete icon collection for a new publication.** Existing assets and package versions are unchanged.

## Project and support

Spexop is developing a local-first, free OSS UI/UX desktop companion. The existing coding agent owns planning and design decisions; bounded user-connected API workers are intended for routine UI work, with independent checks and local progress reporting. The current internal prototype uses test doubles and a browser status panel. A real API worker benchmark, packaged desktop application, and external product acceptance remain open. Theme and Foundation tools are preserved engineering work; this legacy icons repository is not a companion installer.

[Sponsorship](https://github.com/sponsors/spexop-ui) supports free open-source maintenance and development. It does not include custom development, priority features, an SLA, paid support, a Qos license or product decision rights.

See the [Spexop organization website](https://spexop.com) and [organization profile](https://github.com/spexop-ui) for public updates. The new companion implementation is currently private; provider API costs and data policies are separate from the free Spexop software. Historical readiness/publishing documents in this repository are retained as records and do not authorize a release.

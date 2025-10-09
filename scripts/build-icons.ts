import fs from 'node:fs/promises';
import path from 'node:path';
import { optimize, type Config } from 'svgo';

const svgoConfig: Config = {
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergeStyles',
    'inlineStyles',
    'minifyStyles',
    'cleanupIds',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeViewBox',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'convertEllipseToCircle',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'mergePaths',
    'removeUnusedNS',
    'sortDefsChildren',
    'removeTitle',
    'removeDesc',
  ],
};

function toPascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^[a-z]/, (char) => char.toUpperCase());
}

function extractSVGContent(svg: string): string {
  const match = svg.match(/<svg[^>]*>(.*?)<\/svg>/s);
  return match ? match[1].trim() : '';
}

async function buildIcons() {
  const assetsDir = path.join(process.cwd(), 'assets', 'icons');
  const iconsDir = path.join(process.cwd(), 'src', 'icons');

  // Create icons directory if it doesn't exist
  await fs.mkdir(iconsDir, { recursive: true });

  // Check if assets directory exists
  try {
    await fs.access(assetsDir);
  } catch {
    console.log('Creating assets/icons directory...');
    await fs.mkdir(assetsDir, { recursive: true });
    
    // Create sample icons
    await createSampleIcons(assetsDir);
  }

  // Read all SVG files
  const files = await fs.readdir(assetsDir);
  const svgFiles = files.filter((file) => file.endsWith('.svg'));

  if (svgFiles.length === 0) {
    console.warn('No SVG files found in assets/icons directory');
    return;
  }

  console.log(`Found ${svgFiles.length} SVG files. Building icons...`);

  const iconExports: string[] = [];

  for (const file of svgFiles) {
    const filePath = path.join(assetsDir, file);
    const iconName = path.basename(file, '.svg');
    const componentName = toPascalCase(iconName);

    // Read and optimize SVG
    const svgContent = await fs.readFile(filePath, 'utf-8');
    const optimized = optimize(svgContent, svgoConfig);
    const content = extractSVGContent(optimized.data);

    // Generate React component
    const component = `import { forwardRef } from 'react';
import { Icon, IconProps } from '../Icon';

export const ${componentName} = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return (
      <Icon ref={ref} {...props}>
        ${content}
      </Icon>
    );
  }
);

${componentName}.displayName = '${componentName}';
`;

    // Write component file
    const componentPath = path.join(iconsDir, `${componentName}.tsx`);
    await fs.writeFile(componentPath, component, 'utf-8');

    iconExports.push(`export { ${componentName} } from './icons/${componentName}';`);
    console.log(`✓ Generated ${componentName}`);
  }

  // Update index.ts with icon exports
  const indexPath = path.join(process.cwd(), 'src', 'index.ts');
  const baseExports = `// Base Icon component
export { Icon } from './Icon';
export type { IconProps } from './Icon';
export type { IconComponent, IconMetadata } from './types';

// Generated icons
${iconExports.join('\n')}
`;

  await fs.writeFile(indexPath, baseExports, 'utf-8');
  console.log(`\n✨ Successfully generated ${svgFiles.length} icon components!`);
}

async function createSampleIcons(assetsDir: string) {
  // Create some sample icons for demonstration
  const sampleIcons: Record<string, string> = {
    'home.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
</svg>`,
    'user.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
  <circle cx="12" cy="7" r="4"/>
</svg>`,
    'settings.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
  <circle cx="12" cy="12" r="3"/>
</svg>`,
    'search.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"/>
  <path d="m21 21-4.35-4.35"/>
</svg>`,
    'menu.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="12" x2="21" y2="12"/>
  <line x1="3" y1="6" x2="21" y2="6"/>
  <line x1="3" y1="18" x2="21" y2="18"/>
</svg>`,
    'close.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"/>
  <line x1="6" y1="6" x2="18" y2="18"/>
</svg>`,
    'check.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12"/>
</svg>`,
    'arrow-right.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="12" x2="19" y2="12"/>
  <polyline points="12 5 19 12 12 19"/>
</svg>`,
  };

  console.log('Creating sample icons...');
  for (const [filename, content] of Object.entries(sampleIcons)) {
    await fs.writeFile(path.join(assetsDir, filename), content, 'utf-8');
  }
  console.log(`Created ${Object.keys(sampleIcons).length} sample icons`);
}

// Run the build
buildIcons().catch((error) => {
  console.error('Error building icons:', error);
  process.exit(1);
});


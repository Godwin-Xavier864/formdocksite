/**
 * prerender.mjs
 * Generates static HTML files for each route by SSR-rendering the React app.
 * Run after `vite build`: node scripts/prerender.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

/** Routes to prerender with their SEO metadata */
const routes = [
  {
    route: '/',
    outPath: 'index.html',
    title: 'FormDock - Build Forms Without a Backend',
    description:
      'Plug in one API key, collect submissions instantly. FormDock handles storage, email notifications, analytics, and AI — all without a backend.',
    canonical: 'https://formdock.in/',
  },
  {
    route: '/privacy',
    outPath: 'privacy/index.html',
    title: 'Privacy Policy - FormDock',
    description:
      'Read the FormDock Privacy Policy to understand how we collect, use, and protect your data.',
    canonical: 'https://formdock.in/privacy',
  },
  {
    route: '/terms',
    outPath: 'terms/index.html',
    title: 'Terms & Conditions - FormDock',
    description:
      'Read the FormDock Terms and Conditions governing the use of our form submission and AI services.',
    canonical: 'https://formdock.in/terms',
  },
];

async function prerender() {
  console.log('\n🔄 Starting prerender...\n');

  // Boot a Vite dev server in middleware mode so we can use ssrLoadModule
  // (avoids a separate SSR build step)
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'warn',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
    const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

    for (const { route, outPath, title, description, canonical } of routes) {
      const appHtml = render(route);

      // Inject rendered HTML and update per-route SEO tags
      let html = template
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(
          /<meta name="description" content="[^"]*"\s*\/>/,
          `<meta name="description" content="${description}" />`
        )
        .replace(
          /<link rel="canonical" href="[^"]*"\s*\/>/,
          `<link rel="canonical" href="${canonical}" />`
        )
        .replace(
          /<meta property="og:url" content="[^"]*"\s*\/>/,
          `<meta property="og:url" content="${canonical}" />`
        )
        .replace(
          /<meta property="og:title" content="[^"]*"\s*\/>/,
          `<meta property="og:title" content="${title}" />`
        )
        .replace(
          /<meta property="og:description" content="[^"]*"\s*\/>/,
          `<meta property="og:description" content="${description}" />`
        )
        .replace(
          /<meta name="twitter:url" content="[^"]*"\s*\/>/,
          `<meta name="twitter:url" content="${canonical}" />`
        )
        .replace(
          /<meta name="twitter:title" content="[^"]*"\s*\/>/,
          `<meta name="twitter:title" content="${title}" />`
        )
        .replace(
          /<meta name="twitter:description" content="[^"]*"\s*\/>/,
          `<meta name="twitter:description" content="${description}" />`
        );

      const outFile = path.join(distDir, outPath);
      const outDir = path.dirname(outFile);
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

      fs.writeFileSync(outFile, html, 'utf-8');
      console.log(`  ✓  ${route}  →  dist/${outPath}`);
    }

    console.log('\n✅ Prerender complete!\n');
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('\n❌ Prerender failed:\n', err);
  process.exit(1);
});

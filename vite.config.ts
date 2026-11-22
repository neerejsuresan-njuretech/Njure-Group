import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import {defineConfig, type Plugin} from 'vite';
import {SEO_ROUTES, type RouteSeoConfig} from './src/seo/routes.ts';

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectRouteSeoIntoHtml(templateHtml: string, route: RouteSeoConfig): string {
  let html = templateHtml;

  const safeTitle = escapeHtmlText(route.title);
  const safeAttrTitle = escapeHtmlAttr(route.title);
  const safeOgTitle = escapeHtmlAttr(route.ogTitle);
  const safeDesc = escapeHtmlAttr(route.description);
  const safeUrl = escapeHtmlAttr(route.canonicalUrl);
  const jsonLdString = JSON.stringify(route.jsonLd, null, 2).replace(/</g, '\\u003c');

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`);
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/i,
    `<meta name="description" content="${safeDesc}" />`,
  );
  html = html.replace(
    /<link\s+rel="canonical"[\s\S]*?\/>/i,
    `<link rel="canonical" href="${safeUrl}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:url"[\s\S]*?\/>/i,
    `<meta property="og:url" content="${safeUrl}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:title"[\s\S]*?\/>/i,
    `<meta property="og:title" content="${safeOgTitle}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/i,
    `<meta property="og:description" content="${safeDesc}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:url"[\s\S]*?\/>/i,
    `<meta name="twitter:url" content="${safeUrl}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:title"[\s\S]*?\/>/i,
    `<meta name="twitter:title" content="${safeAttrTitle}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/i,
    `<meta name="twitter:description" content="${safeDesc}" />`,
  );

  // Inject or replace route-specific JSON-LD script block
  const routeJsonLdTag = `<script id="route-jsonld" type="application/ld+json">\n${jsonLdString}\n    </script>`;
  if (/<script\s+id="route-jsonld"[\s\S]*?<\/script>/i.test(html)) {
    html = html.replace(/<script\s+id="route-jsonld"[\s\S]*?<\/script>/i, routeJsonLdTag);
  } else {
    html = html.replace(/<\/head>/i, `    ${routeJsonLdTag}\n  </head>`);
  }

  // Inject crawlable semantic HTML inside #root so Googlebot sees full page content on HTTP 200 first byte
  html = html.replace(
    /<div\s+id="root"><\/div>/i,
    `<div id="root">${route.staticHtml.trim()}</div>`,
  );

  return html;
}

function njureStaticSeoPlugin(): Plugin {
  let outDir = 'dist';
  return {
    name: 'njure-static-seo-pages',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir || 'dist';
    },
    closeBundle() {
      const distRoot = path.resolve(process.cwd(), outDir);
      const baseHtmlPath = path.join(distRoot, 'index.html');
      if (!fs.existsSync(baseHtmlPath)) return;

      const templateHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

      for (const route of SEO_ROUTES) {
        const renderedHtml = injectRouteSeoIntoHtml(templateHtml, route);
        const targetDir = route.outputDir ? path.join(distRoot, route.outputDir) : distRoot;
        fs.mkdirSync(targetDir, {recursive: true});
        fs.writeFileSync(path.join(targetDir, 'index.html'), renderedHtml, 'utf-8');
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), njureStaticSeoPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

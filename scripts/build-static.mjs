// Generates a fully static site in .output/public for GitHub Pages.
//
// Nitro's own static/github_pages preset (the documented approach) is broken
// for this TanStack Start version: its internal prerender crawler 404s on
// every route before it even gets to render anything (see the open upstream
// issues TanStack/router#7473 and nitrojs/nitro#3905). The default build's
// SSR handler renders correctly on its own, though — confirmed by calling it
// directly — so this script drives it itself instead of relying on Nitro's
// crawler, and writes the resulting HTML straight into .output/public
// alongside the already-built client assets.
//
// Run after a plain `vite build` (see package.json's "build:static" script).

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const SITE_ORIGIN = "https://rabbit-cars.ch";
const outDir = join(process.cwd(), ".output/public");

// Must match vite.config.ts's basePath — GitHub Pages project sites serve
// from github.io/<repo>/, so rendered routes need to be requested (and their
// links generated) under that same prefix.
const basePath = process.env.VITE_BASE_PATH ?? "";

const { default: handler } = await import("../.output/server/index.mjs");

async function renderRoute(path) {
  const request = new Request(`${SITE_ORIGIN}${path}`);
  const response = await handler.fetch(request, {}, { waitUntil: () => {} });
  const html = await response.text();

  if (response.status >= 500) {
    throw new Error(`Rendering ${path} failed with status ${response.status}:\n${html.slice(0, 500)}`);
  }

  return { html, status: response.status };
}

async function writeRoute(outFile, html) {
  const outPath = join(outDir, outFile);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, "utf8");
}

const { html: homeHtml, status: homeStatus } = await renderRoute(`${basePath}/`);
await writeRoute("index.html", homeHtml);
console.log(`wrote index.html (status ${homeStatus}, ${homeHtml.length} bytes)`);

const { html: occasionenHtml, status: occasionenStatus } = await renderRoute(`${basePath}/occasionen`);
await writeRoute("occasionen/index.html", occasionenHtml);
console.log(`wrote occasionen/index.html (status ${occasionenStatus}, ${occasionenHtml.length} bytes)`);

// /as24: internal-only utility page (not linked anywhere, noindex) that
// renders the bare AS24 HCI widget so its live data can be read off it
// directly when refreshing data/vehicles.ts + data/campers.ts — reading
// what our own domain legitimately displays via AS24's own official embed,
// rather than fetching autoscout24.ch itself. Never auto-discovered since
// nothing links to it, so it's rendered explicitly here.
const { html: as24Html, status: as24Status } = await renderRoute(`${basePath}/as24`);
await writeRoute("as24/index.html", as24Html);
console.log(`wrote as24/index.html (status ${as24Status}, ${as24Html.length} bytes)`);

// Vehicle detail pages aren't a static list here — discover them from the
// links the occasionen page and homepage just rendered, so this always
// matches whatever's actually linked without duplicating that data. Scanning
// both matters since the AS24 widget renders autos/campers client-side (no
// links in the static HTML), while the homepage's teaser cards still link
// to these pages directly.
const vehicleIdPattern = new RegExp(`href="${basePath}/occasionen/([^"/]+)"`, "g");
const vehicleIds = [
  ...new Set(
    [...occasionenHtml.matchAll(vehicleIdPattern), ...homeHtml.matchAll(vehicleIdPattern)].map((m) => m[1]),
  ),
];

for (const id of vehicleIds) {
  const { html, status } = await renderRoute(`${basePath}/occasionen/${id}`);
  const outFile = `occasionen/${id}/index.html`;
  await writeRoute(outFile, html);
  console.log(`wrote ${outFile} (status ${status}, ${html.length} bytes)`);
}

// Sitemap — only public, indexable pages (mirrors robots.txt's Disallow: /as24).
const sitemapUrls = [
  { loc: `${SITE_ORIGIN}/`, priority: "1.0" },
  { loc: `${SITE_ORIGIN}/occasionen`, priority: "0.9" },
  ...vehicleIds.map((id) => ({ loc: `${SITE_ORIGIN}/occasionen/${id}`, priority: "0.8" })),
];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <priority>${u.priority}</priority>\n  </url>`).join("\n")}
</urlset>
`;
await writeRoute("sitemap.xml", sitemapXml);
console.log(`wrote sitemap.xml (${sitemapUrls.length} urls)`);

// Any unmatched path renders the root's notFoundComponent with a real 404
// status — GitHub Pages serves this file's contents for any unknown URL.
const { html: notFoundHtml, status: notFoundStatus } = await renderRoute(`${basePath}/__404__`);
await writeRoute("404.html", notFoundHtml);
console.log(`wrote 404.html (status ${notFoundStatus}, ${notFoundHtml.length} bytes)`);

// Prevents GitHub Pages' Jekyll processing from mangling the output.
await writeFile(join(outDir, ".nojekyll"), "");

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

const routes = [
  { path: `${basePath}/`, outFile: "index.html" },
  { path: `${basePath}/occasionen`, outFile: "occasionen/index.html" },
  // Any unmatched path renders the root's notFoundComponent with a real 404
  // status — GitHub Pages serves this file's contents for any unknown URL.
  { path: `${basePath}/__404__`, outFile: "404.html" },
];

const { default: handler } = await import("../.output/server/index.mjs");

for (const { path, outFile } of routes) {
  const request = new Request(`${SITE_ORIGIN}${path}`);
  const response = await handler.fetch(request, {}, { waitUntil: () => {} });
  const html = await response.text();

  if (response.status >= 500) {
    throw new Error(`Rendering ${path} failed with status ${response.status}:\n${html.slice(0, 500)}`);
  }

  const outPath = join(outDir, outFile);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, "utf8");
  console.log(`wrote ${outFile} (status ${response.status}, ${html.length} bytes)`);
}

// Prevents GitHub Pages' Jekyll processing from mangling the output.
await writeFile(join(outDir, ".nojekyll"), "");

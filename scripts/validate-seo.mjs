import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
if (!existsSync(root)) throw new Error('dist/ is missing. Run npm run build first.');

const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const target = join(directory, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});
const htmlFiles = walk(root).filter((file) => file.endsWith('.html'));
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
const failures = [];
const titles = new Map();
const descriptions = new Map();
const value = (html, pattern) => html.match(pattern)?.[1]?.trim() ?? '';
const count = (html, pattern) => [...html.matchAll(pattern)].length;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const path = `/${relative(root, file).replace(/index\.html$/, '').replace(/404\.html$/, '404/')}`;
  const title = value(html, /<title>([^<]+)<\/title>/);
  const description = value(html, /<meta name="description" content="([^"]*)"/);
  const canonical = value(html, /<link rel="canonical" href="([^"]+)"/);
  const ogImage = value(html, /<meta property="og:image" content="([^"]+)"/);
  const noindex = /<meta name="robots" content="noindex,follow"/.test(html);

  if (!title) failures.push(`${path}: missing title`);
  if (!description) failures.push(`${path}: missing meta description`);
  if (!canonical.startsWith('https://')) failures.push(`${path}: canonical must be absolute HTTPS`);
  if (!ogImage.startsWith('https://')) failures.push(`${path}: og:image must be absolute HTTPS`);
  if (count(html, /<h1(?:\s|>)/g) !== 1) failures.push(`${path}: must contain exactly one H1`);
  if (/<iframe\b/i.test(html)) failures.push(`${path}: build-time iframe found; player must load only after an approved user action`);
  if (/aggregateRating|ratingValue|★\s*[0-9]/i.test(html)) failures.push(`${path}: unsupported rating markup found`);
  if (noindex && sitemapUrls.has(canonical)) failures.push(`${path}: noindex URL appears in sitemap`);
  if (!noindex && path !== '/404/' && !sitemapUrls.has(canonical)) failures.push(`${path}: indexable canonical missing from sitemap`);

  if (titles.has(title)) failures.push(`${path}: duplicate title also used by ${titles.get(title)}`); else titles.set(title, path);
  if (descriptions.has(description)) failures.push(`${path}: duplicate description also used by ${descriptions.get(description)}`); else descriptions.set(description, path);

  if (path.startsWith('/games/') && !noindex) {
    if (description.length < 120 || description.length > 160) failures.push(`${path}: indexable game description must be 120-160 characters`);
    const tips = count(html, /<li>/g);
    const faqs = count(html, /<details>/g);
    const related = count(value(html, /<section aria-labelledby="related">([\s\S]*?)<\/section>/), /<article class="card">/g);
    if (tips < 4 || tips > 6) failures.push(`${path}: indexable game must have 4-6 tips`);
    if (faqs < 4 || faqs > 6) failures.push(`${path}: indexable game must have 4-6 FAQs`);
    if (related < 3 || related > 5) failures.push(`${path}: indexable game must have 3-5 related games`);
  }
}

if (!/Sitemap:\s+https:\/\//.test(readFileSync(join(root, 'robots.txt'), 'utf8'))) failures.push('robots.txt: missing absolute HTTPS sitemap URL');

if (failures.length) {
  console.error(`SEO validation failed (${failures.length})`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`SEO validation passed: ${htmlFiles.length} HTML files, ${sitemapUrls.size} sitemap URLs.`);

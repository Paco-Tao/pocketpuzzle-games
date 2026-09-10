import type { APIRoute } from 'astro';
import { categories, games, isGamePublishable, site } from '../data/games';
const publishableGames = games.filter(isGamePublishable);
const indexableCategories = categories.filter((category) => publishableGames.filter((game) => game.category === category.slug).length >= 6);
const pages = new URL(site.url).hostname === '127.0.0.1' ? [] : ['/', '/about/', '/contact/', '/privacy/', '/terms/', '/copyright/', ...publishableGames.map((game) => `/games/${game.slug}/`), ...indexableCategories.map((category) => `/categories/${category.slug}/`)];
export const GET: APIRoute = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((path) => `<url><loc>${new URL(path, site.url)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });

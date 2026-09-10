import type { APIRoute } from 'astro';
import { site } from '../data/games';
export const GET: APIRoute = () => new Response(new URL(site.url).hostname === '127.0.0.1' ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain' } });

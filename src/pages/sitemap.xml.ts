import type { APIRoute } from 'astro';

const locales = ['en', 'es', 'pt', 'de', 'fr', 'ja'] as const;
const siteUrl = 'https://postqueue.github.io';

export const GET: APIRoute = () => {
  const urls = locales.map((lang) => {
    const loc = lang === 'en' ? `${siteUrl}/` : `${siteUrl}/${lang}/`;
    const alternates = locales
      .map((alt) => {
        const altHref = alt === 'en' ? `${siteUrl}/` : `${siteUrl}/${alt}/`;
        return `      <xhtml:link rel="alternate" hreflang="${alt}" href="${altHref}" />`;
      })
      .join('\n');
    const xDefault = `      <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`;

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${lang === 'en' ? '1.0' : '0.9'}</priority>
${alternates}
${xDefault}
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

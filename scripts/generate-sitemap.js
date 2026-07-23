const fs = require('fs');
const path = require('path');

const baseUrl = 'https://codeitinfotech.github.io/beautyparlor';

const routes = [
  '',
  '/about',
  '/services',
  '/bridal-packages',
  '/gallery',
  '/testimonials',
  '/contact',
  '/privacy',
  '/terms',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

const outDir = path.join(__dirname, '..', 'out');

if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(outDir, 'robots.txt'), robots);
  console.log('Sitemap and robots.txt generated successfully!');
} else {
  console.log('Error: out directory not found');
}

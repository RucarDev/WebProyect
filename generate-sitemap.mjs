import fs from 'fs';
import path from 'path';

// Import assuming projects.js is just an ES module exporting projects array
import { projects } from './src/data/projects.js';

const DOMAIN = 'https://tu-dominio.com'; // TO DO: Ajustar a dominio final

function generateSitemap() {
  const urls = [
    { url: '/', priority: 1.0 },
    { url: '/portfolio', priority: 0.9 },
    { url: '/about', priority: 0.8 },
    { url: '/contact', priority: 0.8 }
  ];

  // Add all dynamic projects
  if (projects && Array.isArray(projects)) {
    projects.forEach(project => {
      urls.push({ url: `/portfolio/${project.slug}`, priority: 0.7 });
    });
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      u => `
  <url>
    <loc>${DOMAIN}${u.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml);
  console.log(`✅ Sitemap created at: ${sitemapPath}`);
}

generateSitemap();

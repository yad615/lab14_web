const BASE_URL = "https://yadhira.studio";

// Simulamos datos de una base de datos o CMS
async function getBlogPosts() {
  // En un caso real, esto vendría de tu base de datos
  return [
    { slug: 'seo-nextjs-2024', updatedAt: '2024-01-15' },
    { slug: 'optimizacion-web-performance', updatedAt: '2024-01-20' },
    { slug: 'desarrollo-web-moderno', updatedAt: '2024-01-25' },
    { slug: 'tecnicas-avanzadas-seo', updatedAt: '2024-01-28' },
  ];
}

export async function GET() {
  try {
    // Páginas estáticas (solo las que tienes)
    const staticPages = [
      { url: '/', lastmod: '2024-01-30', changefreq: 'daily', priority: '1.0' },
      { url: '/blog', lastmod: '2024-01-30', changefreq: 'weekly', priority: '0.8' },
      { url: '/contacto', lastmod: '2024-01-30', changefreq: 'monthly', priority: '0.7' },
    ];

    // Páginas dinámicas del blog
    const blogPosts = await getBlogPosts();
    const blogPages = blogPosts.map(post => ({
      url: `/blog/${post.slug}`,
      lastmod: post.updatedAt,
      changefreq: 'weekly',
      priority: '0.7'
    }));

    // Combinar todas las páginas
    const allPages = [...staticPages, ...blogPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages
          .map((page) => `
        <url>
          <loc>${BASE_URL}${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>`)
          .join('')}
    </urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'text/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}
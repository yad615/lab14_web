import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Artículos sobre SEO y Desarrollo Web | Yadhira Studio',
  description: 'Lee los últimos artículos sobre SEO, optimización web, Next.js y desarrollo frontend. Guías paso a paso y consejos de expertos.',
  keywords: ['blog', 'SEO', 'desarrollo web', 'Next.js', 'optimización', 'tutoriales'],
  openGraph: {
    title: 'Blog - Artículos sobre SEO y Desarrollo Web',
    description: 'Artículos especializados en SEO, optimización web y desarrollo con Next.js',
    images: [
      {
        url: '/images/blog-og.png',
        width: 1200,
        height: 630,
        alt: 'Blog sobre SEO y Desarrollo Web',
      }
    ],
    type: 'website',
    url: 'https://yadhira.studio/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - SEO y Desarrollo Web',
    description: 'Artículos especializados en optimización web',
    images: ['/images/blog-og.png'],
  },
  alternates: {
    canonical: 'https://yadhira.studio/blog',
  },
};

const blogPosts = [
  {
    id: 1,
    title: 'Optimización de Meta Tags en Next.js',
    excerpt: 'Aprende a implementar meta tags dinámicos para mejorar tu SEO y posicionamiento web',
    slug: 'meta-tags-nextjs',
    category: 'SEO',
    readTime: '5 min',
    color: 'purple',
  },
  {
    id: 2,
    title: 'Lazy Loading y Rendimiento Web',
    excerpt: 'Técnicas avanzadas para mejorar la velocidad de carga y experiencia del usuario',
    slug: 'lazy-loading-performance',
    category: 'Performance',
    readTime: '8 min',
    color: 'rose',
  },
  {
    id: 3,
    title: 'Sitemaps Dinámicos con Next.js',
    excerpt: 'Cómo generar sitemaps automáticamente y mejorar la indexación de tu sitio',
    slug: 'sitemaps-dinamicos',
    category: 'SEO',
    readTime: '6 min',
    color: 'indigo',
  },
];

export default function Blog() {
  return (
    <main className="relative">
      {/* Hero del blog */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-rose-50/80 to-indigo-50/80"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-300/30 to-rose-300/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-rose-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200/50 mb-6">
            📝 Blog
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-600 bg-clip-text text-transparent">
            Artículos y Tutoriales
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre las últimas tendencias en SEO, desarrollo web y optimización. 
            Guías paso a paso escritas con amor y experiencia. 💜
          </p>
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:gap-12">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="group relative"
              >
                <div className={`absolute -inset-4 bg-gradient-to-r ${
                  post.color === 'purple' ? 'from-purple-300/20 to-rose-300/20' :
                  post.color === 'rose' ? 'from-rose-300/20 to-indigo-300/20' :
                  'from-indigo-300/20 to-purple-300/20'
                } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        post.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                        post.color === 'rose' ? 'bg-rose-100 text-rose-700' :
                        'bg-indigo-100 text-indigo-700'
                      }`}>
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">⏰ {post.readTime}</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      Artículo #{post.id}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-rose-500 group-hover:bg-clip-text transition-all duration-300">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${
                      post.color === 'purple' ? 'from-purple-500 to-rose-500' :
                      post.color === 'rose' ? 'from-rose-500 to-indigo-500' :
                      'from-indigo-500 to-purple-500'
                    } text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                  >
                    Leer artículo ✨
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://yadhira.studio'),
  title: {
    default: 'Yadhira Studio - Desarrollo Web y SEO',
    template: '%s | Yadhira Studio',
  },
  description: 'Desarrollo web especializado en SEO, optimización y experiencias digitales únicas con Next.js',
  keywords: ['desarrollo web', 'SEO', 'Next.js', 'optimización web', 'Yadhira', 'diseño web'],
  authors: [{ name: 'Yadhira Alcántara', url: 'https://yadhira.studio' }],
  creator: 'Yadhira Alcántara',
  publisher: 'Yadhira Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 min-h-screen`}>
        {/* Header con gradiente y glassmorphism */}
        <header className="relative backdrop-blur-lg bg-gradient-to-r from-purple-600/90 via-rose-500/90 to-indigo-600/90 shadow-xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <nav className="relative max-w-6xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold text-xl">Y</span>
                </div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  Yadhira Studio
                </h1>
              </div>
              <ul className="flex space-x-8">
                <li>
                  <a href="/" className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 font-medium">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 font-medium">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 font-medium">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Contenido principal */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* Footer elegante */}
        <footer className="relative mt-20 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto px-4 py-12">
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">Y</span>
                  </div>
                  <span className="text-white font-semibold text-lg">Yadhira Studio</span>
                </div>
                <p className="text-purple-200 max-w-md mx-auto">
                  Creando experiencias web hermosas y funcionales con tecnología de vanguardia.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-purple-300 text-sm">
                  &copy; 2024 Yadhira Studio. Yadhira Alcántara.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
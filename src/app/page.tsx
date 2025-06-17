/*
export const metadata = {

  title: 'Mi Sitio Optimizado - Home',
  description: 'Aprende sobre optimitazacion SEO y rendimiento en Next.js.',
  keywords: ['Next.js', 'SEO', 'optimizacion web'],
  openGraph: {
    title: 'Mi Sitio Optimizado',
    description: 'Descubre tecnica avanzadas para mejorar tu web con Next.js.',
    images: ['/images/seo-image.png'],
    type: 'website',
  },
};

export default function Home() {
  return (
    <main> 
      <h1>Bienvenido a mi pagina optimizada</h1>
      <p>Aprende como mejorar el rendimiento y SEO en Next.js</p>
    </main>
  );
}


import Image from "next/image";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-2x1 font bold mb-4">Bienvenido</h1>
      <Image 
        src="/images/seo-image.png"
        width={400}
        height={200}
        alt="Ejemplo de imagen optimizada"
        priority
      />
    </main>
  );
}
  

'use client';

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../app/components/LargeComponent"), {
  ssr: false,
  loading: () => <p>Cargando componente...</p>,
});

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2x1 font-bold">Bienvenido</h1>
      <DynamicComponent/>

      <h2 style= {{ fontFamily: "sans-serif", fontSize: "24px", fontWeight: "bold"}}>Texto con <code>sans-serif</code> (Sin Inter)
      </h2>

      <h2 style={{ fontSize: "24px", fontWeight:"bold"}}>Texto global con fuente Inter (deberia verse distinta)    
      </h2>

      <h2 style={{ fontFamily: "serif", fontSize:"24px", fontWeight: "bold"}}>
        Texto con <code>serif</code> (fuente con serifas)
      </h2>
    </main>
  )
}
*/

import { Metadata } from 'next';
import Image from "next/image";
import DynamicWrapper from "./components/DynamicWrapper";

export const metadata: Metadata = {
  title: 'Yadhira Studio - Desarrollo Web y SEO | Inicio',
  description: 'Desarrollo web especializado en SEO y experiencias digitales únicas. Aprende técnicas avanzadas con Next.js de la mano de Yadhira Alcántara.',
  keywords: ['Yadhira', 'desarrollo web', 'SEO', 'Next.js', 'optimización web', 'diseño web'],
  authors: [{ name: 'Yadhira Alcántara' }],
  openGraph: {
    title: 'Yadhira Studio - Desarrollo Web y SEO',
    description: 'Descubre cómo crear experiencias web excepcionales con técnicas avanzadas de desarrollo y SEO',
    images: [
      {
        url: '/images/yadhira-studio-home.png',
        width: 1200,
        height: 630,
        alt: 'Yadhira Studio - Desarrollo Web y SEO',
      }
    ],
    type: 'website',
    url: 'https://yadhira.studio',
    siteName: 'Yadhira Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yadhira Studio - Desarrollo Web y SEO',
    description: 'Experiencias web excepcionales con Next.js',
    images: ['/images/yadhira-studio-home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section con gradiente y efectos */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-rose-50/50 to-indigo-100/50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/30 to-rose-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-rose-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200/50">
              ✨ Bienvenidos a mi mundo digital
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Hola, soy Yadhira
            <span className="block text-4xl md:text-6xl mt-2">Tu desarrolladora web ✨</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creo experiencias web únicas que combinan diseño hermoso, funcionalidad excepcional 
            y las mejores prácticas de SEO. ¡Hagamos realidad tu visión digital! 💜
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-rose-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Ver mi trabajo ✨
            </button>
            <button className="px-8 py-4 bg-white/70 backdrop-blur-sm text-purple-700 rounded-full font-semibold border border-purple-200 hover:bg-white/90 transition-all duration-300">
              Hablemos 💬
            </button>
          </div>
        </div>
      </section>

      {/* Imagen destacada con efectos */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-300 to-rose-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <Image
              src="/images/seo-home.png"
              width={800}
              height={400}
              alt="Desarrollo web profesional by Yadhira"
              priority
              className="relative rounded-2xl shadow-2xl w-full h-auto border border-white/50"
            />
          </div>
        </div>
      </section>

      <DynamicWrapper />

      {/* Sección de contenido principal */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Lo que hago por ti 💫
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combino pasión por el código con un ojo para el diseño, creando sitios web que no solo se ven increíbles, sino que funcionan perfectamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-300 to-rose-300 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">SEO Estratégico</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimización técnica completa para que tu sitio aparezca en los primeros resultados de Google. Meta tags inteligentes y estructura perfecta.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-300 to-indigo-300 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-rose-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Rendimiento Excepcional</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sitios súper rápidos con Next.js, optimización de imágenes automática y carga inteligente de componentes. Tu audiencia lo va a notar.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">💜</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Diseño con Alma</h3>
                <p className="text-gray-600 leading-relaxed">
                  Interfaces que enamoran, con mi toque personal. Cada detalle pensado para crear una conexión emocional con tus usuarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action final */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-rose-500/10 to-indigo-600/10"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
            ¿Lista para crear algo increíble? 💜
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hagamos que tu proyecto web destaque. Juntas podemos crear una experiencia digital que realmente conecte con tu audiencia.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-rose-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            ¡Trabajemos juntos! ✨
          </button>
        </div>
      </section>
    </main>
  );
}
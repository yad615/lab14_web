import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Ponte en Contacto con Nosotros | Yadhira Studio',
  description: 'Contáctanos para consultas sobre SEO, desarrollo web y optimización. Estamos aquí para ayudarte con tu proyecto.',
  keywords: ['contacto', 'consultas', 'SEO', 'desarrollo web', 'soporte'],
  openGraph: {
    title: 'Contacto - Yadhira Studio',
    description: 'Ponte en contacto para consultas sobre SEO y desarrollo web',
    images: [
      {
        url: '/images/contact-og.png',
        width: 1200,
        height: 630,
        alt: 'Página de Contacto',
      }
    ],
    type: 'website',
    url: 'https://yadhira.studio/contacto',
  },
  twitter: {
    card: 'summary',
    title: 'Contacto - Yadhira Studio',
    description: 'Ponte en contacto para consultas sobre SEO',
  },
  alternates: {
    canonical: 'https://yadhira.studio/contacto',
  },
};

export default function Contacto() {
  return (
    <main className="relative">
      {/* Hero de contacto */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-rose-50/80 to-indigo-50/80"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-rose-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-rose-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200/50 mb-6">
            💌 Contacto
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-600 bg-clip-text text-transparent">
            ¡Hablemos! 💜
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes preguntas sobre SEO o desarrollo web? ¿Quieres colaborar en un proyecto increíble? 
            ¡Estamos aquí para ayudarte a hacer realidad tus ideas!
          </p>
        </div>
      </section>

      {/* Formulario y información de contacto */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Formulario */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-300/30 to-rose-300/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
                    Envíanos un mensaje ✨
                  </h2>
                  <p className="text-gray-600">
                    Completa el formulario y te responderemos lo antes posible.
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Nombre completo 👋
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-4 bg-white/70 border border-purple-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Tu nombre aquí"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Correo electrónico 📧
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-4 bg-white/70 border border-purple-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="escribe tu correo"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                      ¿En qué podemos ayudarte? 🤔
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-4 bg-white/70 border border-purple-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    >
                      <option value="">Selecciona un tema</option>
                      <option value="seo">🚀 Consulta SEO</option>
                      <option value="desarrollo">💻 Desarrollo Web</option>
                      <option value="optimizacion">⚡ Optimización</option>
                      <option value="colaboracion">🤝 Colaboración</option>
                      <option value="otro">✨ Otro tema</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Cuéntanos más 💭
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-4 bg-white/70 border border-purple-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Describe tu proyecto o consulta aquí..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-rose-500 text-white py-4 px-8 rounded-2xl hover:from-purple-700 hover:to-rose-600 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <span>Enviar mensaje</span>
                    <span>✨</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="space-y-8">
              {/* Información principal */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-300/30 to-indigo-300/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-indigo-600 bg-clip-text text-transparent">
                    Otras formas de contacto 💌
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-rose-50 rounded-2xl border border-purple-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-rose-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">📧</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-purple-600 hover:text-purple-800 transition-colors">
                          yadhira.alcantara@tecsup.edu.pe
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-rose-50 to-indigo-50 rounded-2xl border border-rose-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">📱</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Teléfono</p>
                        <p className="text-rose-600 hover:text-rose-800 transition-colors">
                          +51 999 888 777
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Ubicación</p>
                        <p className="text-indigo-600">Lima, Perú</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horarios y disponibilidad */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Horarios de atención ⏰
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sábados:</span>
                      <span className="font-semibold">10:00 AM - 2:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Domingos:</span>
                      <span className="text-gray-400">Cerrado</span>
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <p className="text-green-700 text-sm font-medium flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      Generalmente respondemos en menos de 2 horas ⚡
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ rápido */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-300/30 to-rose-300/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                    Preguntas frecuentes ❓
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="p-3 bg-gradient-to-r from-purple-50 to-rose-50 rounded-xl">
                      <p className="font-semibold text-purple-700 mb-1">¿Ofrecen consultas gratuitas?</p>
                      <p className="text-gray-600">¡Sí! La primera consulta de 30 minutos es completamente gratuita.</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-rose-50 to-indigo-50 rounded-xl">
                      <p className="font-semibold text-rose-700 mb-1">¿Trabajan con sitios existentes?</p>
                      <p className="text-gray-600">Por supuesto, optimizamos sitios web existentes y creamos nuevos.</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                      <p className="font-semibold text-indigo-700 mb-1">¿Cuánto tiempo toma un proyecto?</p>
                      <p className="text-gray-600">Depende del alcance, pero generalmente entre 2-8 semanas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección final con call to action */}
      <section className="px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-rose-500/5 to-indigo-600/5"></div>
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-rose-300/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
            ¿Preferires una videollamada? 📹
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Si prefieres hablar directamente, podemos agendar una videollamada para conocer mejor tu proyecto y cómo podemos ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-rose-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Agendar videollamada 🎥
            </button>
            <button className="px-8 py-4 bg-white/70 backdrop-blur-sm text-purple-700 rounded-full font-semibold border border-purple-200 hover:bg-white/90 transition-all duration-300">
              Ver disponibilidad 📅
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
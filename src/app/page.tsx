'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "Vše Pro Stavby";
    
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4F46E5" /><stop offset="100%" stop-color="#8B5CF6" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
      (faviconLink as HTMLLinkElement).href = faviconUrl;
    }
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white text-3xl font-bold">
            Vše Pro Stavby
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#main" className="text-white hover:text-indigo-200 transition duration-300">Úvod</a>
            <a href="#about" className="text-white hover:text-indigo-200 transition duration-300">O nás</a>
            <a href="#services" className="text-white hover:text-indigo-200 transition duration-300">Služby</a>
            <a href="#contact" className="text-white hover:text-indigo-200 transition duration-300">Kontakt</a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-indigo-700 py-4">
            <nav className="flex flex-col items-center space-y-4">
              <a href="#main" onClick={toggleMenu} className="text-white text-lg hover:text-indigo-200 transition duration-300">Úvod</a>
              <a href="#about" onClick={toggleMenu} className="text-white text-lg hover:text-indigo-200 transition duration-300">O nás</a>
              <a href="#services" onClick={toggleMenu} className="text-white text-lg hover:text-indigo-200 transition duration-300">Služby</a>
              <a href="#contact" onClick={toggleMenu} className="text-white text-lg hover:text-indigo-200 transition duration-300">Kontakt</a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Hero Section */}
      <section id="main" className="relative bg-gray-900 text-white h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946115-ea8194b05a10?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">Vše Pro Stavby</h1>
          <p className="mt-4 text-xl md:text-2xl font-light text-indigo-200 drop-shadow-md">Komplexní řešení pro vaše stavební projekty</p>
          <a href="#services" className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300">Naše služby</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 relative">
            <span className="relative inline-block pb-2">
              O nás
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-full"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Jsme dynamická společnost specializující se na komplexní stavební činnosti. S dlouholetými zkušenostmi v oboru se zaměřujeme na kvalitu, spolehlivost a individuální přístup ke každému klientovi.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Naším cílem je přinášet inovativní a efektivní řešení pro vaše stavební projekty, ať už se jedná o novostavbu, rekonstrukci nebo modernizaci. Vaše spokojenost je pro nás prioritou.
              </p>
            </div>
            <div className="hidden md:block">
              <img src="https://plus.unsplash.com/photos/15894178308-5452f1b8bb9b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Stavba" className="rounded-lg shadow-xl object-cover w-full h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 relative">
            <span className="relative inline-block pb-2">
              Naše služby
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-full"></span>
            </span>
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center">
              <div className="text-indigo-600 mb-6">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-16v12h10V3H9z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Novostavby</h3>
              <p className="text-gray-700 leading-relaxed">Zajišťujeme kompletní realizaci novostaveb rodinných domů, bytových jednotek i komerčních objektů, od základů po střechu.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center">
              <div className="text-indigo-600 mb-6">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Rekonstrukce a Modernizace</h3>
              <p className="text-gray-700 leading-relaxed">Transformujeme stávající prostory dle vašich představ, včetně zateplení, výměny oken a celkových přestaveb.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center">
              <div className="text-indigo-600 mb-6">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10h.01M12 12h.01"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Zemní práce a Základy</h3>
              <p className="text-gray-700 leading-relaxed">Provádíme veškeré zemní práce, výkopy, úpravy terénu a zakládání staveb s maximální přesností a efektivitou.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12 relative">
            <span className="relative inline-block pb-2">
              Kontakt
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-full"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <svg className="w-8 h-8 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-6 13h6a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2h6"></path></svg>
                <p className="text-xl">info@vseprostavby.cz</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="w-8 h-8 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <p className="text-xl">+420 777 123 456</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="w-8 h-8 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <p className="text-xl">U Stavebníků 10, 100 00 Praha 10</p>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.8398108422477!2d14.472719615606626!3d50.0768994794254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b925b42d7a229%3A0x7d2f9b87a2c2b3e8!2sV%C5%A1e%20pro%20stavby!5e0!3m2!1scs!2scz!4v1709849200000!5m2!1scs!2scz"
                width="100%" height="350" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Vše Pro Stavby. Všechna práva vyhrazena.</p>
          <p className="mt-2">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition duration-300">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-emerald-950">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-200 uppercase bg-emerald-900/50 rounded-full border border-emerald-800/50">
              Trusted Spiritual Excellence
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Restore Your Peace Through <br className="hidden md:block" />
              <span className="text-emerald-400 italic">Rohani Ilaj</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Providing spiritual solutions and guidance for marriage issues, health, black magic protection, and business success based on authentic Islamic principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://wa.me/923000000000" className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black rounded-2xl transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 text-lg">
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                Consult Now (WhatsApp)
              </a>
              <a href="#services" className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-md transition-all border border-white/20 flex items-center justify-center text-lg">
                Explore Services
              </a>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

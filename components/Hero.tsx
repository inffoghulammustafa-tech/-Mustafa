
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#064e3b]">
      {/* Background patterns - simplified */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <span className="inline-block px-5 py-2 mb-8 text-sm font-black tracking-widest text-yellow-300 uppercase bg-black/20 rounded-full border border-yellow-300/20 backdrop-blur-sm">
              Trusted Spiritual Excellence
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight">
              Restore Your Peace <br className="hidden md:block" />
              Through <span className="text-yellow-300 italic">Rohani Ilaj</span>
            </h1>
            <p className="text-xl md:text-3xl text-yellow-50/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Authentic spiritual solutions for marriage, health, protection, and success. Guided by divine principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://wa.me/923000000000" className="px-12 py-6 bg-yellow-400 hover:bg-yellow-300 text-emerald-950 font-black rounded-[2rem] transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-4 text-xl">
                <i className="fa-brands fa-whatsapp text-3xl"></i>
                Consult Now
              </a>
              <a href="#services" className="px-12 py-6 bg-white/5 hover:bg-white/10 text-white font-black rounded-[2rem] backdrop-blur-md transition-all border border-white/20 flex items-center justify-center text-xl">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

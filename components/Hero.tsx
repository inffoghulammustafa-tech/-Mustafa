
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [duaIndex, setDuaIndex] = useState(0);
  const backgroundDuas = [
    "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَکِیلُ",
    "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَکَ إِنِّی کُنْتُ مِنَ الظَّالِمِینَ",
    "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDuaIndex((prev) => (prev + 1) % backgroundDuas.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-[#064e3b]">
      {/* Background patterns and Animated Duas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
        
        {/* Animated Background Duas - Made very subtle (opacity-5) */}
        <div className="absolute inset-0 flex items-center justify-center">
          {backgroundDuas.map((dua, index) => (
            <div
              key={index}
              className={`absolute text-center transition-all duration-[3000ms] ease-in-out font-arabic pointer-events-none select-none
                ${index === duaIndex ? 'opacity-5 scale-110 translate-y-0 blur-none' : 'opacity-0 scale-90 translate-y-10 blur-xl'}
              `}
            >
              <span className="text-white text-[8vw] md:text-[6vw] font-bold leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                {dua}
              </span>
            </div>
          ))}
        </div>

        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-5xl">
            <span className="inline-block px-6 py-2 mb-8 text-[10px] md:text-sm font-black tracking-[0.3em] text-yellow-300 uppercase bg-black/30 rounded-full border border-yellow-300/30 backdrop-blur-md aura-glow">
              TRUSTED SPIRITUAL EXCELLENCE
            </span>
            
            {/* Main Header Text - English */}
            <h1 className="text-5xl md:text-[110px] font-black text-white mb-10 leading-[1.05] tracking-tight drop-shadow-2xl">
              Restore Your <br className="hidden md:block" />
              Peace Through <span className="text-yellow-400 italic underline decoration-yellow-400/30">Rohani Ilaj</span>
            </h1>
            
            {/* Description Text - Translated to Urdu as requested */}
            <p className="text-2xl md:text-4xl text-yellow-50/90 mb-14 max-w-4xl mx-auto leading-relaxed font-arabic font-medium" dir="rtl">
              شادی، صحت، تحفظ اور کامیابی کے لیے مستند روحانی حل۔ الٰہی اصولوں کے مطابق رہنمائی۔
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a 
                href="https://wa.me/923000000000" 
                className="group px-14 py-7 bg-yellow-400 hover:bg-yellow-300 text-emerald-950 font-black rounded-[2.5rem] transition-all transform hover:-translate-y-2 shadow-[0_20px_40px_rgba(250,204,21,0.3)] flex items-center justify-center gap-5 text-xl md:text-2xl font-arabic"
              >
                <i className="fa-brands fa-whatsapp text-3xl md:text-4xl group-hover:rotate-12 transition-transform"></i>
                ابھی مشورہ کریں
              </a>
              <a 
                href="#services" 
                className="px-14 py-7 bg-white/5 hover:bg-white/10 text-white font-black rounded-[2.5rem] backdrop-blur-xl transition-all border border-white/20 flex items-center justify-center text-xl md:text-2xl font-arabic hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                ہماری خدمات
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

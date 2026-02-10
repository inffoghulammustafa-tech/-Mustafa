
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
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-200 uppercase bg-emerald-900/50 rounded-full border border-emerald-800/50">
              Trusted Spiritual Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Restore Your Peace Through <span className="text-emerald-400 italic">Rohani Ilaj</span>
            </h1>
            <p className="text-lg text-emerald-100/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Providing spiritual solutions and guidance for marriage issues, health, black magic protection, and business success based on authentic Islamic principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/923000000000" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2">
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Consult Now (WhatsApp)
              </a>
              <a href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-md transition-all border border-white/20 flex items-center justify-center">
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-800/30">
              <img 
                src="https://www.rohaniilajsite.com/wp-content/uploads/2025/11/shadi-1080x628.jpg" 
                alt="Rohani Ilaj Shadi Solution" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10">
                <p className="text-emerald-100 font-medium italic">"And We send down of the Qur'an that which is a healing and a mercy for the believers..."</p>
                <p className="text-emerald-300 text-sm mt-2">— Surah Al-Isra, 17:82</p>
              </div>
            </div>

            {/* Urdu Description Text below the image */}
            <div className="relative z-10 mt-6 p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 text-right" dir="rtl">
              <p className="text-emerald-50 text-xl leading-relaxed font-arabic">
                ایسے افراد جو رشتہ نہ ہو نے سے یا بار باربغیر کسی وجہ کے انکار ہو جانے کی وجہ سے پریشان ہیں۔ان کے لئے ہمارے روحانی ماہرین نے سورۃ المزمل کا خاص نقش تیار کیا ہے۔ اس نقش پر کثیر تعداد میں اسمِ اعظم اور منتخب قرآنی آیات کی تلاوت کی گئی ہے اور پھر خاص دعا کے ساتھ اسے شادی...
              </p>
              <div className="mt-4 flex justify-end">
                <a href="https://wa.me/923000000000" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center gap-2">
                  مزید معلومات کے لیے رابطہ کریں <i className="fa-solid fa-arrow-left text-sm"></i>
                </a>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-600/20 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

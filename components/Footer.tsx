
import React from 'react';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const handleNav = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#022c22] text-emerald-100/80 py-24 overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute -bottom-20 -right-20 text-[25rem] text-white/5 pointer-events-none select-none -rotate-12">
        <i className="fa-solid fa-star-and-crescent"></i>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Section */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4 cursor-pointer group" onClick={() => handleNav('home')}>
              <div className="w-14 h-14 bg-emerald-700 rounded-2xl flex items-center justify-center text-yellow-400 text-2xl shadow-xl group-hover:rotate-12 transition-transform duration-500">
                <i className="fa-solid fa-moon"></i>
              </div>
              <div>
                <h2 className="text-3xl font-premium font-bold text-white tracking-wide">ROHANI ILAJ</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-bold">Spiritual Excellence</p>
              </div>
            </div>
            
            <p className="text-xl leading-[2] font-arabic text-right text-emerald-100/90 bg-white/5 p-6 rounded-3xl border border-white/10" dir="rtl">
              ہمارا مرکز قرآنی تعلیمات کی روشنی میں روحانی علاج فراہم کرتا ہے تاکہ آپ کی زندگی میں سکون، صحت اور کامیابی آ سکے۔ ہم دنیا بھر میں ہزاروں مومنین کی خدمت کر چکے ہیں۔
            </p>
            
            <div className="flex gap-4">
              {['facebook-f', 'twitter', 'youtube', 'instagram'].map((icon) => (
                <a 
                  key={icon}
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-emerald-950 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(250,204,21,0.3)] transition-all duration-300"
                >
                  <i className={`fa-brands fa-${icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links Section 1 */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <h3 className="text-white font-premium text-2xl font-bold mb-10 pb-4 border-b border-white/10 flex items-center justify-between">
              Navigation
              <span className="w-8 h-[1px] bg-yellow-500"></span>
            </h3>
            <ul className="space-y-5 text-sm font-medium tracking-wide">
              {['Home', 'Our Services', 'About Us', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => item === 'Home' ? handleNav('home') : null}
                    className="footer-link hover:text-yellow-400 transition-colors uppercase text-[11px] tracking-widest"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section 2 */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h3 className="text-white font-premium text-2xl font-bold mb-10 pb-4 border-b border-white/10 flex items-center justify-between">
              Spiritual Services
              <span className="w-8 h-[1px] bg-yellow-500"></span>
            </h3>
            <ul className="space-y-5 text-sm font-medium tracking-wide">
              {['Free Istikhara', 'Love Marriage', 'Black Magic Help', 'Family Problems'].map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => handleNav(service)} 
                    className="footer-link hover:text-yellow-400 transition-colors uppercase text-[11px] tracking-widest text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <h3 className="text-white font-premium text-2xl font-bold mb-10 pb-4 border-b border-white/10 flex items-center justify-between">
              Get In Touch
              <span className="w-8 h-[1px] bg-yellow-500"></span>
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0 group-hover:bg-yellow-500 group-hover:text-emerald-950 transition-all animate-soft-pulse">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <a 
                  href="https://www.google.com/maps/place/Millat+road+millat+town+faisalabad/data=!4m7!3m6!1s0x392269267eef8369:0xc9fcd41ad587a292!8m2!3d31.4887194!4d73.104319!16s%2Fg%2F11tfzz0s3s!19sChIJaYPvfiZpIjkRkqKH1RrU_Mk?authuser=0&hl=en&rclk=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium leading-relaxed group-hover:text-white transition-colors"
                >
                  Millat Road, Millat Town<br />
                  Faisalabad, Pakistan
                </a>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0 group-hover:bg-yellow-500 group-hover:text-emerald-950 transition-all">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span className="text-sm font-bold tracking-widest group-hover:text-white transition-colors">+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0 group-hover:bg-yellow-500 group-hover:text-emerald-950 transition-all">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span className="text-sm font-medium tracking-tight group-hover:text-white transition-colors">info@rohaniilajsite.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Area */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-100/40">
            © {new Date().getFullYear()} ROHANI ILAJ CENTER • ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100/40">
            <a href="#" className="hover:text-yellow-500 transition-colors">Cookies</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

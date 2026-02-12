
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
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl">
                <i className="fa-solid fa-moon"></i>
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">ROHANI ILAJ</h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 font-arabic text-right" dir="rtl">
              ہمارا مرکز قرآنی تعلیمات کی روشنی میں روحانی علاج فراہم کرتا ہے تاکہ آپ کی زندگی میں سکون، صحت اور کامیابی آ سکے۔ ہم دنیا بھر میں ہزاروں مومنین کی خدمت کر چکے ہیں۔
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"><i className="fa-brands fa-facebook-f text-sm"></i></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"><i className="fa-brands fa-twitter text-sm"></i></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"><i className="fa-brands fa-youtube text-sm"></i></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => handleNav('home')} className="hover:text-emerald-500 transition-colors">Home</button></li>
              <li><a href="#services" className="hover:text-emerald-500 transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => handleNav('Free Istikhara')} className="hover:text-emerald-500 transition-colors text-left">Free Istikhara</button></li>
              <li><button onClick={() => handleNav('Love Marriage')} className="hover:text-emerald-500 transition-colors text-left">Love Marriage</button></li>
              <li><button onClick={() => handleNav('Black Magic Help')} className="hover:text-emerald-500 transition-colors text-left">Black Magic Help</button></li>
              <li><button onClick={() => handleNav('Family Problems')} className="hover:text-emerald-500 transition-colors text-left">Family Problems</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <i className="fa-solid fa-location-dot text-emerald-500 mt-1"></i>
                <a 
                  href="https://www.google.com/maps/place/Millat+road+millat+town+faisalabad/data=!4m7!3m6!1s0x392269267eef8369:0xc9fcd41ad587a292!8m2!3d31.4887194!4d73.104319!16s%2Fg%2F11tfzz0s3s!19sChIJaYPvfiZpIjkRkqKH1RrU_Mk?authuser=0&hl=en&rclk=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Millat road millat town faisalabad
                </a>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-phone text-emerald-500"></i>
                <span>+92 300 1234567</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-envelope text-emerald-500"></i>
                <span>info@rohaniilajsite.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-xs">
          <p>© {new Date().getFullYear()} Rohani Ilaj Site. All rights reserved. Designed for spiritual well-being.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

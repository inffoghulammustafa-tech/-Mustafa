
import React from 'react';

const Footer: React.FC = () => {
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
            <p className="text-sm leading-relaxed mb-6">
              Our center provides spiritual healing based on Quranic teachings to bring peace, health, and success into your life. We have served thousands of believers worldwide.
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
              <li><a href="#home" className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-emerald-500 transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Free Istikhara</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Love Marriage</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Black Magic Help</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Family Problems</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <i className="fa-solid fa-location-dot text-emerald-500 mt-1"></i>
                <span>Spiritual Center, Main Road, Rawalpindi, Pakistan</span>
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

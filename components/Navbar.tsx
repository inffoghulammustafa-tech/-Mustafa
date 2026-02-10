
import React, { useState } from 'react';

interface NavbarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onPageChange, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Exact list provided by user (excluding Home which is a main link)
  const topics = [
    "Sample Page", "Amazing", "Bawaseer", "Dolat", "health Taweez", 
    "Marriage", "Muhabbat", "Nasha", "Period", "Rohani Ilaj", 
    "shifa", "taweez", "Uncategorized", "Wazifa"
  ];

  const handleLinkClick = (page: string) => {
    onPageChange(page);
    setIsOpen(false);
    setShowDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleLinkClick('home')}
          >
            <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white text-2xl group-hover:bg-emerald-600 transition-colors">
              <i className="fa-solid fa-moon"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-900 tracking-tight leading-none">ROHANI ILAJ</h1>
              <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-semibold">Spiritual Healing Center</p>
            </div>
          </div>
          
          <div className="hidden lg:flex space-x-6 items-center">
            <button 
              onClick={() => handleLinkClick('home')}
              className={`font-semibold transition-colors ${currentPage === 'home' ? 'text-emerald-600' : 'text-emerald-900 hover:text-emerald-600'}`}
            >
              Home
            </button>
            
            <div className="relative group">
              <button 
                onMouseEnter={() => setShowDropdown(true)}
                className={`flex items-center gap-1 font-semibold transition-colors ${currentPage !== 'home' && currentPage !== 'services' ? 'text-emerald-600' : 'text-emerald-900 hover:text-emerald-600'}`}
              >
                Our Pages <i className="fa-solid fa-chevron-down text-[10px] mt-0.5"></i>
              </button>
              
              <div 
                onMouseLeave={() => setShowDropdown(false)}
                className={`absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-2xl py-3 transition-all duration-200 ${showDropdown ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}`}
              >
                <div className="max-h-[70vh] overflow-y-auto px-2 space-y-1">
                  {topics.map(topic => (
                    <button
                      key={topic}
                      onClick={() => handleLinkClick(topic)}
                      className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a href="#services" className="text-emerald-900 hover:text-emerald-600 font-semibold transition-colors">Services</a>
            <a href="https://wa.me/923000000000" className="px-6 py-2.5 bg-emerald-700 text-white font-bold rounded-full hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg active:scale-95">
              Contact Expert
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-emerald-900 p-2 focus:outline-none">
              <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-8 space-y-1">
            <button onClick={() => handleLinkClick('home')} className="block w-full text-left px-4 py-4 text-emerald-900 hover:bg-emerald-50 rounded-xl font-bold border-b border-gray-50">Home</button>
            <div className="py-4">
              <p className="px-4 text-xs font-black text-emerald-600 uppercase tracking-[0.2em] mb-4">Explore All Pages</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => handleLinkClick(topic)}
                    className="block w-full text-left px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors border border-gray-50"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
            <a href="https://wa.me/923000000000" className="block px-4 py-4 bg-emerald-700 text-white text-center rounded-2xl font-bold mt-6 shadow-xl active:scale-95 transition-transform">
              <i className="fa-brands fa-whatsapp mr-2 text-xl"></i> WhatsApp Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

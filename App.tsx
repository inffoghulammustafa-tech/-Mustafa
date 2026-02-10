
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import TopicPage from './components/TopicPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const topics = [
    "Amazing", "Bawaseer", "Dolat", "health Taweez", "Marriage", 
    "Muhabbat", "Nasha", "Period", "Rohani Ilaj", "shifa", 
    "taweez", "Uncategorized", "Wazifa", "Sample Page"
  ];

  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <>
          <Hero />
          
          {/* Statistics Section */}
          <section className="bg-white py-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-emerald-700">10k+</p>
                  <p className="text-gray-500 text-sm font-medium mt-1">Satisfied People</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-700">15+</p>
                  <p className="text-gray-500 text-sm font-medium mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-700">100%</p>
                  <p className="text-gray-500 text-sm font-medium mt-1">Privacy Assured</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-700">24/7</p>
                  <p className="text-gray-500 text-sm font-medium mt-1">Global Support</p>
                </div>
              </div>
            </div>
          </section>

          <Services />

          {/* New Categories Exploration Section */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">Spiritual Library</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Specialized Pages</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Browse through our comprehensive guides and articles for various spiritual and life challenges.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {topics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => {
                      setCurrentPage(topic);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all text-center group"
                  >
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <i className="fa-solid fa-book-open text-xl"></i>
                    </div>
                    <span className="font-bold text-gray-800 text-sm md:text-base group-hover:text-emerald-700">{topic}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-20 bg-emerald-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Immediate Spiritual Consultation?</h2>
              <p className="text-emerald-100 mb-10 text-lg">
                Our experts are online to help you with Istikhara and Rohani solutions. No matter how difficult your situation is, there is always hope through prayer.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/923000000000" className="px-10 py-4 bg-white text-emerald-800 font-bold rounded-2xl hover:bg-emerald-50 transition-all shadow-xl flex items-center gap-3 active:scale-95">
                  <i className="fa-brands fa-whatsapp text-2xl text-emerald-600"></i>
                  Start Free Consultation
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:flex items-center gap-16">
                <div className="lg:w-1/2 mb-12 lg:mb-0">
                  <div className="relative">
                    <img 
                      src="https://picsum.photos/seed/meditation/600/700" 
                      alt="About Our Healing" 
                      className="rounded-3xl shadow-2xl relative z-10 w-full"
                    />
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl -z-10"></div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">Who We Are</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Pioneers in Spiritual Healing Science</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Founded on the principles of Islamic spirituality, our center has been a beacon of hope for individuals struggling with life's complexities. We believe that spiritual ailments require spiritual solutions.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-check text-emerald-600 text-[10px]"></i>
                      </div>
                      <span className="text-gray-700 font-medium">Authentic Quranic Wazaif and Duas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-check text-emerald-600 text-[10px]"></i>
                      </div>
                      <span className="text-gray-700 font-medium">Experienced Spiritual Scholars</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-check text-emerald-600 text-[10px]"></i>
                      </div>
                      <span className="text-gray-700 font-medium">Complete Confidentiality & Privacy</span>
                    </li>
                  </ul>
                  <button className="px-8 py-3 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg">
                    Read Full Story
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">Testimonials</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Success Stories from Our Clients</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                    <div className="absolute top-6 right-8 text-emerald-100 text-6xl opacity-50">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                    <div className="flex text-amber-400 mb-4 gap-1">
                      {[1, 2, 3, 4, 5].map(star => <i key={star} className="fa-solid fa-star"></i>)}
                    </div>
                    <p className="text-gray-600 mb-8 italic relative z-10">
                      "I was struggling with domestic issues for years. The guidance and Wazaif provided by the center changed my life. Within weeks, I felt a massive positive shift in my family's atmosphere."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center font-bold text-emerald-700">
                        U{i}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">User {i}</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Client Success</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      );
    }
    
    return <TopicPage topic={currentPage} onBack={() => setCurrentPage('home')} />;
  };

  return (
    <div className="min-h-screen">
      <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
      
      <main>
        {renderContent()}
      </main>

      <Footer />
      <ChatAssistant />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/923000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        aria-label="WhatsApp Us"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default App;

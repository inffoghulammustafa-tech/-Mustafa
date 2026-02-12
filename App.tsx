
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import ChatAssistant from './components/ChatAssistant.tsx';
import Footer from './components/Footer.tsx';
import TopicPage from './components/TopicPage.tsx';
import AdminPanel from './components/AdminPanel.tsx';

interface CustomPost {
  id: string;
  title: string;
  category: string;
  image: string;
  content: string;
  date: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [customPosts, setCustomPosts] = useState<CustomPost[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('rohani_posts');
    if (saved) {
      setCustomPosts(JSON.parse(saved));
    }
  }, [currentPage]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1519834125748-958a846c483c?auto=format&fit=crop&q=80&w=800";
    e.currentTarget.onerror = null;
  };

  const categories = [
    { id: "Amazing", label: "حیرت انگیز", image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=800" },
    { id: "Bawaseer", label: "بواسیر", image: "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?auto=format&fit=crop&q=80&w=800" },
    { id: "Dolat", label: "دولت", image: "https://images.unsplash.com/photo-1518458028434-a23ad7365194?auto=format&fit=crop&q=80&w=800" },
    { id: "health Taweez", label: "صحت کے تعویذ", image: "https://images.unsplash.com/photo-1505751172107-5739a0077203?auto=format&fit=crop&q=80&w=800" },
    { id: "Marriage", label: "شادی", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" },
    { id: "Muhabbat", label: "محبت", image: "https://images.unsplash.com/photo-1516589174184-c685ca33d2b0?auto=format&fit=crop&q=80&w=800" },
    { id: "Nasha", label: "نشہ", image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?auto=format&fit=crop&q=80&w=800" },
    { id: "Period", label: "ماہواری", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" },
    { id: "Rohani Ilaj", label: "روحانی علاج", image: "https://images.unsplash.com/photo-1594950195709-a14f66c242d7?auto=format&fit=crop&q=80&w=800" },
    { id: "shifa", label: "شفاء", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" },
    { id: "taweez", label: "تعویذ", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" },
    { id: "Wazifa", label: "وظیفہ", image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=800" },
    { id: "Sample Page", label: "نمونہ صفحہ", image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800" },
    { id: "Uncategorized", label: "غیر زمرہ بند", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" }
  ];

  const statsItems = [
    { value: "10k+", label: "مطمئن افراد" },
    { value: "15+", label: "سال کا تجربہ" },
    { value: "100%", label: "رازداری کی ضمانت" },
    { value: "24/7", label: "عالمی سپورٹ" }
  ];

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentPage === 'admin') {
      return <AdminPanel onBack={() => handlePageChange('home')} />;
    }

    if (currentPage === 'home') {
      return (
        <>
          <Hero />

          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
              <div className="text-center mb-16">
                <h2 className="text-emerald-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Our Specialization</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Featured Content</h3>
                <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-12"></div>
              </div>

              {/* Dynamic Posts from Admin Panel */}
              {customPosts.map(post => (
                <div key={post.id} className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-emerald-100 shadow-2xl flex flex-col hover:shadow-emerald-900/10 transition-shadow">
                  <div className="w-full">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-auto object-cover max-h-[600px]"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="w-full bg-emerald-50 py-12 border-b border-emerald-100/50 text-center">
                    <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide px-6">
                      {post.title}
                    </h3>
                  </div>
                  <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                    <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">{post.category}</h4>
                    <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10 whitespace-pre-wrap">
                      {post.content.length > 300 ? post.content.substring(0, 300) + '...' : post.content}
                    </p>
                    <div className="flex justify-start">
                      <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl text-xl">
                        <i className="fa-brands fa-whatsapp text-3xl"></i> ابھی رابطہ کریں
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Hardcoded Featured */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200" alt="Marriage Solution" className="w-full h-auto object-cover max-h-[600px]" onError={handleImageError} />
                </div>
                <div className="w-full bg-emerald-50 py-12 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide px-6">Surah Muzammil Ka Naqsh For Marriage</h3>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">روحانی شادی سروسز</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">ایسے افراد جو رشتہ نہ ہو نے سے یا بار باربغیر کسی وجہ کے انکار ہو جانے کی وجہ سے پریشان ہیں۔ ان کے لئے ہمارے روحانی ماہرین نے سورۃ المزمل کا خاص نقش تیار کیا ہے۔..</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              <div className="max-w-5xl mx-auto flex justify-center pt-8">
                <a href="https://www.rohaniilajsite.com/page/2/" className="px-10 py-5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 font-black hover:bg-emerald-100 transition-all flex items-center gap-3 shadow-md hover:shadow-xl active:scale-95 text-lg">
                  <i className="fa-solid fa-angles-left text-xl"></i> Older Entries
                </a>
              </div>
            </div>
          </section>

          <section className="bg-emerald-50/50 py-16 border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                <div className="marquee-container flex items-center">
                  <div className="flex items-center">
                    {statsItems.map((stat, idx) => (
                      <div key={`set1-${idx}`} className="w-[300px] flex-shrink-0 text-center px-10">
                        <p className="text-5xl font-extrabold text-emerald-700 mb-2">{stat.value}</p>
                        <p className="text-gray-500 text-base font-semibold uppercase tracking-widest">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    {statsItems.map((stat, idx) => (
                      <div key={`set2-${idx}`} className="w-[300px] flex-shrink-0 text-center px-10">
                        <p className="text-5xl font-extrabold text-emerald-700 mb-2">{stat.value}</p>
                        <p className="text-gray-500 text-base font-semibold uppercase tracking-widest">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Services />

          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">ROHANI LIBRARY</h2>
                <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Explore Our Specialized Pages</h3>
                <p className="text-gray-600 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-arabic" dir="rtl">
                  مختلف روحانی چیلنجوں کے لیے ہمارے جامع گائیڈز دیکھیں۔ تمام معلومات آپ کی روحانی بہتری کے لیے فراہم کی گئی ہیں۔
                </p>
                <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mt-6 shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 group/grid" dir="rtl">
                {categories.map(cat => (
                  <button key={cat.id} onClick={() => handlePageChange(cat.id)} className="group relative bg-white border border-emerald-50 rounded-[2.5rem] transition-all duration-700 text-center overflow-hidden p-10 shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_60px_0px_rgba(16,185,129,0.4)] hover:-translate-y-4 hover:scale-105 hover:z-10 group-hover/grid:opacity-30 group-hover/grid:blur-[2px] hover:!opacity-100 hover:!blur-none">
                    <div className="relative z-10 flex flex-col items-center">
                      <span className="font-black text-gray-800 text-2xl md:text-3xl group-hover:text-emerald-900 transition-colors tracking-tight font-arabic">{cat.label}</span>
                      <div className="w-12 h-1 bg-emerald-200 mt-4 rounded-full group-hover:w-20 group-hover:bg-emerald-500 transition-all duration-500"></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:flex items-center gap-16">
                <div className="lg:w-1/2 mb-12 lg:mb-0">
                  <div className="relative">
                    <img src="https://images.unsplash.com/photo-1594950195709-a14f66c242d7?auto=format&fit=crop&q=80&w=800" alt="About Our Healing" className="rounded-3xl shadow-2xl relative z-10 w-full" onError={handleImageError} />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">Who We Are</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Pioneers in Spiritual Healing Science</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">Founded on the principles of Islamic spirituality, our center has been a beacon of hope for individuals struggling with life's complexities...</p>
                  <button className="px-8 py-3 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg">Read Full Story</button>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    
    const selectedCategory = categories.find(c => c.id === currentPage);
    return <TopicPage topic={currentPage} initialImage={selectedCategory?.image} onBack={() => setCurrentPage('home')} />;
  };

  return (
    <div className="min-h-screen">
      {currentPage !== 'admin' && <Navbar onPageChange={handlePageChange} currentPage={currentPage} />}
      <main>{renderContent()}</main>
      {currentPage !== 'admin' && <Footer onPageChange={handlePageChange} />}
      {currentPage !== 'admin' && <ChatAssistant />}
      {currentPage !== 'admin' && (
        <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce">
          <i className="fa-brands fa-whatsapp text-3xl"></i>
        </a>
      )}
    </div>
  );
};

export default App;

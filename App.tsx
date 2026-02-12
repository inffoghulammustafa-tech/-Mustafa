
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

          <section className="py-24 bg-[#fefce8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
              <div className="text-center mb-16">
                <h2 className="text-emerald-700 font-black uppercase tracking-[0.2em] text-sm mb-4">Our Specialization</h2>
                <h3 className="text-4xl md:text-7xl font-black text-emerald-950 mb-6 tracking-tight">Featured Content</h3>
                <div className="w-24 h-2 bg-yellow-400 mx-auto rounded-full mb-12"></div>
              </div>

              {/* Dynamic Posts */}
              {customPosts.map(post => (
                <div key={post.id} className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden border border-emerald-100 shadow-xl flex flex-col group">
                  <div className="w-full relative">
                    <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[600px]" onError={handleImageError} />
                  </div>
                  <div className="w-full bg-[#f0fdf4] py-12 border-b border-emerald-100 text-center">
                    <h3 className="text-emerald-900 text-2xl md:text-5xl font-black tracking-wide px-6">
                      {post.title}
                    </h3>
                  </div>
                  <div className="w-full p-10 md:p-20 text-right" dir="rtl">
                    <h4 className="text-4xl md:text-5xl font-black text-emerald-800 mb-10 font-arabic border-r-8 border-yellow-400 pr-6">{post.category}</h4>
                    <p className="text-gray-700 text-2xl md:text-4xl leading-relaxed font-arabic mb-12 whitespace-pre-wrap font-medium">
                      {post.content.length > 300 ? post.content.substring(0, 300) + '...' : post.content}
                    </p>
                    <div className="flex justify-start">
                      <a href="https://wa.me/923000000000" className="inline-flex items-center gap-6 px-14 py-6 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-3xl transition-all shadow-lg text-2xl">
                        <i className="fa-brands fa-whatsapp text-4xl"></i> ابھی رابطہ کریں
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Box 1 */}
              <div className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden border border-emerald-100 shadow-xl flex flex-col">
                <div className="w-full">
                  <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200" alt="Marriage Solution" className="w-full h-auto object-cover max-h-[600px]" onError={handleImageError} />
                </div>
                <div className="w-full bg-[#fef9c3] py-12 border-b border-yellow-100 text-center">
                  <h3 className="text-emerald-950 text-2xl md:text-5xl font-black tracking-wide px-6">Surah Muzammil Ka Naqsh For Marriage</h3>
                </div>
                <div className="w-full p-10 md:p-20 text-right" dir="rtl">
                  <h4 className="text-4xl md:text-5xl font-black text-emerald-800 mb-10 font-arabic border-r-8 border-emerald-700 pr-6">روحانی شادی سروسز</h4>
                  <p className="text-gray-700 text-2xl md:text-4xl leading-relaxed font-arabic mb-12 font-medium">ایسے افراد جو رشتہ نہ ہو نے سے یا بار باربغیر کسی وجہ کے انکار ہو جانے کی وجہ سے پریشان ہیں۔ ان کے لئے ہمارے روحانی ماہرین نے سورۃ المزمل کا خاص نقش تیار کیا ہے۔ اس نقش کی برکت سے شادی کی تمام رکاوٹیں ختم ہو جاتی ہیں۔</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-6 px-14 py-6 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-3xl transition-all shadow-lg text-2xl">
                      <i className="fa-brands fa-whatsapp text-4xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden border border-emerald-100 shadow-xl flex flex-col">
                <div className="w-full">
                  <img src="https://i.pinimg.com/736x/12/7a/fe/127afedd5fd88ea3117cfd9194a5f15b.jpg" alt="Black Magic Help" className="w-full h-auto object-cover max-h-[600px]" onError={handleImageError} />
                </div>
                <div className="w-full bg-[#f0fdf4] py-12 border-b border-emerald-100 text-center">
                  <h3 className="text-emerald-950 text-2xl md:text-5xl font-black tracking-wide px-6">Black Magic Protection (Noori Ilaj)</h3>
                </div>
                <div className="w-full p-10 md:p-20 text-right" dir="rtl">
                  <h4 className="text-4xl md:text-5xl font-black text-emerald-800 mb-10 font-arabic border-r-8 border-emerald-700 pr-6">کالے جادو کا نوری توڑ</h4>
                  <p className="text-gray-700 text-2xl md:text-4xl leading-relaxed font-arabic mb-12 font-medium">اگر آپ کو لگتا ہے کہ آپ پر کسی نے جادو کیا ہے یا آپ کی ترقی رک گئی ہے، تو نوری علم کے ذریعے اس کا مکمل خاتمہ ممکن ہے۔ ہماری دعاؤں اور تعویذات سے آپ کو مستقل تحفظ ملے گا۔</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-6 px-14 py-6 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-3xl transition-all shadow-lg text-2xl">
                      <i className="fa-brands fa-whatsapp text-4xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Box 7 */}
              <div className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden border border-emerald-100 shadow-xl flex flex-col">
                <div className="w-full">
                  <img src="https://i.pinimg.com/736x/a8/9b/97/a89b9750b8a9ead21ebe5c88071cbeff.jpg" alt="Family Problems" className="w-full h-auto object-cover max-h-[600px]" onError={handleImageError} />
                </div>
                <div className="w-full bg-[#fef9c3] py-12 border-b border-yellow-100 text-center">
                  <h3 className="text-emerald-950 text-2xl md:text-5xl font-black tracking-wide px-6">Gharelu Jhagron Ka Rohani Hal</h3>
                </div>
                <div className="w-full p-10 md:p-20 text-right" dir="rtl">
                  <h4 className="text-4xl md:text-5xl font-black text-emerald-800 mb-10 font-arabic border-r-8 border-emerald-700 pr-6">گھریلو ناچاقی اور سکون</h4>
                  <p className="text-gray-700 text-2xl md:text-4xl leading-relaxed font-arabic mb-12 font-medium">اگر آپ کے گھر میں ہر وقت لڑائی جھگڑا رہتا ہے یا میاں بیوی میں نا اتفاقی ہے، تو ہمارے بتائے گئے وظائف اور دم سے گھر میں سکون اور محبت دوبارہ قائم ہو سکتی ہے۔</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-6 px-14 py-6 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-3xl transition-all shadow-lg text-2xl">
                      <i className="fa-brands fa-whatsapp text-4xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Box 8 */}
              <div className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden border border-emerald-100 shadow-xl flex flex-col">
                <div className="w-full">
                  <img src="https://i.pinimg.com/736x/12/d5/16/12d516c91db5bc6df814eb07867aa457.jpg" alt="Love Marriage" className="w-full h-auto object-cover max-h-[600px]" onError={handleImageError} />
                </div>
                <div className="w-full bg-[#f0fdf4] py-12 border-b border-emerald-100 text-center">
                  <h3 className="text-emerald-950 text-2xl md:text-5xl font-black tracking-wide px-6">Naqsh For Love Marriage</h3>
                </div>
                <div className="w-full p-10 md:p-20 text-right" dir="rtl">
                  <h4 className="text-4xl md:text-5xl font-black text-emerald-800 mb-10 font-arabic border-r-8 border-emerald-700 pr-6">پسند کی شادی کا نقش</h4>
                  <p className="text-gray-700 text-2xl md:text-4xl leading-relaxed font-arabic mb-12 font-medium">اگر آپ اپنی مرضی کی شادی کرنا چاہتے ہیں اور اس میں رکاوٹیں آ رہی ہیں، تو ہمارا خاص تیار کردہ نقش آپ کی تمام مشکلات حل کرنے میں معاون ثابت ہوگا۔ اللہ کے کرم سے راستے ہموار ہو جائیں گے۔</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-6 px-14 py-6 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-3xl transition-all shadow-lg text-2xl">
                      <i className="fa-brands fa-whatsapp text-4xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              <div className="max-w-5xl mx-auto flex justify-center pt-8">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-12 py-6 bg-white border border-emerald-200 rounded-full text-emerald-800 font-black hover:bg-emerald-50 transition-all flex items-center gap-4 shadow-md text-xl">
                  <i className="fa-solid fa-angles-up text-2xl"></i> Back To Top
                </button>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="bg-[#022c22] py-20 overflow-hidden border-y border-emerald-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="marquee-container flex items-center">
                <div className="flex items-center">
                  {statsItems.map((stat, idx) => (
                    <div key={`set1-${idx}`} className="w-[350px] flex-shrink-0 text-center px-10">
                      <p className="text-6xl font-black text-yellow-400 mb-3">{stat.value}</p>
                      <p className="text-emerald-100 text-lg font-black uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  {statsItems.map((stat, idx) => (
                    <div key={`set2-${idx}`} className="w-[350px] flex-shrink-0 text-center px-10">
                      <p className="text-6xl font-black text-yellow-400 mb-3">{stat.value}</p>
                      <p className="text-emerald-100 text-lg font-black uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Services />

          {/* Library Section */}
          <section className="py-24 bg-[#fefce8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-emerald-700 font-black uppercase tracking-widest text-sm mb-3">ROHANI LIBRARY</h2>
                <h3 className="text-5xl md:text-7xl font-black text-emerald-950 mb-8 tracking-tight">Explore Our Specialized Pages</h3>
                <p className="text-emerald-800/80 max-w-3xl mx-auto text-2xl md:text-3xl leading-relaxed font-arabic font-medium" dir="rtl">
                  مختلف روحانی چیلنجوں کے لیے ہمارے جامع گائیڈز دیکھیں۔ تمام معلومات آپ کی روحانی بہتری کے لیے فراہم کی گئی ہیں۔
                </p>
                <div className="w-24 h-2 bg-emerald-700 mx-auto rounded-full mt-8"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 group/grid" dir="rtl">
                {categories.map(cat => (
                  <button key={cat.id} onClick={() => handlePageChange(cat.id)} className="group bg-white border-2 border-emerald-100 rounded-[2.5rem] transition-all duration-300 text-center p-12 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-emerald-50">
                    <span className="font-black text-emerald-950 text-3xl md:text-4xl font-arabic">{cat.label}</span>
                    <div className="w-12 h-1.5 bg-yellow-400 mt-6 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:flex items-center gap-20">
                <div className="lg:w-1/2 mb-16 lg:mb-0 relative">
                  <img src="https://i.pinimg.com/736x/9a/5e/c8/9a5ec8c6ad99629bb14a27a46a2ec5b0.jpg" alt="About Our Healing" className="rounded-[3rem] shadow-2xl relative z-10 w-full border-4 border-emerald-50 object-cover aspect-square" onError={handleImageError} />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-emerald-700 font-black uppercase tracking-widest text-sm mb-4">Who We Are</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-emerald-950 mb-8 leading-tight">Pioneers in Spiritual Healing Science</h3>
                  <p className="text-gray-700 mb-10 text-2xl leading-relaxed font-medium">Founded on the principles of Islamic spirituality, our center has been a beacon of hope for individuals struggling with life's complexities across the globe.</p>
                  <button className="px-12 py-5 bg-emerald-700 text-white rounded-[2rem] font-black shadow-lg hover:bg-emerald-800 transition-all text-xl">Read Full Story</button>
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
    <div className="min-h-screen bg-[#fefce8]">
      {currentPage !== 'admin' && <Navbar onPageChange={handlePageChange} currentPage={currentPage} />}
      <main>{renderContent()}</main>
      {currentPage !== 'admin' && <Footer onPageChange={handlePageChange} />}
      {currentPage !== 'admin' && <ChatAssistant />}
      {currentPage !== 'admin' && (
        <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-10 left-10 z-50 bg-[#25D366] text-white w-20 h-20 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all">
          <i className="fa-brands fa-whatsapp text-4xl"></i>
        </a>
      )}
    </div>
  );
};

export default App;

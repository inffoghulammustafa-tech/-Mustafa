
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import TopicPage from './components/TopicPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Fallback image for any broken links
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1519834125748-958a846c483c?auto=format&fit=crop&q=80&w=800";
    e.currentTarget.onerror = null; // Prevent infinite loop
  };

  const categories = [
    { 
      id: "Amazing", 
      label: "حیرت انگیز", 
      image: "https://i.pinimg.com/736x/73/3d/93/733d93f349fe6ca44b6362ee61feb41c.jpg" 
    },
    { 
      id: "Bawaseer", 
      label: "بواسیر", 
      image: "https://i.ytimg.com/vi/3ILU4Clq8mY/maxresdefault.jpg" 
    },
    { 
      id: "Dolat", 
      label: "دولت", 
      image: "https://i.ytimg.com/vi/lG66vN_uL_Y/hq720.jpg" 
    },
    { 
      id: "health Taweez", 
      label: "صحت کے تعویذ", 
      image: "https://i.ytimg.com/vi/rY9X8Q6E8bI/maxresdefault.jpg" 
    },
    { 
      id: "Marriage", 
      label: "شادی", 
      image: "https://i.pinimg.com/736x/79/19/8d/79198d358646ac581d7cf100ede77298.jpg" 
    },
    { 
      id: "Muhabbat", 
      label: "محبت", 
      image: "https://i.ytimg.com/vi/hvaV2Md_3TA/hq720.jpg" 
    },
    { 
      id: "Nasha", 
      label: "نشہ", 
      image: "https://i.ytimg.com/vi/v5OQ_0A9_kM/maxresdefault.jpg" 
    },
    { 
      id: "Period", 
      label: "ماہواری", 
      image: "https://i.ytimg.com/vi/rY9X8Q6E8bI/maxresdefault.jpg" 
    },
    { 
      id: "Rohani Ilaj", 
      label: "روحانی علاج", 
      image: "https://i.pinimg.com/736x/13/16/50/13165004dae601800cefd741a2cf5425.jpg" 
    },
    { 
      id: "shifa", 
      label: "شفاء", 
      image: "https://i.ytimg.com/vi/XbUb_PDHOL0/maxresdefault.jpg" 
    },
    { 
      id: "taweez", 
      label: "تعویذ", 
      image: "https://i.pinimg.com/736x/d5/74/68/d57468fb3a23a9ed1afe84a9d43630f9.jpg" 
    },
    { 
      id: "Wazifa", 
      label: "وظیفہ", 
      image: "https://i.ytimg.com/vi/lG66vN_uL_Y/hq720.jpg" 
    }
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
    if (currentPage === 'home') {
      return (
        <>
          <Hero />

          {/* Featured Content Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
              <div className="text-center mb-16">
                <h2 className="text-emerald-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Our Specialization</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Featured Content</h3>
                <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-12"></div>
              </div>

              {/* Service 1: Marriage */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <a href="https://www.rohaniilajsite.com/2025/11/21/surah-muzammil-naqsh-marriage/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://i.pinimg.com/736x/79/19/8d/79198d358646ac581d7cf100ede77298.jpg" 
                      alt="Marriage Solution" 
                      referrerPolicy="no-referrer"
                      onError={handleImageError}
                      className="w-full h-auto object-cover max-h-[600px] cursor-pointer hover:opacity-95 transition-opacity"
                    />
                  </a>
                </div>
                <div className="w-full bg-emerald-50 py-12 border-b border-emerald-100/50 text-center">
                  <a href="https://www.rohaniilajsite.com/2025/11/21/surah-muzammil-naqsh-marriage/" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide px-6 hover:text-emerald-600 transition-colors">
                      Surah Muzammil Ka Naqsh For Marriage
                    </h3>
                  </a>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">روحانی شادی سروسز</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    ایسے افراد جو رشتہ نہ ہو نے سے یا بار باربغیر کسی وجہ کے انکار ہو جانے کی وجہ سے پریشان ہیں۔ان کے لئے ہمارے روحانی ماہرین نے سورۃ المزمل کا خاص نقش تیار کیا ہے۔ اس نقش پر کثیر تعداد میں اسمِ اعظم اور منتخب قرآنی آیات کی تلاوت کی گئی ہے اور پھر خاص دعا کے ساتھ اسے شادی...
                  </p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 2: UTI Treatment */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <a href="https://www.rohaniilajsite.com/2025/11/11/peshab-jalan-ilaj/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://i.pinimg.com/1200x/b7/d2/54/b7d25452da75a74613c1eae78dc51b27.jpg" 
                      alt="UTI Treatment Solution" 
                      referrerPolicy="no-referrer"
                      onError={handleImageError}
                      className="w-full h-auto object-cover max-h-[600px] cursor-pointer hover:opacity-95 transition-opacity"
                    />
                  </a>
                </div>
                <div className="w-full bg-emerald-50 py-12 border-b border-emerald-100/50 text-center">
                  <a href="https://www.rohaniilajsite.com/2025/11/11/peshab-jalan-ilaj/" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide px-6 hover:text-emerald-600 transition-colors">
                      Peshab Mein Jalan Ka Ilaj
                    </h3>
                  </a>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">پیشاب کی نالی کا انفیکشن (UTI)</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    پیشاب کی نالی کا انفیکشن یو ٹی آئی ایک عام مگر نہایت تکلیف دہ مسئلہ ہے، خاص طور پر خواتین میں۔ اس بیماری کی وجہ سے پیشاب میں جلن، درد، بار بار پیشاب آنے کی تکلیف، کمزوری اور بخار جیسے مسائل جنم لیتے ہیں...
                  </p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 3: Uterine Inflammation */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <a href="https://www.rohaniilajsite.com/2025/11/11/uterine-inflammation-infection/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://i.pinimg.com/1200x/e8/a6/31/e8a631bc9a835cb8bf57501d0a7eab3d.jpg" 
                      alt="Uterine Inflammation Solution" 
                      referrerPolicy="no-referrer"
                      onError={handleImageError}
                      className="w-full h-auto object-cover max-h-[600px] cursor-pointer hover:opacity-95 transition-opacity"
                    />
                  </a>
                </div>
                <div className="w-full bg-emerald-50 py-12 border-b border-emerald-100/50 text-center">
                  <a href="https://www.rohaniilajsite.com/2025/11/11/uterine-inflammation-infection/" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide px-6 hover:text-emerald-600 transition-colors">
                      Uterine Inflammation And Infection
                    </h3>
                  </a>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">بچہ دانی میں سوزش اور انفیکشن</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    بچہ دانی میں شدید سوزش خواتین کے لیے ایک جان لیوا تکلیف ہے جو روزمرہ کے کام مشکل بنا دیتی ہے اور نیند و آرام میں خلل ڈالتی ہے۔ اس بیماری میں پیٹ اور کمر کے درد کے ساتھ پیشاب اور حیض کے مسائل بھی پیدا ہو سکتے ہیں...
                  </p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 4: Uterus Ki Rasoli */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <a href="https://www.rohaniilajsite.com/2025/11/10/uterus-rasoli-shifa-naqsh/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://i.pinimg.com/736x/13/16/50/13165004dae601800cefd741a2cf5425.jpg" 
                      alt="Uterus Fibroids Solution" 
                      referrerPolicy="no-referrer"
                      onError={handleImageError}
                      className="w-full h-auto object-cover max-h-[600px] cursor-pointer hover:opacity-95 transition-opacity"
                    />
                  </a>
                </div>
                <div className="w-full bg-emerald-50 py-12 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide px-6">Uterus Ki Rasoli Se Shifa Ka Naqsh</h3>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">رحم کی رسولیاں اور ان کا روحانی علاج</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">رحم کی رسولیاں فائبرائڈز ایک ایسی تکلیف ہیں جو عورت کی زندگی کو جسمانی اور ذہنی طور پر کمزور کر دیتی ہے۔ درد، کمزوری یہ سب علامات زندگی کو مشکل بنا دیتی ہے۔..</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 5: Bachedani Ki Rasoli */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <a href="https://www.rohaniilajsite.com/2025/08/08/bachedani-rasoli-shifa-naqsh/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://i.ytimg.com/vi/v5OQ_0A9_kM/maxresdefault.jpg" 
                      alt="Bachedani Rasoli" 
                      referrerPolicy="no-referrer" 
                      onError={handleImageError} 
                      className="w-full h-auto object-cover max-h-[600px] cursor-pointer hover:opacity-95 transition-opacity" 
                    />
                  </a>
                </div>
                <div className="w-full bg-emerald-50 py-12 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide px-6">Bachedani Ki Rasoli Se Shifa Ka Naqsh</h3>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">بچہ دانی کی رسولی اور بانجھ پن</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">ایسی خوا تین جن کے بچہ دانی میں رسولیا ں ہیں۔او ر اسی مرض کی وجہ سے وہ ابھی تک او لاد جیسی نعمت سے محروم ہیں۔..</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 6: Uterine Fibroids Quranic */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <a href="https://www.rohaniilajsite.com/2025/08/05/uterine-fibroids-treatment/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://i.ytimg.com/vi/lG66vN_uL_Y/hq720.jpg" 
                      alt="Uterine Fibroids" 
                      referrerPolicy="no-referrer" 
                      onError={handleImageError} 
                      className="w-full h-auto object-cover max-h-[600px] cursor-pointer" 
                    />
                  </a>
                </div>
                <div className="w-full bg-emerald-50 py-12 text-center border-b border-emerald-100/50">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold">Uterine Fibroids Treatment In Quran</h3>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">بچہ دانی کی رسولیاں اور قرآنی علاج</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">بچہ دانی کی رسولیوں (Fibroids) کا بہترین حل قرآن پاک کی مبارک آیات میں موجود ہے۔ بہت سی خواتین اس مرض کی وجہ سے شدید تکلیف اور بے اولادی کا شکار رہتی ہیں، ان کے لیے خاص قرآنی نقش اور وظائف تیار کیے گئے ہیں۔</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 7: Kidney Stone */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <a href="https://www.rohaniilajsite.com/2025/07/30/gurde-pathri-shifa-rohani-ilaj/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://i.ytimg.com/vi/lG66vN_uL_Y/hq720.jpg" 
                      alt="Kidney Stone" 
                      referrerPolicy="no-referrer" 
                      onError={handleImageError} 
                      className="w-full h-auto object-cover max-h-[600px] cursor-pointer" 
                    />
                  </a>
                </div>
                <div className="w-full bg-emerald-50 py-12 text-center border-b border-emerald-100/50">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold">Gurde Ki Pathri Se Shifa Ka Rohani Ilaj</h3>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">گردے کی پتھری کا روحانی علاج</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">گردے کی پتھری ایک تکلیف دہ مرض ہے۔ اللہ کے فضل و کرم سے مخصوص قرآنی کلمات اور دم کے ذریعے پتھری کے اخراج اور درد سے نجات کے لیے ہم بہترین روحانی رہنمائی فراہم کرتے ہیں۔</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 8: Kanwal Name */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <a href="https://www.rohaniilajsite.com/2025/07/23/kanwal-name-meaning/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://i.ytimg.com/vi/XbUb_PDHOL0/maxresdefault.jpg" 
                      alt="Kanwal Name" 
                      referrerPolicy="no-referrer" 
                      onError={handleImageError} 
                      className="w-full h-auto object-cover max-h-[600px] cursor-pointer" 
                    />
                  </a>
                </div>
                <div className="w-full bg-emerald-50 py-12 text-center border-b border-emerald-100/50">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold">Kanwal Name Meaning In Urdu</h3>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">کنول نام کا مطلب اور اثرات</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">نام کے انسان کی شخصیت اور زندگی پر گہرے اثرات ہوتے ہیں۔ کنول نام کے معنی، اس کے عدد، موافق پتھر اور اس نام سے جڑے روحانی پہلوؤں کے بارے میں تفصیلی معلومات حاصل کریں۔</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 9: Haris Name */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <a href="https://www.rohaniilajsite.com/2025/07/22/haris-name-meaning/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://i.pinimg.com/736x/73/3d/93/733d93f349fe6ca44b6362ee61feb41c.jpg" 
                      alt="Haris Name" 
                      referrerPolicy="no-referrer" 
                      onError={handleImageError} 
                      className="w-full h-auto object-cover max-h-[600px] cursor-pointer" 
                    />
                  </a>
                </div>
                <div className="w-full bg-emerald-50 py-12 text-center border-b border-emerald-100/50">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold">Haris Name Meaning In Urdu</h3>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">حارث نام کا مطلب اور برکات</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">حارث ایک بابرکت نام ہے جس کے معنی 'کاشتکار' یا 'محافظ' کے ہیں۔ اس نام کے حامل افراد کی زندگی، ان کے مزاج اور خوش قسمتی کے حوالے سے مکمل روحانی معلومات یہاں دستیاب ہیں۔</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 10: Love Marriage Naqsh */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <a href="https://www.rohaniilajsite.com/2025/07/21/naqsh-love-marriage/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://i.ytimg.com/vi/hvaV2Md_3TA/hq720.jpg" 
                      alt="Love Marriage Naqsh" 
                      referrerPolicy="no-referrer" 
                      onError={handleImageError} 
                      className="w-full h-auto object-cover max-h-[600px] cursor-pointer" 
                    />
                  </a>
                </div>
                <div className="w-full bg-emerald-50 py-12 text-center border-b border-emerald-100/50">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold">Naqsh For Love Marriage</h3>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">پسند کی شادی کے لیے خاص نقش</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">اگر آپ پسند کی شادی میں رکاوٹوں کا سامنا کر رہے ہیں یا والدین کو منانا چاہتے ہیں، تو ہمارا خاص تیار کردہ روحانی نقش آپ کی مدد کر سکتا ہے۔ یہ نقش برکت اور محبت کے حصول کے لیے نہایت کارآمد ہے۔</p>
                  <div className="flex justify-start">
                    <a href="https://wa.me/923000000000" className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl">
                      <i className="fa-brands fa-whatsapp text-3xl"></i> ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Older Entries Link */}
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

          {/* ROHANI LIBRARY Section */}
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
                  <button
                    key={cat.id}
                    onClick={() => handlePageChange(cat.id)}
                    className="group relative bg-white border border-emerald-50 rounded-[2.5rem] transition-all duration-700 text-center overflow-hidden p-10
                    shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_60px_0px_rgba(16,185,129,0.4)] 
                    hover:-translate-y-4 hover:scale-105 hover:z-10
                    group-hover/grid:opacity-30 group-hover/grid:blur-[2px] hover:!opacity-100 hover:!blur-none"
                  >
                    <div className="absolute inset-0 bg-emerald-50/0 group-hover:bg-emerald-50/70 transition-colors duration-500"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <span className="font-black text-gray-800 text-2xl md:text-3xl group-hover:text-emerald-900 transition-colors tracking-tight font-arabic">
                        {cat.label}
                      </span>
                      <div className="w-12 h-1 bg-emerald-200 mt-4 rounded-full group-hover:w-20 group-hover:bg-emerald-500 transition-all duration-500"></div>
                      <div className="mt-8 flex items-center justify-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 font-arabic">
                         تفصیل پڑھیں <i className="fa-solid fa-chevron-left"></i>
                      </div>
                    </div>
                  </button>
                ))}
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
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">Who We Are</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Pioneers in Spiritual Healing Science</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Founded on the principles of Islamic spirituality, our center has been a beacon of hope for individuals struggling with life's complexities...
                  </p>
                  <button className="px-8 py-3 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg">
                    Read Full Story
                  </button>
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
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
      <main>{renderContent()}</main>
      <Footer />
      <ChatAssistant />
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

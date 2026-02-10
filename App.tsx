
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

          {/* Featured Services Container */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
              <div className="text-center mb-16">
                <h2 className="text-emerald-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Our Specialization</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Services</h3>
                <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-12"></div>
              </div>

              {/* Service 1: Marriage */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img 
                    src="https://www.rohaniilajsite.com/wp-content/uploads/2025/11/shadi-1080x628.jpg" 
                    alt="Marriage Solution" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                <div className="w-full bg-emerald-50 py-8 border-b border-emerald-100/50">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold text-center tracking-wide">
                    Surah Muzammil Ka Naqsh For Marriage
                  </h3>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">روحانی شادی سروسز</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    ایسے افراد جو رشتہ نہ ہو نے سے یا بار باربغیر کسی وجہ کے انکار ہو جانے کی وجہ سے پریشان ہیں۔ان کے لئے ہمارے روحانی ماہرین نے سورۃ المزمل کا خاص نقش تیار کیا ہے۔ اس نقش پر کثیر تعداد میں اسمِ اعظم اور منتخب قرآنی آیات کی تلاوت کی گئی ہے اور پھر خاص دعا کے ساتھ اسے شادی...
                  </p>
                  <div className="flex justify-start">
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 2: UTI Treatment */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img 
                    src="https://www.rohaniilajsite.com/wp-content/uploads/2025/11/uti-1080x628.jpg" 
                    alt="UTI Solution" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                <div className="w-full bg-emerald-50 py-8 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide">
                    Peshab Mein Jalan Ka Ilaj
                  </h3>
                  <p className="text-emerald-700/60 text-sm mt-2 font-medium">
                    by admin | Nov 11, 2025 | Rohani Ilaj
                  </p>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">پیشاب کی نالی کا انفیکشن (UTI)</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    پیشاب کی نالی کا انفیکشن یو ٹی آئی ایک عام مگر نہایت تکلیف دہ مسئلہ ہے، خاص طور پر خواتین میں۔ اس بیماری کی وجہ سے پیشاب میں جلن، درد، بار بار پیشاب آنے کی تکلیف، کمزوری اور بخار جیسے مسائل جنم لیتے ہیں ایسی ہی ایک خاتون برسوں سے شدید جلن اور یو ٹی آئی کے بار بار ہونے...
                  </p>
                  <div className="flex justify-start">
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 3: Uterine Inflammation */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img 
                    src="https://www.rohaniilajsite.com/wp-content/uploads/2025/11/bacha-dani-1080x628.jpg" 
                    alt="Uterine Inflammation Solution" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                <div className="w-full bg-emerald-50 py-8 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide">
                    Uterine Inflammation And Infection
                  </h3>
                  <p className="text-emerald-700/60 text-sm mt-2 font-medium">
                    by admin | Nov 11, 2025 | Rohani Ilaj
                  </p>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">بچہ دانی میں سوزش اور انفیکشن</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    بچہ دانی میں شدید سوزش خواتین کے لیے ایک جان لیوا تکلیف ہے جو روزمرہ کے کام مشکل بنا دیتی ہے اور نیند و آرام میں خلل ڈالتی ہے۔ اس بیماری میں پیٹ اور کمر کے درد کے ساتھ پیشاب اور حیض کے مسائل بھی پیدا ہو سکتے ہیں، ایسی ہی ایک خاتون اس بیماری میں مبتلا تھی۔اس نے ہمارے...
                  </p>
                  <div className="flex justify-start">
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 4: Uterus Fibroids */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img 
                    src="https://www.rohaniilajsite.com/wp-content/uploads/2025/11/RSOLI-1080x628.jpg" 
                    alt="Uterus Fibroids Solution" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                <div className="w-full bg-emerald-50 py-8 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide">
                    Uterus Ki Rasoli Se Shifa Ka Naqsh
                  </h3>
                  <p className="text-emerald-700/60 text-sm mt-2 font-medium">
                    by admin | Nov 10, 2025 | Rohani Ilaj
                  </p>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">رحم کی رسولیاں اور ان کا روحانی علاج</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    رحم کی رسولیاں فائبرائڈز ایک ایسی تکلیف ہیں جو عورت کی زندگی کو جسمانی اور ذہنی طور پر کمزور کر دیتی ہے۔ درد، کمزوری یہ سب علامات زندگی کو مشکل بنا دیتی ہے۔ ایک خاتون کو بھی یہی مسئلہ برسوں سے لاحق تھا، مختلف علاج کروائے، مگر آرام صرف وقتی رہا۔انہوں نے نیت خالص کے...
                  </p>
                  <div className="flex justify-start">
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 5: Ovarian/Uterine Cyst */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img 
                    src="https://www.rohaniilajsite.com/wp-content/uploads/2025/08/cyst-1080x628.jpg" 
                    alt="Bachedani Ki Rasoli Solution" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                <div className="w-full bg-emerald-50 py-8 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide">
                    Bachedani Ki Rasoli Se Shifa Ka Naqsh
                  </h3>
                  <p className="text-emerald-700/60 text-sm mt-2 font-medium">
                    by admin | Aug 8, 2025 | Nasha
                  </p>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">بچہ دانی کی رسولی اور بانجھ پن</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    ایسی خوا تین جن کے بچہ دانی میں رسولیا ں ہیں۔او ر اسی مرض کی وجہ سے وہ ابھی تک او لاد جیسی نعمت سے محروم ہیں۔ بہت سے علاج کر وا کر دیکھ لئے۔ ڈاکٹر زکی میڈیسن،حکیمی دوائیاں او ر یہا ں تک کے سر جر ی کر وا کر بھی دیکھ لی لیکن شفاء حاصل نہیں ہو ئی۔ او ر ما یو سی کو اپنا...
                  </p>
                  <div className="flex justify-start">
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 6: Uterine Fibroids Quranic Treatment */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img 
                    src="https://www.rohaniilajsite.com/wp-content/uploads/2025/08/rasoli-1080x628.jpg" 
                    alt="Uterine Fibroids Quranic Solution" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                <div className="w-full bg-emerald-50 py-8 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide">
                    Uterine Fibroids Treatment In Quran
                  </h3>
                  <p className="text-emerald-700/60 text-sm mt-2 font-medium">
                    by admin | Aug 5, 2025 | Nasha
                  </p>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">بچہ دانی کی رسولی کا قرآنی علاج</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    اگر آپ کی بچے دانی میں ایک یا ایک سے زائد رسولیاں ہیں۔جس کی وجہ سے آپ مختلف مسائل کا شکار ہیں جن میں سب سے بڑامسئلہ بے اولادی کا ہے۔مختلف علاج کروائے اور ہر طرح کی میڈیسن کھا کر دیکھ چکی ہیں لیکن کسی bhi میڈیسن کا کوئی فائدہ نہیں ہوا تو آپ کو ضرورت ہے پر فیکٹ روحانی...
                  </p>
                  <div className="flex justify-start">
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 7: Kidney Stone Relief */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img 
                    src="https://www.rohaniilajsite.com/wp-content/uploads/2025/07/pathri-1080x628.jpg" 
                    alt="Kidney Stone Relief" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                <div className="w-full bg-emerald-50 py-8 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide">
                    Gurde Ki Pathri Se Shifa Ka Rohani Ilaj
                  </h3>
                  <p className="text-emerald-700/60 text-sm mt-2 font-medium">
                    by admin | Jul 30, 2025 | Rohani Ilaj
                  </p>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">گردے کی پتھری کا روحانی علاج</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    اگر آپ کو گردے میں پتھری کی شکایت ہے۔بہت عرصے سے اس تکلیف میں مبتلا ہیں اور مہنگی مہنگی میڈیسن بھی استعمال کیں لیکن کسی بھی دوا نے اثر نہیں کیا تو آپ کو چاہئے کہ سورۂ الفاتحہ کا روحانی نقش اپنے نام سے منسوب کروا کے اپنے پاس رکھیں۔ چونکہ اس نقش کو شفاء کے روحانی کلمات...
                  </p>
                  <div className="flex justify-start">
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 8: Kanwal Name Meaning */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img 
                    src="https://www.rohaniilajsite.com/wp-content/uploads/2025/07/kanwal-1080x628.jpg" 
                    alt="Kanwal Name Meaning" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                <div className="w-full bg-emerald-50 py-8 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide">
                    Kanwal Name Meaning In Urdu
                  </h3>
                  <p className="text-emerald-700/60 text-sm mt-2 font-medium">
                    by admin | Jul 23, 2025 | Amazing
                  </p>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">کنول نام کا مطلب اور روحانی حل</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    آج کا موضوع کنول نام کی لڑکیوں کے لئے بنائی گئی ہے جس میں ہم بتائیں گے کنول نام کا مطلب اسم اعظم اور ہر مسئلے کا بہترین روحانی حل۔ کنول ایک پھول کا نام ہے۔کنول آپ کا اسم اعظم ہے یا بدیع، یا ودود اس اسم اعظم کوہر روز 106 مرتبہ پڑھنا اپنا معمول بنا لیں۔اللہ کے کرم سے...
                  </p>
                  <div className="flex justify-start">
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 9: Haris Name Meaning */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img 
                    src="https://www.rohaniilajsite.com/wp-content/uploads/2025/07/haris-1080x628.gif" 
                    alt="Haris Name Meaning" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                <div className="w-full bg-emerald-50 py-8 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide">
                    Haris Name Meaning In Urdu
                  </h3>
                  <p className="text-emerald-700/60 text-sm mt-2 font-medium">
                    by admin | Jul 22, 2025 | Amazing
                  </p>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">حارث نام کا اسم اعظم اور کامیابی</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    آج کے موضوع میں ہم آپ کو بتائیں گے حارث نام کا اسم اعظم اور ہر مسئلے کا زبردست روحانی حل۔حارث آپ کا اسم اعظم ہے یا مومن،یا باعث اس اسم اعظم کو ہر روز 709 مرتبہ پڑھنا اپنا معمول بنا لیں۔ اللہ کے کرم سے ہر مشکل آسان ہوجائے گی اور کامیابی ہر قدم پر آپ کا مقدر بنے گی...
                  </p>
                  <div className="flex justify-start">
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 10: Naqsh For Love Marriage */}
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
                <div className="w-full">
                  <img 
                    src="https://www.rohaniilajsite.com/wp-content/uploads/2025/07/nnd-1080x628.gif" 
                    alt="Naqsh For Love Marriage" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                <div className="w-full bg-emerald-50 py-8 border-b border-emerald-100/50 text-center">
                  <h3 className="text-emerald-900 text-2xl md:text-4xl font-bold tracking-wide">
                    Naqsh For Love Marriage
                  </h3>
                  <p className="text-emerald-700/60 text-sm mt-2 font-medium">
                    by admin | Jul 21, 2025 | Muhabbat
                  </p>
                </div>
                <div className="w-full p-10 md:p-16 text-right" dir="rtl">
                  <h4 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 font-arabic border-r-4 border-emerald-500 pr-4">محبت کی شادی اور دوریوں کا خاتمہ</h4>
                  <p className="text-gray-700 text-2xl md:text-3xl leading-relaxed font-arabic mb-10">
                    محبت اک ایسی روحا نی طا قت ہے۔جو انسا ن کو اللہ سے بھی ملا تی ہے او ر انسا ن سے بھی۔لیکن جب کو ئی اپنا چھوڑ جا ئے، جب محبت دو ریوں کا را ستہ اختیا ر کر لے او ر آپ سے منہ مو ڑ لے۔تو دل مزید بے چینی کا شکا ر ہو جا تا ہے۔اس بے چینی کو را حت میں بدلنے کے لئے ہمارے رو حا...
                  </p>
                  <div className="flex justify-start">
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/10 active:scale-95 text-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      ابھی رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>

              {/* Older Entries Pagination Link */}
              <div className="max-w-5xl mx-auto flex justify-center pt-8">
                <a 
                  href="https://www.rohaniilajsite.com/page/2/" 
                  className="px-8 py-4 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 font-bold hover:bg-emerald-100 transition-all flex items-center gap-3 shadow-sm hover:shadow-md active:scale-95"
                >
                  <i className="fa-solid fa-angles-left"></i>
                  Older Entries
                </a>
              </div>
            </div>
          </section>
          
          {/* Statistics Section */}
          <section className="bg-emerald-50/50 py-12 border-y border-gray-100">
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

          {/* Categories Exploration Section */}
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

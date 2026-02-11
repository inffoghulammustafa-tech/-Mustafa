
import React, { useEffect, useState } from 'react';
import { getSpiritualGuidance, generateImageForTopic } from '../services/geminiService';

interface TopicPageProps {
  topic: string;
  initialImage?: string;
  onBack: () => void;
}

const TopicPage: React.FC<TopicPageProps> = ({ topic, initialImage, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(initialImage || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      
      // Fetch Content in Urdu
      const prompt = `براہ کرم عنوان: "${topic}" پر ایک جامع، پیشہ ورانہ اور روحانی طور پر حوصلہ افزا مضمون اردو میں لکھیں۔ 
      اس میں یہ بیان کریں کہ یہ کیا ہے، روحانی علاج میں اس کی اہمیت کیا ہے، اس سے وابستہ عام علامات یا چیلنجز کیا ہیں، 
      اور قرآنی رہنمائی، دعاؤں اور روحانی مشقوں کے ذریعے اسے کیسے حل کیا جا سکتا ہے۔ 
      مواد کو ہیڈنگز اور بلٹ پوائنٹس کے ساتھ ترتیب دیں۔ لہجہ انتہائی احترام والا اور پر امید ہونا چاہیے۔`;
      
      // We only generate a new image if one wasn't provided initially
      const [textResult, imageResult] = await Promise.all([
        getSpiritualGuidance(prompt),
        !initialImage ? generateImageForTopic(topic) : Promise.resolve(null)
      ]);

      setContent(textResult);
      if (!initialImage && imageResult) {
        setImageUrl(imageResult);
      }
      setLoading(false);
    };

    fetchContent();
  }, [topic, initialImage]);

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-emerald-700 font-black mb-8 hover:gap-4 transition-all group font-arabic text-xl"
        >
          <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          واپس ہوم پیج پر جائیں
        </button>

        <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-emerald-900 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-400 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600 rounded-full blur-[120px]"></div>
            </div>
            <span className="relative z-10 inline-block px-5 py-1.5 bg-emerald-800/40 text-emerald-300 text-xs font-black tracking-[0.3em] uppercase rounded-full border border-emerald-700/50 mb-6 font-arabic">
              روحانی معلومات کا خزانہ
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white relative z-10 mb-6 leading-tight font-arabic tracking-tight">{topic}</h1>
            <div className="w-24 h-2 bg-emerald-400 mx-auto rounded-full relative z-10 shadow-[0_0_20px_rgba(52,211,153,0.5)]"></div>
          </div>

          {/* Featured Image Section */}
          {imageUrl && (
            <div className="w-full h-auto max-h-[500px] overflow-hidden">
              <img 
                src={imageUrl} 
                alt={topic} 
                className="w-full h-full object-cover transition-opacity duration-700"
                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                style={{ opacity: 0 }}
              />
            </div>
          )}

          {/* Content Area */}
          <div className="p-8 md:p-16 text-right">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-32">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 border-[6px] border-emerald-50 rounded-full"></div>
                  <div className="absolute inset-0 border-[6px] border-t-emerald-600 rounded-full animate-spin"></div>
                </div>
                <h3 className="text-emerald-950 font-black mt-12 text-3xl animate-pulse font-arabic">روحانی علم تلاش کیا جا رہا ہے...</h3>
                <p className="text-gray-400 mt-3 text-sm font-bold tracking-widest uppercase">Processing Rohani Knowledge base</p>
              </div>
            ) : (
              <div className="prose prose-emerald lg:prose-2xl max-w-none text-gray-700 leading-loose font-arabic">
                {content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() ? (
                    <div key={idx} className="mb-6 last:mb-0">
                      {paragraph.startsWith('#') ? (
                        <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-10 mb-6 border-r-8 border-emerald-500 pr-6 text-right">
                          {paragraph.replace(/#/g, '').trim()}
                        </h2>
                      ) : (
                        <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90 text-right">
                          {paragraph}
                        </p>
                      )}
                    </div>
                  ) : <div key={idx} className="h-4" />
                ))}
              </div>
            )}

            {/* Personalized Guidance Section */}
            {!loading && (
              <div className="mt-16 pt-16 border-t-2 border-emerald-50">
                <div className="bg-emerald-950 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 p-8 text-emerald-800 text-9xl opacity-20 -rotate-12 select-none">
                    <i className="fa-solid fa-star-and-crescent"></i>
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1 text-center md:text-right">
                      <h4 className="text-3xl md:text-4xl font-black text-white mb-4 font-arabic">کیا آپ کا مسئلہ مختلف ہے؟</h4>
                      <p className="text-emerald-200 text-xl md:text-2xl leading-relaxed font-arabic">
                        ہر انسان کی صورتحال مختلف ہوتی ہے۔ <strong>{topic}</strong> کے بارے میں نجی مشاورت اور خاص روحانی حل کے لیے ہمارے ماہرین سے براہ راست رابطہ کریں۔
                      </p>
                    </div>
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-6 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black rounded-3xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] active:scale-95 text-2xl whitespace-nowrap font-arabic"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      واٹس ایپ پر رابطہ کریں
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;

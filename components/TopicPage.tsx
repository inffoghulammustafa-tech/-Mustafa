
import React, { useEffect, useState } from 'react';
import { getSpiritualGuidance, generateImageForTopic } from '../services/geminiService.ts';

interface TopicPageProps {
  topic: string;
  initialImage?: string;
  onBack: () => void;
}

const TopicPage: React.FC<TopicPageProps> = ({ topic, initialImage, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(initialImage || null);
  const [loading, setLoading] = useState(true);

  const specialContent: Record<string, { text: string, img: string }> = {
    'Free Istikhara': {
      img: 'https://qiratquran.com/wp-content/uploads/2025/10/dua-e-istikhara.webp',
      text: `# فری استخارہ
اس پیج کا مقصد لوگوں کی مشکلات میں ان کی رہنمائی کرنا ہے۔
استخارہ کا اصل مطلب اللہ سے خیر مانگنا ہے۔ اپنی زندگی کے اہم فیصلوں میں اللہ کی رضا شامل کریں۔ ہم فی سبیل اللہ (فری) استخارہ کر کے آپ کو صحیح راستہ دکھائیں گے۔

## استخارہ کی اہمیت
استخارہ سنتِ نبوی ہے جس کے ذریعے بندہ اللہ تعالیٰ سے اپنے معاملے میں خیر کا طلب گار ہوتا ہے۔ یہ پریشانیوں اور تذبذب سے نکلنے کا بہترین روحانی ذریعہ ہے۔

## رابطہ کا طریقہ
آپ ہم سے براہ راست واٹس ایپ پر رابطہ کر کے اپنا نام اور مقصد بیان کر سکتے ہیں۔ ہم وقت کی پابندی اور رازداری کے ساتھ آپ کی رہنمائی کریں گے۔`
    },
    'Love Marriage': {
      img: 'https://www.christianitytoday.com/wp-content/uploads/2023/02/133346.jpg',
      text: `# پسند کی شادی (Love Marriage)
شادی ایک مقدس رشتہ ہے اور اس میں آنے والی رکاوٹوں کا حل قرآن و سنت کی روشنی میں ممکن ہے۔ ہمارا رویہ اس معاملے میں ہمدردانہ ہے کیونکہ یہ ایک جذباتی فیصلہ ہوتا ہے۔

## رکاوٹوں کا خاتمہ
ماں باپ کو منانے کے لئے روحانی حل اور رکاوٹوں کو دور کرنے کے مخصوص وظائف فراہم کیے جاتے ہیں۔ اکثر معاشرتی دباؤ یا غلط فہمیوں کی وجہ سے رشتے طے نہیں پاتے، جنہیں دعا کے ذریعے حل کیا جا سکتا ہے۔

## کامیابی کی مثالیں
ہمارے پاس کثیر تعداد میں ایسے جوڑے ہیں جو روحانی رہنمائی کے بعد آج ایک خوشحال ازدواجی زندگی گزار رہے ہیں۔`
    }
  };

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      if (specialContent[topic]) {
        setContent(specialContent[topic].text);
        setImageUrl(specialContent[topic].img);
        await new Promise(r => setTimeout(r, 1000));
        setLoading(false);
        return;
      }

      const prompt = `براہ کرم عنوان: "${topic}" پر ایک جامع، پیشہ ورانہ اور روحانی طور پر حوصلہ افزا مضمون اردو میں لکھیں۔ مواد کو ہیڈنگز اور بلٹ پوائنٹس کے ساتھ ترتیب دیں۔ لہجہ انتہائی احترام والا اور پر امید ہونا چاہیے۔`;
      const [textResult, imageResult] = await Promise.all([
        getSpiritualGuidance(prompt),
        !initialImage ? generateImageForTopic(topic) : Promise.resolve(null)
      ]);

      setContent(textResult);
      if (!initialImage && imageResult) setImageUrl(imageResult);
      setLoading(false);
    };
    fetchContent();
  }, [topic, initialImage]);

  return (
    <div className="pt-32 pb-20 bg-[#fefce8] min-h-screen" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="flex items-center gap-4 text-emerald-900 font-black mb-10 hover:gap-6 transition-all font-arabic text-2xl">
          <i className="fa-solid fa-arrow-right"></i>
          واپس ہوم پیج پر جائیں
        </button>

        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-emerald-50">
          {/* Header Block */}
          <div className="bg-[#064e3b] p-12 md:p-24 text-center relative overflow-hidden">
            <span className="inline-block px-6 py-2 bg-black/20 text-yellow-300 text-xs font-black tracking-widest uppercase rounded-full mb-8 font-arabic">
              روحانی معلومات کا خزانہ
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight font-arabic tracking-tight">{topic}</h1>
            <div className="w-32 h-2.5 bg-yellow-400 mx-auto rounded-full shadow-lg"></div>
          </div>

          {imageUrl && (
            <div className="w-full h-auto max-h-[600px] overflow-hidden relative">
              <img src={imageUrl} alt={topic} className={`w-full h-full object-cover transition-all duration-1000 ${loading ? 'blur-md brightness-50' : 'blur-0 brightness-100'}`} />
              {loading && <div className="absolute inset-0 z-20 overflow-hidden"><div className="w-full h-2 bg-yellow-400 absolute animate-[scan_2s_linear_infinite]"></div></div>}
            </div>
          )}

          <div className="p-10 md:p-24 text-right">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24">
                <div className="w-20 h-20 border-8 border-emerald-50 border-t-emerald-700 rounded-full animate-spin"></div>
                <h3 className="text-emerald-950 font-black mt-12 text-4xl font-arabic">صفحہ کی ترتیب نو کی جا رہی ہے...</h3>
              </div>
            ) : (
              <div className="prose prose-emerald lg:prose-2xl max-w-none text-slate-800 leading-[2.2] font-arabic">
                {content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() ? (
                    <div key={idx} className="mb-10">
                      {paragraph.startsWith('#') ? (
                        <h2 className={`${paragraph.startsWith('##') ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'} font-black text-emerald-900 mt-12 mb-8 border-r-8 border-emerald-600 pr-8`}>
                          {paragraph.replace(/#/g, '').trim()}
                        </h2>
                      ) : (
                        <p className="text-2xl md:text-3xl font-medium leading-relaxed opacity-90">
                          {paragraph}
                        </p>
                      )}
                    </div>
                  ) : null
                ))}
              </div>
            )}

            {!loading && (
              <div className="mt-20 pt-20 border-t-4 border-emerald-50">
                <div className="bg-[#022c22] rounded-[3rem] p-12 md:p-24 text-center">
                  <h4 className="text-4xl md:text-6xl font-black text-white mb-8 font-arabic">کیا آپ کا مسئلہ مختلف ہے؟</h4>
                  <p className="text-yellow-100/80 text-2xl md:text-3xl leading-relaxed font-arabic mb-12">
                     {topic} کے بارے میں نجی مشاورت اور خاص روحانی حل کے لیے براہ راست رابطہ کریں۔
                  </p>
                  <a href="https://wa.me/923000000000" className="inline-flex items-center gap-6 px-16 py-8 bg-yellow-400 hover:bg-yellow-300 text-emerald-950 font-black rounded-3xl transition-all shadow-xl text-3xl font-arabic">
                    <i className="fa-brands fa-whatsapp text-4xl"></i>
                    واٹس ایپ کریں
                  </a>
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

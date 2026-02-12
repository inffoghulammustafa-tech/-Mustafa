
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
    },
    'Black Magic Help': {
      img: 'https://static.toiimg.com/thumb/msid-118776475,width-1280,height-720,imgsize-83186,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      text: `# جادو کا توڑ (Noori Ilaj)
جادو ایک کڑوا سچ ہے لیکن اس کا توڑ قرآنِ پاک میں موجود ہے۔ ہم "کالے جادو" کے بجائے "نوری علاج" پر زور دیتے ہیں تاکہ اللہ کے کلام سے شفا ملے۔

## جادو کی علامات
اگر آپ کو نیند نہیں آتی، ہر وقت سستی رہتی ہے، یا بنتے ہوئے کام اچانک رک جاتے ہیں، تو یہ جادو یا نظرِ بد کی علامت ہو سکتی ہے۔

## روحانی تحفظ
سورہ فلق اور سورہ ناس کی برکت سے جادو کا مکمل خاتمہ ممکن ہے۔ ہم آپ کو حفاظت کے لئے خاص دعائیں، دم اور تعویذ فراہم کرتے ہیں تاکہ آپ کا مستقبل محفوظ رہے۔`
    },
    'Family Problems': {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_S5Ckea6czWi3xf1Un5sQGImxtBS-X1IMjg&s',
      text: `# گھریلو ناچاقی (Family Problems)
گھر کو جنت بنانے کے لئے روحانی تدبیر اور صبر کی ضرورت ہے۔ سکونِ قلب ہی وہ بنیاد ہے جس پر ایک مضبوط خاندان کھڑا ہوتا ہے۔

## مسائل کا حل
میاں بیوی کے جھگڑے، سسرال کے مسائل، اور بچوں کی نافرمانی جیسے سنجیدہ معاملات کے لئے ہمارے پاس خاص روحانی کونسلنگ موجود ہے۔

## گھر کی برکت
گھر سے نحوست اور منفی اثرات ختم کرنے کا مسنون طریقہ اپنائیں۔ مخصوص وظائف کے ذریعے آپ اپنے گھر میں دوبارہ وہی سکون اور محبت واپس لا سکتے ہیں جو ایک مثالی خاندان کا خاصہ ہے۔`
    }
  };

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      
      if (specialContent[topic]) {
        setContent(specialContent[topic].text);
        setImageUrl(specialContent[topic].img);
        await new Promise(r => setTimeout(r, 1500));
        setLoading(false);
        return;
      }

      const prompt = `براہ کرم عنوان: "${topic}" پر ایک جامع، پیشہ ورانہ اور روحانی طور پر حوصلہ افزا مضمون اردو میں لکھیں۔ مواد کو ہیڈنگز اور بلٹ پوائنٹس کے ساتھ ترتیب دیں۔ لہجہ انتہائی احترام والا اور پر امید ہونا چاہیے۔`;
      
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
    <div className="pt-32 pb-20 bg-[#fdfcf9] min-h-screen" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-4 text-amber-800 font-black mb-10 hover:gap-6 transition-all group font-arabic text-2xl"
        >
          <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          واپس ہوم پیج پر جائیں
        </button>

        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-amber-50">
          {/* Header */}
          <div className="bg-spiritual-gradient p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-[150px]"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[150px]"></div>
            </div>
            <span className="relative z-10 inline-block px-6 py-2 bg-black/30 text-yellow-300 text-xs font-black tracking-[0.4em] uppercase rounded-full border border-white/20 mb-8 font-arabic">
              روحانی معلومات کا خزانہ
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white relative z-10 mb-8 leading-tight font-arabic tracking-tight drop-shadow-xl">{topic}</h1>
            <div className="w-32 h-2.5 bg-yellow-400 mx-auto rounded-full relative z-10 shadow-2xl"></div>
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="w-full h-auto max-h-[600px] overflow-hidden relative group">
              <img 
                src={imageUrl} 
                alt={topic} 
                className={`w-full h-full object-cover transition-all duration-1000 ${loading ? 'blur-md brightness-50' : 'blur-0 brightness-100'}`}
              />
              {loading && (
                <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
                  <div className="w-full h-2 bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,1)] absolute animate-[scan_2s_linear_infinite]"></div>
                </div>
              )}
            </div>
          )}

          {/* Content Area */}
          <div className="p-10 md:p-24 text-right">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 animate-in fade-in duration-500">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <div className="absolute inset-0 border-[6px] border-amber-50 rounded-full"></div>
                  <div className="absolute inset-0 border-[6px] border-t-amber-600 rounded-full animate-spin"></div>
                  <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-moon text-amber-600 text-5xl animate-pulse"></i>
                  </div>
                </div>
                <h3 className="text-amber-950 font-black mt-12 text-4xl font-arabic">صفحہ کی ترتیب نو کی جا رہی ہے...</h3>
              </div>
            ) : (
              <div className="prose prose-amber lg:prose-2xl max-w-none text-slate-800 leading-[2.5] font-arabic animate-in fade-in duration-1000">
                {content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() ? (
                    <div key={idx} className="mb-10 last:mb-0">
                      {paragraph.startsWith('#') ? (
                        <h2 className={`${paragraph.startsWith('##') ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'} font-black text-amber-950 mt-12 mb-8 border-r-8 border-amber-500 pr-8 text-right`}>
                          {paragraph.replace(/#/g, '').trim()}
                        </h2>
                      ) : (
                        <p className="text-2xl md:text-3xl font-medium leading-relaxed opacity-90 text-right">
                          {paragraph}
                        </p>
                      )}
                    </div>
                  ) : <div key={idx} className="h-6" />
                ))}
              </div>
            )}

            {/* CTA */}
            {!loading && (
              <div className="mt-20 pt-20 border-t-4 border-amber-50">
                <div className="bg-gradient-to-br from-emerald-950 via-amber-950 to-yellow-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 p-12 text-yellow-500/10 text-[12rem] -rotate-12 select-none">
                    <i className="fa-solid fa-star-and-crescent"></i>
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="flex-1 text-center md:text-right">
                      <h4 className="text-4xl md:text-6xl font-black text-white mb-6 font-arabic">کیا آپ کا مسئلہ مختلف ہے؟</h4>
                      <p className="text-yellow-100/80 text-2xl md:text-3xl leading-relaxed font-arabic">
                         <strong>{topic}</strong> کے بارے میں نجی مشاورت اور خاص روحانی حل کے لیے ہمارے ماہرین سے براہ راست رابطہ کریں۔
                      </p>
                    </div>
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-6 px-16 py-8 bg-yellow-500 hover:bg-yellow-400 text-amber-950 font-black rounded-[2.5rem] transition-all shadow-2xl active:scale-95 text-3xl font-arabic"
                    >
                      <i className="fa-brands fa-whatsapp text-4xl"></i>
                      واٹس ایپ کریں
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

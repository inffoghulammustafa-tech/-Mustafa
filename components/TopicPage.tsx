
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

  // The "System" - Predefined high-quality Urdu content
  const specialContent: Record<string, { text: string, img: string }> = {
    'Free Istikhara': {
      img: 'https://qiratquran.com/wp-content/uploads/2025/10/dua-e-istikhara.webp',
      text: `# فری استخارہ
اللہ تعالیٰ سے اپنے معاملات میں بہتری مانگنا ہی استخارہ ہے۔
استخارہ سنتِ نبوی ہے جس کے ذریعے بندہ اللہ تعالیٰ سے اپنے معاملے میں خیر کا طلب گار ہوتا ہے۔

## استخارہ کیوں ضروری ہے؟
اپنی زندگی کے اہم فیصلے جیسے شادی، کاروبار یا سفر سے قبل اللہ کی مرضی جاننا سکون کا باعث بنتا ہے۔

## ہمارا طریقہ کار
ہم مکمل رازداری کے ساتھ آپ کے لیے استخارہ کرتے ہیں اور آپ کو صحیح قرآنی رہنمائی فراہم کرتے ہیں۔`
    },
    'Love Marriage': {
      img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200',
      text: `# پسند کی شادی (Love Marriage)
شادی ایک مقدس رشتہ ہے، اس میں آنے والی رکاوٹیں ختم کریں۔
اگر آپ پسند کی شادی کرنا چاہتے ہیں لیکن گھریلو یا معاشرتی رکاوٹیں حائل ہیں تو مایوس نہ ہوں۔

## رکاوٹوں کا حل
ماں باپ کو منانے کے لیے خاص دعائیں اور رکاوٹیں دور کرنے کے وظائف فراہم کیے جاتے ہیں۔

## نوری علم کا کرشمہ
نوری علم کے ذریعے دلوں میں محبت پیدا کی جا سکتی ہے تاکہ آپ کی ازدواجی زندگی خوشحال ہو سکے۔`
    },
    'Black Magic Help': {
      img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1200',
      text: `# کالے جادو کا مکمل توڑ
قرآنی آیات کے ذریعے ہر قسم کے جادو اور بندش کا خاتمہ۔
اگر آپ کا کاروبار بند ہے یا صحت مسلسل خراب رہتی ہے تو یہ جادو کے اثرات ہو سکتے ہیں۔

## نوری علاج
ہم صرف قرآنی کلام اور نوری حصار کے ذریعے علاج کرتے ہیں جو کہ مکمل طور پر جائز اور شرعی ہے۔

## مستقل تحفظ
علاج کے بعد آپ کو خاص حفاظتی وظائف دیے جاتے ہیں تاکہ دشمن دوبارہ نقصان نہ پہنچا سکے۔`
    },
    'Family Problems': {
      img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200',
      text: `# گھریلو ناچاقی اور جھگڑوں کا حل
گھر کے ماحول کو دوبارہ پرسکون اور محبت بھرا بنائیں۔
میاں بیوی کی ناچاقی ہو یا ساس بہو کے جھگڑے، روحانی حل موجود ہے۔

## محبت اور اتفاق
خاص قرآنی نقش اور دم کے ذریعے گھر کے افراد میں الفت پیدا کی جاتی ہے۔

## سکونِ قلب
اللہ کے ذکر اور مخصوص دعاؤں سے آپ کا گھر جنت کا نمونہ بن سکتا ہے۔`
    },
    'Dolat': {
      img: 'https://images.unsplash.com/photo-1518458028434-a23ad7365194?auto=format&fit=crop&q=80&w=1200',
      text: `# رزق میں برکت اور فراوانی
کاروباری بندش کا خاتمہ اور دولت میں برکت کے وظائف۔
اگر آپ مالی تنگی کا شکار ہیں یا آپ کے رزق میں برکت نہیں رہی تو قرآنی عمل آزمائیں۔

## بندشِ رزق کا توڑ
حاسدین کی نظرِ بد یا جادو کی وجہ سے لگی بندشوں کو دور کریں۔

## برکت والا عمل
خاص وظائف جو اللہ کے فضل سے آپ کے دروازے رزق کے لیے کھول دیں گے۔`
    },
    'health Taweez': {
      img: 'https://images.unsplash.com/photo-1505751172107-5739a0077203?auto=format&fit=crop&q=80&w=1200',
      text: `# شفائے کاملہ اور صحت کے تعویذ
دیرینہ بیماریوں اور نفسیاتی مسائل کا روحانی علاج۔
اگر دوا کام نہیں کر رہی تو اللہ کے کلام سے مدد لیں۔

## دم اور نقش
قرآنی آیات سے تیار کردہ خاص نقوش جو شفاء کا باعث بنتے ہیں۔

## ذہنی سکون
ڈیپریشن، خوف اور بے چینی کا مکمل روحانی حل۔`
    },
    'Muhabbat': {
      img: 'https://images.unsplash.com/photo-1516589174184-c685ca33d2b0?auto=format&fit=crop&q=80&w=1200',
      text: `# تسخیرِ قلب اور جائز محبت
جائز مقصد کے لیے کسی کے دل میں جگہ پیدا کریں۔
میاں بیوی میں محبت بڑھانے یا بچھڑے ہوئے کو ملانے کا روحانی عمل۔

## حب کا عمل
قرآنی نوری علم کے ذریعے جائز محبت کے لیے خاص دعائیں اور وظائف۔

## رشتوں میں بہتری
خونی رشتوں اور دوستی میں آئی دراڑیں ختم کرنے کا حل۔`
    },
    'Rohani Ilaj': {
      img: 'https://images.unsplash.com/photo-1594950195709-a14f66c242d7?auto=format&fit=crop&q=80&w=1200',
      text: `# مکمل روحانی علاج (Rohani Ilaj)
ہر مشکل کا حل اللہ کے کلام میں موجود ہے۔
ہم آپ کو قرآن و سنت کے مطابق روحانی رہنمائی فراہم کرتے ہیں۔

## ہمارا مقصد
انسانیت کی خدمت اور لوگوں کو شرک سے بچا کر نوری علم کی طرف لانا۔

## ہر مسئلے کا حل
چاہے وہ دنیاوی ہو یا روحانی، ہم سے رجوع کریں اور فی سبیل اللہ مشورہ لیں۔`
    }
  };

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const systemTopic = Object.keys(specialContent).find(k => k.toLowerCase() === topic.toLowerCase());

      if (systemTopic) {
        setContent(specialContent[systemTopic].text);
        setImageUrl(specialContent[systemTopic].img);
        await new Promise(r => setTimeout(r, 800));
        setLoading(false);
        return;
      }

      try {
        const prompt = `براہ کرم عنوان: "${topic}" پر ایک جامع، پیشہ ورانہ اور روحانی طور پر حوصلہ افزا مضمون اردو میں لکھیں۔ مواد کو ہیڈنگز اور بلٹ پوائنٹس کے ساتھ ترتیب دیں۔ لہجہ انتہائی احترام والا اور پر امید ہونا چاہیے۔`;
        const [textResult, imageResult] = await Promise.all([
          getSpiritualGuidance(prompt),
          !initialImage ? generateImageForTopic(topic) : Promise.resolve(null)
        ]);
        setContent(textResult);
        if (!initialImage && imageResult) setImageUrl(imageResult);
      } catch (err) {
        setContent(`# ${topic}\nمعذرت، اس وقت مواد لوڈ کرنے میں دشواری ہو رہی ہے۔ براہ کرم واٹس ایپ پر رابطہ کریں۔`);
      }
      setLoading(false);
    };
    fetchContent();
  }, [topic, initialImage]);

  return (
    <div className="pt-32 pb-20 spiritual-radiance min-h-screen" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="flex items-center gap-4 text-emerald-900 font-black mb-10 hover:gap-6 transition-all font-arabic text-2xl group">
          <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
          واپس ہوم پیج پر جائیں
        </button>

        <div className="bg-glow-surface rounded-[3rem] aura-glow overflow-hidden border border-yellow-200/50">
          <div className="bg-[#064e3b] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
            <span className="relative z-10 inline-block px-6 py-2 bg-black/20 text-yellow-300 text-xs font-black tracking-widest uppercase rounded-full mb-8 font-arabic">
              روحانی رہنمائی و مشورہ
            </span>
            <h1 className="relative z-10 text-5xl md:text-7xl font-black text-white mb-8 leading-tight font-arabic">{topic}</h1>
            <div className="relative z-10 w-24 h-2 bg-yellow-400 mx-auto rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
          </div>

          {imageUrl && (
            <div className="w-full h-auto max-h-[500px] overflow-hidden relative border-b-4 border-emerald-900/10">
              <img src={imageUrl} alt={topic} className={`w-full h-full object-cover transition-all duration-1000 ${loading ? 'blur-md scale-110' : 'blur-0 scale-100'}`} />
              {loading && <div className="absolute inset-0 z-20 overflow-hidden bg-black/10"><div className="w-full h-1.5 bg-yellow-400 absolute animate-[scan_2.5s_linear_infinite]"></div></div>}
            </div>
          )}

          <div className="p-10 md:p-20 text-right">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
                <h3 className="text-emerald-900 font-bold mt-8 text-2xl font-arabic">معلومات تلاش کی جا رہی ہیں...</h3>
              </div>
            ) : (
              <div className="prose prose-emerald lg:prose-2xl max-w-none text-slate-800 font-arabic">
                {content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() ? (
                    <div key={idx} className="mb-8">
                      {paragraph.startsWith('#') ? (
                        <h2 className={`${paragraph.startsWith('##') ? 'text-3xl md:text-4xl' : 'text-4xl md:text-6xl'} font-black text-emerald-900 mb-6 border-r-4 border-yellow-400 pr-6`}>
                          {paragraph.replace(/#/g, '').trim()}
                        </h2>
                      ) : (
                        <p className="text-2xl md:text-3xl leading-[1.8] opacity-90">
                          {paragraph}
                        </p>
                      )}
                    </div>
                  ) : null
                ))}
              </div>
            )}

            {!loading && (
              <div className="mt-16 pt-16 border-t-2 border-emerald-50">
                <div className="bg-[#022c22] rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 text-white text-9xl -rotate-12"><i className="fa-solid fa-star-and-crescent"></i></div>
                  <h4 className="relative z-10 text-3xl md:text-5xl font-black text-white mb-6 font-arabic tracking-tight">ابھی حل تلاش کریں</h4>
                  <p className="relative z-10 text-emerald-100/70 text-xl md:text-2xl mb-10 font-arabic">
                    مزید تفصیلات اور نجی مشاورت کے لیے ہمارے ماہر سے واٹس ایپ پر بات کریں۔
                  </p>
                  <a href="https://wa.me/923000000000" className="relative z-10 inline-flex items-center gap-5 px-12 py-6 bg-yellow-400 hover:bg-yellow-300 text-emerald-950 font-black rounded-2xl transition-all shadow-xl text-2xl font-arabic group">
                    <i className="fa-brands fa-whatsapp text-3xl group-hover:rotate-12 transition-transform"></i>
                    واٹس ایپ پر رابطہ کریں
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

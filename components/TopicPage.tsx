
import React, { useEffect, useState } from 'react';
import { getSpiritualGuidance } from '../services/geminiService';

interface TopicPageProps {
  topic: string;
  onBack: () => void;
}

const TopicPage: React.FC<TopicPageProps> = ({ topic, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const prompt = `Write a comprehensive, professional, and spiritually uplifting article for a website about the topic: "${topic}". 
      Explain what it is, its significance in spiritual healing (Rohani Ilaj), common symptoms or challenges associated with it, 
      and how it can be addressed through Quranic guidance, Duas, and spiritual exercises. 
      Structure the response with headings and bullet points. 
      Ensure the tone is respectful and hopeful. This content is for internal educational use on a spiritual healing portal.`;
      
      const result = await getSpiritualGuidance(prompt);
      setContent(result);
      setLoading(false);
    };

    fetchContent();
  }, [topic]);

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-700 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
          Back to Home
        </button>

        <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-emerald-900 p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-400 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600 rounded-full blur-[120px]"></div>
            </div>
            <span className="relative z-10 inline-block px-5 py-1.5 bg-emerald-800/40 text-emerald-300 text-xs font-black tracking-[0.3em] uppercase rounded-full border border-emerald-700/50 mb-8">
              Knowledge Repository
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white relative z-10 mb-8 leading-tight tracking-tight">{topic}</h1>
            <div className="w-24 h-2 bg-emerald-400 mx-auto rounded-full relative z-10 shadow-[0_0_20px_rgba(52,211,153,0.5)]"></div>
          </div>

          {/* Content Area */}
          <div className="p-10 md:p-20">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-32">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 border-[6px] border-emerald-50 rounded-full"></div>
                  <div className="absolute inset-0 border-[6px] border-t-emerald-600 rounded-full animate-spin"></div>
                </div>
                <h3 className="text-emerald-950 font-black mt-12 text-2xl animate-pulse">Retrieving Wisdom...</h3>
                <p className="text-gray-400 mt-3 text-sm font-medium tracking-wide uppercase">Processing Rohani Knowledge base</p>
              </div>
            ) : (
              <div className="prose prose-emerald lg:prose-2xl max-w-none text-gray-700 leading-loose">
                {content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() ? (
                    <div key={idx} className="mb-8 last:mb-0">
                      {paragraph.startsWith('#') ? (
                        <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-12 mb-6 border-l-8 border-emerald-500 pl-6">
                          {paragraph.replace(/#/g, '').trim()}
                        </h2>
                      ) : (
                        <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">
                          {paragraph}
                        </p>
                      )}
                    </div>
                  ) : <div key={idx} className="h-6" />
                ))}
              </div>
            )}

            {/* Personalized Guidance Section */}
            {!loading && (
              <div className="mt-20 pt-20 border-t-2 border-emerald-50">
                <div className="bg-emerald-950 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-8 text-emerald-800 text-9xl opacity-20 rotate-12 select-none">
                    <i className="fa-solid fa-star-and-crescent"></i>
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-3xl md:text-4xl font-black text-white mb-4">Specific Case Study?</h4>
                      <p className="text-emerald-200 text-xl leading-relaxed">
                        Every situation is unique. For private consultation and a tailored spiritual solution for <strong>{topic}</strong>, connect with our scholars directly.
                      </p>
                    </div>
                    <a 
                      href="https://wa.me/923000000000" 
                      className="inline-flex items-center gap-4 px-12 py-6 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black rounded-3xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] active:scale-95 text-xl whitespace-nowrap"
                    >
                      <i className="fa-brands fa-whatsapp text-3xl"></i>
                      Consult via WhatsApp
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

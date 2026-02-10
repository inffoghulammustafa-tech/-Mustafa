
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
      Explain what it is, its spiritual context in Rohani Ilaj, and how it can be addressed through Quranic guidance and prayers. 
      Use Markdown formatting (headers, bullet points). Keep the tone compassionate. 
      Since this is for RohaniIlajSite.com, maintain high quality standards.`;
      
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

        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-emerald-800 p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-400 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-600 rounded-full blur-[100px]"></div>
            </div>
            <span className="relative z-10 inline-block px-4 py-1 bg-emerald-700/50 text-emerald-200 text-xs font-bold tracking-widest uppercase rounded-full border border-emerald-600 mb-6">
              Spiritual Guide
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white relative z-10 mb-6 leading-tight">{topic}</h1>
            <div className="w-24 h-1.5 bg-emerald-400 mx-auto rounded-full relative z-10 shadow-lg shadow-emerald-900/50"></div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-16">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 border-4 border-emerald-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-t-emerald-700 rounded-full animate-spin"></div>
                </div>
                <p className="text-emerald-900 font-bold mt-8 text-xl animate-pulse">Consulting Scholars...</p>
                <p className="text-gray-400 mt-2 text-sm">Gathering spiritual wisdom for {topic}</p>
              </div>
            ) : (
              <div className="prose prose-emerald lg:prose-xl max-w-none text-gray-700 leading-relaxed">
                {content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() ? (
                    <p key={idx} className="mb-6 last:mb-0">
                      {paragraph.startsWith('#') ? (
                        <span className="text-2xl font-bold text-emerald-900 block mt-8 mb-4">
                          {paragraph.replace(/#/g, '').trim()}
                        </span>
                      ) : paragraph}
                    </p>
                  ) : <div key={idx} className="h-4" />
                ))}
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-16 pt-16 border-t border-gray-100">
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-12 border border-emerald-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-emerald-100 text-8xl opacity-30 select-none">
                  <i className="fa-solid fa-kaaba"></i>
                </div>
                <div className="relative z-10 text-center md:text-left md:flex items-center justify-between gap-8">
                  <div className="mb-8 md:mb-0">
                    <h4 className="text-2xl font-black text-emerald-900 mb-3">Request Personal Istikhara</h4>
                    <p className="text-emerald-700 text-lg max-w-md">
                      For a detailed solution and private consultation regarding <strong>{topic}</strong>, speak directly with our Rohani experts.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/923000000000" 
                    className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-900/20 active:scale-95 whitespace-nowrap text-lg"
                  >
                    <i className="fa-brands fa-whatsapp text-2xl"></i>
                    Get Expert Solution
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;

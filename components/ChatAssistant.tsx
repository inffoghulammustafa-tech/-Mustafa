
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types.ts';
import { getSpiritualGuidance } from '../services/geminiService.ts';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Assalamu Alaikum! I am your Rohani assistant. How can I help you find peace today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    const newHistory = [...messages, userMsg];
    
    setMessages(newHistory);
    setInput('');
    setIsTyping(true);

    // Pass the entire history for context-aware AI replies
    const aiResponse = await getSpiritualGuidance(newHistory);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse, timestamp: new Date() }]);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      {/* Toggle Button - Matching the teal color from the user's screenshot */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-full flex items-center justify-center text-white shadow-[0_15px_40px_rgba(13,148,136,0.3)] transition-all transform hover:scale-110 active:scale-95 animate-soft-pulse ${isOpen ? 'bg-red-500' : 'bg-[#0d9488]'}`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-3xl`}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[380px] sm:w-[450px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl border border-teal-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
          {/* Header */}
          <div className="bg-[#0d9488] p-6 flex items-center gap-4 relative">
             <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
            <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-inner relative z-10">
              <i className="fa-solid fa-mosque"></i>
            </div>
            <div className="relative z-10">
              <h4 className="text-white font-black leading-none text-lg">Rohani Advisor AI</h4>
              <p className="text-teal-100 text-xs mt-1.5 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                Always Available for Guidance
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-auto text-teal-100 hover:text-white transition-colors relative z-10">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#f8fafc]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[85%] p-5 rounded-[2rem] text-sm md:text-base leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-[#0d9488] text-white rounded-br-none font-bold' 
                    : 'bg-white text-slate-800 rounded-bl-none border border-slate-100 font-arabic text-right text-lg'
                  }
                `}
                dir={msg.role === 'model' ? 'rtl' : 'ltr'}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-5 rounded-[2rem] rounded-bl-none shadow-sm">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex gap-3 bg-slate-50 p-2 rounded-3xl border border-slate-200">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for spiritual advice..."
                className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-3 text-sm font-bold text-slate-700 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-12 h-12 bg-[#0d9488] text-white rounded-2xl flex items-center justify-center hover:bg-teal-700 transition-all shadow-md active:scale-90 disabled:opacity-50 disabled:scale-100"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
          <div className="px-6 pb-4 bg-white text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
            AI can provide general guidance. For personalized Istikhara, use WhatsApp.
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;

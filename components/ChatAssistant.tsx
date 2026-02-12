
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types.ts';
import { getSpiritualGuidance } from '../services/geminiService.ts';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Assalamu Alaikum! I am your Rohani assistant. How can I help you today?', timestamp: new Date() }
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
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const aiResponse = await getSpiritualGuidance(input);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse, timestamp: new Date() }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-red-500' : 'bg-emerald-600'}`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl`}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
          {/* Header */}
          <div className="bg-emerald-700 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
              <i className="fa-solid fa-moon"></i>
            </div>
            <div>
              <h4 className="text-white font-bold leading-none">Rohani Advisor</h4>
              <p className="text-emerald-200 text-xs mt-1">Available to guide you</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${msg.role === 'user' ? 'bg-emerald-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your spiritual query..."
              className="flex-1 bg-gray-100 border-none focus:ring-2 focus:ring-emerald-500 rounded-xl px-4 py-2 text-sm outline-none"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-emerald-700 text-white rounded-xl flex items-center justify-center hover:bg-emerald-800 transition-colors"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
          <div className="px-4 pb-2 bg-white text-[10px] text-center text-gray-400">
            General guidance only. For specific Istikhara, use WhatsApp.
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
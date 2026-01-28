import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, X, Globe } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

type Language = 'english' | 'tamil' | 'malayalam';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('english');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "SYSTEM_ONLINE: Welcome to BNC Neural Interface. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const welcomeMessages = {
    english: "SYSTEM_ONLINE: Welcome to BNC Neural Interface. How can I help you today?",
    tamil: "அமைப்பு ஆன்லைன்: BNC நியூரல் இடைமுகத்திற்கு வரவேற்கிறோம். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    malayalam: "സിസ്റ്റം ഓൺലൈൻ: BNC ന്യൂറൽ ഇന്റർഫേസിലേക്ക് സ്വാഗതം. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും?"
  };

  const placeholders = {
    english: "TYPE_QUERY...",
    tamil: "கேள்வி டைப் செய்யவும்...",
    malayalam: "ചോദ്യം ടൈപ്പ് ചെയ്യുക..."
  };

  const typingMessages = {
    english: "DATA_FETCHING...",
    tamil: "தரவு பெறுகிறது...",
    malayalam: "ഡാറ്റ ലഭ്യമാക്കുന്നു..."
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Update welcome message when language changes
    setMessages([{ role: 'model', content: welcomeMessages[language] }]);
  }, [language]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    const response = await geminiService.getBikeAdvice([...messages, userMsg], language);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-black text-white rounded-none flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-all border-4 border-white group relative"
          >
            <Bot className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="w-[400px] h-[580px] bg-white rounded-none overflow-hidden shadow-2xl flex flex-col border border-black/10"
          >
            {/* Header */}
            <div className="p-4 bg-emerald-600 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Bot className="text-white w-6 h-6" />
                <div>
                  <h4 className="text-sm font-heading font-black text-white leading-none">BNC_NEURAL_LINK</h4>
                  <span className="text-[10px] text-white/80 font-bold tracking-widest animate-pulse">STATUS: CONNECTED</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:scale-110 transition-transform"><X size={22} /></button>
            </div>

            {/* Language Selector */}
            <div className="p-3 bg-slate-100 border-b border-black/5 flex items-center gap-2">
              <Globe size={18} className="text-emerald-600" />
              <div className="flex gap-2 flex-1">
                {(['english', 'tamil', 'malayalam'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`flex-1 px-3 py-2 text-xs font-heading font-black tracking-widest uppercase transition-all ${language === lang
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-black hover:bg-emerald-50'
                      }`}
                  >
                    {lang === 'english' ? 'EN' : lang === 'tamil' ? 'தமிழ்' : 'മലയാളം'}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-slate-50 font-heading text-xs tracking-wide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-3 shadow-sm ${msg.role === 'user'
                    ? 'bg-black text-white'
                    : 'bg-white text-black border-l-2 border-emerald-500'
                    }`}>
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-emerald-600 px-4 py-3 border-l-2 border-emerald-500 animate-pulse">
                    {typingMessages[language]}
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="px-4 py-2 bg-slate-100 border-t border-black/5">
              <div className="flex gap-2 overflow-x-auto">
                {language === 'english' && (
                  <>
                    <button onClick={() => setInput("What is the price of Challenger?")} className="px-3 py-2 bg-white text-[10px] font-heading font-bold tracking-widest hover:bg-emerald-50 transition-all whitespace-nowrap">PRICE?</button>
                    <button onClick={() => setInput("Tell me about Etrol battery")} className="px-3 py-2 bg-white text-[10px] font-heading font-bold tracking-widest hover:bg-emerald-50 transition-all whitespace-nowrap">BATTERY?</button>
                    <button onClick={() => setInput("Compare Perfetto and Challenger")} className="px-3 py-2 bg-white text-[10px] font-heading font-bold tracking-widest hover:bg-emerald-50 transition-all whitespace-nowrap">COMPARE</button>
                  </>
                )}
                {language === 'tamil' && (
                  <>
                    <button onClick={() => setInput("சேலஞ்சர் விலை என்ன?")} className="px-3 py-2 bg-white text-[10px] font-heading font-bold hover:bg-emerald-50 transition-all whitespace-nowrap">விலை?</button>
                    <button onClick={() => setInput("எட்ரோல் பேட்டரி பற்றி சொல்லுங்கள்")} className="px-3 py-2 bg-white text-[10px] font-heading font-bold hover:bg-emerald-50 transition-all whitespace-nowrap">பேட்டரி?</button>
                    <button onClick={() => setInput("பெர்ஃபெட்டோ மற்றும் சேலஞ்சர் ஒப்பிடுக")} className="px-3 py-2 bg-white text-[10px] font-heading font-bold hover:bg-emerald-50 transition-all whitespace-nowrap">ஒப்பீடு</button>
                  </>
                )}
                {language === 'malayalam' && (
                  <>
                    <button onClick={() => setInput("ചലഞ്ചറിന്റെ വില എന്താണ്?")} className="px-3 py-2 bg-white text-[10px] font-heading font-bold hover:bg-emerald-50 transition-all whitespace-nowrap">വില?</button>
                    <button onClick={() => setInput("എട്രോൾ ബാറ്ററിയെക്കുറിച്ച് പറയൂ")} className="px-3 py-2 bg-white text-[10px] font-heading font-bold hover:bg-emerald-50 transition-all whitespace-nowrap">ബാറ്ററി?</button>
                    <button onClick={() => setInput("പെർഫെറ്റോയും ചലഞ്ചറും താരതമ്യം ചെയ്യുക")} className="px-3 py-2 bg-white text-[10px] font-heading font-bold hover:bg-emerald-50 transition-all whitespace-nowrap">താരതമ്യം</button>
                  </>
                )}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-black/5 flex gap-3 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={placeholders[language]}
                className="flex-1 bg-slate-100 border-none px-4 py-3 text-xs font-heading text-black focus:ring-1 focus:ring-emerald-500 outline-none tracking-wide"
              />
              <button onClick={handleSend} className="bg-black text-white px-4 hover:bg-emerald-600 transition-all">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot;
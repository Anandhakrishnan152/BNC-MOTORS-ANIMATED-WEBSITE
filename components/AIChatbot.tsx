import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, X } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "SYSTEM_ONLINE: Welcome to BNC Neural Interface. Query requested." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    const response = await geminiService.getBikeAdvice([...messages, userMsg]);
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
            className="w-16 h-16 bg-black text-white rounded-none flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-all border-4 border-white group"
          >
            <Bot className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="w-[380px] h-[520px] bg-white rounded-none overflow-hidden shadow-2xl flex flex-col border border-black/10"
          >
            {/* Emerald Header */}
            <div className="p-4 bg-emerald-600 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Bot className="text-white w-5 h-5" />
                <div>
                  <h4 className="text-[10px] font-heading font-black text-white leading-none">BNC_NEURAL_LINK</h4>
                  <span className="text-[7px] text-white/80 font-bold tracking-widest animate-pulse">STATUS: CONNECTED</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:scale-110 transition-transform"><X size={20} /></button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-slate-50 font-heading text-[9px] tracking-widest uppercase">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-3 shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-black text-white' 
                      : 'bg-white text-black border-l-2 border-emerald-500'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-emerald-600 animate-pulse">DATA_FETCHING...</div>}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-black/5 flex gap-3 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="TYPE_QUERY..."
                className="flex-1 bg-slate-100 border-none px-4 py-2 text-[9px] font-heading text-black focus:ring-1 focus:ring-emerald-500 outline-none tracking-widest uppercase"
              />
              <button onClick={handleSend} className="bg-black text-white px-4 hover:bg-emerald-600 transition-all">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot;
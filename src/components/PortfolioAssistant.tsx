import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, HelpCircle } from 'lucide-react';
import { CASE_STUDIES, CAREER_TIMELINE, CLIENT_INDUSTRIES } from '../data/portfolioData';
import { VERIFIED_CERTIFICATES } from '../data/certificates';

interface PortfolioAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface Message {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
}

export const PortfolioAssistant: React.FC<PortfolioAssistantProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Hello. I am Aayush Jaiswal\'s Portfolio Assistant, grounded strictly in his verified case studies, career timeline, and 51 certified credentials. How can I assist you with his performance and growth background?',
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedQuestions = [
    'How did you scale Yuri Woori 20x?',
    'What was your B2B lead generation result at Guardian Assessment?',
    'What AI and Claude certifications do you have?',
    'What is your measurement & analytics approach (GA4, CAPI)?',
    'How do I contact Aayush?',
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || inputValue;
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputValue('');

    // Generate accurate, grounded response from Aayush's actual verified profile
    setTimeout(() => {
      const q = textToSend.toLowerCase();
      let reply = '';

      if (q.includes('yuri') || q.includes('20x') || q.includes('skincare')) {
        const c = CASE_STUDIES[0];
        reply = `**Yuri Woori (D2C Korean Skincare):**\n` +
          `• Scaled ad spend 20× from ₹50K to ₹10L+/month while maintaining a **4.2× blended ROAS** (Meta 4.4×, Google 3.8×, Myntra 5.1×).\n` +
          `• Generated **₹42L+ monthly attributed revenue**.\n` +
          `• Transitioned to Advantage+ Shopping Campaigns with 50+ weekly creative variations tested and automated WhatsApp SKU depletion replenishment via Interakt.`;
      } else if (q.includes('guardian') || q.includes('b2b') || q.includes('mql') || q.includes('saas')) {
        const c = CASE_STUDIES[2];
        reply = `**Guardian Assessment (B2B SaaS / ISO Compliance):**\n` +
          `• Built digital acquisition infrastructure from zero inside the TNV ecosystem.\n` +
          `• Generated **120+ qualified MQLs/month** at an **18% lead conversion rate**.\n` +
          `• Lifted organic search traffic from 8K to 11.2K monthly sessions (+40% organic expansion) via targeted SEO and compliance toolkits.`;
      } else if (q.includes('svariya') || q.includes('merittype') || q.includes('jewellery') || q.includes('measurement')) {
        reply = `**Svariya / MERITTYPE (Demi-fine Jewellery):**\n` +
          `• 3-month contractual growth build with AOV ₹1,500.\n` +
          `• Prioritized the measurement layer before scaling spend: built GA4 custom events, GTM dataLayer containers, Meta CAPI server-side routing, and Google Merchant Center feeds from zero.\n` +
          `• Stabilized monthly spend at ₹3–4L delivering **₹12–15L monthly revenue** at **3.5–4× ROAS** with 100% telemetry verification.`;
      } else if (q.includes('ai') || q.includes('claude') || q.includes('mcp') || q.includes('certif')) {
        reply = `**AI & Verified Certifications:**\n` +
          `Aayush holds **51 verified credentials**, including:\n` +
          `• **Anthropic**: Claude for Enterprise & Automation, Prompt Engineering, Model Context Protocol (MCP) Architecture, and Building Agentic Workflows with Claude.\n` +
          `• **Google**: AI-Powered Performance Ads, Google Ads Search, Display, Video, Measurement & GA4.\n` +
          `• **Semrush**: Technical SEO, Keyword Research, PPC Automation, and Digital Marketing Strategy.\n` +
          `• **Meta**: Certified Media Buying Professional & Digital Marketing Associate.\n` +
          `• **Professional**: MS-CIT (MSBTE/MKCL) and ICAI/WIRC (GMCS, Ethics, ITT).`;
      } else if (q.includes('experience') || q.includes('career') || q.includes('resume') || q.includes('background')) {
        reply = `**Aayush Jaiswal's Career Overview:**\n` +
          `• **~5 years** of digital marketing experience across D2C, B2C marketplaces, B2B SaaS, and FMCG.\n` +
          `• **Recent Roles**: Performance & Growth Manager at MERITTYPE / Svariya; Digital Marketing Lead at TNV Group; Performance Marketing Lead at Accomplish Trades / Yuri Woori; Digital Marketing Executive at Guardian Assessment; Associate at Ursa Minor Consulting (20+ brands); Independent Growth Consultant (34+ named brands).\n` +
          `• You can download or print his official resume anytime using the toolbar button!`;
      } else if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach')) {
        reply = `**Contact Aayush Jaiswal:**\n` +
          `• **Email**: aayushjaiswal246@gmail.com\n` +
          `• **LinkedIn**: linkedin.com/in/aayush-jaiswal-89923435a\n` +
          `• **Location**: Mumbai, India\n` +
          `• Currently open to select performance marketing and full-funnel growth management opportunities.`;
      } else {
        reply = `Aayush Jaiswal is a **Performance & Growth Manager** based in Mumbai with ~5 years of experience across D2C, B2B SaaS, and Marketplaces.\n\n` +
          `Key verified proof points:\n` +
          `• **20× spend scale** on Yuri Woori with **4.2× blended ROAS** (₹42L+/mo attributed revenue)\n` +
          `• **120+ qualified MQLs/mo** at 18% CVR for Guardian Assessment\n` +
          `• **34+ named brands** across 6 industries\n` +
          `• **51 verified certifications** across Google, Semrush, Anthropic, Meta, and ICAI.\n\n` +
          `Would you like to review a specific case study, his 51 certifications, or his career timeline?`;
      }

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    }, 350);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="assistant-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#fffdfa] border border-[#cfcac0] max-w-xl w-full h-[620px] max-h-[90vh] rounded-none shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="bg-[#254d3b] text-[#fffdfa] px-5 py-4 flex items-center justify-between border-b border-[#cfcac0]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#f4f1ea] text-[#254d3b] flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 id="assistant-modal-title" className="font-serif text-lg font-normal leading-tight">
                Portfolio Assistant
              </h3>
              <p className="text-[10px] text-white/70 font-mono">
                Grounded in Aayush Jaiswal's verified records
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close assistant"
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f4f1ea]/50 text-xs">
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-6 h-6 rounded-full bg-[#254d3b] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 leading-relaxed ${
                    isUser
                      ? 'bg-[#151515] text-[#fffdfa] rounded-none'
                      : 'bg-[#fffdfa] text-[#151515] border border-[#cfcac0] shadow-sm whitespace-pre-line'
                  }`}
                >
                  {m.text}
                  <span
                    className={`block text-[9px] font-mono mt-1.5 text-right ${
                      isUser ? 'text-white/50' : 'text-[#6c6a63]'
                    }`}
                  >
                    {m.timestamp}
                  </span>
                </div>

                {isUser && (
                  <div className="w-6 h-6 rounded-full bg-[#9b5c39] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries */}
        <div className="px-4 py-2 bg-[#f4f1ea] border-t border-[#cfcac0] overflow-x-auto">
          <div className="flex items-center gap-1.5 whitespace-nowrap text-[10px]">
            <span className="text-[#6c6a63] font-mono flex items-center gap-1 shrink-0">
              <Sparkles className="w-3 h-3 text-[#9b5c39]" />
              Suggested:
            </span>
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 bg-[#fffdfa] border border-[#cfcac0] hover:border-[#254d3b] hover:text-[#254d3b] text-[#151515] rounded transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#fffdfa] border-t border-[#cfcac0]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Aayush's case studies, skills, certificates..."
              className="flex-1 px-3 py-2 bg-[#f4f1ea]/60 border border-[#cfcac0] text-xs text-[#151515] focus:outline-none focus:border-[#254d3b] font-sans"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="px-4 py-2 bg-[#254d3b] hover:bg-[#1a382a] disabled:opacity-50 text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <span>Ask</span>
              <Send className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

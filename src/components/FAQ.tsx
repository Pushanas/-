import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language, PageView } from '../types';
import { faqList } from '../data';

interface FAQProps {
  lang: Language;
  onNavigate?: (view: PageView) => void;
}

export default function FAQ({ lang, onNavigate }: FAQProps) {
  const [openId, setOpenId] = useState<number | null>(0); // Open first by default
  const isAr = lang === 'ar';

  const toggleFAQ = (index: number) => {
    setOpenId(openId === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0e] relative overflow-hidden border-t border-white/[0.06]" id="faq">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#ff6a00]/10 via-[#d4af37]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <HelpCircle className="w-4 h-4 animate-spin-slow" />
            <span>{isAr ? 'كل ما تريد معرفته' : 'Need Answers?'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight"
          >
            {isAr ? 'الأسئلة الشائعة حول ' : 'Frequently Asked '}
            <span className="bg-gradient-to-r from-[#ff6a00] via-[#ff9e2c] to-[#d4af37] bg-clip-text text-transparent">
              {isAr ? 'فحمة جريل' : 'Questions'}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base mt-4 font-light leading-relaxed"
          >
            {isAr
              ? 'إجابات واضحة وشفافة حول جودة لحومنا البلدي، طرق الطلب السريع، ومواعيد التوصيل.'
              : 'Clear, transparent answers about our daily fresh cuts, lightning ordering, and VIP delivery.'}
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openId === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-gradient-to-b from-[#14141c] to-[#0c0c12] border-[#d4af37]/40 shadow-[0_10px_30px_rgba(212,175,55,0.08)]'
                    : 'bg-[#0f0f15]/80 border-white/[0.08] hover:border-white/[0.18]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#ff6a00] text-white' : 'bg-white/[0.06] text-gray-400'
                    }`}>
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-base sm:text-lg md:text-xl font-semibold text-white tracking-wide">
                      {isAr ? item.question : item.questionEn}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37] rotate-180' : 'border-white/10 text-gray-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-white/[0.06] text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                        <div className="flex gap-3 items-start mt-3">
                          <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                          <p>{isAr ? item.answer : item.answerEn}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Conversion Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#18120c] via-[#1a1610] to-[#121218] border border-[#ff6a00]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              {isAr ? 'لديك سؤال آخر أو استفسار خاص؟' : 'Have another question?'}
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              {isAr ? 'فريق خدمة العملاء وشيف الحاتي متاحون للرد عليك فوراً عبر واتساب.' : 'Our hospitality team is online 24/7 on WhatsApp to assist you.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/201000001600?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D9%81%D8%AD%D9%85%D8%A9%20%D8%AC%D8%B1%D9%8A%D9%84%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D3%AA%D9%81%D8%B3%D8%A7%D8%B1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm flex items-center gap-2.5 shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>{isAr ? 'تحدث مع الشيف واتساب' : 'Chat on WhatsApp'}</span>
            </a>
            {onNavigate && (
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] text-white font-semibold text-sm flex items-center gap-2 border border-white/10 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#d4af37]" />
                <span>{isAr ? 'أرقام الفروع' : 'Call Branches'}</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

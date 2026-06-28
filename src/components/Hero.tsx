import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Language, PageView } from '../types';

interface HeroProps {
  lang: Language;
  onNavigate: (view: PageView) => void;
}

export default function Hero({ lang, onNavigate }: HeroProps) {
  const isAr = lang === 'ar';

  return (
    <section 
      id="home" 
      className="relative w-full h-[90vh] lg:h-screen min-h-[600px] md:min-h-[750px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 box-border select-none bg-[#08080a]"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Background Hero Image - Crisp and Clear */}
      <div className="absolute inset-0 w-full h-full z-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop"
          alt="Fahma Grill World-Class Mixed Grills"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center block"
        />
        {/* Subtle, clean gradient overlay allowing 100% image clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/25 to-black/30 z-10" />
      </div>

      {/* Centered Classic Luxury Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full box-border">
        
        {/* Minimal Luxury Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-[#d4af37]" />
          <span className="text-[#d4af37] tracking-[0.15em] text-xs sm:text-sm font-semibold uppercase font-sans">
            {isAr ? 'أصل المشويات المصرية الفاخرة منذ 1998' : 'AUTHENTIC EGYPTIAN FINE GRILL HOUSE'}
          </span>
          <span className="w-8 h-[1px] bg-[#d4af37]" />
        </motion.div>

        {/* Classic Agency Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-[1.2] tracking-tight mb-8 max-w-4xl"
        >
          {isAr ? (
            <>
              طعم الشواء البلدي الأصيل <br />
              <span className="italic font-normal text-[#e8d59e]">على جمر الفحم الملكي.</span>
            </>
          ) : (
            <>
              The Art of Charcoal <br />
              <span className="italic font-light text-[#e8d59e]">& Prime Egyptian Heritage.</span>
            </>
          )}
        </motion.h1>

        {/* Elegant Minimalist Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-gray-200 font-normal max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow"
        >
          {isAr
            ? 'نُقدم تجربة شواء مصرية استثنائية للحوم البلدي الطازجة 100%، تُشوى بعناية فائقة وتتبيلة الحاتي المتوارثة فوق جمر الفحم الهادئ لدرجة ذوبان لا تُضاهى.'
            : 'An exceptional authentic Egyptian dining experience showcasing daily fresh 100% local prime cuts slowly seared over glowing hardwood embers.'}
        </motion.p>

        {/* Refined CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
        >
          <button
            onClick={() => onNavigate('reservations')}
            className="w-full sm:flex-1 h-14 px-8 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] hover:scale-105 text-[#070709] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer shadow-[0_4px_25px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
          >
            <span>{isAr ? 'احجز طاولة ملكية' : 'Reserve a Table'}</span>
            <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
          </button>

          <button
            onClick={() => onNavigate('menu')}
            className="w-full sm:flex-1 h-14 px-8 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <span>{isAr ? 'المنيو والأسعار' : 'Explore Menu'}</span>
          </button>
        </motion.div>

        {/* Authentic Egyptian Quality Assurances */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-sans font-bold tracking-wider text-gray-300"
        >
          <span>{isAr ? '🥩 لحوم بلدي طازجة 100%' : '🥩 100% LOCAL PRIME CUTS'}</span>
          <span className="text-[#d4af37] hidden sm:inline">•</span>
          <span>{isAr ? '🔥 شواء على فحم نباتي طبيعي' : '🔥 NATURAL HARDWOOD COALS'}</span>
          <span className="text-[#d4af37] hidden sm:inline">•</span>
          <span>{isAr ? '👑 أصول الحاتي منذ 1998' : '👑 AUTHENTIC HATI SINCE 1998'}</span>
          <span className="text-[#d4af37] hidden sm:inline">•</span>
          <span>{isAr ? '⭐ +500 ألف عميل سعيد' : '⭐ +500K HAPPY PATRONS'}</span>
        </motion.div>

      </div>
    </section>
  );
}

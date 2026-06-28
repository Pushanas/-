import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { reviews } from '../data';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';
import { Language } from '../types';

interface ReviewsProps {
  lang: Language;
}

export default function Reviews({ lang }: ReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAr = lang === 'ar';

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[activeIndex];

  return (
    <section id="reviews" className="py-24 bg-[#070709] relative overflow-hidden select-none border-b border-white/10" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Decorative large quote mark */}
      <div className={`absolute top-10 ${isAr ? 'left-10' : 'right-10'} text-[#d4af37]/5 pointer-events-none`}>
        <Quote className="w-80 h-80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#ff6a00] tracking-widest text-xs md:text-sm font-bold mb-3 block uppercase">
            {isAr ? 'تجارب ذواقة حقيقية' : 'Guest Testimonials'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white font-bold">
            {isAr ? 'آراء ضيوفنا الفاخرة' : 'Celebrated Dining Moments'}
          </h2>
        </div>

        {/* Interactive Luxury Carousel Slider */}
        <div className="relative bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: isAr ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isAr ? 40 : -40 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-14 text-center md:text-left"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              <div className="relative shrink-0">
                <img
                  src={activeReview.image}
                  alt={isAr ? activeReview.name : activeReview.nameEn}
                  referrerPolicy="no-referrer"
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-[#d4af37]/40 shadow-[0_0_30px_rgba(212,175,55,0.3)] mx-auto md:mx-0"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black px-3 py-1 rounded-full text-[10px] font-bold tracking-wider shadow-lg whitespace-nowrap">
                  {isAr ? 'ضيف VIP موثق' : 'VERIFIED VIP'}
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-center md:justify-start gap-1.5 mb-6">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400 shadow-sm" />
                  ))}
                </div>

                <p className="text-white/95 font-serif font-light text-lg sm:text-2xl md:text-3xl leading-relaxed mb-8 italic">
                  "{isAr ? activeReview.content : activeReview.contentEn}"
                </p>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <div>
                    <h4 className="font-serif text-[#d4af37] text-xl sm:text-2xl font-bold">
                      {isAr ? activeReview.name : activeReview.nameEn}
                    </h4>
                    <span className="text-xs sm:text-sm text-gray-400 font-medium mt-1 block">
                      {isAr ? activeReview.role : activeReview.roleEn}
                    </span>
                  </div>

                  {/* Pagination Indicators */}
                  <div className="flex items-center justify-center gap-2">
                    {reviews.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          i === activeIndex
                            ? 'w-8 bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.8)]'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Review ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Accessible Controls */}
          <div className="flex items-center justify-center gap-4 mt-12 pt-6 border-t border-white/5">
            <button
              onClick={prevReview}
              className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all cursor-pointer shadow-lg"
              aria-label="Previous Review"
            >
              <ChevronLeft className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
            </button>
            <span className="text-xs font-mono text-gray-400">
              {activeIndex + 1} / {reviews.length}
            </span>
            <button
              onClick={nextReview}
              className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all cursor-pointer shadow-lg"
              aria-label="Next Review"
            >
              <ChevronRight className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

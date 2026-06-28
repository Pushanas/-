import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { reviews } from '../data';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-32 bg-[#070709] relative overflow-hidden select-none">
      {/* Decorative large quote mark */}
      <div className="absolute top-10 right-10 text-primary/5 rotate-180 pointer-events-none">
        <Quote className="w-80 h-80" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary tracking-widest text-xs md:text-sm font-bold mb-3 block uppercase">تجارب حقيقية</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white font-bold">آراء ضيوفنا الفاخرة</h2>
        </div>

        {/* Interactive Luxury Carousel Slider */}
        <div className="relative bg-[#0e0e12] border border-white/[0.08] rounded-[36px] p-8 md:p-16 shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-14 text-center md:text-right"
            >
              <div className="relative shrink-0">
                <img
                  src={reviews[activeIndex].image}
                  alt={reviews[activeIndex].name}
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary/40 shadow-[0_0_30px_rgba(212,175,55,0.3)] mx-auto md:mx-0"
                />
                <div className="absolute -bottom-2 right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 bg-primary text-black px-3 py-1 rounded-full text-[11px] font-bold tracking-wider shadow-lg">
                  VERIFIED VIP
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-center md:justify-start gap-1.5 mb-6">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary shadow-sm" />
                  ))}
                </div>

                <p className="text-white/90 font-serif font-light text-xl md:text-3xl leading-relaxed mb-8 italic">
                  {reviews[activeIndex].content}
                </p>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <div>
                    <h4 className="font-serif text-primary text-2xl font-bold">{reviews[activeIndex].name}</h4>
                    <span className="text-sm text-gray-400 font-medium mt-1 block">{reviews[activeIndex].role}</span>
                  </div>

                  {/* Pagination Indicators */}
                  <div className="flex items-center justify-center gap-2">
                    {reviews.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? 'w-10 bg-primary shadow-[0_0_12px_rgba(212,175,55,0.8)]'
                            : 'w-2.5 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`انتقل إلى التقييم رقم ${i + 1}`}
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
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 active:scale-95 shadow-lg"
              aria-label="التقييم السابق"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <span className="text-xs font-mono text-gray-400">
              {activeIndex + 1} / {reviews.length}
            </span>
            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 active:scale-95 shadow-lg"
              aria-label="التقييم التالي"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

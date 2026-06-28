import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { galleryImages } from '../data';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { Language, PageView } from '../types';

interface GalleryProps {
  lang: Language;
  previewOnly?: boolean;
  onNavigate?: (view: PageView) => void;
}

export default function Gallery({ lang, previewOnly = false, onNavigate }: GalleryProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const isAr = lang === 'ar';

  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImg]);

  const displayedImages = previewOnly ? galleryImages.slice(0, 6) : galleryImages;

  return (
    <section id="gallery" className={`bg-[#070709] relative overflow-hidden select-none ${previewOnly ? 'py-24 border-b border-white/10' : 'pt-32 pb-24 min-h-screen'}`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Subtle background luxury glow */}
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[300px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-[#ff6a00] tracking-widest text-xs md:text-sm font-bold mb-3 block uppercase">
              {isAr ? 'جولة بصرية في عالمنا' : 'Visual Showcase'}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-bold">
              {isAr ? (
                <>لوحات تتحدث عن <span className="text-[#d4af37]">الجودة</span></>
              ) : (
                <>The Art of <span className="text-[#d4af37]">Fine Fire</span></>
              )}
            </h2>
          </div>
          <p className="text-gray-300 max-w-md text-xs sm:text-base leading-relaxed mt-4 md:mt-0 font-light">
            {isAr
              ? 'نظرة عن قرب على فن التحضير والشوي. كل طبق نقدمه هو صياغة بصرية ومذاقية تعكس التزامنا بالكمال.'
              : 'An intimate glimpse into our live-fire kitchens, prime Wagyu cuts, and immersive dark luxury dining atmosphere.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              onClick={() => setSelectedImg(item.url)}
              className={`relative overflow-hidden group rounded-3xl border border-white/10 bg-[#0e0e12] cursor-pointer ${index === 0 || index === 3 ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-square'} shadow-2xl`}
            >
              <img 
                src={item.url} 
                alt={isAr ? item.titleAr : item.title} 
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                <span className="text-[#d4af37] text-xs font-bold tracking-wider uppercase mb-1">
                  {item.category}
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-sm sm:text-base font-serif font-bold truncate pr-2">
                    {isAr ? item.titleAr : item.title}
                  </h4>
                  <span className="text-white text-xs font-bold border border-[#d4af37]/60 bg-black/80 p-2.5 rounded-full shrink-0 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {previewOnly && onNavigate && (
          <div className="mt-16 text-center">
            <button
              onClick={() => onNavigate('gallery')}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 hover:border-[#d4af37] font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <span>{isAr ? 'شاهد المعرض بالكامل' : 'View Full Gallery'}</span>
              <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

      </div>

      {/* Luxury Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 left-6 md:top-10 md:left-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-300 z-50 shadow-2xl"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[85vh] rounded-[32px] overflow-hidden border border-[#d4af37]/40 shadow-[0_0_80px_rgba(212,175,55,0.25)] bg-black cursor-default"
            >
              <img
                src={selectedImg}
                alt="Fahma Grill Zoom"
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[85vh] object-contain block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

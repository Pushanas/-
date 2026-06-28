import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { galleryImages } from '../data';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

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

  return (
    <section id="gallery" className="py-32 bg-[#070709] relative overflow-hidden">
      {/* Subtle background luxury glow */}
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[300px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-primary tracking-widest text-xs md:text-sm font-bold mb-3 block uppercase">جولة بصرية في عالمنا</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white font-bold">لوحات تتحدث عن <span className="text-primary">الجودة</span></h2>
          </div>
          <p className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed mt-6 md:mt-0 font-light">
            نظرة عن قرب على فن التحضير والشوي. كل طبق نقدمه هو صياغة بصرية ومذاقية تعكس التزامنا بالكمال.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={() => setSelectedImg(src)}
              className={`relative overflow-hidden group rounded-[28px] border border-white/[0.07] bg-[#0e0e12] cursor-pointer ${index === 0 || index === 3 ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-square'} shadow-2xl`}
            >
              <img 
                src={src} 
                alt="أصناف مشويات فاخرة" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white text-sm font-bold tracking-wider border border-primary/60 bg-black/60 px-8 py-3.5 rounded-full flex items-center gap-2 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] transform translate-y-4 group-hover:translate-y-0">
                  <ZoomIn className="w-4 h-4" />
                  تكبير الصورة
                </span>
              </div>
            </motion.div>
          ))}
        </div>
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
              className="absolute top-6 left-6 md:top-10 md:left-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 z-50 shadow-2xl"
              aria-label="إغلاق الصورة"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[85vh] rounded-[32px] overflow-hidden border border-primary/40 shadow-[0_0_80px_rgba(212,175,55,0.25)] bg-black cursor-default"
            >
              <img
                src={selectedImg}
                alt="معرض فحمة الفاخر"
                className="w-full h-full max-h-[85vh] object-contain block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

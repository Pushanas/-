import { motion } from 'motion/react';
import { MessageCircle, PhoneCall, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 pointer-events-auto safe-area-bottom" dir="ltr">
      {/* WhatsApp Floating CTA */}
      <motion.a
        href="https://wa.me/201234567890"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] transition-shadow duration-300"
        title="تواصل عبر واتساب"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>

      {/* Direct Call Floating CTA */}
      <motion.a
        href="tel:16000"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 sm:w-12 sm:h-12 btn-gold rounded-full flex items-center justify-center text-black shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.6)] transition-shadow duration-300"
        title="اتصل بالطلب المباشر"
        aria-label="اتصل بالطلب المباشر"
      >
        <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 fill-black" />
      </motion.a>

      {/* Back to Top */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 sm:w-12 sm:h-12 bg-[#0e0e12]/90 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:text-primary hover:border-primary transition-colors shadow-2xl mt-1"
          title="للأعلى"
          aria-label="العودة لأعلى الصفحة"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function Counter({ target, label, suffix = '' }: { target: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2500;
    const incrementTime = (duration / end) * 10;
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center gap-2">
      <span dir="ltr" className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary font-bold drop-shadow-md">
        {count.toLocaleString('en-US')}{suffix}
      </span>
      <span className="text-sm md:text-base text-gray-300 font-medium tracking-wide">{label}</span>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-full h-full origin-center"
        >
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop"
            alt="مشويات مصرية فاخرة على الفحم الطبيعي"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark cinematic gradient overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
      </div>

      {/* Subtle floating gold embers simulation */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-25">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              boxShadow: `0 0 10px 1px rgba(212, 175, 55, 0.6)`
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0.4, 0],
              x: `calc(${Math.random() * 40}vw - 20vw)`,
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-6xl mx-auto flex flex-col items-center mt-10 md:mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 md:w-24 bg-primary/60" />
          <div className="flex items-center gap-2.5">
             <Star className="w-3.5 h-3.5 text-primary fill-primary" />
             <span className="text-primary tracking-widest text-xs md:text-sm font-bold uppercase">تجربة تذوق استثنائية</span>
             <Star className="w-3.5 h-3.5 text-primary fill-primary" />
          </div>
          <div className="h-[1px] w-12 md:w-24 bg-primary/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-[1.25] tracking-tight mb-8"
        >
          فحمة للمشويات <br className="hidden sm:inline" />
          <span className="text-gradient">المشويات على أصولها</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-xl lg:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          استمتع بأشهى الكباب والكفتة والريش والشيش طاووق المشوية على الفحم الطبيعي، بمكونات مختارة بعناية وجودة تستحق التجربة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-20 w-full"
        >
          <a
            href="https://wa.me/201234567890?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%A3%D9%88%D8%B1%D8%AF%D8%B1%20%D9%85%D8%B4%D9%88%D9%8A%D8%A7%D8%AA%20%D9%85%D9%86%20%D9%81%D8%AD%D9%85%D8%A9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 btn-gold rounded-full flex items-center justify-center gap-2 text-base md:text-lg font-bold shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] transition-all duration-300 active:scale-95"
          >
            اطلب الآن
          </a>
          <a
            href="#reservation"
            className="px-10 py-4 bg-[#ff6a00]/10 border border-[#ff6a00]/40 text-[#ff6a00] font-bold text-base md:text-lg hover:bg-[#ff6a00] hover:text-black transition-all duration-300 rounded-full backdrop-blur-md flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,106,0,0.2)] active:scale-95"
          >
            احجز ترابيزة
          </a>
          <a
            href="#menu"
            className="px-10 py-4 bg-white/5 border border-white/20 text-white font-bold text-base md:text-lg hover:bg-white/10 hover:border-primary hover:text-primary transition-all duration-300 rounded-full backdrop-blur-md flex items-center justify-center gap-2 group active:scale-95"
          >
            شاهد المنيو
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-12 w-full"
        >
          <Counter target={15000} label="عميل سعيد" suffix="+" />
          <Counter target={120} label="صنف فاخر" suffix="+" />
          <Counter target={4.9} label="تقييم العملاء" />
          <Counter target={10} label="سنوات خبرة" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs tracking-widest text-primary uppercase font-bold">اكتشف المزيد</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center p-1"
        >
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

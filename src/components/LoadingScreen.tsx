import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#070709] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Atmospheric ambient glow */}
          <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] bg-[#ff6a00]/10 rounded-full blur-[140px] pointer-events-none translate-y-20" />

          {/* Floating gold embers simulation */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-primary rounded-full"
                style={{
                  width: Math.random() * 3 + 2 + 'px',
                  height: Math.random() * 3 + 2 + 'px',
                  boxShadow: '0 0 12px rgba(212, 175, 55, 0.8)',
                  left: `${15 + (i * 7)}%`,
                  bottom: '-10%',
                }}
                animate={{
                  y: [-10, -800],
                  opacity: [0, 1, 0.8, 0],
                  x: [0, (i % 2 === 0 ? 40 : -40)],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Logo Icon */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                filter: [
                  'drop-shadow(0 0 20px rgba(212,175,55,0.4))',
                  'drop-shadow(0 0 45px rgba(255,106,0,0.7))',
                  'drop-shadow(0 0 20px rgba(212,175,55,0.4))',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 rounded-3xl bg-gradient-to-b from-[#18181f] to-[#0a0a0e] border border-primary/40 flex items-center justify-center mb-8 shadow-2xl relative"
            >
              <Flame className="w-12 h-12 text-[#ff6a00]" />
              <div className="absolute inset-0 rounded-3xl border border-primary/20 animate-pulse" />
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ letterSpacing: '0.4em', opacity: 0 }}
              animate={{ letterSpacing: '0.05em', opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-3"
            >
              فحمة
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-primary tracking-[0.25em] text-xs md:text-sm font-sans uppercase mb-12"
            >
              المشويات على أصولها
            </motion.p>

            {/* Premium Progress Bar */}
            <div className="w-64 md:w-80 relative flex flex-col items-center">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-l from-primary via-[#f0d060] to-[#ff6a00] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              <div className="w-full flex justify-between items-center mt-3 text-[11px] font-mono tracking-widest text-gray-400">
                <span>ANAS STUDIO LUXURY</span>
                <span className="text-primary font-bold">{Math.min(progress, 100)}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

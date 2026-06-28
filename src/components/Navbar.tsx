import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Flame, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'المنيو', href: '#menu' },
    { name: 'قصتنا', href: '#story' },
    { name: 'المعرض', href: '#gallery' },
    { name: 'آراء العملاء', href: '#reviews' },
    { name: 'الفروع', href: '#branches' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? 'bg-[#070709]/90 backdrop-blur-xl py-4 shadow-2xl border-white/[0.08]' : 'bg-gradient-to-b from-[#070709]/80 to-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center flex-row-reverse">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group flex-row-reverse">
            <Flame className="text-[#ff6a00] w-7 h-7 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,106,0,0.5)]" />
            <span className="font-serif text-2xl sm:text-3xl tracking-wide text-white font-bold">
              فحمة
              <span className="text-primary block text-xs tracking-wider font-sans font-medium mt-0.5">المشويات على أصولها</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 flex-row-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-300 hover:text-primary transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-primary hover:border-primary transition-all duration-300 group ml-2"
              title="سلة الطلبات"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-black text-xs font-bold rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            <a
              href="#reservation"
              className="px-8 py-2.5 btn-gold rounded-full transition-all duration-300 font-bold tracking-wide text-sm whitespace-nowrap shadow-md hover:shadow-lg"
            >
              احجز ترابيزة
            </a>
          </div>

          {/* Mobile Actions (Cart + Toggle) */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-white/5 border border-white/10 text-white hover:text-primary transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-black text-xs font-bold rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="text-white hover:text-primary transition-colors p-1"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 left-6 text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-gray-300 hover:text-primary transition-colors tracking-wide"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="px-8 py-3.5 bg-white/10 border border-primary/50 text-primary rounded-full font-bold text-lg flex items-center gap-3"
              >
                <ShoppingBag className="w-5 h-5" />
                سلة الطلبات ({cartCount})
              </motion.button>

              <motion.a
                href="#reservation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-10 py-4 btn-gold rounded-full font-bold text-xl shadow-lg"
              >
                احجز ترابيزة
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Flame, ShoppingBag, Globe, Calendar, ChevronRight } from 'lucide-react';
import { PageView, Language } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeView: PageView;
  setActiveView: (view: PageView) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  activeView,
  setActiveView,
  lang,
  setLang
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageView; nameEn: string; nameAr: string }[] = [
    { id: 'home', nameEn: 'Home', nameAr: 'الرئيسية' },
    { id: 'menu', nameEn: 'Menu', nameAr: 'المنيو الملكي' },
    { id: 'offers', nameEn: 'Offers ⚡', nameAr: 'العروض ⚡' },
    { id: 'about', nameEn: 'Story', nameAr: 'قصة الحاتي' },
    { id: 'branches', nameEn: 'Branches', nameAr: 'فروعنا' },
    { id: 'reviews', nameEn: 'Reviews', nameAr: 'آراء النقاد' },
    { id: 'faq', nameEn: 'FAQ', nameAr: 'الأسئلة الشائعة' },
    { id: 'contact', nameEn: 'Contact', nameAr: 'تواصل معنا' }
  ];

  const handleNavClick = (id: PageView) => {
    setActiveView(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const isAr = lang === 'ar';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-[#070709]/95 backdrop-blur-xl py-3 sm:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-white/[0.08]'
            : 'bg-gradient-to-b from-[#070709] via-[#070709]/70 to-transparent py-5 sm:py-6 border-transparent'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center w-full box-border">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer shrink-0 text-left"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#ff6a00] to-[#d4af37] p-[1px] shadow-[0_0_20px_rgba(255,106,0,0.4)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#070709] rounded-full flex items-center justify-center">
                <Flame className="text-[#ff6a00] w-5 h-5 sm:w-6 sm:h-6 fill-[#ff6a00]/30 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl md:text-3xl tracking-wider text-white font-bold block leading-none">
                FAHMA
              </span>
              <span className="text-[#d4af37] text-[9px] sm:text-[11px] tracking-[0.2em] uppercase font-sans font-semibold block mt-1">
                {isAr ? 'مشويات عالمية فاخرة' : 'International Grill'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const active = activeView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'text-[#070709] font-bold shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{isAr ? link.nameAr : link.nameEn}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Lang Switcher + Cart + CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* EN / AR toggle */}
            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#d4af37]/50 text-xs font-semibold text-gray-200 transition-all cursor-pointer"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{isAr ? 'ENGLISH' : 'العربية'}</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300 group cursor-pointer"
              title={isAr ? 'سلة الطلبات' : 'Cart'}
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ff6a00] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Reserve Table CTA */}
            <button
              onClick={() => handleNavClick('reservations')}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-[#070709] font-bold text-xs xl:text-sm tracking-wide uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{isAr ? 'احجز طاولة' : 'Reserve a Table'}</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-bold text-[#d4af37] border border-white/10"
            >
              {isAr ? 'EN' : 'عربي'}
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#d4af37] transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff6a00] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="text-white hover:text-[#d4af37] transition-colors p-1.5 focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#070709]/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto select-none"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Top Bar Drawer */}
            <div className="flex justify-between items-center w-full border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Flame className="text-[#ff6a00] w-6 h-6" />
                <span className="font-serif text-xl font-bold text-white tracking-widest">
                  FAHMA GRILL
                </span>
              </div>
              <button
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#ff6a00] hover:text-black transition-all flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-4 my-auto py-8 w-full max-w-sm mx-auto">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: isAr ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl font-serif text-2xl tracking-wide transition-all ${
                    activeView === link.id
                      ? 'bg-gradient-to-r from-[#d4af37]/20 to-transparent text-[#d4af37] font-bold border-s-4 border-[#d4af37]'
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{isAr ? link.nameAr : link.nameEn}</span>
                  <ChevronRight className={`w-5 h-5 ${isAr ? 'rotate-180' : ''} text-white/30`} />
                </motion.button>
              ))}
            </div>

            {/* Drawer Bottom CTAs */}
            <div className="flex flex-col gap-3 w-full border-t border-white/10 pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-3.5 bg-white/5 border border-white/15 hover:border-[#d4af37] text-white rounded-full font-bold text-sm flex items-center justify-center gap-3 shadow-lg transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
                <span>{isAr ? `سلة الطلبات (${cartCount})` : `Order Cart (${cartCount})`}</span>
              </button>

              <button
                onClick={() => handleNavClick('reservations')}
                className="w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-[#070709] rounded-full font-bold text-base text-center shadow-xl uppercase tracking-wider block"
              >
                {isAr ? 'احجز طاولة ملكية' : 'Reserve a Table'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Flame, ShoppingBag, Heart, Search, Sparkles, ArrowRight, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { MenuItem, MenuCategory, Language, PageView } from '../types';
import { allMenuItems } from '../data';

const getLowResPlaceholder = (url: string) => {
  if (url.includes('unsplash.com')) {
    try {
      const parsedUrl = new URL(url);
      parsedUrl.searchParams.set('w', '40');
      parsedUrl.searchParams.set('q', '10');
      parsedUrl.searchParams.set('blur', '20');
      return parsedUrl.toString();
    } catch {
      return url;
    }
  }
  return url;
};

const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (containerRef.current) observer.unobserve(containerRef.current);
          }
        });
      },
      { rootMargin: '300px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting && imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [isIntersecting]);

  const [error, setError] = useState(false);
  const lowResSrc = useMemo(() => getLowResPlaceholder(src), [src]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full bg-[#101014] overflow-hidden select-none">
      {/* Shimmer Skeleton Loading Backdrop */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#1c1c24] via-[#121218] to-[#0a0a0e] overflow-hidden transition-opacity duration-700 z-0 ${loaded && !error ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
        {error && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1410] via-[#0D0D0D] to-[#1A1410] flex flex-col items-center justify-center p-3 text-center border border-[#E8B84B]/20">
            <span className="text-[#FF6B1A] text-lg mb-1">🔥</span>
            <span className="font-serif text-xs font-bold text-[#E8B84B] line-clamp-2 px-2">{alt}</span>
            <span className="text-[8px] text-gray-500 uppercase tracking-widest mt-1">FAHMA GRILL</span>
          </div>
        )}
      </div>

      {/* Instant Low-Resolution Blurred Placeholder */}
      {isIntersecting && !error && (
        <img
          src={lowResSrc}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center filter blur-xl scale-110 opacity-70 transition-opacity duration-700 z-10 ${loaded ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
      
      {/* High-Resolution Main Image */}
      {isIntersecting && !error && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out relative z-20 ${loaded ? 'opacity-100 blur-none scale-100' : 'opacity-0 blur-md scale-105'}`}
        />
      )}
    </div>
  );
};

const SkeletonCard = () => (
  <div className="rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-between shadow-xl relative select-none">
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent z-30 pointer-events-none" />
    
    <div className="relative h-64 sm:h-56 md:h-64 w-full bg-[#14141a] p-4 flex flex-col justify-between">
      <div className="flex justify-between items-center w-full">
        <div className="w-20 h-6 bg-white/10 rounded-full animate-pulse" />
        <div className="w-10 h-10 bg-white/10 rounded-full animate-pulse" />
      </div>
      <div className="w-24 h-6 bg-black/40 rounded-lg animate-pulse self-end" />
    </div>

    <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="h-6 bg-white/15 rounded-md w-3/4 animate-pulse" />
          <div className="h-6 bg-amber-400/10 rounded-md w-12 animate-pulse" />
        </div>
        <div className="space-y-2 pt-1">
          <div className="h-3 bg-white/10 rounded w-full animate-pulse" />
          <div className="h-3 bg-white/10 rounded w-5/6 animate-pulse" />
          <div className="h-3 bg-white/10 rounded w-4/6 animate-pulse" />
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto gap-3">
        <div className="space-y-1.5">
          <div className="h-2.5 bg-white/10 rounded w-12 animate-pulse" />
          <div className="h-6 bg-[#E8B84B]/20 rounded w-20 animate-pulse" />
        </div>
        <div className="h-11 bg-white/10 rounded-full w-28 animate-pulse" />
      </div>
    </div>
  </div>
);


interface MenuProps {
  lang: Language;
  onAddToCart: (item: MenuItem) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  previewOnly?: boolean;
  onNavigate?: (view: PageView) => void;
  initialCategory?: MenuCategory;
}

export default function Menu({
  lang,
  onAddToCart,
  favorites,
  onToggleFavorite,
  previewOnly = false,
  onNavigate,
  initialCategory = 'all'
}: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState<string | null>(null);

  const isAr = lang === 'ar';

  const categories: { id: MenuCategory; en: string; ar: string }[] = [
    { id: 'all', en: 'All Selection', ar: 'الكل' },
    { id: 'offers', en: 'Family Offers ⚡', ar: 'العروض والوجبات ⚡' },
    { id: 'grills', en: 'Charcoal Grills', ar: 'مشويات الفحم' },
    { id: 'oriental', en: 'Oriental & Casseroles', ar: 'مأكولات شرقية وطواجن' },
    { id: 'sandwiches', en: 'Sandwiches & Burgers', ar: 'سندوتشات وبرجر شرقي' },
    { id: 'starters', en: 'Meze & Salads', ar: 'المقبلات والسلطات' },
    { id: 'desserts', en: 'Oriental Desserts', ar: 'الحلويات الشرقية' },
    { id: 'beverages', en: 'Fresh Beverages', ar: 'المشروبات المنعشة' },
  ];

  const filteredItems = useMemo(() => {
    let list = previewOnly ? allMenuItems.filter(item => item.badge === 'Signature' || item.badge === 'Best Seller').slice(0, 6) : allMenuItems;

    if (!previewOnly && activeCategory !== 'all') {
      list = list.filter(item => item.category === activeCategory);
    }

    if (!previewOnly && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.descriptionEn.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeCategory, searchQuery, previewOnly]);

  const handleQuickAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case 'Signature':
        return 'bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-black border-[#d4af37]';
      case "Chef's Pick":
        return 'bg-[#ff6a00] text-white border-[#ff6a00]';
      case 'Best Seller':
        return 'bg-amber-500 text-black border-amber-400';
      case 'New':
        return 'bg-emerald-600 text-white border-emerald-500';
      default:
        return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <section 
      id="menu" 
      className={`bg-[#070709] relative overflow-hidden select-none ${previewOnly ? 'py-24 border-b border-white/10' : 'pt-28 pb-32 min-h-screen'}`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#ff6a00] text-xs uppercase tracking-[0.3em] font-bold block mb-3">
            {isAr ? 'قائمة الطعام الفاخرة' : 'Culinary Repertoire'}
          </span>
          <h2 className="text-3xl sm:text-6xl font-serif text-white font-extrabold mb-4">
            {previewOnly
              ? (isAr ? 'الأطباق الملكية المختارة' : 'Signature Masterpieces')
              : (isAr ? 'منيو فحمة جريل الدولي' : 'The International Menu')}
          </h2>
          <p className="text-xs sm:text-base text-gray-300 font-light max-w-2xl mx-auto">
            {isAr
              ? 'تشكيلة مختارة من أرقى قطع اللحوم والمشويات المعدة على جمر الفحم الطبيعي، مصحوبة بصلصاتنا الحصرية.'
              : 'Explore our master-curated selection of prime charcoal grills, Wagyu steaks, artisan sides, and decadent desserts.'}
          </p>
        </div>

        {/* Full Menu Page Filters & Search */}
        {!previewOnly && (
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className={`absolute top-1/2 -translate-y-1/2 ${isAr ? 'right-4' : 'left-4'} w-5 h-5 text-gray-400`} />
              <input
                type="text"
                placeholder={isAr ? 'ابحث عن طبقك المفضل (كباب، ستيك، مولتن)...' : 'Search dishes (Tomahawk, Kofta, Fries)...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full h-12 ${isAr ? 'pr-12 pl-4' : 'pl-12 pr-4'} rounded-full bg-white/5 border border-white/15 focus:border-[#d4af37] text-white placeholder:text-gray-500 text-sm focus:outline-none transition-all shadow-inner backdrop-blur-md`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-4' : 'right-4'} text-xs text-gray-400 hover:text-white`}
                >
                  {isAr ? 'مسح' : 'Clear'}
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
              {categories.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                      active
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-black border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    {isAr ? cat.ar : cat.en}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Menu Items Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isFav = favorites.includes(item.id);
              const isAdded = addedId === item.id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#d4af37]/60 overflow-hidden flex flex-col justify-between group shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Food Image Container - Crisp and 100% Clear */}
                  <div className="relative h-64 sm:h-56 md:h-64 w-full overflow-hidden bg-[#101014]">
                    <LazyImage src={item.image} alt={isAr ? item.name : item.nameEn} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60 z-20 pointer-events-none" />

                    {/* Badge */}
                    {item.badge && (
                      <div className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-lg border z-30 ${getBadgeStyle(item.badge)}`}>
                        {item.badge}
                      </div>
                    )}

                    {/* Favorite Button */}
                    <button
                      onClick={() => onToggleFavorite(item.id)}
                      className={`absolute top-4 ${isAr ? 'left-4' : 'right-4'} w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-30 ${
                        isFav
                          ? 'bg-[#ff6a00] text-white shadow-[0_0_15px_rgba(255,106,0,0.6)] scale-110'
                          : 'bg-black/50 text-white/80 hover:text-white border border-white/20'
                      }`}
                      aria-label="Toggle Favorite"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                    </button>

                    {/* Calories */}
                    {item.calories && (
                      <div className={`absolute bottom-3 ${isAr ? 'right-4' : 'left-4'} text-[11px] font-mono text-gray-300 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10 z-30`}>
                        🔥 {item.calories} {isAr ? 'سعرة' : 'kcal'}
                      </div>
                    )}
                  </div>

                  {/* Food Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="flex-1 min-w-0 font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors leading-tight break-words">
                          {isAr ? item.name : item.nameEn}
                        </h3>
                        <div className="flex items-center gap-1 text-amber-400 text-xs font-bold shrink-0 bg-amber-400/10 px-2 py-1 rounded-md border border-amber-400/20">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed line-clamp-3">
                        {isAr ? item.description : item.descriptionEn}
                      </p>
                    </div>

                    {/* Price & Add CTA */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto gap-3">
                      <div className="shrink-0">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 block">
                          {isAr ? 'السعر الملكي' : 'Price'}
                        </span>
                        <span className="font-serif text-lg sm:text-xl font-extrabold text-[#d4af37]">
                          {isAr ? item.price : item.priceEn}
                        </span>
                      </div>

                      <button
                        onClick={() => handleQuickAdd(item)}
                        disabled={isAdded}
                        className={`h-11 px-5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-95'
                            : 'bg-white/10 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 hover:border-[#d4af37] shadow-lg active:scale-95'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{isAr ? 'تمت الإضافة' : 'Added'}</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>{isAr ? 'أضف للطلب' : 'Order Now'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <SlidersHorizontal className="w-12 h-12 mx-auto mb-4 text-gray-600 animate-pulse" />
            <p className="text-lg">{isAr ? 'لا توجد أطباق تطابق بحثك.' : 'No dishes matched your search filter.'}</p>
          </div>
        )}

        {/* Homepage Preview Footer CTA */}
        {previewOnly && onNavigate && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button
              onClick={() => onNavigate('menu')}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-[#070709] font-extrabold text-sm sm:text-base tracking-widest uppercase transition-all shadow-[0_10px_35px_rgba(212,175,55,0.35)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 inline-flex items-center gap-3 cursor-pointer"
            >
              <span>{isAr ? 'استكشف المنيو بالكامل (30+ صنف)' : 'Explore Complete Repertoire'}</span>
              <ArrowRight className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}

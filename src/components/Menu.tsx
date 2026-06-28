import { motion, AnimatePresence } from 'motion/react';
import { menuItems, sideItems } from '../data';
import { Star, Flame, ShoppingBag, MessageCircle, Heart } from 'lucide-react';
import { useState } from 'react';
import { MenuItem } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

type Category = 'all' | 'grills' | 'sides' | 'drinks';

export default function Menu({ onAddToCart, favorites, onToggleFavorite }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'grills', label: 'المشويات الرئيسية' },
    { id: 'sides', label: 'الأطباق الجانبية والمقبلات' },
    { id: 'drinks', label: 'المشروبات المنعشة' },
  ];

  const displayedGrills = menuItems;
  const displayedSides = sideItems.filter(item => item.category === 'sides');
  const displayedDrinks = sideItems.filter(item => item.category === 'drinks');

  return (
    <section id="menu" className="py-32 bg-[#070709] relative overflow-hidden">
      {/* Luxury atmospheric lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-primary/60" />
            <span className="text-primary tracking-widest text-xs md:text-sm font-bold uppercase">قائمة الطعام الفاخرة</span>
            <div className="h-[1px] w-8 bg-primary/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 font-bold tracking-tight"
          >
            أطباقنا <span className="text-primary">المميزة</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
          >
            قمة المشويات المصرية، محضرة بأجود أنواع اللحوم الطازجة ومتبلة بخلطتنا السرية، لتشوى على الفحم الطبيعي وتقدم لك بأسلوب استثنائي.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-8 py-3.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-primary border-primary text-black shadow-[0_8px_30px_rgba(212,175,55,0.35)] scale-105'
                  : 'bg-white/[0.03] border-white/10 text-gray-300 hover:border-primary/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grills Section */}
        <AnimatePresence mode="wait">
          {(activeCategory === 'all' || activeCategory === 'grills') && (
            <motion.div
              key="grills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              {activeCategory === 'all' && (
                <div className="flex items-center justify-center gap-6 mb-12">
                  <div className="h-[1px] flex-1 bg-white/[0.08]" />
                  <h3 className="text-3xl font-serif font-bold text-white text-center">المشويات والأطباق الرئيسية الفاخرة</h3>
                  <div className="h-[1px] flex-1 bg-white/[0.08]" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
                {displayedGrills.map((item, index) => {
                  const isFav = favorites.includes(item.id);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="group bg-[#0e0e12] border border-white/[0.07] rounded-[28px] overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] flex flex-col"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden w-full bg-black">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-black/30 opacity-80 pointer-events-none" />

                        {/* Rating Badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg z-10">
                          <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                          <span className="text-xs font-bold text-white mt-0.5">{item.rating}</span>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => onToggleFavorite(item.id)}
                          className={`absolute top-4 left-4 w-10 h-10 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 z-10 shadow-lg ${
                            isFav
                              ? 'bg-red-500/20 text-red-500 border-red-500/40 scale-110'
                              : 'bg-black/60 text-white/80 hover:text-red-400 hover:bg-black/80 hover:scale-105'
                          }`}
                          title={isFav ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
                        >
                          <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500' : ''}`} />
                        </button>

                        {/* Calories Badge */}
                        {item.calories && (
                          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg z-10">
                            <Flame className="w-3.5 h-3.5 text-[#ff6a00]" />
                            <span className="text-xs font-mono font-bold text-gray-200 mt-0.5">{item.calories} سعرة</span>
                          </div>
                        )}
                      </div>

                      <div className="p-7 flex flex-col flex-grow">
                        <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-grow font-light">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.06] gap-3">
                          <span className="text-primary font-serif font-bold text-2xl shrink-0">{item.price}</span>
                          <div className="flex items-center gap-2.5">
                            <a
                              href={`https://wa.me/201234567890?text=${encodeURIComponent('مرحباً، أريد طلب: ' + item.name)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 bg-white/[0.04] border border-white/10 text-gray-300 rounded-2xl hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center shrink-0"
                              title="اطلب عبر واتساب"
                            >
                              <MessageCircle className="w-5 h-5" />
                            </a>
                            <button
                              onClick={() => onAddToCart(item)}
                              className="px-6 py-3 btn-gold rounded-2xl text-sm font-bold flex items-center gap-2 shadow-lg active:scale-95 transition-transform"
                            >
                              <ShoppingBag className="w-4 h-4" />
                              اطلب الآن
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Sides Section */}
          {(activeCategory === 'all' || activeCategory === 'sides') && (
            <motion.div
              key="sides"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              {activeCategory === 'all' && (
                <div className="flex items-center justify-center gap-6 mb-12">
                  <div className="h-[1px] flex-1 bg-white/[0.08]" />
                  <h3 className="text-3xl font-serif font-bold text-white text-center">الأطباق الجانبية والمقبلات الفاخرة</h3>
                  <div className="h-[1px] flex-1 bg-white/[0.08]" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {displayedSides.map((item, index) => {
                  const isFav = favorites.includes(item.id);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="group bg-[#0e0e12] border border-white/[0.06] rounded-[24px] overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-black/20 to-transparent pointer-events-none opacity-80" />

                        {/* Rating */}
                        <div className="absolute top-3.5 right-3.5 flex items-center gap-1 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-white">
                          <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                          <span>{item.rating}</span>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => onToggleFavorite(item.id)}
                          className={`absolute top-3.5 left-3.5 w-9 h-9 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center transition-all ${
                            isFav
                              ? 'bg-red-500/20 text-red-500 border-red-500/40'
                              : 'bg-black/60 text-white/80 hover:text-red-400'
                          }`}
                          title={isFav ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
                        >
                          <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500' : ''}`} />
                        </button>

                        {/* Calories */}
                        {item.calories && (
                          <div className="absolute bottom-3.5 right-3.5 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-xs font-mono font-bold text-gray-200">
                            <Flame className="w-3 h-3 text-[#ff6a00]" />
                            <span>{item.calories} سعرة</span>
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-center mb-2.5 gap-2">
                          <h4 className="font-serif font-bold text-xl text-white group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-primary font-serif font-bold text-xl shrink-0">{item.price}</span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed mb-6 line-clamp-2 flex-1">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                          <button
                            onClick={() => onAddToCart(item)}
                            className="w-full py-3 btn-gold rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            اطلب الآن
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Drinks Section */}
          {(activeCategory === 'all' || activeCategory === 'drinks') && (
            <motion.div
              key="drinks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              {activeCategory === 'all' && (
                <div className="flex items-center justify-center gap-6 mb-12">
                  <div className="h-[1px] flex-1 bg-white/[0.08]" />
                  <h3 className="text-3xl font-serif font-bold text-white text-center">المشروبات المنعشة</h3>
                  <div className="h-[1px] flex-1 bg-white/[0.08]" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {displayedDrinks.map((item, index) => {
                  const isFav = favorites.includes(item.id);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="group bg-[#0e0e12] border border-white/[0.06] rounded-[24px] overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col sm:flex-row items-center"
                    >
                      <div className="relative w-full sm:w-48 aspect-square shrink-0 overflow-hidden bg-black">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-[#0e0e12] via-transparent to-transparent pointer-events-none opacity-80" />

                        <button
                          onClick={() => onToggleFavorite(item.id)}
                          className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center transition-all ${
                            isFav
                              ? 'bg-red-500/20 text-red-500 border-red-500/40'
                              : 'bg-black/60 text-white/80 hover:text-red-400'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-red-500' : ''}`} />
                        </button>
                      </div>

                      <div className="p-6 flex flex-col flex-1 w-full text-right">
                        <div className="flex justify-between items-center mb-2 gap-2">
                          <h4 className="font-serif font-bold text-lg text-white group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-primary font-serif font-bold text-lg shrink-0">{item.price}</span>
                        </div>
                        <p className="text-xs text-gray-400 font-light leading-relaxed mb-5">
                          {item.description}
                        </p>
                        <button
                          onClick={() => onAddToCart(item)}
                          className="mt-auto w-full py-2.5 btn-gold rounded-xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          إضافة للسلة
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

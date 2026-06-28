import { motion } from 'motion/react';
import { Flame, Award, ChefHat, Sparkles, ArrowRight } from 'lucide-react';
import { Language, PageView } from '../types';

interface ChefStoryProps {
  lang: Language;
  onNavigate?: (view: PageView) => void;
  fullPage?: boolean;
}

export default function ChefStory({ lang, onNavigate, fullPage = false }: ChefStoryProps) {
  const isAr = lang === 'ar';

  return (
    <section className={`py-24 bg-[#070709] relative overflow-hidden select-none ${fullPage ? 'pt-32 min-h-screen' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Background cinematic smoke glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#ff6a00]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {fullPage && (
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-bold block mb-3">
              {isAr ? 'قصة نجاح عالمية' : 'Our Heritage & Mastery'}
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-white font-bold">
              {isAr ? 'فلسفة الطهي في فحمة جريل' : 'The Story of Fahma Grill'}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6a00] to-[#d4af37] mx-auto mt-6 rounded-full" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          {/* Visual Grid: Chef + Flame + Kitchen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-2 gap-4 w-full"
          >
            <div className="space-y-4 pt-8">
              {/* Card 1: Master Chef Selection */}
              <div className="relative h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#E8B84B]/60 group bg-[#121218] transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1600&auto=format&fit=crop" 
                  alt="Master Chef Plating" 
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[10px] uppercase tracking-wider text-[#E8B84B] font-semibold block">{isAr ? 'حرفية الطهي' : 'Craftsmanship'}</span>
                  <span className="font-serif text-sm sm:text-base font-bold text-white block">{isAr ? 'اختيار الشيف المخصوص' : 'Master Chef Selection'}</span>
                </div>
              </div>

              {/* Card 2: Immersive Dark Luxury */}
              <div className="relative h-[200px] sm:h-[240px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#FF6B1A]/60 group bg-[#121218] transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop" 
                  alt="Fine Dining Atmosphere" 
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[10px] uppercase tracking-wider text-[#FF6B1A] font-semibold block">{isAr ? 'الأجواء الملكية' : 'Atmosphere'}</span>
                  <span className="font-serif text-sm sm:text-base font-bold text-white block">{isAr ? 'أجواء فاخرة' : 'Immersive Dark Luxury'}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Card 3: Steak Searing */}
              <div className="relative h-[200px] sm:h-[240px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#FF6B1A]/60 group bg-[#121218] transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" 
                  alt="Steak Searing" 
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[10px] uppercase tracking-wider text-[#FF6B1A] font-semibold block">{isAr ? 'شواية الجمر' : 'Prime Cut'}</span>
                  <span className="font-serif text-sm sm:text-base font-bold text-white block">{isAr ? 'شواء الستيك الملكي' : 'Steak Searing'}</span>
                </div>
              </div>

              {/* Card 4: Royal Charcoal Grills */}
              <div className="relative h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-2xl border border-[#E8B84B]/40 group bg-[#121218] transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop" 
                  alt="Royal Grills" 
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[10px] uppercase tracking-wider text-[#E8B84B] font-semibold block">{isAr ? 'أصل المشويات' : 'Heritage'}</span>
                  <span className="font-serif text-sm sm:text-base font-bold text-white block">{isAr ? 'المشويات البلدي المخصوصة' : 'Royal Charcoal Grills'}</span>
                </div>
              </div>
            </div>

            {/* Floating Gold Medallion */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#0D0D0D] border-2 border-[#E8B84B] flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(232,184,75,0.4)] z-20">
              <Flame className="w-6 h-6 text-[#FF6B1A] animate-bounce" />
              <span className="text-[#E8B84B] font-serif text-xs font-bold mt-1">EST. 1998</span>
            </div>
          </motion.div>


          {/* Story Content Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-5 h-5 text-[#d4af37]" />
              <span className="text-[#d4af37] tracking-[0.2em] text-xs font-bold uppercase">
                {isAr ? 'عن علامة فحمة العالمية' : 'The International Culinary Story'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white font-extrabold mb-6 leading-tight">
              {isAr ? (
                <>
                  من شغف محلي إلى <br />
                  <span className="bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#ff6a00] bg-clip-text text-transparent">
                    أيقونة عالمية للشوي
                  </span>
                </>
              ) : (
                <>
                  From Humble Passion to an <br />
                  <span className="bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#ff6a00] bg-clip-text text-transparent">
                    International Fire Icon
                  </span>
                </>
              )}
            </h2>
            
            <div className="space-y-5 text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                {isAr
                  ? 'انطلقت رحلتنا برؤية طموحة: تحويل فنون الشوي الشرقية والمصرية العريقة إلى علامة ضيافة عالمية تنافس كبرى مطاعم الستيك هاوس في نيويورك ولندن ودبي.'
                  : 'Fahma Grill was born with a daring ambition: to elevate traditional live-fire cooking into a world-class hospitality brand standing shoulder-to-shoulder with the finest steakhouses in London, Tokyo, and Dubai.'}
              </p>
              <p>
                {isAr
                  ? 'نعتمد في مطابخنا على فحم البلوط النقي ١٠٠٪، وتخضع جميع اللحوم لعملية انتقاء صارمة لمعايير الجودة والماربلينج، مع الحفاظ على التتبيلات السرية الغنية بالعصارة والنكهات المدخنة العميقة.'
                  : 'Every dish represents a relentless pursuit of perfection. Our Master Chefs select strictly certified Angus & Wagyu cuts, slow-curing them in signature botanical marinades before searing them over intense natural oak embers.'}
              </p>
              
              <blockquote className="p-6 rounded-2xl bg-gradient-to-r from-[#E8B84B]/10 via-transparent to-transparent border border-[#E8B84B]/40 shadow-[0_0_30px_rgba(232,184,75,0.15)] my-6 font-serif text-white italic text-base relative overflow-hidden">
                <div className={`absolute top-0 bottom-0 ${isAr ? 'right-0' : 'left-0'} w-1.5 bg-gradient-to-b from-[#FF6B1A] to-[#E8B84B]`} />
                {isAr
                  ? '"شعارنا الدائم: الدقة في الشوي هي الفرق بين وجبة عادية وتجربة تذوق ملكية تظل في الذاكرة."'
                  : '"True hospitality is an art form. We don\'t just sear steaks; we curate multisensory dining memories celebrated around the globe."'}
              </blockquote>
            </div>

            {/* Chef Credentials Banner */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="block text-xl font-bold text-white font-serif">
                  {isAr ? 'الشيف التنفيذي ماركوس فوكس' : 'Executive Master Chef Marcus Vance'}
                </span>
                <span className="block text-xs text-[#d4af37] uppercase tracking-wider mt-0.5">
                  {isAr ? 'مدير الابتكار والطهي الدولي' : 'Global Culinary Director'}
                </span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-xs font-bold tracking-wider">
                <Award className="w-4 h-4 text-[#d4af37]" />
                <span>{isAr ? 'معتمد دولياً ★★★' : 'World-Class Certified'}</span>
              </div>
            </div>

            {!fullPage && onNavigate && (
              <div className="mt-8">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-8 py-3 rounded-full bg-white/5 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 hover:border-[#d4af37] transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer w-fit"
                >
                  <span>{isAr ? 'اقرأ القصة الكاملة' : 'Explore Full Heritage'}</span>
                  <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
                </button>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

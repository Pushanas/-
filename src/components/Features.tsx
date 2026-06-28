import { motion } from 'motion/react';
import { Flame, Beef, Award, Sparkles, ShieldCheck, UtensilsCrossed } from 'lucide-react';
import { Language } from '../types';

interface FeaturesProps {
  lang: Language;
}

export default function Features({ lang }: FeaturesProps) {
  const isAr = lang === 'ar';

  const brandStatements = [
    {
      en: "Crafted over fire, served with distinction.",
      ar: "أُعدت بمهارة على النار، وتُقدم لك بكل تفرّد."
    },
    {
      en: "Premium cuts, bold flavors, unforgettable dining moments.",
      ar: "قطاف لحوم فاخرة، نكهات جريئة، ولحظات طعام لا تُنسى."
    },
    {
      en: "Where modern fine dining meets authentic grill mastery.",
      ar: "حيث تتلاقى الفخامة العصرية مع أصول الشوي العريقة."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Beef className="w-7 h-7 text-[#d4af37]" />,
      titleEn: 'Handpicked Prime Cuts',
      titleAr: 'لحوم بلدي مختارة بعناية',
      descEn: 'Strictly sourced 100% daily fresh local Baladi beef & lamb. Zero frozen meat guarantee with exceptional marbling.',
      descAr: 'ننتقي حصرياً قطعيات اللحم البلدي الطازج 100% تُذبح يومياً في مجازرنا الخاصة، ولا نستخدم أي مجمدات على الإطلاق.'
    },
    {
      icon: <Sparkles className="w-7 h-7 text-[#ff6a00]" />,
      titleEn: 'Secret Egyptian Marinade',
      titleAr: 'تتبيلة مصرية أصلية سرية',
      descEn: 'Aromatic onion extracts, wild thyme, and rich spice reductions perfected over 25 years of Hati culinary heritage.',
      descAr: 'خلطة الحاتي السرية المستخلصة من ماء البصل والأعشاب البرية والتوابل الشرقية الموزونة لتعطي الطعم المصري الأصيل.'
    },
    {
      icon: <Flame className="w-7 h-7 text-[#d4af37]" />,
      titleEn: 'Slow Hardwood Charcoal',
      titleAr: 'شواء هادئ على جمر الفحم',
      descEn: 'Slow-seared over glowing royal oak charcoal at extreme heat to lock in succulent juices and visceral smoky aroma.',
      descAr: 'تسوية ببطء فوق جمر فحم البلوط الطبيعي المتوهج، لتحتفظ اللحوم بعصارتها وتكتسب نكهة الدخان الحقيقية المذهلة.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#25D366]" />,
      titleEn: 'Consistent VIP Quality',
      titleAr: 'جودة ملكية ثابتة وموثوقة',
      descEn: 'Rigorous master chef inspection on every single plate. The exact same world-class flavor whether in London or Cairo.',
      descAr: 'معايير جودة صارمة في كل فرع وكل طبق. نفس المذاق المبهر والتقديم الراقي في كل مرة تطلب فيها أو تزورنا.'
    },
    {
      icon: <Award className="w-7 h-7 text-[#d4af37]" />,
      titleEn: 'Cinematic Fine Plating',
      titleAr: 'تقديم فاخر يليق بذوقك',
      descEn: 'Luxury restaurant UI aesthetic brought to your table. Elevated presentation designed to impress even the toughest culinary critics.',
      descAr: 'تقديم فني سينمائي يهتم بأدق التفاصيل، مصمم ليعطي إحساساً بالفخامة والرفاهية من أول نظرة وحتى آخر لقمة.'
    },
    {
      icon: <Flame className="w-7 h-7 text-[#ff6a00]" />,
      titleEn: '35m Hot Delivery ⚡',
      titleAr: 'خدمة توصيل حرارية سريعة',
      descEn: 'Specialized thermal insulation packaging keeps your family grill platters sizzling hot as if straight from the charcoal pit.',
      descAr: 'تغليف حراري خاص يحفظ سخونة جمر الشواء ودخان اللحم حتى باب منزلك خلال 35 دقيقة في أمان تام وسرعة فائقة.'
    }
  ];

  return (
    <section className="py-24 bg-[#070709] relative border-b border-white/[0.08] overflow-hidden select-none" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#ff6a00]/10 via-[#d4af37]/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Short Brand Statement Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 text-center mb-20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl" />
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <UtensilsCrossed className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-xs uppercase tracking-[0.25em] font-semibold">
              {isAr ? 'بيان العلامة التجارية' : 'The Brand Philosophy'}
            </span>
            <UtensilsCrossed className="w-4 h-4 text-[#d4af37]" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight mb-8 max-w-4xl mx-auto">
            {isAr
              ? 'فحمة جريل — نضع معايير جديدة للمشويات العالمية برؤية فاخرة ومذاق لا يُقاوَم.'
              : 'Fahma Grill — Redefining International Fire Dining with Bold Flavor and Timeless Fine Elegance.'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6 border-t border-white/10">
            {brandStatements.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-black/40 p-4 rounded-2xl border border-white/5 text-left">
                <ShieldCheck className="w-5 h-5 text-[#ff6a00] shrink-0" />
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {isAr ? item.ar : item.en}
                </p>
              </div>
            ))}
          </div>
        </motion.div>


        {/* Why Choose Us Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff6a00] text-xs uppercase tracking-[0.3em] font-bold block mb-3">
            {isAr ? 'لماذا تختارنا' : 'Why Choose Fahma Grill'}
          </span>
          <h3 className="text-3xl sm:text-5xl font-serif text-white font-bold">
            {isAr ? (
              <>تميز لا يقبل المساومة في <span className="text-[#d4af37]">كل تفصيلة</span></>
            ) : (
              <>Uncompromising Excellence in <span className="text-[#d4af37]">Every Detail</span></>
            )}
          </h3>
        </motion.div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChooseUs.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-500 flex flex-col items-start group shadow-xl hover:-translate-y-1.5"
            >
              <div className="w-14 h-14 rounded-2xl bg-black/80 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#d4af37] transition-all duration-500 shadow-lg">
                {pillar.icon}
              </div>
              
              <h4 className="text-xl font-serif text-white font-bold mb-3 group-hover:text-[#d4af37] transition-colors">
                {isAr ? pillar.titleAr : pillar.titleEn}
              </h4>
              
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                {isAr ? pillar.descAr : pillar.descEn}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

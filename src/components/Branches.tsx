import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Language, Branch } from '../types';
import { branches } from '../data';

interface BranchesProps {
  lang: Language;
  previewOnly?: boolean;
}

export default function Branches({ lang, previewOnly = false }: BranchesProps) {
  const isAr = lang === 'ar';
  const displayList = previewOnly ? branches.slice(0, 3) : branches;

  return (
    <section className="py-20 sm:py-28 bg-[#070709] relative overflow-hidden" id="branches">
      {/* Decorative fire glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff6a00]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6a00]/10 border border-[#ff6a00]/30 text-[#ff6a00] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{isAr ? 'فروعنا الملكية الفاخرة' : 'Global Locations'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          >
            {isAr ? 'أينما كنت، ' : 'Experience Fahma '}
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] bg-clip-text text-transparent">
              {isAr ? 'فحمة جريل أقرب إليك' : 'Near You'}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base mt-4 font-light leading-relaxed"
          >
            {isAr
              ? 'صُممت فروعنا في القاهرة ودبي ولندن لتقديم تجربة ضيافة سينمائية تليق بعشاق المشويات الفاخرة، مع تطبيق صارم لأعلى معايير التعقيم والجودة.'
              : 'Architecturally designed fire-dining lounges in Cairo, Dubai, and London delivering world-class hospitality and uncompromising hygiene standards.'}
          </motion.p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {displayList.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group rounded-3xl bg-gradient-to-b from-[#14141d] to-[#0a0a0f] border border-white/[0.08] hover:border-[#d4af37]/50 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image Container - Crisp & Clear */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#0c0c10]">
                <img
                  src={branch.image}
                  alt={isAr ? branch.name : branch.nameEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14141d] via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs font-medium text-[#d4af37]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>VIP Branch</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {isAr ? branch.name : branch.nameEn}
                  </h3>

                  <div className="mt-5 space-y-3.5 text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#ff6a00] shrink-0 mt-0.5" />
                      <span className="leading-snug font-light">{isAr ? branch.location : branch.locationEn}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#d4af37] shrink-0" />
                      <span className="font-mono text-xs sm:text-sm text-gray-400">{isAr ? branch.hours : branch.hoursEn}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                      <a href={`tel:${branch.phone}`} className="hover:text-white transition-colors font-mono">
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-2 gap-3">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all"
                  >
                    <Navigation className="w-4 h-4 text-[#d4af37]" />
                    <span>{isAr ? 'الخريطة' : 'Directions'}</span>
                  </a>

                  <a
                    href={`https://wa.me/201000001600?text=%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20${encodeURIComponent(branch.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all transform hover:scale-102"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner inside Branches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] flex flex-wrap items-center justify-center gap-8 text-center text-gray-400 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-2 text-[#d4af37]">
            <ShieldCheck className="w-5 h-5" />
            <span>{isAr ? 'تعقيم فائق ومطبخ مفتوح زجاجي' : 'Open Glass Kitchens & ISO Hygiene'}</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
          <div>{isAr ? 'تكييف هواء مركزي بتقنية سحب الدخان الصامتة' : 'Silent Smoke-Extraction HVAC Technology'}</div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
          <div>{isAr ? 'مواقف سيارات مجانية وخدمة Valet الفاخرة' : 'Complimentary VIP Valet Parking'}</div>
        </motion.div>
      </div>
    </section>
  );
}

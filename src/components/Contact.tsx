import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock, ExternalLink, Globe } from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const isAr = lang === 'ar';

  const branches = [
    {
      cityEn: 'London Flagship',
      cityAr: 'لندن (الفرع الرئيسي)',
      areaEn: 'Mayfair — 42 Berkeley Square',
      areaAr: 'مايفير — ميدان بيركلي 42',
      hours: '12:00 PM - 02:00 AM',
      phone: '+44 20 7946 0912',
      mapUrl: 'https://maps.google.com/?q=Mayfair+London',
    },
    {
      cityEn: 'Dubai VIP Lounge',
      cityAr: 'دبي VIP',
      areaEn: 'DIFC — Gate Village 08',
      areaAr: 'مركز دبي المالي العالمي — قرية البوابة 8',
      hours: '12:00 PM - 03:00 AM',
      phone: '+971 4 362 1100',
      mapUrl: 'https://maps.google.com/?q=DIFC+Dubai',
    },
    {
      cityEn: 'New York Terrace',
      cityAr: 'نيويورك',
      areaEn: 'Manhattan — 580 Madison Ave',
      areaAr: 'مانهاتن — 580 جادة ماديسون',
      hours: '01:00 PM - 02:00 AM',
      phone: '+1 212 555 0199',
      mapUrl: 'https://maps.google.com/?q=Madison+Ave+NYC',
    },
    {
      cityEn: 'Tokyo Ginza',
      cityAr: 'طوكيو جينزا',
      areaEn: 'Chuo City — Ginza Six Tower',
      areaAr: 'حي تشوو — برج جينزا سيكس',
      hours: '11:30 AM - 11:30 PM',
      phone: '+81 3 5555 0143',
      mapUrl: 'https://maps.google.com/?q=Ginza+Six+Tokyo',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#070709] border-b border-white/10 relative overflow-hidden select-none" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Branches Header */}
        <div className="text-center mb-16">
          <span className="text-[#ff6a00] tracking-widest text-xs font-bold mb-3 block uppercase">
            {isAr ? 'مواقعنا العالمية الحصرية' : 'Global Destinations'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white font-bold">
            {isAr ? 'فروع فحمة جريل الملكية' : 'International Locations'}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-xs sm:text-base font-light leading-relaxed">
            {isAr
              ? 'نتشرف باستقبالكم في فروعنا الدولية الأربعة المجهزة بأعلى معايير الضيافة والخصوصية، لتستمتعوا بأشهى المشويات الساخنة من الشواية مباشرة.'
              : 'Experience our award-winning live fire dining sanctuaries located in the world\'s most prestigious culinary capitals.'}
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-24">
          {branches.map((branch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.03] border border-white/10 p-7 rounded-3xl hover:border-[#d4af37]/60 transition-all duration-500 hover:-translate-y-1.5 flex flex-col shadow-xl group relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-5 group-hover:bg-[#d4af37] group-hover:text-black text-[#d4af37] transition-colors">
                <MapPin className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                {isAr ? branch.cityAr : branch.cityEn}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light mb-6 flex-grow">
                {isAr ? branch.areaAr : branch.areaEn}
              </p>

              <div className="space-y-2.5 pt-5 border-t border-white/10 text-xs text-gray-400 mb-6 font-mono">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{branch.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span dir="ltr">{branch.phone}</span>
                </div>
              </div>

              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-white/5 hover:bg-[#d4af37] hover:text-black text-gray-200 border border-white/10 hover:border-[#d4af37] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 mt-auto"
              >
                <span>{isAr ? 'اتجاهات الخريطة' : 'Get Directions'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Info Section */}
        <div className="relative min-h-[480px] flex items-center rounded-3xl overflow-hidden border border-white/15 bg-[#0c0c10]">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop" 
              alt="World Map" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/90 to-transparent" />
          </div>

          <div className="max-w-xl p-8 sm:p-12 md:p-16 relative z-10 text-left w-full" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[#d4af37] tracking-widest text-xs font-bold uppercase">
                {isAr ? 'الخدمة الدولية المباشرة' : 'Global Concierge'}
              </span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-serif text-white mb-8 font-bold">
              {isAr ? 'تواصل مع الإدارة التنفيذية' : 'Connect with Headquarters'}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#d4af37]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-base mb-0.5">
                    {isAr ? 'الخط الساخن العالمي VIP' : 'Global Hotline'}
                  </h4>
                  <a href="tel:+44800012345" dir="ltr" className="text-lg font-mono font-bold text-[#d4af37] hover:text-white transition-colors block">
                    +44 800 012 345
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#25D366]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-base mb-0.5">
                    {isAr ? 'خدمة عملاء واتساب VIP' : 'WhatsApp Concierge'}
                  </h4>
                  <a href="https://wa.me/44800012345" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-300 hover:text-[#25D366] transition-colors">
                    {isAr ? 'متاح 24/7 للحجوزات والاستفسارات الخاصة' : 'Available 24/7 for VIP table booking & catering'}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#d4af37]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-base mb-0.5">
                    {isAr ? 'البريد الإلكتروني للضيافة' : 'Corporate Inquiries'}
                  </h4>
                  <a href="mailto:vip@fahmagrill.com" className="text-xs font-mono text-gray-400 hover:text-[#d4af37] transition-colors">
                    vip@fahmagrill.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

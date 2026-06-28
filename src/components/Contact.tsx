import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  const branches = [
    {
      city: 'القاهرة',
      area: 'وسط البلد - شارع 26 يوليو',
      hours: '12:00 ظهراً - 02:00 صباحاً',
      phone: '02-25789012',
      mapUrl: 'https://maps.google.com/?q=Cairo',
    },
    {
      city: 'التجمع الخامس',
      area: 'القطامية هايتس - شارع التسعين الشمالي',
      hours: '12:00 ظهراً - 03:00 صباحاً',
      phone: '012-34567891',
      mapUrl: 'https://maps.google.com/?q=New+Cairo',
    },
    {
      city: 'الشيخ زايد',
      area: 'ممشى أركان بلازا - المدخل الرئيسي',
      hours: '01:00 ظهراً - 02:00 صباحاً',
      phone: '012-34567892',
      mapUrl: 'https://maps.google.com/?q=Sheikh+Zayed',
    },
    {
      city: 'الجيزة',
      area: 'المهندسين - شارع جامعة الدول العربية',
      hours: '12:00 ظهراً - 03:00 صباحاً',
      phone: '02-33456789',
      mapUrl: 'https://maps.google.com/?q=Giza',
    },
  ];

  return (
    <section id="branches" className="py-32 bg-[#070709] border-y border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Branches Header */}
        <div className="text-center mb-20">
          <span className="text-primary tracking-widest text-xs md:text-sm font-bold mb-3 block uppercase">مواقعنا الحصرية</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white font-bold">فروع فحمة الملكية</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base md:text-lg font-light leading-relaxed">
            نتشرف باستقبالكم في فروعنا الأربعة المجهزة بأعلى معايير الضيافة والخصوصية، لتستمتعوا بأشهى المشويات الساخنة من الشواية مباشرة.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {branches.map((branch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0e0e12] border border-white/[0.07] p-8 rounded-[28px] hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-2xl group relative"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                <MapPin className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {branch.city}
              </h3>
              <p className="text-sm text-gray-300 font-light mb-6 flex-grow">
                {branch.area}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/[0.06] text-xs text-gray-400 mb-8 font-mono">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>{branch.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span dir="ltr">{branch.phone}</span>
                </div>
              </div>

              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white/[0.04] hover:bg-primary hover:text-black text-gray-200 border border-white/10 hover:border-primary rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 mt-auto"
              >
                <span>اتجاهات الخريطة</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Info Section */}
        <div id="contact" className="relative min-h-[600px] flex items-center rounded-[36px] overflow-hidden border border-white/[0.08] bg-[#0c0c10]">
          {/* Background Map Simulation */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop" 
              alt="خريطة مواقع فحمة" 
              loading="lazy"
              className="w-full h-full object-cover grayscale opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/80 to-transparent md:from-transparent md:via-[#070709]/60 md:to-[#070709]" />
          </div>

          <div className="max-w-xl p-8 md:p-16 relative z-10 mr-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-primary/60" />
              <span className="text-primary tracking-widest text-xs md:text-sm font-bold uppercase">الخدمة المباشرة</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-10 font-bold">تواصل مع الإدارة</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 group p-4 rounded-2xl bg-black/40 border border-white/[0.06] hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-0.5">الخط الساخن الموحد</h4>
                  <a href="tel:16000" dir="ltr" className="text-2xl font-mono font-bold text-primary hover:text-white transition-colors block">
                    16000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group p-4 rounded-2xl bg-black/40 border border-white/[0.06] hover:border-[#25D366]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-0.5">خدمة عملاء واتساب VIP</h4>
                  <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-[#25D366] transition-colors">
                    متاح 24/7 للطلبات والاستفسارات
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group p-4 rounded-2xl bg-black/40 border border-white/[0.06] hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-0.5">البريد الإلكتروني للإدارة</h4>
                  <a href="mailto:vip@fahmagrill.com" className="text-sm font-mono text-gray-400 hover:text-primary transition-colors">
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

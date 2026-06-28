import { Flame, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#070709] pt-24 pb-12 relative overflow-hidden border-t border-white/[0.06]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-right">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-6">
              <Flame className="text-[#ff6a00] w-9 h-9" />
              <span className="font-serif text-3xl tracking-wide text-white font-bold">
                فحمة
              </span>
            </a>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light">
              صياغة تذوقية تحتفي بأصالة المشويات المصرية. نقدم لك الفخامة في كل تفصيلة بأرقى معايير الضيافة العالمية.
            </p>
            <div className="flex items-center gap-3.5">
              <a href="#" className="w-11 h-11 rounded-2xl border border-white/10 bg-[#0e0e12] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300 shadow-lg hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-2xl border border-white/10 bg-[#0e0e12] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300 shadow-lg hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-2xl border border-white/10 bg-[#0e0e12] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300 shadow-lg hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-white text-xl mb-6 font-bold">استكشف عالمنا</h4>
            <ul className="space-y-3.5">
              {[
                { label: 'قائمة الطعام الفاخرة', href: '#menu' },
                { label: 'قصة الشيف والمطعم', href: '#story' },
                { label: 'المعرض البصري', href: '#gallery' },
                { label: 'حجز ترابيزة خاصة', href: '#reservation' },
                { label: 'الفروع والتواصل', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm md:text-base font-light hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-white text-xl mb-6 font-bold">مواعيد الاستضافة</h4>
            <ul className="space-y-4 text-sm md:text-base text-gray-400 font-light">
              <li className="flex justify-between border-b border-white/[0.06] pb-3">
                <span>السبت - الأربعاء</span>
                <span className="text-white font-mono" dir="ltr">12:00 PM - 01:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/[0.06] pb-3">
                <span>الخميس - الجمعة</span>
                <span className="text-primary font-mono font-bold" dir="ltr">12:00 PM - 03:00 AM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-white text-xl mb-6 font-bold">دعوات التذوق الخاصة</h4>
            <p className="text-gray-400 text-xs md:text-sm mb-5 font-light leading-relaxed">انضم للقائمة الخاصة لتصلك دعوات تجارب القائمة الموسمية وحجوزات الـ VIP.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="البريد الإلكتروني الخاص" 
                className="bg-[#0e0e12] border border-white/10 px-4 py-3.5 rounded-xl text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors text-right"
              />
              <button className="py-3.5 btn-gold rounded-xl text-base font-bold shadow-md active:scale-98">
                انضم الآن
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} مطعم فحمة الفاخر للمشويات. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-300 transition-colors">الخصوصية والسرية</a>
            <a href="#" className="hover:text-gray-300 transition-colors">شروط الحجز والاستضافة</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

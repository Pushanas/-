import { useState } from 'react';
import { Flame, Instagram, Facebook, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language, PageView } from '../types';

interface FooterProps {
  lang: Language;
  onNavigate: (view: PageView) => void;
}

export default function Footer({ lang, onNavigate }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);
  const isAr = lang === 'ar';

  const navLinks: { id: PageView; en: string; ar: string }[] = [
    { id: 'home', en: 'Home Sanctuary', ar: 'الرئيسية' },
    { id: 'menu', en: 'Complete Menu', ar: 'قائمة الطعام' },
    { id: 'about', en: 'Brand Heritage', ar: 'قصة فحمة جريل' },
    { id: 'gallery', en: 'Visual Showcase', ar: 'معرض الأطباق' },
    { id: 'reservations', en: 'VIP Reservations', ar: 'حجز طاولة' },
    { id: 'contact', en: 'Global Concierge', ar: 'فروعنا والتواصل' }
  ];

  return (
    <footer className="bg-[#070709] pt-20 pb-12 relative overflow-hidden border-t border-white/10 select-none" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16 text-left" dir={isAr ? 'rtl' : 'ltr'}>
          
          <div className="lg:col-span-4">
            <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2.5 mb-5 cursor-pointer text-left">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff6a00] to-[#d4af37] p-[1px]">
                <div className="w-full h-full bg-[#070709] rounded-full flex items-center justify-center">
                  <Flame className="text-[#ff6a00] w-5 h-5 fill-[#ff6a00]/30" />
                </div>
              </div>
              <span className="font-serif text-2xl tracking-wide text-white font-bold block leading-none">
                FAHMA
              </span>
            </button>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-light max-w-sm">
              {isAr
                ? 'فحمة جريل — رمز عالمي للمشويات الفاخرة على الفحم الطبيعي. نصوغ لك الفخامة في كل طبق بأرقى معايير الضيافة الدولية.'
                : 'Fahma Grill — World-class upscale live fire dining house. Curating exceptional charcoal grill rituals celebrated across London, Tokyo, NYC, and Dubai.'}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://wa.me/44800012345" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-[#25D366] hover:border-[#25D366] transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-serif text-white text-base sm:text-lg mb-5 font-bold">
              {isAr ? 'استكشف عالمنا' : 'Explore Fahma'}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => { onNavigate(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="text-gray-400 text-xs sm:text-sm font-light hover:text-[#d4af37] transition-colors cursor-pointer block text-left"
                  >
                    {isAr ? link.ar : link.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-white text-base sm:text-lg mb-5 font-bold">
              {isAr ? 'مواعيد المطبخ' : 'Kitchen Hours'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400 font-light">
              <li className="border-b border-white/10 pb-2">
                <span className="block text-gray-300 font-semibold">{isAr ? 'السبت - الأربعاء' : 'Sat - Wed'}</span>
                <span className="text-gray-400 font-mono text-[11px]" dir="ltr">12:00 PM - 01:00 AM</span>
              </li>
              <li className="border-b border-white/10 pb-2">
                <span className="block text-[#d4af37] font-semibold">{isAr ? 'الخميس - الجمعة' : 'Thu - Fri VIP'}</span>
                <span className="text-[#d4af37] font-mono text-[11px] font-bold" dir="ltr">12:00 PM - 03:00 AM</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-serif text-white text-base sm:text-lg mb-5 font-bold">
              {isAr ? 'عضوية النخبة البرونزية' : 'VIP Epicurean Club'}
            </h4>
            <p className="text-gray-400 text-xs mb-4 font-light leading-relaxed">
              {isAr ? 'انضم للقائمة الخاصة لتصلك دعوات تجارب القائمة الموسمية وحجوزات الشيف المباشرة.' : 'Subscribe to receive private seasonal tasting invitations and priority Chef\'s table booking codes.'}
            </p>
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs flex items-center gap-3 animate-fade-in shadow-md">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>{isAr ? 'أهلاً بك في نادي نخبة فحمة الملكي! تفقد بريدك قريباً.' : 'Welcome to the Fahma VIP Epicurean Club! Check your inbox.'}</span>
              </div>
            ) : (
              <form className="flex flex-col gap-2.5" onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
                <input 
                  required
                  type="email" 
                  placeholder={isAr ? 'البريد الإلكتروني الخاص' : 'Enter VIP Email'} 
                  className="h-11 bg-black/60 border border-white/15 px-4 rounded-xl text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d4af37] transition-colors"
                />
                <button type="submit" className="h-11 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-[#070709] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-95 transition-all cursor-pointer">
                  {isAr ? 'انضم الآن' : 'Subscribe VIP'}
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Fahma Grill International Fine Hospitality Group. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">{isAr ? 'الخصوصية والسرية' : 'Privacy Notice'}</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">{isAr ? 'شروط الحجز' : 'Terms of Dining'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

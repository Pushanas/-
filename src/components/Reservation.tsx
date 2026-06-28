import { motion } from 'motion/react';
import { Calendar, Clock, Users, CheckCircle, Sparkles, Utensils, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Language, PageView } from '../types';

interface ReservationProps {
  lang: Language;
  previewOnly?: boolean;
  onNavigate?: (view: PageView) => void;
}

export default function Reservation({ lang, previewOnly = false, onNavigate }: ReservationProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [seatingArea, setSeatingArea] = useState('indoor_vip');
  const isAr = lang === 'ar';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section 
      id="reservations" 
      className={`bg-[#070709] relative select-none ${previewOnly ? 'py-24 border-b border-white/10' : 'pt-32 pb-28 min-h-screen'}`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Atmospheric luxury lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4af37]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {previewOnly && (
          <div className="text-center mb-16">
            <span className="text-[#ff6a00] tracking-widest text-xs font-bold mb-3 block uppercase">
              {isAr ? 'ضيافة ملكية حصرية' : 'Exclusive Dining Experience'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-bold">
              {isAr ? (
                <>احجز طاولة في <span className="text-[#d4af37]">فحمة جريل</span></>
              ) : (
                <>Reserve Your Table at <span className="text-[#d4af37]">Fahma Grill</span></>
              )}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {!previewOnly && (
              <span className="text-[#d4af37] tracking-widest text-xs font-bold mb-3 block uppercase">
                {isAr ? 'احجز طاولة VIP' : 'Table Reservation Wizard'}
              </span>
            )}

            <h3 className="text-3xl sm:text-5xl font-serif text-white mb-6 font-bold leading-tight">
              {isAr ? (
                <>تجربة تذوق <br /><span className="text-[#d4af37]">صُممت لك خصيصاً</span></>
              ) : (
                <>An Unforgettable <br /><span className="text-[#d4af37]">Fire Dining Ritual</span></>
              )}
            </h3>

            <p className="text-gray-300 text-xs sm:text-base font-light leading-relaxed mb-10">
              {isAr
                ? 'سواء كانت عشاءً رومانسياً هادئاً، أو غداء عمل فخم، أو احتفالاً عائلياً خاصاً، يضمن لك فريق الاستضافة في فحمة أقصى درجات الحفاوة والخصوصية والأولوية.'
                : 'Whether hosting an intimate dinner, a prestigious business lunch, or a private celebration, Fahma Grill guarantees uncompromising hospitality and culinary distinction.'}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base sm:text-lg">
                    {isAr ? 'مفتوح لاستقبالكم يومياً' : 'Open Everyday'}
                  </h4>
                  <span className="text-xs text-gray-400 font-light">
                    {isAr ? 'طوال أيام الأسبوع بمهنية تامة' : 'Dedicated concierge fine dining service'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#ff6a00]/10 flex items-center justify-center text-[#ff6a00] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base sm:text-lg">
                    {isAr ? 'ساعات الضيافة' : 'Dining Hours'}
                  </h4>
                  <span className="text-xs font-mono text-gray-400 font-light">
                    12:00 PM - 02:00 AM (UTC+2)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side Wizard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 sm:p-10 md:p-12 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#d4af37]/10 blur-[100px] rounded-full pointer-events-none" />
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center justify-center text-center py-16 sm:py-24"
              >
                <div className="w-20 h-20 bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-bounce">
                  <CheckCircle className="w-10 h-10 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4">
                  {isAr ? 'تشرفنا بتلقي طلب حجزكم' : 'Reservation Confirmed'}
                </h3>
                <p className="text-gray-300 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed mb-8">
                  {isAr
                    ? 'سيتواصل معكم مدير الاستضافة هاتفياً أو عبر رسالة قصيرة خلال 15 دقيقة لتأكيد الطاولة وترتيب متطلباتكم الخاصة.'
                    : 'Our Head Maître D\' will contact you shortly via SMS/Phone to finalize your seating preferences and dietary accommodations.'}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-gray-200 transition-all cursor-pointer"
                >
                  {isAr ? 'حجز طاولة أخرى' : 'Book Another Table'}
                </button>
              </motion.div>
            ) : (
              <form className="relative z-10 space-y-6" onSubmit={handleSubmit} dir={isAr ? 'rtl' : 'ltr'}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-300 tracking-wider uppercase block text-left">
                      {isAr ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input required type="text" placeholder={isAr ? 'مثال: معالي الشيخ / أحمد' : 'e.g. Lord Alexander'} className="w-full h-12 bg-black/60 border border-white/15 rounded-xl px-4 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-[#d4af37] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-300 tracking-wider uppercase block text-left">
                      {isAr ? 'رقم الهاتف (مع الرمز الدولي)' : 'Direct Phone'}
                    </label>
                    <input required type="tel" placeholder="+971 50 XXX XXXX" dir="ltr" className="w-full h-12 bg-black/60 border border-white/15 rounded-xl px-4 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-[#d4af37] transition-colors font-mono" />
                  </div>
                </div>

                {/* Seating Area Selection Wizard */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-300 tracking-wider uppercase block text-left">
                    {isAr ? 'اختر منطقة الجلوس الفاخرة' : 'Select Seating Area'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'indoor_vip', nameEn: 'Indoor VIP Lounge', nameAr: 'الصالة الداخلية VIP' },
                      { id: 'terrace', nameEn: 'Starlight Terrace', nameAr: 'التراس المفتوح' },
                      { id: 'chefs_table', nameEn: "Chef's Table 🔥", nameAr: 'طاولة الشيف المباشرة 🔥' }
                    ].map((area) => (
                      <button
                        type="button"
                        key={area.id}
                        onClick={() => setSeatingArea(area.id)}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                          seatingArea === area.id
                            ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                            : 'bg-black/40 border-white/10 text-gray-300 hover:border-white/30'
                        }`}
                      >
                        {isAr ? area.nameAr : area.nameEn}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-300 tracking-wider uppercase block text-left">
                      {isAr ? 'عدد الضيوف' : 'Guests'}
                    </label>
                    <div className="relative">
                      <Users className={`absolute ${isAr ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37] pointer-events-none`} />
                      <select className="w-full h-12 bg-black/60 border border-white/15 rounded-xl px-4 text-white appearance-none text-sm focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer">
                        <option value="2">{isAr ? 'شخصين (طاولة ثنائية)' : '2 Guests (Intimate Table)'}</option>
                        <option value="3">{isAr ? '3 أشخاص' : '3 Guests'}</option>
                        <option value="4">{isAr ? '4 أشخاص' : '4 Guests'}</option>
                        <option value="5">{isAr ? '5 أشخاص' : '5 Guests'}</option>
                        <option value="6">{isAr ? '6 أشخاص أو أكثر (جناح عائلي)' : '6+ Guests (Private Booth)'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-300 tracking-wider uppercase block text-left">
                      {isAr ? 'تاريخ الحجز' : 'Date'}
                    </label>
                    <input required type="date" className="w-full h-12 bg-black/60 border border-white/15 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer font-mono [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-300 tracking-wider uppercase block text-left">
                      {isAr ? 'الوقت المفضّل' : 'Time'}
                    </label>
                    <input required type="time" defaultValue="20:30" className="w-full h-12 bg-black/60 border border-white/15 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer font-mono [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-300 tracking-wider uppercase block text-left">
                    {isAr ? 'ملاحظات أو مناسبة خاصة (اخياري)' : 'Special Requests (Optional)'}
                  </label>
                  <textarea rows={2} placeholder={isAr ? 'مثال: ذكرى زواج،แพ้المكسرات، كرسي أطفال...' : 'e.g. Anniversary celebration, severe nut allergy, window seat...'} className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-[#d4af37] transition-colors resize-none" />
                </div>

                <button 
                  type="submit" 
                  className="w-full h-14 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-[#070709] font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] transition-all cursor-pointer hover:scale-[1.01] active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isAr ? 'تأكيد الحجز الفوري الآن' : 'Confirm Instant Reservation'}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {previewOnly && onNavigate && (
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('reservations')}
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#d4af37] inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>{isAr ? 'شاهد سياسة الحجوزات الكاملة' : 'View Reservation Policies'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

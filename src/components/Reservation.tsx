import { motion } from 'motion/react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="reservation" className="py-32 bg-[#070709] relative border-y border-white/[0.05]">
      {/* Atmospheric luxury lighting */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center text-right"
          >
            <span className="text-primary tracking-widest text-xs md:text-sm font-bold mb-3 block uppercase">احجز ترابيزة VIP</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 font-bold">تجربة تذوق <span className="text-primary">خاصة بك</span></h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-12">
              احجز ترابيزتك في "فحمة" واستعد لرحلة طعام استثنائية. سواء كانت عشاءً خاصاً أو احتفالاً عائلياً راقياً، فريقنا يضمن لك أجواء تتسم بالخصوصية والحفاوة المطلقة.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#0e0e12] border border-white/[0.06]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <Calendar className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-xl mb-1">مفتوح لاستقبالكم يومياً</h4>
                  <span className="text-sm text-gray-400 font-light">طوال أيام الأسبوع بمهنية تامة</span>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#0e0e12] border border-white/[0.06]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-xl mb-1">ساعات الاستضافة</h4>
                  <span className="text-sm text-gray-400 font-mono font-light">12:00 ظهراً - 02:00 صباحاً</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#0e0e12] p-8 md:p-12 rounded-[32px] border border-white/[0.08] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center justify-center h-full text-center py-24"
              >
                <div className="w-20 h-20 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">تشرفنا بحجزكم الفاخر</h3>
                <p className="text-gray-400 max-w-sm mx-auto font-light leading-relaxed">سيتواصل معكم مدير الاستضافة هاتفياً خلال دقائق لتأكيد الترابيزة وترتيب متطلباتكم الخاصة.</p>
              </motion.div>
            ) : (
              <form className="relative z-10 flex flex-col gap-6 text-right" onSubmit={handleSubmit}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-bold text-gray-300 tracking-wider uppercase">الاسم الكامل</label>
                    <input required type="text" placeholder="مثال: السيد أحمد" className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors text-right" />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-bold text-gray-300 tracking-wider uppercase">رقم التواصل المباشر</label>
                    <input required type="tel" placeholder="01X XXXX XXXX" dir="ltr" className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors text-right font-mono" />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="text-xs font-bold text-gray-300 tracking-wider uppercase">عدد الضيوف</label>
                  <div className="relative">
                    <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <select className="w-full bg-black/50 border border-white/10 rounded-2xl pr-5 pl-14 py-4 text-white appearance-none focus:outline-none focus:border-primary transition-colors cursor-pointer text-right">
                      <option>ضيفين (ترابيزة لـ فردين)</option>
                      <option>3 ضيوف</option>
                      <option>4 ضيوف</option>
                      <option>5 ضيوف</option>
                      <option>6 ضيوف أو أكثر (جناح عائلي)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-bold text-gray-300 tracking-wider uppercase">تاريخ الحجز</label>
                    <div className="relative">
                      <input required type="date" className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors cursor-pointer text-right [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert font-mono text-sm" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-bold text-gray-300 tracking-wider uppercase">الوقت المفضّل</label>
                    <div className="relative">
                      <input required type="time" className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors cursor-pointer text-right [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert font-mono text-sm" defaultValue="20:00" />
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full mt-4 py-4 btn-gold rounded-2xl text-lg font-bold flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] transition-all active:scale-98">
                  تأكيد الحجز الآن
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

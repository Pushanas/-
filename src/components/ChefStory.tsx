import { motion } from 'motion/react';

export default function ChefStory() {
  return (
    <section id="story" className="py-24 bg-[#070709] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full order-1 lg:order-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2777&auto=format&fit=crop" 
              alt="الشيف الرئيسي" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
            <div className="absolute inset-0 border-2 border-primary/30 m-4 rounded-xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 lg:order-1 text-right"
          >
            <span className="text-primary tracking-widest text-sm font-bold mb-4 block">تراثنا الأصيل</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              سر الصنعة في <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent">الفحم والتتبيلة</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                بدأت الحكاية من قلب شوارع القاهرة، شواية فحم صغيرة وشغف كبير بتقديم ألذ طعم للمشويات. في "فحمة"، قدرنا نحافظ على سر التتبيلة المصرية الأصيلة اللي وارثينها أباً عن جد.
              </p>
              <p>
                كل قطعة لحمة بنختارها بعناية فائقة، وبتاخد وقتها في التتبيل لمدة ٢٤ ساعة في خلطتنا المكونة من البصل المفروم والطماطم والبهارات الشرقية الأصيلة، عشان تتشرب الطعم صح قبل ما تلمس نار الفحم.
              </p>
              <p className="text-xl font-serif text-white border-r-4 border-primary pr-6 my-8 italic opacity-90">
                "إحنا مبنعملش أكل وبس، إحنا بنصنع ذكريات. ريحة الشواية بتاعتنا هي ريحة لمتنا المصرية الجميلة."
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="block text-xl font-bold text-white mb-1">الشيف حسن</span>
                <span className="block text-sm text-primary">كبير الطهاة ومؤسس فحمة</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-xl text-primary text-sm font-bold tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                ★ شيف معتمد منذ ١٩٩٨
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Flame, Beef, Clock, Award, Leaf } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function Features() {
  const features = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'فحم طبيعي',
      desc: 'سر النكهة الأصيلة يكمن في الشوي الهادئ والمتقن على جمر الفحم الطبيعي النقي 100%.'
    },
    {
      icon: <Beef className="w-8 h-8" />,
      title: 'لحوم مختارة يوميًا',
      desc: 'ننتقي أجود القطعيات من مزارعنا الخاصة يومياً لضمان الطراوة والجودة الفائقة.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'وصفات مصرية أصلية',
      desc: 'تتبيلة سرية متوارثة تحافظ على الأصول الشرقي وتمنحك المذاق الحقيقي للمشويات.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'توصيل سريع',
      desc: 'نضمن وصول أطباقك ساخنة وفي الوقت المحدد، كأنها قدمت للتو من شواية الحاتي.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'تقييمات ممتازة',
      desc: 'آلاف العملاء يشهدون لنا بالجودة الاستثنائية والخدمة الفاخرة التي تليق بعائلتك.'
    }
  ];

  return (
    <section id="features" className="py-32 bg-[#070709] relative border-y border-white/[0.05] overflow-hidden">
      {/* Decorative atmospheric glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-accent/50" />
            <span className="text-accent tracking-widest text-sm font-bold uppercase">معايير الجودة</span>
            <div className="h-[1px] w-8 bg-accent/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">سر الصنعة في <span className="text-primary">فحمة</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">نلتزم بأعلى معايير الجودة في كل خطوة، لنقدم لك المذاق الأصلي للمشويات كما يجب أن يكون.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 glass-panel hover:bg-surface-light transition-all duration-500 group rounded-2xl hover:-translate-y-2 gold-glow-hover"
            >
              <div className="w-20 h-20 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-500 shadow-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

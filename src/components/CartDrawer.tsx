import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { useState } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Helper to parse price string like "799 جنيه" to number 799
  const parsePrice = (priceStr: string): number => {
    const num = parseInt(priceStr.replace(/[^\d]/g, ''), 10);
    return isNaN(num) ? 0 : num;
  };

  const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0);
  const vat = Math.round(subtotal * 0.14);
  const deliveryFee = subtotal > 0 ? (subtotal >= 600 ? 0 : 50) : 0;
  const total = subtotal + vat + deliveryFee;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let text = `*🔥 طلب جديد من مطعم فحمة للمشويات*\n\n*الطلبات:*\n`;
    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.name} (x${item.quantity}) - ${parsePrice(item.price) * item.quantity} ج.م\n`;
    });

    text += `\n*المجموع الفرعي:* ${subtotal} ج.م`;
    text += `\n*ضريبة القيمة المضافة (14%):* ${vat} ج.م`;
    text += `\n*خدمة التوصيل:* ${deliveryFee === 0 ? 'مجاني 🎁' : deliveryFee + ' ج.م'}`;
    text += `\n*الإجمالي المطلوب:* *${total} ج.م*`;
    text += `\n\n_برجاء تأكيد الطلب والعنوان._`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/201234567890?text=${encodedText}`, '_blank');
    setOrderSuccess(true);
    setTimeout(() => {
      onClearCart();
      setOrderSuccess(false);
      onClose();
    }, 3500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden" dir="rtl">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer Container */}
          <div className="absolute inset-y-0 left-0 max-w-full flex">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-[#0a0a0a] border-r border-primary/30 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col h-full text-white relative z-10"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#141414] to-[#0a0a0a]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                      سلة الطلبات
                      {cart.length > 0 && (
                        <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-primary text-black font-bold">
                          {cart.reduce((a, b) => a + b.quantity, 0)}
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">مشويات طازجة على الفحم الطبيعي</p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Success Overlay */}
              {orderSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-[#25D366]/20 border-2 border-[#25D366] flex items-center justify-center text-[#25D366] mb-6 shadow-[0_0_30px_rgba(37,211,102,0.4)]"
                  >
                    <ShieldCheck className="w-10 h-10" />
                  </motion.div>
                  <h4 className="text-3xl font-serif font-bold text-white mb-2">تم تجهيز طلبك بنجاح!</h4>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    تم تحويلك إلى واتساب لإتمام الطلب مع مطعم فحمة. سيتم التواصل معك لتأكيد التوصيل في أسرع وقت.
                  </p>
                  <div className="px-6 py-2 rounded-full bg-primary/20 border border-primary text-primary text-sm font-bold animate-pulse">
                    جارِ إفراغ السلة وإغلاق النافذة...
                  </div>
                </motion.div>
              )}

              {/* Body / Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 mb-6"
                    >
                      <ShoppingBag className="w-12 h-12 stroke-[1.5]" />
                    </motion.div>
                    <h4 className="text-2xl font-serif text-white font-bold mb-2">سلتك فارغة حالياً</h4>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-8">
                      لم تقم بإضافة أي أطباق بعد. تصفح المنيو واختَر أشهى المشويات المصرية الطازجة.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-8 py-3.5 btn-gold rounded-full font-bold text-sm flex items-center gap-2 shadow-lg"
                    >
                      تصفح المنيو الآن
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={item.id}
                      className="p-4 rounded-2xl bg-surface border border-white/10 hover:border-primary/40 transition-colors flex gap-4 items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover border border-white/10 shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-lg font-bold text-white truncate">{item.name}</h4>
                        <div className="text-primary font-bold text-sm mt-0.5">{item.price}</div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg p-1">
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="w-7 h-7 rounded-md bg-white/10 hover:bg-primary hover:text-black text-white flex items-center justify-center transition-colors"
                              title="زيادة الكمية"
                            >
                              <Plus className="w-3.5 h-3.5 font-bold" />
                            </button>
                            <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                              title="تقليل الكمية"
                            >
                              <Minus className="w-3.5 h-3.5 font-bold" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-gray-500 hover:text-red-500 p-1.5 transition-colors"
                            title="حذف الطبق"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer / Summary */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#121212] space-y-4">
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>المجموع الفرعي</span>
                      <span className="font-bold font-mono">{subtotal} ج.م</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>ضريبة القيمة المضافة (14%)</span>
                      <span className="font-mono">{vat} ج.م</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>توصيل للمنزل</span>
                      <span className={deliveryFee === 0 ? 'text-[#25D366] font-bold' : 'font-mono text-gray-400'}>
                        {deliveryFee === 0 ? 'مجاني (طلبك يتخطى 600 جنيه) 🎉' : `${deliveryFee} ج.م`}
                      </span>
                    </div>
                    <div className="h-[1px] bg-white/10 my-2" />
                    <div className="flex justify-between text-lg font-bold text-white">
                      <span>الإجمالي</span>
                      <span className="text-primary font-mono text-xl">{total} ج.م</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-2">
                    <button
                      onClick={handleWhatsAppCheckout}
                      className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2.5 shadow-[0_5px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-all duration-300 active:scale-98"
                    >
                      <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                      إتمام الطلب عبر واتساب
                    </button>

                    <button
                      onClick={onClearCart}
                      className="w-full py-2.5 bg-white/5 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 border border-white/10 text-gray-400 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      إفراغ السلة
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

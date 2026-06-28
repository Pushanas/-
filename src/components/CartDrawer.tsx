import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem, Language } from '../types';
import { useState } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  lang: Language;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  lang,
}: CartDrawerProps) {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const isAr = lang === 'ar';

  const parsePrice = (priceStr: string): number => {
    const num = parseInt(priceStr.replace(/[^\d]/g, ''), 10);
    return isNaN(num) ? 0 : num;
  };

  const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0);
  const vat = Math.round(subtotal * 0.14);
  const deliveryFee = subtotal > 0 ? (subtotal >= 100 ? 0 : 15) : 0;
  const total = subtotal + vat + deliveryFee;

  const currencySymbol = '$';

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let text = isAr ? `*🔥 طلب حجز طعام من مطعم فحمة جريل*\n\n*الطلبات:*\n` : `*🔥 VIP Dining Order — Fahma Grill*\n\n*Items:*\n`;
    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.name} (x${item.quantity}) - ${currencySymbol}${parsePrice(item.price) * item.quantity}\n`;
    });

    text += `\n*${isAr ? 'المجموع الفرعي' : 'Subtotal'}:* ${currencySymbol}${subtotal}`;
    text += `\n*${isAr ? 'الضريبة (14%)' : 'VAT (14%)'}:* ${currencySymbol}${vat}`;
    text += `\n*${isAr ? 'خدمة التوصيل' : 'Concierge Delivery'}:* ${deliveryFee === 0 ? (isAr ? 'مجاني 🎁' : 'Complimentary 🎁') : currencySymbol + deliveryFee}`;
    text += `\n*${isAr ? 'الإجمالي المطلوب' : 'Total Due'}:* *${currencySymbol}${total}*`;
    text += `\n\n_${isAr ? 'برجاء تأكيد الطلب وعنوان التوصيل.' : 'Please confirm delivery address and time.'}_`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/44800012345?text=${encodedText}`, '_blank');
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
        <div className="fixed inset-0 z-[100] overflow-hidden select-none" dir={isAr ? 'rtl' : 'ltr'}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Drawer Container */}
          <div className={`absolute inset-y-0 ${isAr ? 'left-0' : 'right-0'} max-w-full flex`}>
            <motion.div
              initial={{ x: isAr ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isAr ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-[#0a0a0a] border-white/10 shadow-2xl flex flex-col h-full text-white relative z-10 border-x"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#141414] to-[#0a0a0a]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                      {isAr ? 'سلة الطلبات' : 'Dining Bag'}
                      {cart.length > 0 && (
                        <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-[#d4af37] text-black font-bold">
                          {cart.reduce((a, b) => a + b.quantity, 0)}
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{isAr ? 'أطباق مشويات فاخرة طازجة' : 'Premium Charcoal Fire Specialties'}</p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
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
                  <h4 className="text-3xl font-serif font-bold text-white mb-2">{isAr ? 'تم تجهيز طلبك بنجاح!' : 'Order Placed Successfully!'}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
                    {isAr
                      ? 'تم تحويلك إلى واتساب لإتمام الطلب مع مدير الاستضافة في فحمة جريل.'
                      : 'Redirected to WhatsApp Concierge to finalize your dining order.'}
                  </p>
                  <div className="px-6 py-2 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] text-xs font-bold animate-pulse">
                    {isAr ? 'جارِ إفراغ السلة...' : 'Clearing bag...'}
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
                    <h4 className="text-2xl font-serif text-white font-bold mb-2">{isAr ? 'سلتك فارغة حالياً' : 'Your Dining Bag is Empty'}</h4>
                    <p className="text-gray-400 text-xs max-w-xs leading-relaxed mb-8">
                      {isAr ? 'لم تقم بإضافة أي أطباق بعد. تصفح المنيو واختَر أشهى المشويات الملكية الطازجة.' : 'Explore our culinary collection and select premium flame-grilled Wagyu cuts and appetizers.'}
                    </p>
                    <button
                      onClick={onClose}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-[#070709] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg cursor-pointer"
                    >
                      <span>{isAr ? 'تصفح قائمة الطعام' : 'Explore Menu'}</span>
                      <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
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
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/40 transition-colors flex gap-4 items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-20 h-20 rounded-xl object-cover border border-white/10 shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-base font-bold text-white truncate">{item.name}</h4>
                        <div className="text-[#d4af37] font-bold text-sm mt-0.5">{item.price}</div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg p-1">
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="w-7 h-7 rounded-md bg-white/10 hover:bg-[#d4af37] hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer"
                              title="Increase"
                            >
                              <Plus className="w-3.5 h-3.5 font-bold" />
                            </button>
                            <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                              title="Decrease"
                            >
                              <Minus className="w-3.5 h-3.5 font-bold" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-gray-500 hover:text-red-500 p-1.5 transition-colors cursor-pointer"
                            title="Remove"
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
                <div className="p-6 border-t border-white/10 bg-[#121212] space-y-3.5">
                  <div className="space-y-2 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span>{isAr ? 'المجموع الفرعي' : 'Subtotal'}</span>
                      <span className="font-bold font-mono">{currencySymbol}{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>{isAr ? 'الضريبة (14%)' : 'VAT (14%)'}</span>
                      <span className="font-mono">{currencySymbol}{vat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{isAr ? 'التوصيل الخاص' : 'VIP Delivery'}</span>
                      <span className={deliveryFee === 0 ? 'text-[#25D366] font-bold' : 'font-mono text-gray-400'}>
                        {deliveryFee === 0 ? (isAr ? 'مجاني 🎁' : 'Complimentary 🎁') : `${currencySymbol}${deliveryFee}`}
                      </span>
                    </div>
                    <div className="h-[1px] bg-white/10 my-2" />
                    <div className="flex justify-between text-base font-bold text-white">
                      <span>{isAr ? 'الإجمالي' : 'Total'}</span>
                      <span className="text-[#d4af37] font-mono text-lg">{currencySymbol}{total}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      onClick={handleWhatsAppCheckout}
                      className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                      <span>{isAr ? 'إتمام الطلب عبر واتساب' : 'Checkout via WhatsApp'}</span>
                    </button>

                    <button
                      onClick={onClearCart}
                      className="w-full py-2 bg-white/5 hover:bg-red-500/10 hover:text-red-400 border border-white/10 text-gray-400 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{isAr ? 'إفراغ السلة' : 'Clear Bag'}</span>
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

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import ChefStory from './components/ChefStory';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import LoadingScreen from './components/LoadingScreen';
import Branches from './components/Branches';
import FAQ from './components/FAQ';
import { CartItem, MenuItem, Language, PageView } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<Language>('ar');
  const [activeView, setActiveView] = useState<PageView>('home');

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('fahma_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fahma_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('fahma_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('fahma_favs', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites', e);
    }
  }, [favorites]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleNavigate = (view: PageView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div 
      className="bg-gradient-to-b from-[#0D0D0D] via-[#14100D] to-[#1A1410] min-h-screen text-[#F5F0E8] font-sans selection:bg-[#E8B84B]/30 selection:text-[#E8B84B] overflow-x-hidden w-full max-w-full box-border relative" 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        activeView={activeView}
        setActiveView={handleNavigate}
        lang={lang}
        setLang={setLang}
      />

      <main className="w-full relative">
        {activeView === 'home' && (
          <>
            <Hero lang={lang} onNavigate={handleNavigate} />
            <ChefStory lang={lang} onNavigate={handleNavigate} fullPage={false} />
            <Menu 
              lang={lang} 
              onAddToCart={addToCart} 
              favorites={favorites} 
              onToggleFavorite={toggleFavorite} 
              previewOnly={true} 
              onNavigate={handleNavigate} 
            />
            <Features lang={lang} />
            <Gallery lang={lang} previewOnly={true} onNavigate={handleNavigate} />
            <Reservation lang={lang} previewOnly={true} onNavigate={handleNavigate} />
            <Branches lang={lang} previewOnly={true} />
            <Contact lang={lang} />
          </>
        )}

        {activeView === 'menu' && (
          <div className="pt-20">
            <Menu 
              lang={lang} 
              onAddToCart={addToCart} 
              favorites={favorites} 
              onToggleFavorite={toggleFavorite} 
              previewOnly={false} 
              onNavigate={handleNavigate} 
            />
          </div>
        )}

        {activeView === 'offers' && (
          <div className="pt-20">
            <Menu 
              lang={lang} 
              onAddToCart={addToCart} 
              favorites={favorites} 
              onToggleFavorite={toggleFavorite} 
              previewOnly={false} 
              onNavigate={handleNavigate}
              initialCategory="offers"
            />
          </div>
        )}

        {activeView === 'about' && (
          <div className="pt-20">
            <ChefStory lang={lang} onNavigate={handleNavigate} fullPage={true} />
            <Reviews lang={lang} />
          </div>
        )}

        {activeView === 'branches' && (
          <div className="pt-20">
            <Branches lang={lang} previewOnly={false} />
          </div>
        )}

        {activeView === 'reviews' && (
          <div className="pt-20">
            <Reviews lang={lang} />
          </div>
        )}

        {activeView === 'faq' && (
          <div className="pt-20">
            <FAQ lang={lang} onNavigate={handleNavigate} />
          </div>
        )}

        {activeView === 'gallery' && (
          <div className="pt-20">
            <Gallery lang={lang} previewOnly={false} onNavigate={handleNavigate} />
          </div>
        )}

        {activeView === 'reservations' && (
          <div className="pt-20">
            <Reservation lang={lang} previewOnly={false} onNavigate={handleNavigate} />
          </div>
        )}

        {activeView === 'contact' && (
          <div className="pt-20">
            <Contact lang={lang} />
          </div>
        )}
      </main>

      <Footer lang={lang} onNavigate={handleNavigate} />
      
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        lang={lang}
      />
    </div>
  );
}

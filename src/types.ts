export type MenuCategory = 'all' | 'grills' | 'oriental' | 'sandwiches' | 'starters' | 'desserts' | 'beverages' | 'offers';

export interface MenuItem {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  priceEn: string;
  rating: number;
  image: string;
  calories?: number;
  prepTime?: string;
  spicy?: boolean;
  popular?: boolean;
  combo?: boolean;
  addOns?: string[];
  category: 'grills' | 'oriental' | 'sandwiches' | 'starters' | 'desserts' | 'beverages' | 'offers';
  badge?: "Chef's Pick" | "Best Seller" | "Signature" | "New" | "الأكثر طلباً 🔥" | "عروض التوفير ⚡";
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedDoneness?: string;
  selectedAddOns?: string[];
}

export interface Review {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  content: string;
  contentEn: string;
  rating: number;
  image: string;
}

export interface Branch {
  id: string;
  name: string;
  nameEn: string;
  location: string;
  locationEn: string;
  phone: string;
  hours: string;
  hoursEn: string;
  image: string;
  mapUrl?: string;
  whatsapp?: string;
}

export interface FAQItem {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: string;
}

export type PageView = 'home' | 'menu' | 'offers' | 'about' | 'gallery' | 'branches' | 'reviews' | 'faq' | 'reservations' | 'contact';
export type Language = 'en' | 'ar';




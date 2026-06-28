export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  calories?: number;
  category?: 'grills' | 'sides' | 'drinks';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}


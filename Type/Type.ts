type Review = {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: string;
  createdAt: string;
  updatedAt: string;
};

export interface ProductsCardProps {
  productName: string;
  src: string;
  price: number;
  stock: string;
  id: number | string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: boolean;
  detail: string;
  reviews: Review[];
  colors: string[];
  sizes: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Cart {
  id: string | number;
  price: number;
  name: string;
  image: string;
  quantity: number;
  totalPrice: number;
  itemSize: string;
  itemColor: string;
  date: string;
  user_id?: string;
}

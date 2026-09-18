interface ReviewUser {
  _id: string;
  name: string;
  photo: string;
}

type Review = {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: ReviewUser;
  createdAt: string;
  updatedAt: string;
};

export interface ProductsCardProps {
  productName: string;
  src: string;
  price: number;
  stock: string | boolean;
  id: number | string;
}

export interface Cart {
  product: string;
  quantity: number;
  size: string;
  color: string;
}

export interface SignUp {
  name: string;
  email: string;
  password: string | number;
  passwordConfirm: string | number;
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

export interface CartProp {
  _id: string;
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export type CreateOrderData = {
  items: {
    product: string;
    quantity: number;
    price: number;
    size: string;
    color: string;
  }[];

  totalPrice: number;

  shippingAddress: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
  };
};

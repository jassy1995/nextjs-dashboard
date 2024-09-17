export type TInvoice = {
  customer_id: number;
  amount: number;
  status: 'pending' | 'paid';
  date: string;
};
export type TProduct = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
};
export type TReview = {
  name: string;
  rating: number;
  description: string;
  date: string;
};
export type TColor = {
  name: string;
  value: string;
};
export type TSize = {
  name: string;
  bg: string;
};
export type Item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  slug: string;
  rating: number;
  image: string;
};
export type TUser = {
  name: string;
  email: string;
  password: string;
};
export type TUpdateCart = {
  product: Item;
  setData: (data: Partial<CartState>) => void;
  data: CartState;
};
export type TUpdateUser = {
  setData: (data: Partial<UserState>) => void;
  data: UserState;
};
export type OrderItem = {
  id?: number;
  name: string;
  slug?: string;
  image: string;
  quantity: number;
  price: number;
  color?: string;
  size: string;
};
export type UserState = {
  user: any;
  isSignedIn: boolean | null;
  redirectPath: string | null;
  loggedIn?: (payload: any) => void;
  loggedOut?: () => void;
  rehydrate?: (state: any) => void;
  setRedirectPath?: (redirectFrom: string) => void;
};
export type CartState = {
  items: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  increase?: (item: OrderItem) => void;
  decrease?: (item: OrderItem) => void;
  remove?: (item: OrderItem) => void;
  clearCart?: () => void;
};

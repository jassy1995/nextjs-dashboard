import { round2 } from '@/util/global';
import { CartState, OrderItem } from '@/util/model';
import { create } from 'zustand';
import { PersistStorage, persist } from 'zustand/middleware';

const taxRate = 0.15;
const shippingRate = 0.05;

// Initial state of the cart
const initialState: Omit<CartState, 'increase' | 'decrease'> = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

// Custom storage for Zustand persistence
const customLocalStorage: PersistStorage<CartState> = {
  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name: string, value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
  },
};

// Function to calculate prices
const calcPrice = (items: OrderItem[]) => {
  const itemsPrice = round2(
    items.reduce((a, c) => a + c.price * c.quantity, 0)
  );
  const shippingPrice = itemsPrice > 900 ? 0 : shippingRate;
  const taxPrice = round2(Number(itemsPrice * taxRate));
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

// Zustand store with persistence
export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      ...initialState,
      increase: (item: OrderItem) => {
        const { items } = get();
        const existingItem = items.find((i) => i.id === item.id);
        const updatedCartItems = existingItem
          ? items.map((x) =>
              x.id === item.id
                ? { ...existingItem, quantity: existingItem.quantity + 1 }
                : x
            )
          : [{ ...item, quantity: 1 }, ...items];

        const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
          calcPrice(updatedCartItems);
        set({
          items: updatedCartItems,
          itemsPrice,
          shippingPrice,
          taxPrice,
          totalPrice,
        });
      },
      decrease: (item: OrderItem) => {
        const { items }: any = get();
        const existingItem = items.find((i: OrderItem) => i.id === item.id);
        if (!existingItem || existingItem.quantity === 0) return;

        const updatedCartItems =
          existingItem.quantity === 1
            ? items.filter((i: OrderItem) => i.id !== item.id)
            : items.map((x: OrderItem) =>
                x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x
              );

        const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
          calcPrice(updatedCartItems);
        set({
          items: updatedCartItems,
          itemsPrice,
          shippingPrice,
          taxPrice,
          totalPrice,
        });
      },
      remove: (item: OrderItem) => {
        const { items }: any = get();
        const existingItem = items.find((i: OrderItem) => i.id === item.id);
        if (!existingItem) return;
        const updatedCartItems = items.filter(
          (x: OrderItem) => x.id !== item.id
        );

        const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
          calcPrice(updatedCartItems);
        set({
          items: updatedCartItems,
          itemsPrice,
          shippingPrice,
          taxPrice,
          totalPrice,
        });
      },
      clearCart: () => {
        set({
          items: [],
          itemsPrice: 0,
          shippingPrice: 0,
          taxPrice: 0,
          totalPrice: 0,
        });
      },
    }),
    {
      name: 'buyhub-cart', // Unique name for the localStorage key
      storage: customLocalStorage, // Use localStorage for persistence
    }
  )
);

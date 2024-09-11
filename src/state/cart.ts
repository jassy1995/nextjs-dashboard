'use client';
import { generateRandomString } from '@/util/global';
import { createGlobalState } from '.';

type Item = {
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

type CartState = {
  items: Item[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
};

const state: CartState = {
  items: [
    // {
    //   id: 1,
    //   name: 'The Cozy Knit Blanket',
    //   price: 59.99,
    //   rating: 4.8,
    //   image: '/products/item1.png',
    //   color: 'blue',
    //   size: 'large',
    //   slug: generateRandomString(5),
    //   quantity: 1,
    // },
    // {
    //   id: 2,
    //   name: 'Adventure Backpack',
    //   price: 129.99,
    //   rating: 4.5,
    //   image: '/products/item2.png',
    //   color: 'black',
    //   size: 'medium',
    //   slug: generateRandomString(5),
    //   quantity: 1,
    // },
    // {
    //   id: 3,
    //   name: 'Sparkling Citrus Hand Soap',
    //   price: 7.99,
    //   rating: 4.7,
    //   image: '/products/item3.png',
    //   color: 'yellow',
    //   size: 'x-large',
    //   slug: generateRandomString(5),
    //   quantity: 1,
    // },
    // {
    //   id: 4,
    //   name: 'Artisan Coffee Blend',
    //   price: 14.99,
    //   rating: 4.9,
    //   image: '/products/item4.png',
    //   color: 'brown',
    //   size: 'small',
    //   slug: generateRandomString(5),
    //   quantity: 1,
    // },
    // {
    //   id: 5,
    //   name: 'Sustainable Bamboo Toothbrush',
    //   price: 5.99,
    //   rating: 4.6,
    //   image: '/products/item5.png',
    //   color: 'White',
    //   size: 'xx-large',
    //   slug: generateRandomString(5),
    //   quantity: 1,
    // },
  ],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

const shippingRate = 0.05;
const taxRate = 0.08;

export const addToCart = (
  product: Item,
  setData: (data: Partial<CartState>) => void,
  data: CartState
) => {
  const existingItem = data.items.find((item) => item.id === product.id);

  let updatedItems;
  if (existingItem) {
    updatedItems = data.items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    updatedItems = [{ ...product, quantity: 1 }, ...data.items];
  }

  const item = existingItem ? existingItem : product;

  const newData = {
    items: updatedItems,
    ...calculatePrices(data, item, 'add'),
  };

  setData(newData);
};

export const incrementQuantity = (
  product: Item,
  setData: (data: Partial<CartState>) => void,
  data: CartState
) => {
  const isExist = data.items.find((item) => item.id === product.id);
  if (isExist) {
    const updatedItems = data.items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    const newData = {
      items: updatedItems,
      ...calculatePrices(data, isExist, 'add'),
    };

    setData(newData);
  }
};

export const decrementQuantity = (
  product: Item,
  setData: (data: Partial<CartState>) => void,
  data: CartState
) => {
  const isExist = data.items.find((item) => item.id === product.id);
  if (isExist && isExist.quantity > 1) {
    const updatedItems = data.items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );

    const newData = {
      items: updatedItems,
      ...calculatePrices(data, isExist, 'remove'),
    };

    setData(newData);
  }
};

export const removeFromCart = (
  product: Item,
  setData: (data: Partial<CartState>) => void,
  data: CartState
) => {
  const isExist = data.items.find((item) => item.id === product.id);
  if (isExist) {
    const updatedItems = data.items.filter((item) => item.id !== product.id);
    const newData = {
      items: updatedItems,
      ...calculatePrices(data, isExist, 'remove'),
    };

    setData(newData);
  }
};

function calculatePrices(data: CartState, product: Item, actionType: string) {
  if (actionType === 'add') {
    const itemsPrice = data.itemsPrice + product.price;
    const taxPrice = data.taxPrice + product.price * taxRate;
    const shippingPrice = data.shippingPrice + product.price * shippingRate;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return { itemsPrice, taxPrice, shippingPrice, totalPrice };
  } else {
    const itemsPrice = data.itemsPrice - product.price;
    const taxPrice = data.taxPrice - product.price * taxRate;
    const shippingPrice = data.shippingPrice - product.price * shippingRate;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return { itemsPrice, taxPrice, shippingPrice, totalPrice };
  }
}

export const useCartState = createGlobalState<CartState>('cart', state);

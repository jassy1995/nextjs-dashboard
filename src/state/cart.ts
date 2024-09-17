// 'use client';

// import { createGlobalState } from '.';
// import { CartState, Item, TUpdateCart } from '@/util/model';

// const cartItems = manageLocalStorage({}, 'get');

// const state: CartState = {
//   items: cartItems.items || [],
//   itemsPrice: cartItems.itemsPrice || 0,
//   taxPrice: cartItems.taxPrice || 0,
//   shippingPrice: cartItems.shippingPrice || 0,
//   totalPrice: cartItems.totalPrice || 0,
// };

// const shippingRate = 0.05;
// const taxRate = 0.08;

// export const addToCart = ({ product, setData, data }: TUpdateCart) => {
//   const existingItem = data.items.find((item) => item.id === product.id);

//   let updatedItems;
//   if (existingItem) {
//     updatedItems = data.items.map((item) =>
//       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//   } else {
//     updatedItems = [{ ...product, quantity: 1 }, ...data.items];
//   }

//   const item = existingItem ? existingItem : product;

//   const newData = {
//     items: updatedItems,
//     ...calculatePrices(data, item, 'add'),
//   };

//   setData(newData);
//   manageLocalStorage(newData, 'set');
// };

// export const incrementQuantity = ({ product, setData, data }: TUpdateCart) => {
//   const isExist = data.items.find((item) => item.id === product.id);
//   if (isExist) {
//     const updatedItems = data.items.map((item) =>
//       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//     );

//     const newData = {
//       items: updatedItems,
//       ...calculatePrices(data, isExist, 'add'),
//     };

//     setData(newData);
//     manageLocalStorage(newData, 'set');
//   }
// };

// export const decrementQuantity = ({ product, setData, data }: TUpdateCart) => {
//   const isExist = data.items.find((item) => item.id === product.id);
//   if (isExist && isExist.quantity > 1) {
//     const updatedItems = data.items.map((item) =>
//       item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//     );

//     const newData = {
//       items: updatedItems,
//       ...calculatePrices(data, isExist, 'remove'),
//     };

//     setData(newData);
//     manageLocalStorage(newData, 'set');
//   }
// };

// export const removeFromCart = ({ product, setData, data }: TUpdateCart) => {
//   const isExist = data.items.find((item) => item.id === product.id);
//   if (isExist) {
//     const updatedItems = data.items.filter((item) => item.id !== product.id);
//     const newData = {
//       items: updatedItems,
//       ...calculatePrices(data, isExist, 'remove'),
//     };

//     setData(newData);
//     manageLocalStorage(newData, 'set');
//   }
// };

// export const clearCart = ({ resetData }: any) => {
//   resetData();
//   manageLocalStorage({}, 'remove');
// };

// export function manageLocalStorage(data: any, action: string) {
//   let cart;
//   if (action === 'set') {
//     localStorage.setItem('buyhub-cart', JSON.stringify(data));
//   } else if (action === 'get') {
//     cart = JSON.parse(localStorage.getItem('buyhub-cart') || '{}');
//   } else {
//     localStorage.removeItem('buyhub-cart');
//   }
//   return cart;
// }

// function calculatePrices(data: CartState, product: Item, actionType: string) {
//   if (actionType === 'add') {
//     const itemsPrice = data.itemsPrice + product.price;
//     const taxPrice = data.taxPrice + product.price * taxRate;
//     const shippingPrice = data.shippingPrice + product.price * shippingRate;
//     const totalPrice = itemsPrice + taxPrice + shippingPrice;
//     return { itemsPrice, taxPrice, shippingPrice, totalPrice };
//   } else {
//     const itemsPrice = data.itemsPrice - product.price;
//     const taxPrice = data.taxPrice - product.price * taxRate;
//     const shippingPrice = data.shippingPrice - product.price * shippingRate;
//     const totalPrice = itemsPrice + taxPrice + shippingPrice;
//     return { itemsPrice, taxPrice, shippingPrice, totalPrice };
//   }
// }

// export const useCartState = createGlobalState<CartState>('cart', state);

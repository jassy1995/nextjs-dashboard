'use client';
import Footer from '@/components/Footer';
import ActionButton from '@/components/global/buttons/ActionButton';
import CartItemCard from '@/components/global/CartItemCard';
import { useCartState } from '@/state/cart';
import { formatNaira } from '@/util/global';
import styles from '@/util/style';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

const Cart: FC = () => {
  const router = useRouter();

  const { data } = useCartState();

  const cartState = data || {
    items: [],
    itemsPrice: 0,
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
  };

  return (
    <>
      <div className={`flex flex-col pt-7 pb-8 bg-white ${styles.paddingX}`}>
        <p className="capitalize text-slate-700 mb-3">
          {' '}
          <span className="text-slate-500">home</span> &gt; Cart{' '}
        </p>
        {cartState?.items.length === 0 && (
          <div className="flex flex-col justify-center items-center text-slate-500 italic w-full h-96 border border-slate-200 rounded-lg">
            <span className="font-medium text-slate-800 text-lg sm:text-2xl">
              Cart is empty!
            </span>
            <span className="text-sm">Please add some items to your cart.</span>
            <ActionButton
              handler={() => router.push('/category/All')}
              className="text-blue-500 rounded-full h-9 max-w-64 hover:underline underline-offset-4"
            >
              Go back to store
            </ActionButton>
          </div>
        )}
        {cartState?.items.length > 0 && (
          <>
            <h1 className="text-lg sm:text-2xl font-bold mb-4">Your Cart</h1>
            <div className="flex flex-col sm:flex-row sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 rounded-lg">
              <div className="w-full sm:w-2/3 border border-slate-200 rounded-lg">
                {cartState?.items.map((item: any) => (
                  <CartItemCard key={item.id} item={item} />
                ))}
              </div>
              <div className="w-full sm:w-2/5 rounded-lg border border-slate-200 max-h-[364px] md:max-h-[316px]">
                <div className="space-y-4 p-5">
                  <h1 className="font-medium">Order Summary</h1>
                  <div className="space-y-2">
                    <p className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Subtotal</span>
                      <span className="text-[16px] text-slate-800">
                        {formatNaira(cartState?.itemsPrice)}
                      </span>
                    </p>
                    <p className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Tax</span>
                      <span className="text-[16px] text-slate-800">
                        {formatNaira(cartState?.taxPrice)}
                      </span>
                    </p>
                    <p className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Shipping</span>
                      <span className="text-[16px] text-slate-800">
                        {formatNaira(cartState?.shippingPrice)}
                      </span>
                    </p>
                    <p className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Total</span>
                      <span className="text-[16px] text-slate-800">
                        {formatNaira(cartState?.totalPrice)}
                      </span>
                    </p>
                    <hr />
                    <div className="pt-3 space-y-4">
                      <div className="flex items-center space-x-3 md:space-x-6">
                        <input
                          type="text"
                          className="px-3 py-2 rounded-full bg-gray-100 outline-none text-[12px] h-7 placeholder:text-slate-400 w-full "
                          placeholder="Add promo code"
                        />
                        <ActionButton className="bg-black text-white rounded-full text-sm h-7 w-auto md:w-24 hover:bg-slate-800">
                          Apply
                        </ActionButton>
                      </div>
                      <div className="flex flex-col md:flex-row space-x-0 items-center md:space-x-4 space-y-4 md:space-y-0">
                        <ActionButton
                          handler={() => router.push('/category/All')}
                          className="bg-gray-100 text-gray-500 rounded-full h-9 w-full hover:bg-gray-200"
                        >
                          Back to Store
                        </ActionButton>
                        <ActionButton className="bg-black text-white rounded-full  h-9 w-full hover:bg-slate-800">
                          CHECKOUT
                        </ActionButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;

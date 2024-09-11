import {
  decrementQuantity,
  incrementQuantity,
  useCartState,
} from '@/state/cart';
import React, { FC } from 'react';
import { HiMinus, HiOutlinePlusSmall } from 'react-icons/hi2';

type IncrementDecrementButtonProps = {
  className: string;
  item: any;
};

const IncrementDecrementButton: FC<IncrementDecrementButtonProps> = ({
  className,
  item,
}) => {
  const { data, setData } = useCartState();

  const cartState = data || {
    items: [],
    itemsPrice: 0,
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
  };

  const addedItem = item.quantity
    ? item
    : cartState.items.find((item) => item.id === item.id);

  return (
    <div
      className={`px-4 py-[2px] items-center justify-between w-28 rounded-full bg-gray-100 text-gray-500 ${className}`}
    >
      <button
        onClick={() => decrementQuantity(addedItem, setData, cartState)}
        className="border-none text-slate-700 text-xl"
      >
        <HiMinus />
      </button>
      <span className="text-sm text-gray-800">{addedItem.quantity}</span>
      <button
        onClick={() => incrementQuantity(addedItem, setData, cartState)}
        className="border-none text-slate-700 text-xl"
      >
        <HiOutlinePlusSmall />
      </button>
    </div>
  );
};

export default IncrementDecrementButton;

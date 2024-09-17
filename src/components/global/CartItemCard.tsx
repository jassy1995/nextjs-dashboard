'use client';
import { formatNaira, shorttenString } from '@/util/global';
import Image from 'next/image';
import React, { FC } from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';
import IncrementDecrementButton from './buttons/IncrementDecrementButton';
import useWindowSize from '@/hooks/useWindowSize';
import { useCartStore } from '@/stores/cart';

type CartItemCardProps = {
  item: any;
};

const CartItemCard: FC<CartItemCardProps> = ({ item }) => {
  const maxLenght = 15;
  const { width } = useWindowSize();
  const smallerScreen = width < 400;

  const { remove } = useCartStore((state) => state);

  const handleRemove = (product: any) => {
    console.log(product);
    if (remove) {
      remove(product);
    }
  };

  return (
    <div className="flex flex-col border-b border-slate-100 last:border-b-0 p-5">
      <div className="flex space-x-5">
        <Image src={item.image} alt="product" width={60} height={60} />
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <h1 className="font-normal text-[16px]">
              {item.name.length > maxLenght && smallerScreen
                ? shorttenString(item.name, maxLenght + 1)
                : item.name}
            </h1>
            <button
              onClick={() => handleRemove(item)}
              className="hover:bg-red-100 w-6 h-6 rounded-full flex justify-center items-center outline-none"
            >
              <HiOutlineTrash className="text-red-500 hover:text-red-800 hover:cursor-pointer hidden sm:block" />
            </button>
          </div>
          <p className="flex items-center space-x-1 text-sm">
            <span className="text-[13px]">Size:</span>
            <span className="text-[13px] text-gray-600">{item.size}</span>
          </p>
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-black text-[16px]">
              {formatNaira(item.price)}
            </h1>
            <IncrementDecrementButton item={item} className="hidden sm:flex" />
          </div>
        </div>
      </div>
      <div className="flex sm:hidden justify-between items-center mt-4">
        <button
          onClick={() => handleRemove(item)}
          className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 px-3 py-[0.5px] rounded-full outline-none"
        >
          <HiOutlineTrash className="text-red-500 hover:text-red-800 hover:cursor-pointer" />
          <span className="text-red-500">Remove</span>
        </button>
        <IncrementDecrementButton
          item={item}
          className="flex hover:bg-gray-200"
        />
      </div>
    </div>
  );
};

export default CartItemCard;

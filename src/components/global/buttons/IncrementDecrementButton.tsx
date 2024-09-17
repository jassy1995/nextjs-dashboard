import { useCartStore } from '@/stores/cart';
import { OrderItem } from '@/util/model';
import React, { FC, useEffect, useState } from 'react';
import { HiMinus, HiOutlinePlusSmall } from 'react-icons/hi2';

type IncrementDecrementButtonProps = {
  className: string;
  item: any;
};

const IncrementDecrementButton: FC<IncrementDecrementButtonProps> = ({
  className,
  item,
}) => {
  const { items, increase, decrease } = useCartStore((state) => state);
  const [existItem, setExistItem] = useState<OrderItem | undefined>();

  const product = items.find((x) => x.id === item.id);

  useEffect(() => {
    setExistItem(items.find((i) => i.id === item.id));
  }, [item, items]);

  const handleIncrement = async () => {
    if (increase && existItem) {
      increase(existItem);
    }
  };
  const handleDecrement = async () => {
    if (decrease && existItem) {
      decrease(existItem);
    }
  };

  return (
    <div
      className={`px-4 py-[2px] items-center justify-between w-28 rounded-full bg-gray-100 text-gray-500 ${className}`}
    >
      <button
        onClick={handleDecrement}
        className="border-none text-slate-700 text-xl"
      >
        <HiMinus />
      </button>
      <span className="text-sm text-gray-800">{product?.quantity}</span>
      <button
        onClick={handleIncrement}
        className="border-none text-slate-700 text-xl"
      >
        <HiOutlinePlusSmall />
      </button>
    </div>
  );
};

export default IncrementDecrementButton;

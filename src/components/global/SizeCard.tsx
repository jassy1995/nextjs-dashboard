import React, { useState } from 'react';
import ProductSize from './ProductSize';
import { sizes } from '@/lib/product-data';
import { IoIosClose } from 'react-icons/io';
import ActionButton from './buttons/ActionButton';
import { useRouter } from 'next/navigation';
import { notify } from '@/util/global';
import { useCartStore } from '@/stores/cart';

type SizeCardProps = {
  close: () => void;
  product: any;
};

const SizeCard: React.FC<SizeCardProps> = ({ close, product }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0].fullName);
  const router = useRouter();

  const { increase } = useCartStore((state) => state);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  const handleAddToCart = () => {
    const updatedProduct = {
      ...product,
      color: '',
      size: selectedSize,
    };
    if (increase) {
      increase(updatedProduct);
    }
    close();
    notify('success', 'Product added to cart');
  };
  const handleProceedToCart = () => {
    handleAddToCart();
    router.push('/cart');
  };
  const handleContinueShopping = () => {
    handleAddToCart();
    router.push('/category/All');
  };

  return (
    <div className="bg-white rounded-lg p-8 w-full max-w-[600px] mx-auto border border-slate-50 shadow-md  hover:shadow-lg transition duration-200 h-full space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-lg text-center text-slate-800">
          Please select your size
        </h1>
        <IoIosClose
          onClick={close}
          className="text-xl w-7 h-7 rounded-full hover:bg-gray-200 cursor-pointer"
        />
      </div>
      <ProductSize
        className="grid grid-cols-3 sm:grid-cols-4 gap-4"
        selectedSize={selectedSize}
        handleSizeSelect={handleSizeSelect}
      />
      <div className="flex flex-col ss:flex-row space-x-0 items-center ss:space-x-4 space-y-4 ss:space-y-0">
        <ActionButton
          handler={handleProceedToCart}
          className="bg-gray-100 text-gray-500 rounded-full h-9 w-full  hover:bg-gray-200 text-sm uppercase"
        >
          Proceed to cart
        </ActionButton>
        <ActionButton
          handler={handleContinueShopping}
          className="bg-black text-white rounded-full h-9 w-full hover:bg-slate-800 text-sm uppercase"
        >
          continue shopping
        </ActionButton>
      </div>
    </div>
  );
};

export default SizeCard;

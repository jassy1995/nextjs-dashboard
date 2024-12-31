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
    <div className="w-full max-w-lg bg-white rounded-lg shadow-md py-3 pb-5">
      <header className="flex justify-between items-center px-6">
        <h1 className="font-medium text-lg text-center text-slate-800">
          Sizes
        </h1>
      </header>
      <hr className='my-4'/>
      <div className='px-6 space-y-5'>
        <h1 className="font-normal text-md text-slate-800">
          Please select your size
        </h1>
        <ProductSize
            className="grid grid-cols-3 sm:grid-cols-4 gap-4"
            selectedSize={selectedSize}
            handleSizeSelect={handleSizeSelect}
        />
      </div>
      <hr className='my-5'/>
      <div className="px-6 flex flex-col ss:flex-row space-x-0 items-center ss:space-x-4 space-y-4 ss:space-y-0">
        <ActionButton
          handler={handleProceedToCart}
          className="bg-gray-100 border border-gray-200 text-gray-600 rounded-lg h-9 w-full font-medium  hover:bg-gray-200 text-sm uppercase"
        >
          Proceed to cart
        </ActionButton>
        <ActionButton
          handler={handleContinueShopping}
          className="bg-gray-300 border border-black text-gray-600 rounded-lg h-9 w-full font-medium text-sm uppercase"
        >
          continue shopping
        </ActionButton>
      </div>
    </div>
  );
};

export default SizeCard;

'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import products from '@/lib/products';
import styles from '@/util/style';
import Image from 'next/image';
import Rating from '@/components/global/Rating';
import { formatNaira, notify } from '@/util/global';
import ActionButton from '@/components/global/buttons/ActionButton';
import userReviews from '@/lib/review';
import TestimonialCard from '@/components/global/TestimonialCard';
import ItemCard from '@/components/global/ItemCard';
import Footer from '@/components/Footer';
import useWindowSize from '@/hooks/useWindowSize';
import { sizes } from '@/lib/product-data';
import IncrementDecrementButton from '@/components/global/buttons/IncrementDecrementButton';
import { useRouter } from 'next/navigation';
import ImagePreview from '@/components/global/ImagePreview';
import { useCartStore } from '@/stores/cart';

export default function ProductDetail() {
  const { width } = useWindowSize();
  const { id }: any = useParams();
  const router = useRouter();

  const mobile = 400;
  const showPerView = 6;
  const product: any = products.find((p: any) => p.id === +id);
  const favouriteProducts = products.slice(0, 4);

  const [reviews, setReviews] = useState(userReviews.slice(0, 6));
  const [isAll, setIsAll] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isImageSet, setIsImageSet] = useState('');
  const [isPreview, setIsPreview] = useState(false);
  const [selectedSize, setSelectedSize] = useState(
    width < mobile ? sizes[0].shortName : sizes[0].fullName
  );

  const { increase } = useCartStore((state) => state);

  const showAll = () => {
    if (!isAll) {
      setReviews(userReviews);
      setIsAll(true);
    } else {
      setReviews(userReviews.slice(0, 6));
      setIsAll(false);
    }
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = (product: any) => {
    if (!isAddToCart) {
      setIsAddToCart(true);
    }
    if (increase) {
      increase(product);
    }
    notify('success', 'Product added to cart');
  };

  const handleSetImage = (image: string) => {
    setIsImageSet(image);
    setIsPreview(true);
  };

  return (
    <>
      <div
        className={`flex flex-col space-y-10 pt-7 pb-10 bg-white ${styles.paddingX}`}
      >
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-5 md:space-y-0">
          <div className="flex space-x-5 ss:space-x-8">
            <div className="flex flex-col space-y-6">
              <Image
                onClick={() => handleSetImage(product?.image)}
                src={product?.image}
                alt="product"
                width={100}
                height={100}
                className="cursor-zoom-in"
              />
              <Image
                onClick={() => handleSetImage(product?.image)}
                src={product?.image}
                alt="product"
                width={100}
                height={100}
                className="cursor-zoom-in"
              />
              <Image
                onClick={() => handleSetImage(product?.image)}
                src={product?.image}
                alt="product"
                width={100}
                height={100}
                className="cursor-zoom-in"
              />
            </div>
            <Image
              onClick={() => handleSetImage(product?.image)}
              src={product?.image}
              alt="product"
              width={350}
              height={300}
              className="cursor-zoom-in"
            />
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 justify-between">
            <div className="flex flex-col space-y-1">
              <h1 className="text-lg sm:text-xl font-bold">{product?.name}</h1>
              <Rating rating={product?.rating} />
              <p className="text-lg font-bold">{formatNaira(product?.price)}</p>
              <p className="text-sm text-gray-500">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric. It offers superior confort
                and style
              </p>
            </div>
            <hr />
            <div className="flex flex-col space-y-3">
              <div className="text-sm text-black font-medium">Choose size</div>
              <div className="grid grid-cols-4 gap-x-2 gap-y-3 w-full sm:max-w-[500px]">
                {sizes.map((size, i) => (
                  <ActionButton
                    key={i}
                    handler={() => handleSizeSelect(size.fullName)}
                    className={`h-6 rounded-full text-sm ${size.fullName === selectedSize ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'} ${width < mobile ? 'w-[60px]' : 'w-[80px]'}`}
                  >
                    {width < mobile ? size.shortName : size.fullName}
                  </ActionButton>
                ))}
              </div>
            </div>
            <hr />
            {isAddToCart ? (
              <div className="flex flex-col-reverse xs:flex-row items-center gap-4 xs:gap-x-4 xs:gap-y-0">
                <ActionButton
                  handler={() => router.push('/category/All')}
                  className="bg-gray-100 text-gray-500 h-9 w-full sm:w-[200px] rounded-full hover:bg-gray-200"
                >
                  Continue Shopping
                </ActionButton>
                <IncrementDecrementButton
                  item={product}
                  className="flex h-9 w-full sm:w-[200px]"
                />
              </div>
            ) : (
              <ActionButton
                handler={() => handleAddToCart(product)}
                className="bg-black text-white w-full sm:w-[200px] h-9 rounded-full hover:bg-slate-800"
              >
                Add to Cart
              </ActionButton>
            )}
          </div>
        </div>
        <hr />
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-between">
            <h1>All Reviews ({userReviews.length})</h1>
            <div className="flex items-center space-x-3">
              <ActionButton className="bg-black text-white w-32 h-7 rounded-full text-sm">
                Write a review
              </ActionButton>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((item: any, i: number) => (
              <div key={i}>
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
          <div
            className={`text-center ${userReviews.length > showPerView ? 'block' : 'hidden'}`}
          >
            <ActionButton
              handler={showAll}
              className="bg-gray-200 font-medium text-black w-32 h-7 rounded-full text-sm"
            >
              {isAll ? 'Show Less' : 'Show All'}
            </ActionButton>
          </div>
        </div>
        <div>
          <h1 className="uppercase text-lg sm:text-2xl font-bold text-center">
            You might also like this
          </h1>
          <div className="flex flex-col space-y-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
              {favouriteProducts.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {isPreview && (
        <ImagePreview
          imageUrl={isImageSet}
          onClose={() => setIsPreview(false)}
        />
      )}
    </>
  );
}

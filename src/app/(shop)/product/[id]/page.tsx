'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation';
import products from '@/lib/products';
import styles from '@/util/style';
import Image from 'next/image';
import Rating from '@/components/global/Rating';
import { formatNaira } from '@/util/global';
import ColorCircle from '@/components/global/ColorCircle';
import { IoIosCheckmark } from "react-icons/io";
import SmallBtn from '@/components/global/SmallBtn';
import userReviews from '@/lib/review';
import TestimonialCard from '@/components/global/TestimonialCard';
import ItemCard from '@/components/global/ItemCard';
import Footer from '@/components/Footer';
import useWindowSize from '@/hooks/useWindowSize';
import Link from 'next/link';

export default function ProductDetail() {
    const [reviews, setReviews] = useState(userReviews.slice(0, 6));
    const [isAll, setIsAll] = useState(false);

    const mobile = 400;

    const { width } = useWindowSize();

    const { id }: any = useParams();
    const product: any = products.find((p: any) => p.id === +id);

    const favouriteProducts = products.slice(0,4);

    const showAll = () => {
        if (!isAll) {
            setReviews(userReviews);
            setIsAll(true);
        }
        else {
            setReviews(userReviews.slice(0, 6));
            setIsAll(false);
        }
    };

    return (
        <div className={`flex flex-col space-y-10 pt-10 bg-white ${styles.paddingX}`}>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-5 md:space-y-0">
                <div className="flex space-x-5 ss:space-x-10">
                    <div className='flex flex-col space-y-4'>
                        <Image src={product.image} alt="product" width={130} height={130} />
                        <Image src={product.image} alt="product" width={130} height={130} />
                        <Image src={product.image} alt="product" width={130} height={130} />
                    </div>
                    <Image src={product.image} alt="product" width={400} height={1000} />
                </div>
                <div className="flex flex-col space-y-4 md:space-y-0 justify-between">
                    <div className='flex flex-col space-y-1'>
                        <h1 className='text-lg sm:text-xl font-bold'>{product.name}</h1>
                        <Rating rating={product.rating} />
                        <p className='text-lg font-bold'>{formatNaira(product.price)}</p>
                        <p className='text-sm text-gray-500'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric. It offers superior confort and style</p>
                    </div>
                    <hr />
                    <div className='flex flex-col space-y-2'>
                        <div className='text-sm text-gray-500'>Select color</div>
                        <div className='flex space-x-4 items-center'>
                            <ColorCircle className='bg-[#4F4631]'>
                                <IoIosCheckmark className='text-white w-6 h-6 rounded-full' />
                            </ColorCircle>
                            <ColorCircle className='bg-[#314F4A] w-6 h-6 rounded-full'></ColorCircle>
                            <ColorCircle className='bg-[#31344F] w-6 h-6 rounded-full'></ColorCircle>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-col space-y-2'>
                        <div className='text-sm text-gray-500'>Choose size</div>
                        <div className='flex space-x-4 items-center'>
                            <SmallBtn className='bg-gray-200 text-gray-500 w-20 h-6 rounded-full text-sm'>
                                {width < mobile ? 'sm' : 'small'}
                            </SmallBtn>
                            <SmallBtn className='bg-gray-200 text-gray-500 w-20 h-6 rounded-full text-sm'>
                                {width < mobile ? 'md' : 'medium'}
                            </SmallBtn>
                            <SmallBtn className='bg-black text-white w-20 h-6 rounded-full text-sm'>
                                {width < mobile ? 'lg' : 'large'}
                            </SmallBtn>
                            <SmallBtn className='bg-gray-200 text-gray-500 w-20 h-6 rounded-full text-sm'>
                                {width < mobile ? 'xl' : 'x-large'}
                            </SmallBtn>
                        </div>
                    </div>
                    <hr />
                    <div>
                        {/* <div className='px-4 py-2 flex items-center justify-between w-full sm:w-48 h-8 rounded-full bg-gray-200 text-gray-500'>
                            <button className='border-none text-black'><FaMinus /></button>
                            <span className='text-sm text-gray-700'>1</span>
                            <button className='border-none text-black'><FaPlus /></button>
                        </div> */}
                        <SmallBtn className='bg-black text-white w-full sm:w-[370px] h-9 rounded-full'>Add to Cart</SmallBtn>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col space-y-5'>
                <div className='flex items-center justify-between'>
                    <h1>All Reviews ({userReviews.length})</h1>
                    <div className='flex items-center space-x-3'>
                        <SmallBtn className='bg-black text-white w-32 h-7 rounded-full text-sm'>Write a review</SmallBtn>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        reviews.map((item: any, i: number) => (
                            <div key={i} className=''>
                                <TestimonialCard item={item} />
                            </div>
                        ))
                    }
                </div>
                <div className='text-center'>
                    <SmallBtn handler={showAll} className='bg-gray-200 font-medium text-black w-32 h-7 rounded-full text-sm'>
                        {isAll ? 'Show Less' : 'Show All'}
                    </SmallBtn>
                </div>
            </div>
            <div className=''>
                <h1 className='uppercase text-lg sm:text-2xl font-bold text-center'>You might also like this</h1>
                <div className='flex flex-col space-y-1'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8'>
                        {
                            favouriteProducts.map(item=>(
                                <Link href={`/product/${item.id}`} key={item.id}>
                                    <ItemCard item={item}/>
                                </Link>
                            ))
                        }
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

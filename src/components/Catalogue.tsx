import { useRef, useEffect, FC } from 'react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import Slider from './global/Slider';
import styles from '@/util/style';
import products from '@/lib/products';

register();

const Catalogue: FC = () => {

    return (
        <div className={`w-full py-12 z-0 ${styles.paddingX}`}>
            <div className='flex flex-col space-y-12'>
                <div className="flex flex-col space-y-6">
                    <h1 className='text-2xl font-bold uppercase text-center'>new arrivals</h1>
                    <Slider items={products.slice(0, 6)} />
                </div>
                <div className="flex flex-col space-y-6">
                    <h1 className='text-2xl font-bold uppercase text-center'>top sellings</h1>
                    <Slider items={products.slice(6)} />
                </div>

            </div>
        </div>

    )
}

export default Catalogue;

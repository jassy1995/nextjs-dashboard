import { useRef, useEffect, FC } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import ItemCard from './ItemCard';
import Link from 'next/link';

register();

type SliderProps = {
    items: any;
};


const Slider: FC<SliderProps> = ({ items }) => {
    const swiperElRef = useRef<any>(null);
    const swiperPaginationRef = useRef<any>(null);

  
   
    useEffect(() => {
        const swiperParams: any = {
            modules: [Pagination, Autoplay],
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 6000,
            loop: true,
            pagination: {
                el: swiperPaginationRef.current,
                bulletClass: "w-2 h-2 rounded-full bg-black opacity-20",
                bulletActiveClass: "!opacity-100",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                620: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }
        };
        Object.assign(swiperElRef.current, swiperParams);
        swiperElRef.current.initialize();
    }, []);
    return (
        <div className='w-full'>
            <div>
                <swiper-container ref={swiperElRef} init={false}>
                    {
                        items.map((item: any, i: number) => (
                            <swiper-slide key={i}>
                                <Link href={`/product/${item.id}`}>
                                    <ItemCard item={item} />
                                </Link>
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </div>

            <div className='flex justify-center items-center mt-6'>
                <div ref={swiperPaginationRef} className='flex items-center space-x-3'></div>
            </div>

        </div>
    )
}

export default Slider;

import { useRef, useEffect, FC } from 'react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import TestimonialCard from './global/TestimonialCard';
import reviews from '@/lib/review';
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

register();

const Testimonial: FC = () => {
    const swiperElRef = useRef<any>(null);
    const swiperPaginationRef = useRef<any>(null);
    const swiperNextBtnRef = useRef(null);
    const swiperPrevBtnRef = useRef(null);

    useEffect(() => {
        const swiperParams: any = {
            modules: [Pagination, Autoplay, Navigation],
            loop: true,
            navigation: {
                prevEl: swiperPrevBtnRef.current,
                nextEl: swiperNextBtnRef.current,
            },
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
        <div className={`w-full bg-white flex flex-col space-y-4 pb-[90px]`}>
            <div className={`w-full flex justify-between`}>
                <h1 className='uppercase text-lg sm:text-2xl font-bold'>Our happy customers</h1>
                <div className='flex items-center sm:space-x-3'>
                    <button ref={swiperPrevBtnRef} className='disabled:opacity-50 w-8 h-8 inline-flex justify-center items-center cursor-pointer'>
                        <HiArrowLongLeft className='text-black font-bold text-lg sm:text-2xl' />
                    </button>
                    <button ref={swiperNextBtnRef} className='disabled:opacity-50 w-8 h-8 inline-flex justify-center items-center cursor-pointer'>
                        <HiArrowLongRight className='text-black font-bold text-lg sm:text-2xl' />
                    </button>
                </div>
            </div>
            <div>
                <swiper-container ref={swiperElRef} init={false}>
                    {
                        reviews.map((item: any, i: number) => (
                            <swiper-slide key={i}>
                                <TestimonialCard item={item} />
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </div>
        </div>

    )
}

export default Testimonial;

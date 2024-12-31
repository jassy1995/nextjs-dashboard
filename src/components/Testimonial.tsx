import { useRef, useEffect, FC } from 'react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import TestimonialCard from './global/TestimonialCard';
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import {useGetReviews} from "@/api/review";
import {Skeleton} from "@nextui-org/react";

register();

const Testimonial: FC = () => {
    const swiperElRef = useRef<any>(null);
    const swiperPaginationRef = useRef<any>(null);
    const swiperNextBtnRef = useRef(null);
    const swiperPrevBtnRef = useRef(null);

    const { data: { reviews = [1,2,3,4,5,6] } = {}, isLoading } = useGetReviews({limit: 10});

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
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1060: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        };
        Object.assign(swiperElRef.current, swiperParams);
        swiperElRef.current.initialize();
    }, []);
    return (
        <div className={`w-full bg-white flex flex-col space-y-4 pb-[30px]`}>
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
            <div className='w-full'>
                <swiper-container ref={swiperElRef} init={false}>
                    {reviews.map((item: any, i: number) => (
                            <swiper-slide key={i}>
                                {isLoading ?
                                    <Skeleton className="border border-slate-200 h-28  rounded-lg flex flex-col justify-center items-cente space-y-2 w-full p-4"/>
                                    :
                                    <TestimonialCard item={item} />}
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </div>
        </div>

    )
}

export default Testimonial;

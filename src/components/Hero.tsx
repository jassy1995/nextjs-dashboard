import React from 'react'
import Button from './global/Button'
import Image from 'next/image';
import { layout } from '@/util/style';

export default function Hero() {
    return (
        <div className={layout.hero}>
            <div className='w-full md:w-1/2 mt-0 md:mt-7 flex flex-col space-y-8 ss:space-y-10'>
                <h1 className='text-[40px] xs:text-[50px] leading-[56px] ss:text-[60px] ss:leading-[66px] font-bold uppercase'>find clothes that matches your style</h1>
                <p className='text-slate-600'>
                    Whether you are looking for casual wear, office attire, or something special for an event, we have everything you need to elevate your wardrobe
                </p>
                <Button onClick={() => { }} className='xs:w-52 w-full'>Shop Now</Button>
                <div className='hidden sm:flex justify-between'>
                    <div className='flex flex-col sm:space-y-1'>
                        <h1 className='text-2xl font-bold'>200+</h1>
                        <p className='text-slate-600'>
                            International Brands
                        </p>
                    </div>
                    <div className='flex flex-col sm:space-y-1'>
                        <h1 className='text-2xl font-bold'>2,000+</h1>
                        <p className='text-slate-600'>High-Quality Product</p>
                    </div>
                    <div className='flex flex-col sm:space-y-1 justify-center self-center'>
                        <h1 className='text-2xl font-bold'>3,0000+</h1>
                        <p className='text-slate-600'> Happy Customer</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between space-y-5 sm:space-y-0 sm:flex-row w-full sm:hidden'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col sm:space-y-1'>
                            <h1 className='text-2xl font-bold'>200+</h1>
                            <p className='text-slate-600'>
                                Brands
                            </p>
                        </div>
                        <div className='flex flex-col sm:space-y-1'>
                            <h1 className='text-2xl font-bold'>2,000+</h1>
                            <p className='text-slate-600'>Product</p>
                        </div>
                    </div>
                    <div className='flex flex-col sm:space-y-1 justify-center items-center'>
                        <h1 className='text-2xl font-bold'>3,0000+</h1>
                        <p className='text-slate-600'>Customer</p>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 overflow-hidden h-[350px] sm:h-[666px]'>
                <Image src="/hero.png" alt="not exxist" width={1000} height={1000} priority className="object-cover w-full image-full" />
            </div>
        </div >
    )
}

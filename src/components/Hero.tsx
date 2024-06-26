import React from 'react'
import Button from './global/Button'
import Image from 'next/image';
import styles from '@/util/style';
// import styles, { layout } from './util/style.ts';

export default function Hero() {
    return (
        <div className={`flex justify-center ${styles.paddingX}`}>
            <div className='w-full md:w-1/2 mt-28'>
                <h1 className='text-[60px] leading-[66px] font-bold uppercase'>find clothes that matches your style</h1>
                <p className='text-lg text-slate-600 mt-3 mb-5'>
                    Browse through our collection of clothes
                    and find the perfect outfit for you
                </p>
                <Button onClick={() => { }} className='w-52'>Shop Now</Button>
                <div className='mt-8 flex justify-between items-center'>
                    <div className='flex flex-col space-y-1 items-cente'>
                        <h1 className='text-3xl font-bold'>200+</h1>
                        <p className='text-lg text-slate-600'>International brands</p>
                    </div>
                    <div className='flex flex-col space-y-1 items-center'>
                        <h1 className='text-3xl font-bold'>2,000+</h1>
                        <p className='text-lg text-slate-600'>High-Quality Product</p>
                    </div>
                    <div className='flex flex-col space-y-1 items-center'>
                        <h1 className='text-3xl font-bold'>3,0000+</h1>
                        <p className='text-lg text-slate-600'>Happy Customer</p>
                    </div>
                </div>
            </div >
            <div className='w-full md:w-1/2 overflow-hidden h-[666px]'>
                <Image src="/hero1.jpg" alt="not exxist" width={1000} height={1000} priority className="object-cover w-full image-full" />
            </div>
        </div >
    )
}

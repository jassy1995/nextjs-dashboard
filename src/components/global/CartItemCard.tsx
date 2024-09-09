import { formatNaira, shorttenString } from '@/util/global';
import Image from 'next/image';
import React, { FC } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2';
import IncrementDecrementButton from './buttons/IncrementDecrementButton';

type CartItemCardProps = {
    item: any;
}

const CartItemCard:FC <CartItemCardProps> = ({item})=> {
    const maxLenght = 15;
 
    return (
        <div className='flex flex-col border-b border-slate-100 last:border-b-0 p-5'>
            <div className='flex space-x-5'>
                <Image src={item.image} alt="product" width={80} height={80} />
                <div className='flex flex-col w-full'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-normal text-[16px]'>{item.name.length > maxLenght ? shorttenString(item.name, maxLenght + 1) : item.name}</h1>
                        <HiOutlineTrash className='text-red-500 hover:text-red-800 hover:cursor-pointer hidden sm:block'/>
                    </div>
                    <p className='flex items-center space-x-1 text-sm'>
                        <span className='text-[13px]'>Size:</span>
                        <span className='text-[13px] text-gray-600'>{item.size}</span>
                    </p>
                    <p className='flex items-center space-x-1'>
                        <span className='text-[13px]'>Color:</span>
                        <span className='text-[13px] text-gray-600'>{item.color}</span>
                    </p>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-medium text-black text-[16px]'>{ formatNaira(item.price)}</h1>
                        <IncrementDecrementButton className='hidden sm:flex'/>
                    </div>
                </div>
            </div>
            <div className='flex sm:hidden justify-between items-center mt-4'>
                <div className='flex items-center space-x-2 bg-red-50 hover:bg-red-100 px-3 py-[0.5px] rounded-full'>
                    <HiOutlineTrash className='text-red-500 hover:text-red-800 hover:cursor-pointer'/>
                    <span className='text-red-500'>Remove</span>
                </div>
                <IncrementDecrementButton className='flex hover:bg-gray-200'/>
            </div>
        </div>
    )
}

export default CartItemCard;
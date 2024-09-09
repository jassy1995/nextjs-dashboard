import React, { FC } from 'react'
import { HiMinus, HiOutlinePlusSmall } from 'react-icons/hi2';

type IncrementDecrementButtonProps = {
  className: string;
};

const IncrementDecrementButton: FC <IncrementDecrementButtonProps> = ({className})=> {
  return (
    <div className={`px-4 py-[2px] items-center justify-between w-28 rounded-full bg-gray-100 text-gray-500 ${className}`}>
        <button className='border-none text-slate-700 text-xl'>
            <HiMinus/>
        </button>
        <span className='text-sm text-gray-800'>1</span>
        <button className='border-none text-slate-700 text-xl'>
            <HiOutlinePlusSmall/>
        </button>
    </div> 
  )
}

export default IncrementDecrementButton;

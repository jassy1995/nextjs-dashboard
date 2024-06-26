import Link from 'next/link'
import React from 'react'
import Badge from './global/Badge'
import SearchInput from './global/SearchInput'
import styles from '@/util/style';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";


export default function Navbar() {
    const handleSearch = (value: string) => {
        console.log('Search:', value);
    };

    return (
        <nav className={`w-full bg-white shadow-sm py-4 ${styles.paddingX}}`}>
            <div className='hidden sm:flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-gray-800'>Buy.hub</h1>
                <SearchInput onSearch={handleSearch} debounceDelay={600} className='rounded-full' />
                <ul className="flex items-center space-x-6">
                    <li>
                        <Link className="" href='/cart'>
                            <Badge count={10}>
                                <MdOutlineShoppingCart className='w-7 h-7' />
                            </Badge>
                        </Link>
                    </li>
                    <li>
                        <button className="btn btn-ghost rounded-btn font-medium hover:cursor-pointer hover:bg-slate-100 rounded-md px-3 py-2" type="button">
                            Sign in
                        </button>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col space-y-2 sm:hidden'>
                <div className='flex justify-between items-center border-b border-slate-100 pb-3 mb-2'>
                    <div className='flex items-center space-x-2'>
                        <RiMenuFill className='w-7 h-7' />
                        <h1 className='text-2xl font-bold text-gray-800'>Buy.hub</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <IoPersonOutline className='w-7 h-7' />
                        <Link className="flex justify-center items-center" href='/cart'>
                            <Badge count={12}>
                                <MdOutlineShoppingCart className='w-7 h-7' />
                            </Badge>
                        </Link>
                    </div>
                </div>
                <SearchInput onSearch={handleSearch} debounceDelay={600} className='rounded-lg' />
            </div>
        </nav >

    )
}


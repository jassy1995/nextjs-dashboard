import Link from 'next/link'
import React from 'react'
import Badge from './global/Badge'
import SearchInput from './global/SearchInput'

export default function Navbar() {
    const handleSearch = (value: string) => {
        console.log('Search:', value);
    };

    return (
        <nav className='flex items-center justify-between w-full p-4 px-24 bg-white shadow-sm'>
            <h1 className='text-2xl font-bold text-gray-800'>DigitMart</h1>
            <SearchInput onSearch={handleSearch} debounceDelay={600} />
            <ul className="flex items-center space-x-6">
                <li>
                    <Link className="btn btn-ghost rounded-btn" href='/cart'>
                        <Badge count={12} />
                    </Link>
                </li>
                <li>
                    <button className="btn btn-ghost rounded-btn font-medium hover:cursor-pointer hover:bg-slate-100 rounded-md px-3 py-2" type="button">
                        Sign in
                    </button>
                </li>
            </ul>
        </nav>

    )
}


import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between w-full p-4 border-b border-gray-600 px-24'>
            <ul className="flex items-center space-x-3">
                <li className='hover:underline hover:underline-offset-8 hover:cursor-pointer'>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li className='hover:underline hover:underline-offset-8 hover:cursor-pointer'>
                    <Link href='/chat'>
                        Chat
                    </Link>
                </li>
                <li className='hover:underline hover:underline-offset-8 hover:cursor-pointer'>
                    <Link href='/pricing'>
                        Pricing
                    </Link>
                </li>
            </ul>
            <ul className="flex items-center space-x-3">
                <li className='hover:underline hover:underline-offset-8 hover:cursor-pointer'>
                    <Link href='/login'>
                        Login
                    </Link>
                </li>
                <li className='hover:underline hover:underline-offset-8 hover:cursor-pointer'>
                    <Link href='/signup'>
                        Sign up
                    </Link>
                </li>
            </ul>
        </nav>

    )
}

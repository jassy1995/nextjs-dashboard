import React from 'react'

export default function LoginPageContent() {
    return (
        <form className='bg-white rounded-lg p-8 sm:p-12 shadow-md w-full max-w-sm'>
            <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Password" />
            </div>
        </form>
    )
}

'use client';

import Loader from '@/components/global/Loader';
import { useUserStore } from '@/stores/user';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const location = searchParams.get('redirectFrom') || '/';
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { loggedIn } = useUserStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      if (loggedIn) {
        loggedIn(newUser);
      }
      setTimeout(() => {
        setLoading(false);
        router.push(location);
      }, 3000);
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form
      className="bg-white rounded-lg p-8 sm:p-12 shadow-md w-full max-w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email && 'border-red-500'
          }`}
          id="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">Email is required</p>
        )}
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.password && 'border-red-500'
          }`}
          id="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">Password is required</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {loading ? <Loader /> : 'Submit'}
      </button>
      <p className="mt-6 flex items-center space-x-1">
        <span>Don&apos;t have an account?</span>
        <Link href="/signup">
          <span className="text-blue-500 hover:underline underline-offset-4">
            Sign up here
          </span>
        </Link>
      </p>
    </form>
  );
}

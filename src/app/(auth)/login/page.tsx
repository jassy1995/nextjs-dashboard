'use client';

import { useLogin, useLoginWithGoogle } from '@/api/auth';
import { useUserStore } from '@/stores/user';
import { Spinner } from '@nextui-org/react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import React, {  useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {FcGoogle} from "react-icons/fc";
import {useAuthHandler} from "@/hooks/useAuthHandler";


export default function Login() {
  const { mutateAsync: logIn, isPending: isLogging } = useLogin();
  const searchParams = useSearchParams();
  const { handleGoogleAuth, handleEmailSignIn } = useAuthHandler();
  const { loggedIn, isSignedIn, setRedirectPath } = useUserStore((state) => state);
  const router = useRouter();

  const location = searchParams.get('redirectFrom') || '/';
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (data: any) =>{
    handleEmailSignIn(data, logIn, location).then((res:any)=>{
      if(res.error)setErrorMessage(res.error)
    })
  }

  const {register, handleSubmit, formState: { errors }} = useForm();

  useEffect(() => {
    if(isSignedIn) {
      router.push(location);
    }
  }, [isSignedIn,location, router]);

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-8 sm:p-12 shadow-md w-full max-w-md  space-y-5">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        {errorMessage ? (
          <div className="border-red-600 bg-red-100 text-red-600 text-center py-2 px-3 rounded-lg mb-4">
            {errorMessage}
          </div>
        ) : (
          <h1 className="text-2xl font-bold text-center mb-4">Sign in</h1>
        )}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            className={`shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300 ${
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
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className={`shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300 ${
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
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
              {...register('remember')}
            />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
        </div>
        <button
          disabled={isLogging}
          type="submit"
          className="w-full font-medium py-2 px-4  focus:outline-none focus:shadow-outline bg-black bg-opacity-90 text-white  rounded-lg hover:bg-slate-900 flex justify-center items-center space-x-3 disabled:opacity-95 disabled:cursor-not-allowed"
        >
          {isLogging && <Spinner size="sm" color="white" />}
          <span>Log in</span>
        </button>
        <p className="mt-6 flex items-center space-x-1">
          <span>Don&apos;t have an account?</span>
          <Link href="/signup">
            <span className="text-blue-500 hover:underline underline-offset-2">
              Sign up here
            </span>
          </Link>
        </p>
      </form>
      <div className="w-full flex items-center space-x-3">
        <span className="border-b w-1/2"></span>
        <span>or</span>
        <span className="border-b w-1/2"></span>
      </div>
      <div className="flex justify-center items-center w-full">
        <button onClick={() => handleGoogleAuth(location)} className="flex justify-center items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full outline-none">
            <FcGoogle className="w-6 h-6" />
          <span className="text-gray-800">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}

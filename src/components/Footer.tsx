import styles from '@/util/style'
import { useState } from 'react'
import EmailInput from './global/EmailInput'
import LinkList from './global/LinkList';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <footer className={`flex flex-col -mt-[100px] ${styles.paddingX}`}>
      <div className='mt-10 bg-black px-8 py-5 flex flex-col sm:flex-row items-center justify-between rounded-lg w-full space-y-4 sm:space-y-0'>
        <div className='w-full sm:w-1/2'>
          <p className='uppercase sm:max-w-sm text-white text-lg sm:text-2xl font-bold'>stay upto date about our latest offers</p>
        </div>
        <form onSubmit={handleSubmit} className='w-full sm:w-1/3 flex flex-col justify-center items-center space-y-2'>
          <EmailInput type='email' name='email' className='rounded-full bg-white' placeholder='Enter your email' value={email} onChange={handleChange} />
          <button type='submit' className="bg-white text-black py-2 px-4 rounded-full w-full hover:bg-gray-100">Subscribe to newsletter</button>
        </form>
      </div>
      <div className='mt-6 flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 w-full'>
        <div className='flex flex-col space-y-4 sm:w-1/2'>
          <h1 className='text-lg sm:text-2xl font-bold text-gray-800'>Buy.hub</h1>
          <p className='text-sm text-gray-500 sm:max-w-xs'>we have cloth that suits your style and which you are proud to wear. From women to men</p>
          <ul className='flex items-center space-x-3'>
            <li className="cursor-pointer">
              <AiFillTwitterCircle />
            </li>
            <li className="cursor-pointer">
              <FaFacebook />
            </li>
            <li className="cursor-pointer">
              <FaSquareInstagram />
            </li>
            <li className="cursor-pointer">
              <FaGithub />
            </li>
          </ul>
        </div>
        <div className='w-full'>
          <LinkList />
        </div>
      </div>
      <hr className='mt-4 mb-3 sm:mb-1' />
      <div className='flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 space-x-2'>
        <p className='text-sm text-gray-500'>Buy.hub © 2023-2024. All Rights Reserved.</p>
        <ul className='flex items-center space-x-2'>
          <li>
            <Image src="/payments/visa.png" alt="Visa" width={50} height={50} priority />
          </li>
          <li>
            <Image src="/payments/mastercard.png" alt="Mastercard" width={50} height={50} priority />
          </li>
          <li>
            <Image src="/payments/paypal.png" alt="Paypal" width={50} height={50} priority />
          </li>
          <li>
            <Image src="/payments/applepay.png" alt="Apple Pay" width={50} height={50} priority />
          </li>
          <li>
            <Image src="/payments/googlepay.png" alt="Google Pay" width={50} height={50} priority />
          </li>
        </ul>
      </div>
    </footer>
  )
}

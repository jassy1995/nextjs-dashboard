'use client';
import Link from 'next/link';
import React from 'react';
import Badge from './global/Badge';
import SearchInput from './global/SearchInput';
import styles from '@/util/style';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';
import { RiMenuFill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/stores/user';

export default function Navbar() {
  const { items } = useCartStore((state) => state);
  const { loggedOut, isSignedIn, setRedirectPath } = useUserStore(
    (state) => state
  );

  const router = useRouter();

  const handleSearch = (value: string) => {
    console.log('Search:', value);
  };

  const handleLoggedOut = () => {
    const redirectTo = '/';
    if (loggedOut && setRedirectPath) {
      loggedOut();
      setRedirectPath(redirectTo);
      router.push(redirectTo);
    }
  };

  return (
    <nav
      className={`w-full bg-white sticky top-0 shadow-sm py-4 z-50 ${styles.paddingX}}`}
    >
      <div className="hidden sm:flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link href="/">Buy.hub</Link>
        </h1>
        <SearchInput
          onSearch={handleSearch}
          debounceDelay={600}
          className="rounded-full"
        />
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/cart">
              <Badge count={items.length || 0}>
                <MdOutlineShoppingCart className="w-7 h-7" />
              </Badge>
            </Link>
          </li>
          {isSignedIn ? (
            <li>
              <button
                onClick={handleLoggedOut}
                className="btn btn-ghost rounded-btn font-medium hover:cursor-pointer hover:bg-slate-100 px-3 py-2"
                type="button"
              >
                Sign out
              </button>
            </li>
          ) : (
            <li>
              <Link href="/login">
                <button
                  className="btn btn-ghost rounded-btn font-medium hover:cursor-pointer hover:bg-slate-100 px-3 py-2"
                  type="button"
                >
                  Sign in
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="flex flex-col space-y-2 sm:hidden z-50">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-2">
          <div className="flex items-center space-x-2">
            <RiMenuFill className="w-7 h-7" />
            <h1 className="text-2xl font-bold text-gray-800">
              <Link href="/">Buy.hub</Link>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <IoPersonOutline className="w-7 h-7" />
            <Link className="flex justify-center items-center" href="/cart">
              <Badge count={items.length || 0}>
                <MdOutlineShoppingCart className="w-7 h-7" />
              </Badge>
            </Link>
          </div>
        </div>
        <SearchInput
          onSearch={handleSearch}
          debounceDelay={600}
          className="rounded-lg"
        />
      </div>
    </nav>
  );
}

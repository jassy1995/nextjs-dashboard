'use client';

import { useUserStore } from '@/stores/user';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Spinner from '../global/Spinner';
import { redirect } from 'next/navigation';

export const withAuth = (WrappedComponent: any) => {
  return function WithAuth(props: any) {
    const { isSignedIn } = useUserStore((state) => state);

    const pathname = usePathname();

    useEffect(()=> {
      if (!isSignedIn) {
        redirect(`/login?redirectFrom=${pathname}`);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isSignedIn === null) {
      return <Spinner />;
    }

    if (!isSignedIn) return null;
    return <WrappedComponent {...props} />;
  };
};

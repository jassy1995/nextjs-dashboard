'use client';

import { useSession } from 'next-auth/react';
import {useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/user';
import { notify } from '@/util/global';
import { useLoginWithGoogle } from '@/api/auth';

const Callback = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const { loggedIn, redirectPath, isSignedIn } = useUserStore((state) => state);
    const { mutateAsync: logInWithGoogle,isPending:loading } = useLoginWithGoogle();

    useEffect(() => {
        const completeGoogleSignIn = async () => {
            if (session && session?.user && !isSignedIn) {
                try {
                    const response: any = await logInWithGoogle(session?.user);
                    if (loggedIn) loggedIn(response.data.profile);
                    router.push(redirectPath?.includes('checkout') ? redirectPath : '/');
                } catch (error:any) {
                    const errStr = error?.response?.data?.message?.replace('body.', '');
                    const computeMsg = errStr
                        ? errStr.charAt(0).toUpperCase() + errStr.slice(1)
                        : '';
                    notify('error', computeMsg || 'Authentication failed. Please try again.');
                    router.push('/login');
                }
            }
        };

        completeGoogleSignIn().then(()=>null);
    }, [session, logInWithGoogle, loggedIn, router, redirectPath, isSignedIn]);

    return (
        <div className='w-full flex items-center justify-center bg-white h-screen'>
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
                 <div className='google-auth-loader'></div>
            </div>
        </div>
    )
}

export default Callback;

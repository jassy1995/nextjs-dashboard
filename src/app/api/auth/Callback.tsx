'use client'

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserStore } from '@/stores/user';
import { notify } from '@/util/global';
import { useLoginWithGoogle } from '@/api/auth';

const Callback = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const { loggedIn,redirectPath } = useUserStore((state) => state);
    const { mutateAsync: logInWithGoogle } = useLoginWithGoogle();

    useEffect(() => {
        async function completeGoogleSignIn (){
            if (session && session?.user) {
                try {
                    const response:any = await logInWithGoogle(session?.user);

                    if (loggedIn) loggedIn(response.data.profile);
                    notify('success', 'Google Sign-In successful');
                    router.push(redirectPath || '/'); // Redirect to the homepage or intended route
                } catch (error) {
                    console.error('Error during Google Sign-In:', error);
                    notify('error', 'Login failed. Please try again.');
                    router.push('/login');
                }
            }
        };
        completeGoogleSignIn().then(()=>null);
    }, [session, logInWithGoogle, loggedIn, router]);

    return <div>Signing you in...</div>;
};

export default Callback;

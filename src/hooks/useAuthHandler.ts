'use client';

import { useUserStore } from '@/stores/user';
import {formatErrorMessage, notify} from '@/util/global';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export const useAuthHandler = () => {
    const router = useRouter();
    const { loggedIn, setRedirectPath } = useUserStore((state) => state);

    const handleGoogleAuth = async (redirectPath: string) => {
        try {
            if(setRedirectPath)setRedirectPath(redirectPath)
            await signIn('google',{ callbackUrl: '/google' });
        } catch (error) {
            console.log('Google Auth Error:', error);
            notify('error', 'Google Authentication Failed!');
        }
    };

    const handleEmailSignIn = async (data: any, SignIn: any, redirectPath: string) => {
        let error : any = ''
        try {
            const res = await SignIn(data);
            if (loggedIn) loggedIn(res.data.profile);
            if(setRedirectPath)setRedirectPath(redirectPath)
            router.push(redirectPath);
        } catch (err: any) {
            error = formatErrorMessage(err) || 'Authentication failed! Please try again.';
        }
        return {error};
    };

    const handleEmailSignUp = async (data: any, SignUp: any, redirectPath: string) => {
        let error : any = ''
        try {
            await SignUp(data);
            router.push(redirectPath);
        } catch (err: any) {
            error = formatErrorMessage(err) || "Couldn't complete your signup! Please try again.";
        }
        return {error};
    };


    return { handleGoogleAuth, handleEmailSignIn, handleEmailSignUp };
};

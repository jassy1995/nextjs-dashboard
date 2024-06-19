'use client';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col h-screen'>
            <div className="mb-[100px] mt-[70px] py-8 borer border-slate-600 rounded-lg">
                <div>{children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;

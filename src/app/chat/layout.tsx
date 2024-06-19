import Navbar from '@/components/Navbar';
import React from 'react';

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default ChatLayout;

import Navbar from '@/components/Navbar';
import React from 'react';

const PricingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default PricingLayout;

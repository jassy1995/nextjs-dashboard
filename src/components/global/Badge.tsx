import { FC } from 'react';

type BadgeProps = {
    count: number;
    isCartEmpty?: boolean;
    children: React.ReactNode;
};

const Badge: FC<BadgeProps> = ({ count, isCartEmpty, children }) => {
    return (
        <div className="relative inline-block">
            {children}
            {!isCartEmpty && (
                <span
                    className='absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-[10px] font-bold text-white rounded-full inline-flex items-center justify-center p-[3px] leading-none'
                >
                    {count}
                </span>
            )}
        </div>
    );
};

export default Badge;


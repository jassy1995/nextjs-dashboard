'use client'
import { FC } from 'react';

type ActionButtonProps = {
    className: string;
    children?: React.ReactNode;
    handler?: () => void;
};

const ActionButton: FC<ActionButtonProps> = ({ className, handler, children }) => {
    return (
        <button onClick={handler} className={`px-3 py-2 inline-flex outline-none border-none items-center justify-center ${className}`}>
            {children}
        </button>
    );
};

export default ActionButton;


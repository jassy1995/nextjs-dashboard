import { FC, ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    className?: string;
};

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button className={`${className} bg-slate-1000 text-white font-bold py-2 px-4 rounded-full`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;


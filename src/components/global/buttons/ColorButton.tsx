import { FC } from 'react';

type ColorButtonProps = {
    className: string;
    handler?:()=>void;
    children?: React.ReactNode;
};

const ColorButton: FC<ColorButtonProps> = ({ className, handler, children }) => {
    return (
        <button onClick={handler} className= {`outline-none rounded-full inline-flex items-center justify-center w-6 h-6 ${className}`}>
            { children }
        </button>
    );
};

export default ColorButton;


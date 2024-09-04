import { FC } from 'react';

type ColorCircleProps = {
    className: string;
    children?: React.ReactNode;
};

const ColorCircle: FC<ColorCircleProps> = ({ className, children }) => {
    return (
        <div className= {`rounded-full inline-flex items-center justify-center w-6 h-6 ${className}`
}>
    { children }
    </div>
    );
};

export default ColorCircle;


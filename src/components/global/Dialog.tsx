import { FC } from 'react';

type DialogProps = {
    visible:boolean;
    children: React.ReactNode;
};

const Dialog: FC<DialogProps> = ({ children, visible }) => {
    return (
        <div className={`fixed inset-y-0 right-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 w-full ${visible ? 'block' : 'hidden'}`}>
        <div className={`w-full xs:max-w-sm h-[76%] sm:h-[80%] overflow-y-auto absolute bottom-0 xs:bottom-7 sm:bottom-10 transition-transform duration-300 ease-in-out transform`}>
           {children}
        </div>
    </div>
    
    );
};

export default Dialog;
import React, { FC } from 'react';

type DialogProps = {
  visible: boolean;
  children: React.ReactNode;
  className?: string;
};

const Dialog: FC<DialogProps> = ({ children, visible, className }) => {
  return (
      <div className={`relative z-50 ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <div
              className={`fixed px-6 z-50 bg-black/90 transition-all duration-300 flex justify-center items-center w-full ${className}  ${visible ? 'opacity-100' : 'opacity-0'}`}
          >
              {children}
          </div>
      </div>
  );
};

export default Dialog;

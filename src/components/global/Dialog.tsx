import { FC } from 'react';

type DialogProps = {
  visible: boolean;
  children: React.ReactNode;
  className?: string;
};

const Dialog: FC<DialogProps> = ({ children, visible, className }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 w-full ${visible ? 'block' : 'hidden'}`}
    >
      <div
        className={`w-full overflow-y-auto absolute  transition-transform duration-300 ease-in-out transform ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;

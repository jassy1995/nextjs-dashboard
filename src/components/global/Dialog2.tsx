import {useEffect, FC, ReactNode} from 'react';

type Dialog2Props = {
    visible: boolean;
    className?: string;
    children: ReactNode;
    showHeader?: boolean;
    headerTitle?: string;
    headerColor?: string;
    lazy?: boolean;
    containerSize?: boolean;
    onClose: () => void;
};

const Dialog2:FC <Dialog2Props> = ({
                   visible = false,
                   showHeader = false,
                   headerTitle = "",
                   headerColor = "rgb(255, 255, 255)",
                   lazy = true,
                   containerSize = false,
                   onClose,
                   children
               }) => {
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [visible]);

    const handleBackdropClick = (e:any) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={`relative z-50 ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <div
                onClick={handleBackdropClick}
                className={`fixed inset-0 bg-black/80 z-10 transition-all duration-200
          ${visible ? 'opacity-100' : 'opacity-0'}`}
            />

            <div
                className={`z-50 fixed bottom-10 top-10 right-10 left-10 w-full overflow-y-auto transform 
          transition-all duration-300 rounded-l-2xl border-b border-slate-400 bg-gray-50 h-screen
          ${visible ? 'translate-x-0 opacity-100' : 'opacity-0'}
          ${containerSize ? 'max-w-4xl' : 'max-w-3xl'}`}
            >
                {showHeader && (
                    <div
                        className="flex items-center p-8 border-b-2 border-slate-200"
                        style={{ background: headerColor }}
                    >
                        {headerTitle && (
                            <h3 className="text-xl font-semibold">
                                {headerTitle}
                            </h3>
                        )}
                        <button
                            onClick={onClose}
                            className="w-8 h-8 bg-red-500 rounded-full text-white flex items-center justify-center
                hover:bg-red-600 cursor-pointer ml-auto"
                        >
                            <span className='w-5'>X</span>
                        </button>
                    </div>
                )}

                <div className="p-4 bg-white">
                    {(!lazy || visible) && children}
                </div>
            </div>
        </div>
    );
};

export default Dialog2;
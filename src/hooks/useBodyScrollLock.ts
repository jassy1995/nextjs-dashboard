'use client';
 import { useEffect } from 'react';

const useBodyScrollLock = (isLocked: boolean) => {
    useEffect(() => {
        if (isLocked) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isLocked]);
};

export default useBodyScrollLock;

/*import { useEffect } from 'react';

const useBodyScrollLock = (isLocked: boolean) => {
    useEffect(() => {
        if (isLocked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isLocked]);
};

export default useBodyScrollLock;*/

/*
import { useEffect } from 'react';

const useBodyScrollLock = (isOpen: boolean) => {
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (isOpen) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.paddingRight = '';
        };
    }, [isOpen]);
};

export default useBodyScrollLock;*/

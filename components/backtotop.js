import React, { useEffect, useState } from 'react'
import ArrowUpSLineIcon from 'remixicon-react/ArrowUpSLineIcon';


export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        <div className='fixed bottom-2 right-2'>
            <button
                type='button'
                onClick={scrollToTop}
                className={`${isVisible ? 'opacity-100' : 'opacity-0'}
                    inline-flex items-center p-3 rounded-full shadow-sm text-light bg-accent transition-opacity `}
            >
                <ArrowUpSLineIcon className='h-6 w-6' aria-hidden='true' />
            </button>
        </div>
    )
}

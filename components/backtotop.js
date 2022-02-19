import React, { useEffect, useState } from 'react'
import ArrowUpSLineIcon from 'remixicon-react/ArrowUpSLineIcon';
import useScrollListener from './scroll';


export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();
    const [handleShow, setHandleShow] = useState(false);

    useEffect(() => {
        const _classList = [];

        if (scroll.y > 150 && scroll.y - scroll.lastY < 0)
            _classList.push("hidden transition duration-200 ease-out");

        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 0) {
                setHandleShow(true);
            } else
                setHandleShow(false);
        };
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

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
        <div className={`fixed bottom-2 right-2  2xl:right-[8%] ${handleShow ? "shadow-md " : ""} ${navClassList.join(" ")}  `}>
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

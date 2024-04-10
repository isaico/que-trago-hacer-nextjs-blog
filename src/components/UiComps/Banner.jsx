'use client';
import { useEffect, useState } from 'react';
const Banner = () => {
    const [showBanner, setShowBanner] = useState(null);
    useEffect(() => {
        const banner = window.localStorage.getItem('BANNER');

        if (!banner) {
            setShowBanner(true);
        } else {
            setShowBanner(false);
        }
    }, [showBanner]);

    const handleBanner = () => {
        setShowBanner(false);
        window.localStorage.setItem('BANNER', true);
    };
    return (
        <div
            className={`fixed bottom-0 left-0 right-0 ${
                showBanner ? 'visible' : 'hidden'
            } `}
        >
            <div className="bg-primary-light flex justify-center items-center w-full p-4 ">
                <p className="">
                    🍪 Usamos cache, y anuncios para sustentar sitio, al
                    continuar aceptas esto. 👌
                </p>
                <button
                    className=" md:absolute right-4 text-2xl px-2 "
                    onClick={() => handleBanner()}
                >
                    <span>X</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;

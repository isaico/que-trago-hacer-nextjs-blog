'use client';
import { useEffect, useState } from 'react';
const Banner = () => {
    const [showBanner, setShowBanner] = useState(true);
    useEffect(() => {
        window.localStorage.setItem('BANNER_STATE', showBanner);
    }, [showBanner]);
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
                    onClick={() => setShowBanner(false)}
                >
                    <span>X</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;

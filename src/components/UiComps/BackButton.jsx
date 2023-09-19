'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const BackButton = ({ color = 'pink' }) => {
    const router = useRouter();

    return (
        <button className={`px-8 ${color} border flex items-center py-2 rounded-full hover:border-primary-light`} color={color} onClick={() => router.back()}>
            <svg
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1em"
                width="1em"
                className="mr-1 text-lg"
            >
                <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6.499 6.498L3.5 9.5l3 3" />
                    <path d="M8.5 15.5h5c2 0 3-1 3-3s-1-3-3-3h-10" />
                </g>
            </svg>
            Volver
        </button>
    );
};

export default BackButton;

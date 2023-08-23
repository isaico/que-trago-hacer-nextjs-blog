"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'flowbite-react';

const BackButton = ({ children }) => {
    const router = useRouter();

    return (
        <Button pill color="red"onClick={() => router.back()}>
            {children}
        </Button>
    );
};

export default BackButton;

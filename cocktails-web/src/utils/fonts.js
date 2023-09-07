import { Jost } from 'next/font/google';
import { Merriweather } from 'next/font/google';

export const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal'],
});

export const jost = Jost({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '700'],
    style: ['normal', 'italic'],
});

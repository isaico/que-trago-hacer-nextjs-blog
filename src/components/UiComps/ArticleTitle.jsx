import React from 'react';
import { merriweather } from '@/utils/fonts';

const ArticleTitle = ({
    children,
    size = 'text-3xl',
    color = 'text-gray-900',
    id,
}) => {
    return (
        <h2
            className={` text-2xl md:${size}  font-normal ${color} pb-4 ${merriweather.className}`}
            id={id}
        >
            {children}
        </h2>
    );
};

export default ArticleTitle;

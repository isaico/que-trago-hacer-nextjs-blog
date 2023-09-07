import React from 'react';
import { merriweather } from '@/utils/fonts';

const ArticleTitle = ({children}) => {
    return (
        <h2
            className={`text-3xl font-normal text-gray-900 pb-4 ${merriweather.className}`}
        >
            {children}
        </h2>
    );
};

export default ArticleTitle;

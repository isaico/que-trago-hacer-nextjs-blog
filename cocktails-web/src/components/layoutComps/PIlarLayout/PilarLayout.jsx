import React from 'react';
import ArticleLayout from '../Article/ArticleLayout';
const PilarLayout = ({ articles }) => {
    return (
        <>
            {articles && articles.length > 0 ? (
                <ArticleLayout articles={articles} />
            ) : null}
            
        </>
    );
};

export default PilarLayout;

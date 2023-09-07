import Image from 'next/image';
import React from 'react';
import ArticleTitle from '@/components/UiComps/ArticleTitle';

const ArticleLayout = ({ articles }) => {
    return (
        <>
            {articles.map((article) => (
                <div className="mb-8">
                    <ArticleTitle>{article.title}</ArticleTitle>

                    <p
                        className="mb-4"
                        dangerouslySetInnerHTML={{
                            __html: article.description,
                        }}
                    ></p>
                    {article.image_url && (
                        <Image
                            src={article.image_url}
                            height={800}
                            width={800}
                            alt={article.alt}
                        ></Image>
                    )}
                </div>
            ))}
        </>
    );
};

export default ArticleLayout;

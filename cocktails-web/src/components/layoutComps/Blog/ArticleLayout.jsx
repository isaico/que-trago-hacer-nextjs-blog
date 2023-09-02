import Image from 'next/image';
import React from 'react';

const ArticleLayout = ({ articles }) => {
    return (
        <>
            {articles.map((article) => (
                <div className="mb-8">
                    <h2 className="text-2xl font-medium text-gray-900 pb-2">
                        {article.title}
                    </h2>
                    <p className='mb-4'
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

import Image from 'next/image';
import ArticleTitle from '@/components/UiComps/ArticleTitle';

const ArticleLayout = ({ articles }) => {
    return (
        <>
            {articles.map((article, i) => (
                <div className="my-8" key={i} id={article._id}>
                    <ArticleTitle>{article.title}</ArticleTitle>

                    <p className="mb-4 whitespace-pre-line">
                        {article.description}
                    </p>
                    {article.image_url && (
                        <Image
                            src={article.image_url}
                            height={1000}
                            width={1000}
                            alt={article.alt}
                        ></Image>
                    )}
                </div>
            ))}
        </>
    );
};

export default ArticleLayout;

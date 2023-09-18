import Image from 'next/image';
import ArticleTitle from '@/components/UiComps/ArticleTitle';
import { sanitize } from 'isomorphic-dompurify';

const ArticleLayout = ({ articles }) => {
    return (
        <>
            {articles.map((article, i) => (
                <article className="my-8 pb-10" key={i} id={article._id}>
                    <ArticleTitle>{article.title}</ArticleTitle>

                    <p
                        className="my-8 whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                            __html: sanitize(article.description),
                        }}
                    ></p>
                    {article.image_url && (
                        <Image
                            src={article.image_url}
                            height={1000}
                            width={1000}
                            alt={article.alt}
                        />
                    )}
                    <ul className="mt-12">
                        {article.list?.map((item) => (
                            <li className="list-disc ml-8" id={item._id}>
                                <ArticleTitle size="text-2xl">
                                    {item.title}
                                </ArticleTitle>
                                {item.image_url && (
                                    <Image
                                        src={item.image_url}
                                        height={300}
                                        width={300}
                                        alt={item.alt}
                                        className="float-right ml-2 mb-2 rounded-md "
                                    />
                                )}
                                <p
                                    className="mb-8 whitespace-pre-line"
                                    dangerouslySetInnerHTML={{
                                        __html: sanitize(item.content),
                                    }}
                                ></p>
                              
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </>
    );
};

export default ArticleLayout;

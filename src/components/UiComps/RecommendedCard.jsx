import Link from 'next/link';
import Image from 'next/image';
import { stringToRoute } from '@/utils/stringToRoute';
import { sanitize } from 'isomorphic-dompurify';

const RecommendedCard = ({ article }) => {
    let blogRoute = '';
    if (article.blog_category == 'posts') {
        blogRoute = stringToRoute(article.category_id);
    }
    return (
        <>
            <div className="max-w-[350px] bg-white border border-gray-200 rounded-lg shadow">
                <Image
                    className="rounded-t-lg"
                    src={article.small_image_url}
                    width={350}
                    height={350}
                    alt={article.alt}
                />

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:border-primary ">
                        {article.title}
                    </h5>

                    <p
                        className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4"
                        dangerouslySetInnerHTML={{
                            __html: sanitize(article.brief_desc),
                        }}
                    >
                        {/* {article.brief_desc} */}
                    </p>
                    <Link
                        href={
                            article.blog_category == 'posts'
                                ? {
                                      pathname: `/blog/${article.blog_category}/${blogRoute}`,
                                  }
                                : {
                                      pathname: `/blog/${article.blog_category}/${article.category_id}`,
                                  }
                        }
                        className="text-primary  hover:underline ease duration-200 font-medium text-xl inline-flex items-center group py-2 "
                    >
                        Ver articulo
                        <svg
                            className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 ease duration-200"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* <div className="relative w-[350px]">
                    <Image
                        className="rounded-lg  w-full h-full bg-bg-dark"
                        height={350}
                        width={350}
                        src={article.small_image_url}
                        alt=""
                    />
                    <div className="absolute top-0  w-full h-full backdrop-brightness-50 rounded-lg">
                        <div className="text-white opacity-100 text-center absolute top-1/2 left-0 right-0 -translate-y-1/2">
                            <h4 className="text-xl ">{article.title}</h4>
                        </div>
                    </div>
                </div> */}
        </>
    );
};

export default RecommendedCard;

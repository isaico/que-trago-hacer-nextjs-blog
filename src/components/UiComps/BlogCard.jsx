import Image from 'next/image';
import Link from 'next/link';
import PostedBy from './PostedBy';
import { stringToRoute } from '@/utils/stringToRoute';
const BlogCard = ({ blog }) => {
    let blogRoute = '';
    if (blog.blog_category == 'posts') {
        blogRoute = stringToRoute(blog.category_id);
    }
    return (
        <>
            
            {blog ? (
                <div className="flex relative justify-center border rounded-xl bg-gray-50 border-gray-200  shadow-lg group-hover:shadow-xl hover:border-primary ease duration-150  max-h-[350px]">
                    {blog.featured  === true ? (
                        <span className="bg-pink-200 text-xs font-medium text-pink-900 text-center p-0.5 leading-none rounded-full px-2  absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-4">
                            Destacado
                        </span>
                    ) : null}
                    <Image
                        className="object-contain rounded-tl-xl rounded-bl-xl h-full   md:h-auto"
                        src={blog.small_image_url}
                        height={350}
                        width={350}
                        alt={blog.alt}
                    ></Image>
                    <div className="flex flex-col justify-between p-8 leading-normal">
                        <div>
                            <PostedBy time={blog.createdAt}></PostedBy>
                            <span className="text-sm text-gray-500">
                                Categoría: {blog.blog_category}
                            </span>
                        </div>
                        <h3 className="text-2xl font-medium pb-2 text-gray-900">
                            {blog.title}
                        </h3>
                        {blog.brief_desc && (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: blog?.brief_desc,
                                }}
                                className="line-clamp-3"
                            ></p>
                        )}
                        <Link
                            href={
                                blog.blog_category == 'posts'
                                    ? {
                                          pathname: `/blog/${blog.blog_category}/${blogRoute}`,
                                      }
                                    : {
                                          pathname: `/blog/${blog.blog_category}/${blog.category_id}`,
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
            ) : (
                <div> error al cargar datos</div>
            )}
            {/* </Link> */}
        </>
    );
};

export default BlogCard;

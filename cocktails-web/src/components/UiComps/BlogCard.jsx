import Image from 'next/image';
import Link from 'next/link';
import PostedBy from './PostedBy';
import { stringToRoute } from '@/utils/stringToRoute';
const BlogCard = ({ blog }) => {
    let route = '';
    if (blog.blog_category == 'posts') {
        route = stringToRoute(blog.title);
    }
    console.log(blog)
    return (
        <>
            <Link
                href={
                    blog.blog_category == 'posts'
                        ? {
                              pathname: `/blog/${blog.blog_category}/${blog.category_id}`,
                            //   query: { id:  },
                          }
                        : {
                              pathname: `/blog/${blog.blog_category}/${blog.category_id}`,
                              // query:{id:blog.category_id}
                          }
                }
                className="hover:-translate-y-1 ease-in-out duration-100 group"
            >
                {blog ? (
                    <div className="flex relative max-w-3xl justify-center border rounded-xl bg-gray-50 border-gray-200  shadow-lg group-hover:shadow-xl group-hover:border-primary ">
                        {blog.blog_category === 'posts' ? (
                            <span className="bg-pink-200 text-xs font-medium text-pink-900 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-2">
                                Recomendado
                            </span>
                        ) : null}
                        <Image
                            className="object-cover rounded-tl-xl rounded-bl-xl h-full  md:h-auto"
                            src={blog.image_url}
                            height={300}
                            width={300}
                            alt={blog.alt}
                        ></Image>
                        <div className="flex flex-col justify-between p-8 leading-normal">
                            <div>
                                <PostedBy time={blog.createdAt}></PostedBy>
                                <span className="text-sm text-gray-500">
                                    Categoría: {blog.blog_category}
                                </span>
                                <span></span>
                            </div>
                            <h3 className="text-2xl font-medium pb-2">
                                {blog.title}
                            </h3>
                            {blog.brief_desc && (
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: blog?.brief_desc,
                                    }}
                                ></p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div> error al cargar datos</div>
                )}
            </Link>
        </>
    );
};

export default BlogCard;

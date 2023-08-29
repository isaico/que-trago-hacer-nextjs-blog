import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
    let route = '';
    if (blog.blogCategory == 'posts') {
        let titleNoSpaces = blog.title.replace(/ /g, '-');
        let titleLowerCase = titleNoSpaces.toLowerCase();
        route = titleLowerCase.replace(/[^a-zA-Z0-9-]/g, '-');
    }
    // console.log(blog.title)
    // console.log(blog.categoryId)

    return (
        <>
            <Link
                href={
                    blog.blogCategory == 'posts'
                        ? {
                              pathname: `/blog/${blog.blogCategory}/${route}`,
                              query: { id: blog.title.trim() },
                          }
                        : {
                              pathname: `/blog/${blog.blogCategory}/${blog.categoryId}`,
                              // query:{id:blog.categoryId}
                          }
                }
            >
                {blog ? (
                    <div className="flex relative">
                        <span class="bg-purple-500 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-0">
                            {blog.blogCategory}
                        </span>
                        <Image
                            className="object-cover w-full rounded-t-lg h-full  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={blog.image_url}
                            height={400}
                            width={400}
                            alt={blog.alt}
                        ></Image>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
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

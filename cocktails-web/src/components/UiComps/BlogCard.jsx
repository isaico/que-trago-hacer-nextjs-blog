import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
    let route = ""
    if(blog.blogCategory == "posts"){
        let titleNoSpaces = blog.title.replace(/ /g, '-')
        let titleLowerCase = titleNoSpaces.toLowerCase()
        route = titleLowerCase.replace(/[^a-zA-Z0-9-]/g, '-')
        console.log(route)
    }
    // console.log(blog.title)
    // console.log(blog.categoryId)

    return (
        <div>
            <Link
                href={blog.blogCategory == "posts"?{
                    pathname: `/blog/${blog.blogCategory}/${route}`,
                    query:{id:blog.title.trim()}
                }  : {
                    pathname:`/blog/${blog.blogCategory}/${blog.categoryId}`,
                    // query:{id:blog.categoryId}
                }
            }
            >
                {blog ? (
                    <div className="flex">
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
        </div>
    );
};

export default BlogCard;

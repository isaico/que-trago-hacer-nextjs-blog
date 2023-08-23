import PostContainer from '@/components/layoutComps/PostContainer/PostContainer';
import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';
import Image from 'next/image';
import fetchBlog from '@/utils/fetchBlog'
import BlogLayout from "@/components/layoutComps/Blog/BlogLayout"


const Blogs = async ({params, searchParams }) => {
    console.log(params,"dentro de blog/posts") 
    console.log(searchParams.id," searchparams dentro de blog/posts") 
    console.log(searchParams.id.trim()," searchparams dentro de blog/posts") 
    const blog = await fetchBlog(searchParams.id.trim());
    console.log(blog)
    return (
        <div>

            {blog? 
            
            <BlogLayout blog={blog}></BlogLayout> : <div>error al cargar datos</div>
        }
            <div> articulo recomendado en page ... </div>
        </div>
    );
};

export default Blogs;

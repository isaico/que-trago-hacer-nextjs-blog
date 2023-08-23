import PostContainer from '@/components/layoutComps/PostContainer/PostContainer';
import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';
import Image from 'next/image';
import fetchBlog from '@/utils/fetchBlog'
import BlogLayout from "@/components/layoutComps/Blog/BlogLayout"


const Blogs = async ({ searchParams }) => {
    const blog = await fetchBlog(searchParams.id);
    return (
        <div>
            <BlogLayout blog={blog}></BlogLayout>
            <div> articulo recomendado en page ... </div>
        </div>
    );
};

export default Blogs;

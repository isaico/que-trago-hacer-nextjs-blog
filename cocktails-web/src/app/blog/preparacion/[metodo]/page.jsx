import React from 'react';
import fetchBlog from '@/utils/fetchBlog';
import BlogCard from '@/components/UiComps/BlogCard';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
const Page = async ({ params }) => {
    
    const blog = await fetchBlog(params.metodo);
    return (
        <div>
            Metodo de preparacion {params.metodo}
            {blog? <BlogLayout blog={blog}></BlogLayout> : <div>error al cargar datos</div>}
        </div>
    );
};

export default Page;

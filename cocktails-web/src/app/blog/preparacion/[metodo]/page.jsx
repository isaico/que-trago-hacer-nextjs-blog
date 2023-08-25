import React from 'react';
import fetchBlog from '@/utils/fetchBlog';
import BlogCard from '@/components/UiComps/BlogCard';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
const Page = async ({ params }) => {
    const blog = await fetchBlog(params.metodo);
    return (
        <div>
            Metodo de preparacion {params.metodo}
            {blog ? (
                <BlogLayout blog={blog}></BlogLayout>
            ) : (
                <ErrorFetchData/>
            )}
        </div>
    );
};

export default Page;

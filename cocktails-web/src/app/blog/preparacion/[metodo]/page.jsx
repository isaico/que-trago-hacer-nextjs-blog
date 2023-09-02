import React from 'react';
import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
const Preparacion = async ({ params }) => {
    const blog = await fetchBlog(params.metodo);
    return (
        <div>
            {blog ? (
                <BlogLayout blog={blog}></BlogLayout>
            ) : (
                <ErrorFetchData/>
            )}
        </div>
    );
};

export default Preparacion;

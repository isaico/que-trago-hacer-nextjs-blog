import React from 'react';
import fetchBlogs from '@/utils/fetchBlogs';
import BlogCard from '@/components/UiComps/BlogCard';

const Page = async () => {
    const blogs = await fetchBlogs();
    // console.log(blogs)
    return (
        <div class="pb-4 mx-auto max-w-screen-xl lg:pb-4">
            <div className='grid md:grid-cols-2  gap-8 mb-8'>
                {blogs ? (
                    blogs.map((blog) => (
                        <BlogCard categoryId={blog.categoryId}></BlogCard>
                    ))
                ) : (
                    <div>Error al cargar datos</div>
                )}
                Blog
            </div>
        </div>
    );
};

export default Page;

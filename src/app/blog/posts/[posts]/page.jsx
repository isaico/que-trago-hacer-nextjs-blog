import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Loader = dynamic(() => import('@/components/UiComps/Loader'));
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';

const Posts = async ({ params }) => {
    const post = params.posts.replace(/-/g, ' ');
    const blog = await fetchBlog(post);
    return (
        <>
            {blog ? (
                <Suspense fallback={<Loader />}>
                    <BlogLayout blog={blog} />
                </Suspense>
            ) : (
                <ErrorFetchData />
            )}
        </>)
    
};

export default Posts;

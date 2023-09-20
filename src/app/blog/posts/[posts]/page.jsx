import fetchBlog from '@/utils/fetchBlog';
// import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const ErrorFetchData = dynamic(() =>
    import('@/components/UiComps/ErrorFetchData')
);
const Loader = dynamic(() => import('@/components/UiComps/Loader'));
const BlogLayout = dynamic(() =>
    import('@/components/layoutComps/Blog/BlogLayout')
);

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
        </>
    );
};

export default Posts;

import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const Loader = dynamic(() => import('@/components/UiComps/Loader'));
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
import fetchBlogCategory from '@/utils/fetchBlogCategory';

/* ------------------------------ Head metadata ----------------------------- */
export async function generateMetadata({ params }, parent) {
    // read route params
    const post = params.posts.replace(/-/g, ' ');

    // fetch data
    const blogPost = await fetchBlog(post);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: blogPost.title,
        description: blogPost.head_desc,
        openGraph: {
            images: [
                {
                    url: blogPost.image_url,
                },
                ...previousImages,
            ],
        },
        twitter: {
            card: 'summary_large_image',
        },
    };
}
export async function generateStaticParams() {
    const posts = await fetchBlogCategory('posts');
    return posts.map(({ category_id }) => category_id); //--> al usar un slice en antes de retornar, solo cacheara la cantidad devuelta
}

/* ----------------------------- Page ----------------------------- */

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

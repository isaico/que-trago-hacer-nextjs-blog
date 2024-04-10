import fetchBlog from '@/utils/fetchBlog';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import fetchBlogCategory from '@/utils/fetchBlogCategory';
import { notFound } from 'next/navigation';
import { stringToRoute } from '@/utils/stringToRoute';
/* ------------------------------ lazy imports ------------------------------ */
const Loader = dynamic(() => import('@/components/UiComps/Loader'));
const ErrorFetchData = dynamic(() =>
    import('@/components/UiComps/ErrorFetchData')
);
const BlogLayout = dynamic(() =>
    import('@/components/layoutComps/Blog/BlogLayout')
);

/* ------------------------------ Head metadata ----------------------------- */
export async function generateMetadata({ params }, parent) {
    // read route params
    const post = params.posts.replace(/-/g, ' ');

    // fetch data
    const blogPost = await fetchBlog(post);
    if (!blogPost) {
        notFound();
    }
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: blogPost.title,
        description: blogPost.head_desc,
        metadataBase: new URL(
            `${process.env.BASE_URL}/posts/${stringToRoute(
                post
            )}/${stringToRoute(blogPost.category_id)}`
        ),
        alternates: {
            canonical: `/posts/${stringToRoute(post)}/${stringToRoute(
                blogPost.category_id
            )}`,
        },
        openGraph: {
            title: blogPost.title,
            description: blogPost.head_desc,
            images: [
                {
                    url: blogPost.image_url,
                },
                ...previousImages,
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: blogPost.title,
            description: blogPost.head_desc,
        },
        authors: ['Isaias Garcia'],
        type: 'article',
        publishedTime: new Date(blogPost.createdAt),
        keywords: [
            'cocteles',
            'tragos',
            'cocteles clásicos',
            'cocteleria',
            'cocteleria basica',
            'trago',
        ],
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
    if (blog.status === 404) {
        notFound();
    }
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

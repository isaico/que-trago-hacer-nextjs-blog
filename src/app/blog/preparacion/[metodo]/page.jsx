import fetchBlog from '@/utils/fetchBlog';
import { cache } from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import fetchBlogCategory from '@/utils/fetchBlogCategory';
import Loader from '@/components/UiComps/Loader';
import { notFound } from 'next/navigation';
import { stringToRoute } from '@/utils/stringToRoute';
const ErrorFetchData = dynamic(() =>
    import('@/components/UiComps/ErrorFetchData')
);
const BlogLayout = dynamic(() =>
    import('@/components/layoutComps/Blog/BlogLayout')
);

/* ------------------- function to avoid duplicated fetchs ------------------ */

const getPost = cache(async (paramsSlug) => {
    const post = await fetchBlog(paramsSlug);
    return post;
});
/* ------------------------------ Head metadata ----------------------------- */
export async function generateMetadata({ params }, parent) {
    // read route params
    const post = params.metodo.replace(/-/g, ' ');

    // fetch data
    const blogPost = await getPost(post);
    if (!blogPost) {
        return notFound();
    }
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: blogPost.title,
        description: blogPost.head_desc,

        alternates: {
            canonical: `/blog/preparacion/${stringToRoute(blogPost.category_id)}`,
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
            'vodka',
            'tragos con vodka',
            'cocteles clásicos',
            'cocteleria',
            'trago',
        ],
    };
}
export async function generateStaticParams() {
    const posts = await fetchBlogCategory('preparacion');
    return posts.map(({ category_id }) => category_id);
}
/* ----------------------------- Page ----------------------------- */

const Preparacion = async ({ params }) => {
    const blog = await getPost(params.metodo.replace(/-/g, ' '));
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

export default Preparacion;

import fetchBlog from '@/utils/fetchBlog';
import { cache } from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import fetchBlogCategory from '@/utils/fetchBlogCategory';
import Loader from '@/components/UiComps/Loader';

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
    const posts = await fetchBlogCategory('preparacion');
    return posts.map(({ category_id }) => category_id);
}
/* ----------------------------- Page ----------------------------- */

const Preparacion = async ({ params }) => {
    const blog = await getPost(params.metodo.replace(/-/g, ' '));
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

import fetchBlog from '@/utils/fetchBlog';
import { cache } from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loader from '@/components/UiComps/Loader';
import fetchBlogCategory from '@/utils/fetchBlogCategory';
import { notFound } from 'next/navigation';
/* ------------------------------ lazy imports ------------------------------ */
const ErrorFetchData = dynamic(() =>
    import('@/components/UiComps/ErrorFetchData')
);
const BlogLayout = dynamic(() =>
    import('@/components/layoutComps/Blog/BlogLayout')
);

/* ------------------- function to avoid duplicated fetchs ------------------ */

const getPost = cache(async (paramsSlug) => {
    const post = await fetchBlog(paramsSlug);

    if (!post) {
        return null;
    }
    return post;
});
/* ------------------------------ Head metadata ----------------------------- */
export async function generateMetadata({ params }, parent) {
    // read route params
    const post = params.bebida.replace(/-/g, ' ');

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
        openGraph: {
            images: [
                {
                    url: blogPost.image_url,
                },
                ...previousImages,
            ],
        },
    };
}
export async function generateStaticParams() {
    const posts = await fetchBlogCategory('tragos');
    return posts.map(({ category_id }) => category_id);
}
/* ----------------------------- Page ----------------------------- */

const Tragos = async ({ params }) => {
    const blog = await getPost(params.bebida.replace(/-/g, ' '));
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
                <ErrorFetchData></ErrorFetchData>
            )}
        </>
    );
};

export default Tragos;

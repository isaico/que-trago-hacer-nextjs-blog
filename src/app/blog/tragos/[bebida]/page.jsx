import fetchBlog from '@/utils/fetchBlog';
// import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
// import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const ErrorFetchData = dynamic(() =>
    import('@/components/UiComps/ErrorFetchData')
);
const BlogLayout = dynamic(() =>
    import('@/components/layoutComps/Blog/BlogLayout')
);
import Loader from "@/components/UiComps/Loader"
const Tragos = async ({ params }) => {
    const blog = await fetchBlog(params.bebida);
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

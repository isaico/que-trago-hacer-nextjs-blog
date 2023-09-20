import fetchBlog from '@/utils/fetchBlog';
// import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
// import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
import dynamic from 'next/dynamic';
const ErrorFetchData = dynamic(() =>
    import('@/components/UiComps/ErrorFetchData')
);
const BlogLayout = dynamic(() =>
    import('@/components/layoutComps/Blog/BlogLayout')
);
const Preparacion = async ({ params }) => {
    const blog = await fetchBlog(params.metodo);
    return (
        <>
            {blog ? (
                <BlogLayout blog={blog}></BlogLayout>
            ) : (
                <ErrorFetchData/>
            )}
        </>
    );
};

export default Preparacion;

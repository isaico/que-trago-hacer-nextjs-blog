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
const Tragos = async ({ params }) => {
    const blog = await fetchBlog(params.bebida);
    return (
        <>
           
                {blog ? (
                    <BlogLayout blog={blog}></BlogLayout>
                ) : (
                    <ErrorFetchData></ErrorFetchData>
                )}
            
        </>
    );
};

export default Tragos;

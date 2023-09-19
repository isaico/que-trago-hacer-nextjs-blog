
import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
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

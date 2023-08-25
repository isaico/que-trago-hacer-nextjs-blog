
import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
const Page = async ({ params }) => {
    const blog = await fetchBlog(params.bebida);
    return (
        <div>
            {blog ? (
                <BlogLayout blog={blog}></BlogLayout>
            ) : (
                <ErrorFetchData></ErrorFetchData>
            )}
            
        </div>
    );
};

export default Page;

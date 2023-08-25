import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';

const Blogs = async ({ searchParams }) => {
   
    const blog = await fetchBlog(searchParams.id.trim());
    return (
        <>
            {blog ? (
                <BlogLayout blog={blog}></BlogLayout>
            ) : (
               <ErrorFetchData/>
            )}
            <div> articulo recomendado en page ... </div>
        </>
    );
};

export default Blogs;

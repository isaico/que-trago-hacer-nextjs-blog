import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';

const Posts = async ({ searchParams }) => {
    const blog = await fetchBlog(searchParams.id.trim());
    return <>{blog ? <BlogLayout blog={blog} /> : <ErrorFetchData />}</>;
};

export default Posts;

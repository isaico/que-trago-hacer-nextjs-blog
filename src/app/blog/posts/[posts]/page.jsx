import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
// import fetchPilar from '@/utils/fetchPilar';
const Posts = async ({ params, searchParams }) => {
    const post = params.posts.replace(/-/g, ' ');
    const blog= await fetchBlog(post);
    return <>{blog ? <BlogLayout blog={blog} /> : <ErrorFetchData />}</>;
};

export default Posts;
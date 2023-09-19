import fetchBlog from '@/utils/fetchBlog';
// import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import dynamic from 'next/dynamic';
const ErrorFetchData = dynamic(() =>
    import('@/components/UiComps/ErrorFetchData')
);
const BlogLayout = dynamic(() =>
    import('@/components/layoutComps/Blog/BlogLayout')
);

const Posts = async ({ params }) => {
    const post = params.posts.replace(/-/g, ' ');
    const blog = await fetchBlog(post);
    return <>{blog ? <BlogLayout blog={blog} /> : <ErrorFetchData />}</>;
};

export default Posts;

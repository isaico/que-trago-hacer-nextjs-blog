import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';

const Posts = async ({ searchParams, params }) => {
    console.log(searchParams);
    console.log(params);
    const string = params.posts.replace(/-/g," ");
    console.log(string)
    const blog = await fetchBlog(string);
    return <>{blog ? <BlogLayout blog={blog} /> : <ErrorFetchData />}</>;
};

export default Posts;

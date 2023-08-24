//cargare los post desde la api local con el params id como prametro
import Blog from '@/models/blog';
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
            {/* <PostContainer posts={}></PostContainer> */}
            {/* <CocktailContainer ingredient={params.bebida}></CocktailContainer> */}
        </div>
    );
};

export default Page;

//cargare los post desde la api local con el params id como prametro
import CocktailContainer from '@/components/layoutComps/CocktailContainer/CocktailContainer';
import PostContainer from '@/components/layoutComps/PostContainer/PostContainer';
import Blog from '@/models/blog';
import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
const Page = async ({ params }) => {
    const blog = await fetchBlog(params.bebida);
    return (
        <div>
            <p>Cocktails con {params.bebida}</p>
            <BlogLayout blog={blog}></BlogLayout>
            {/* <PostContainer posts={}></PostContainer> */}
            {/* <CocktailContainer ingredient={params.bebida}></CocktailContainer> */}
        </div>
    );
};

export default Page;

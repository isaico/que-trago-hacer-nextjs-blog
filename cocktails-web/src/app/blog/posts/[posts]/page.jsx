import fetchBlog from '@/utils/fetchBlog';
import BlogLayout from '@/components/layoutComps/Blog/BlogLayout';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
// import fetchPilar from '@/utils/fetchPilar';
export async function generateMetadata({ params }, parent) {
    let blog;
    try {
        const post = params.posts.replace(/-/g, ' ');
        blog = await fetchBlog(post);
    } catch (error) {
        return {
            title: 'Pagina no encontrada',
            description: 'La pagina no existe o bien hubo un error en su carga',
        };
    }
    return {
        title: blog.title,
        description: blog.brief_desc,
        creator: 'Isaias Garcia | Full Stack Dev',
        manifest: '', //url del manifest.json
        alternates:{
            canonical:`/blog/posts/${params.posts}`
        },
        // robots: {
        //     index: true,
        //     follow: true,
        //     googleBot: { index: true, follow: true },
        // },
        referrer: 'no-referrer',
        generator: '',
        keywords: [],
       
    };
}
const Posts = async ({ params }) => {
    const post = params.posts.replace(/-/g, ' ');
    const blog = await fetchBlog(post);
    return <>{blog ? <BlogLayout blog={blog} /> : <ErrorFetchData />}</>;
};

export default Posts;

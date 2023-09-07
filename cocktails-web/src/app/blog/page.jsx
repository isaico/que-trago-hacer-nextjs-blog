import fetchBlogs from '@/utils/fetchBlogs';
import BlogCard from '@/components/UiComps/BlogCard';
import BackButton from '@/components/UiComps/BackButton';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
import Jumbotron from '@/components/layoutComps/Jumbotron/Jumbotron';
const Page = async () => {
    const blogs = await fetchBlogs(null);
    return (
        <div className="pb-4 ">
            <div className="grid mt-12">
                <div className="z-10">
                    <BackButton></BackButton>
                </div>
                <Jumbotron
                    title={
                        'Blog de cocteleria clásica y recetas de tragos'
                    }
                    description={
                        'Encuentre aquí todas nuestras recetas de tragos, desde los más clásicos hasta innovadores cocktails, populares y a la moda. Publicaciones sobre coctelería clasica y trucos para que tus cocteles estén a la altura'
                    }
                />
            </div>
            <div className="">
                {blogs ? (
                    <div className="">
                        <div className="grid  md:grid-cols-2 gap-8 gap-x-14 w-full">
                            {blogs.map((blog) => (
                                <BlogCard blog={blog}></BlogCard>
                            ))}
                        </div>
                    </div>
                ) : (
                    <ErrorFetchData />
                )}
            </div>
            {/* <h2 className="text-3xl text-center mt-20 mb-12  font-medium ">
                    Articulos Destacados
                </h2>
                <RecommendedCards quantity={4} field={null} /> */}
        </div>
    );
};

export default Page;

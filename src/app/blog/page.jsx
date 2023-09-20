import fetchBlogs from '@/utils/fetchBlogs';
// import BlogCard from '@/components/UiComps/BlogCard';
// import BackButton from '@/components/UiComps/BackButton';
// import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
// import Jumbotron from '@/components/layoutComps/Jumbotron/Jumbotron';
import { Suspense, lazy } from 'react';
import Loader from '@/components/UiComps/Loader';
const BlogCard = lazy(() => import('@/components/UiComps/BlogCard'));
const BackButton = lazy(() => import('@/components/UiComps/BackButton'));
const ErrorFetchData = lazy(() =>
    import('@/components/UiComps/ErrorFetchData')
);
const Jumbotron = lazy(() =>
    import('@/components/layoutComps/Jumbotron/Jumbotron')
);
const Page = async () => {
    const blogs = await fetchBlogs(null);
    return (
        <div className="mb-28 ">
            <Suspense fallback={<Loader />}>
                <div className="grid mt-12">
                    <div className="z-10">
                        <BackButton color="text-gray-200" />
                    </div>
                    <Jumbotron
                        title={'Blog de cocteleria clásica y recetas de tragos'}
                        description={
                            'Encuentre aquí todas nuestras recetas de tragos, desde los más clásicos hasta innovadores cocktails, populares y a la moda. Publicaciones sobre coctelería clásica y trucos para que tus cocteles estén a la altura'
                        }
                    />
                </div>
            </Suspense>
            <div className=" max-w-screen-xl">
                {blogs ? (
                    <Suspense fallback={<Loader />}>
                        <div className="">
                            <div className="grid  md:grid-cols-2 gap-8 gap-x-14 w-full">
                                {blogs.map((blog) => (
                                    <div key={blog._id}>
                                        <Suspense fallback={<Loader />}>
                                            <BlogCard blog={blog}></BlogCard>
                                        </Suspense>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Suspense>
                ) : (
                    <ErrorFetchData />
                )}
            </div>
        </div>
    );
};

export default Page;

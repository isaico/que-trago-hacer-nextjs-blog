import fetchBlogs from '@/utils/fetchBlogs';
import { Suspense, lazy } from 'react';
import Loader from '@/components/UiComps/Loader';
/* ------------------------------ lazy imports ------------------------------ */
const BlogCard = lazy(() => import('@/components/UiComps/BlogCard'));
const BackButton = lazy(() => import('@/components/UiComps/BackButton'));
const ErrorFetchData = lazy(() =>
    import('@/components/UiComps/ErrorFetchData')
);
const Jumbotron = lazy(() =>
    import('@/components/layoutComps/Jumbotron/Jumbotron')
);

/* ------------------------------ head metadata ----------------------------- */
export const metadata = {
    alternates: {
        canonical: '/blog',
    },
    keywords: [
        'tragos',
        'trago',
        'cocteleria',
        'cocteles',
        'blog',
        'tragos clasicos',
        'tragos con vodka',
        'tragos con gin'
    ],
    title: {
        default:
            'Todos los posts - Blog de cocteleria clásica y recetas de tragos',
    },
    description:
        'Todas las publicaciones de tragos y cocktails los encontraras aquí, aprenderás sobre cocteleria básica y trucos para mejorar tus tragos.',
    twitter: {
        card: 'summary_large_image',
    },
    creator: 'Isaias García',
};

const Page = async () => {
    const blogs = await fetchBlogs(null);

    return (
        <div className="mb-28 ">
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

            <div className="md:max-w-screen-xl sm:px-12">
                {blogs ? (
                    <div className="">
                        <div className="grid  md:grid-cols-2 gap-8 gap-x-14 justify-center  w-full">
                            {blogs.map((blog) => (
                                <div key={blog._id}>
                                    <Suspense fallback={<Loader />}>
                                        <BlogCard blog={blog}></BlogCard>
                                    </Suspense>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <ErrorFetchData />
                )}
            </div>
        </div>
    );
};

export default Page;

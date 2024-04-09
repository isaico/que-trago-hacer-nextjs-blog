// import BlogCard from '@/components/UiComps/BlogCard';
import fetchBlogs from '@/utils/fetchBlogs';
import { Suspense, lazy } from 'react';
const BlogCard = lazy(() => import('@/components/UiComps/BlogCard'));
const Loader = lazy(() => import('@/components/UiComps/Loader'));
const HomeBlogCards = async () => {
    const blogs = await fetchBlogs([
        'Tragos y Cocteles: La guía definitiva de coctelería',
        'Los 10 cócteles clásicos que debes conocer',
        'Destila Elegancia: Los 8 Mejores Tragos con Vodka',
    ]);
    return (
        <div className="flex gap-8 flex-wrap justify-center">
            {blogs.map((blog) => (
                <Suspense fallback={<Loader />}>
                    <BlogCard blog={blog}></BlogCard>
                </Suspense>
            ))}
        </div>
    );
};

export default HomeBlogCards;

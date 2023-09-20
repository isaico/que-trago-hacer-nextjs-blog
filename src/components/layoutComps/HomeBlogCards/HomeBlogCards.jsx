// import BlogCard from '@/components/UiComps/BlogCard';
import fetchBlogs from '@/utils/fetchBlogs';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const BlogCard = dynamic(() => import('@/components/UiComps/BlogCard'));
const Loader = dynamic(() => import('@/components/UiComps/Loader'));
const HomeBlogCards = async () => {
    const blogs = await fetchBlogs([
        'Tragos y Cocteles: La guía definitiva de coctelería',
        'Los 10 cócteles clásicos que debes conocer',
        'Destila Elegancia: Los 8 Mejores Tragos con Vodka',
    ]);
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            {blogs.map((blog) => (
                <div key={blog._id}>
                    <Suspense fallback={<Loader />}>
                        <BlogCard blog={blog}></BlogCard>
                    </Suspense>
                </div>
            ))}
        </div>
    );
};

export default HomeBlogCards;

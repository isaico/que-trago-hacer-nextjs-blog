import Link from 'next/link';
import BlogCard from '@/components/UiComps/BlogCard';
import fetchBlogs from '@/utils/fetchBlogs';

const HomeBlogCards = async () => {
    const blogs = await fetchBlogs([
        'Los 10 cócteles clásicos que debes conocer',
        "algo sobre tragos"
    ]);
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            {blogs.map((blog) => (
                <BlogCard blog={blog}></BlogCard>
            ))}
        </div>
    );
};

export default HomeBlogCards;

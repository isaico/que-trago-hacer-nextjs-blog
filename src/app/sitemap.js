import fetchBlogs from '@/utils/fetchBlogs';
import { stringToRoute } from '@/utils/stringToRoute';
export default async function sitemap() {
    const blogPosts = await fetchBlogs();
    const entries = blogPosts.map(
        ({ blog_category, category_id, updatedAt }) => ({
            url: `${process.env.BASE_URL}/blog/${stringToRoute(
                blog_category
            )}/${stringToRoute(category_id)}`,
            lastModified: new Date(updatedAt),
        })
    );

    return [
        {
            url: `${process.env.BASE_URL}/contacto`,
        },
        {
            url: `${process.env.BASE_URL}/blog`,
        },
        {
            url: `${process.env.BASE_URL}`,
        },
        ...entries,
    ];
}

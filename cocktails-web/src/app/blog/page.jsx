import fetchBlogs from '@/utils/fetchBlogs';
import BlogCard from '@/components/UiComps/BlogCard';
import BackButton from '@/components/UiComps/BackButton';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
import CategoryButtons from '@/components/UiComps/CategoryButtons';

const Page = async () => {
    const blogs = await fetchBlogs(null);
    return (
        <div class="pb-4">
            <div>
                <BackButton></BackButton>
            </div>

            <div className=" justify-center">
                {blogs ? (
                    <>

                        <div className="grid md:grid-col-2 gap-8 max-w-2xl">
                            {blogs.map((blog) => (
                                <BlogCard blog={blog}></BlogCard>
                            ))}
                        </div>
                    </>
                ) : (
                    <ErrorFetchData />
                )}
            </div>
        </div>
    );
};

export default Page;

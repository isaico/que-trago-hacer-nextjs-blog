import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';

const fetchRecommendedPosts = async (field) => {
    try {
        connectDB();
        if (field && field !== undefined && field.length > 0) {
            const resp = await Blog.find(
                { title: field },
                'title brief_desc small_image_url alt blog_category category_id pilar _id'
            )
            const data = JSON.parse(JSON.stringify(resp));
            return data;
        }
      
    } catch (error) {
        return error;
    }
};

export default fetchRecommendedPosts;

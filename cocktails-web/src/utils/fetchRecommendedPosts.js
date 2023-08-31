import connectDB from '@/libs/mongodb';
import Recommended from '@/models/recommended';
import Blog from '@/models/blog';

const fetchRecommendedPosts = async (quantity, field) => {
    try {
        
        connectDB();
        if (field && field !== undefined) {
            const resp = await Blog.find(
                { title: field },
                'title brief_desc small_image_url blogCategory categoryId'
            ).limit(quantity);
            const data = JSON.parse(JSON.stringify(resp));
            return data;
        }
      
    } catch (error) {
        return error;
    }
};

export default fetchRecommendedPosts;

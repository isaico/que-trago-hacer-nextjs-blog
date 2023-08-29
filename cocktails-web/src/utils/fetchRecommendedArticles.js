import connectDB from '@/libs/mongodb';
import Recommended from '@/models/recommended';

const fetchRecommendedArticles = async (quantity, field) => {
    console.log(quantity, field, 'recommended');
    try {
        connectDB();
        if (field && field.field !== undefined || null) {
            const resp = await Recommended.find({ field }).limit(quantity);
            const data = JSON.parse(JSON.stringify(resp));
            return data;
        } else {
            const resp = await Recommended.find({}).limit(quantity);
            const data = JSON.parse(JSON.stringify(resp));
            return data;
        }
    } catch (error) {
        return error;
    }
};

export default fetchRecommendedArticles;

import connectDB from '@/libs/mongodb';
import Cocktail from '@/models/cocktails';

const fetchCocktail = async (name) => {
    try {
        connectDB();
        const resp = await Cocktail.findOne({ name });
        const data = JSON.parse(JSON.stringify(resp))
        return data
    } catch (error) {
        return error
    }
};

export default fetchCocktail;

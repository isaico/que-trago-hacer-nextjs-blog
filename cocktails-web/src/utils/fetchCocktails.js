import connectDB from '@/libs/mongodb';
import Cocktail from '@/models/cocktails';

const fetchCocktails = async ({ blogCategory, categoryId, cocktailsNames }) => {
    console.log(blogCategory, categoryId, cocktailsNames);
    switch (blogCategory) {
        case 'preparacion':
            try {
                connectDB();
                const resp = await Cocktail.find({ category: categoryId });
                const data = JSON.parse(JSON.stringify(resp));
                return data;
            } catch (error) {
                return error;
            }

        case 'tragos':
            try {
                connectDB();
                const resp = await Cocktail.find({
                    ingredients: { $in: [categoryId] },
                });
                const data = JSON.parse(JSON.stringify(resp));
                return data;
            } catch (error) {
                return error;
            }

        default:
            try {
                connectDB();
                const resp = await Cocktail.find({ name: cocktailsNames });
                const data = JSON.parse(JSON.stringify(resp));
                return data;
            } catch (error) {
                return error;
            }
    }
    // try {
    //     connectDB();
    //     const resp = await Cocktail.find({});
    //     const data = JSON.parse(JSON.stringify(resp))
    //     return data
    // } catch (error) {
    //     return error
    // }
};

export default fetchCocktails;

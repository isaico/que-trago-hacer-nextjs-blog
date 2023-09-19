import connectDB from '@/libs/mongodb';
import Cocktail from '@/models/cocktails';

const fetchCocktails = async ({ blogCategory, categoryId, cocktailsNames }) => {
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
            //con esta sintaxis busco en una coleccion indexada un string enviado por "query", (buscamos documentos por texto "categoryId")
            try {
                connectDB();
                const pipeline = [
                    {
                        $search: {
                            index: 'default',
                            text: {
                                query: categoryId,
                                path: 'ingredients',
                            },
                        },
                    },
                ];
                if (cocktailsNames && cocktailsNames !== undefined) {
                    const resp = await Cocktail.find({
                        name: { $in: cocktailsNames },
                    });
                    const data = JSON.parse(JSON.stringify(resp));
                    return data;
                } else {
                    const resp = await Cocktail.aggregate(pipeline);
                    const data = JSON.parse(JSON.stringify(resp));
                    return data;
                }
            } catch (error) {
                return error;
            }

        default:
            try {
                connectDB();
                const resp = await Cocktail.find({
                    name: { $in: cocktailsNames },
                });
                const orderedResults = cocktailsNames.map((cocktailName) =>
                    resp.find((result) => result.name === cocktailName)
                );
                const data = JSON.parse(JSON.stringify(orderedResults));
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

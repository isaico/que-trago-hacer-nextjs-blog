import connectDB from '@/libs/mongodb';
import Cocktail from '@/models/cocktails';

const fetchCocktails = async ({ blogCategory, categoryId, cocktailsNames }) => {
    console.log(categoryId);
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
                        index: "default",
                        text: {
                          query: categoryId,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
                const resp = await Cocktail.aggregate(pipeline)
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

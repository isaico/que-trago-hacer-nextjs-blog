import connectDB from '@/libs/mongodb';
import Cocktail from '@/models/cocktails';
import Link from 'next/link';

const getCocktails = async (ing) => {
    console.log(ing);
    connectDB();
    // pido en la base de datos los elementos que tenga coicidencia en el array "ingredients", con lo pasado por params
    const dbResp = await Cocktail.find({
        ingredients: { $all: [`${ing}`] },
    });
    return dbResp;
};
const CocktailContainer = async ({ ingredient }) => {
    const data = await getCocktails(ingredient);
    const cocktails = JSON.parse(JSON.stringify(data));
    return (
        <div className="grid grid-cols-2 grid-flow-row  gap-4">
            {cocktails.map((cocktail) => (
                <div
                    className="flex bg-gray-300 flex-col p-4"
                    key={cocktail._id}
                >
                    <h2>{cocktail.name}</h2>
                    <p>{cocktail.recepy}</p>
                    <Link
                        href={{
                            pathname: `/app/tragos/${cocktail._id}`,
                            query: cocktail,
                        }}
                    >
                        <button>ver receta</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CocktailContainer;

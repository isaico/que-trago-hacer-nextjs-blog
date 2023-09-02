import CocktailCard from '@/components/UiComps/CocktailCard';

const CocktailsContainer = async ({ cocktails }) => {
    return (
        <div className="flex flex-col" id="post-container">
            {cocktails.map((cocktail,i) => (
                <CocktailCard cocktail={cocktail} index={i} cocktailLength={cocktails.length}/>
            ))}
        </div>
    );
};

export default CocktailsContainer;

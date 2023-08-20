//cargare los post desde la api local con el params id como prametro
import CocktailContainer from '@/components/layoutComps/CocktailContainer/CocktailContainer';

const Page = ({ params }) => {
    return (
        <div>
            <p>Cocktails con {params.bebida}</p>
            <CocktailContainer ingredient={params.bebida}></CocktailContainer>
        </div>
    );
};

export default Page;

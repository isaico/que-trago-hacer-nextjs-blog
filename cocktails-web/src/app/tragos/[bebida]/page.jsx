//cargare los post desde la api local con el params id como prametro
import CocktailContainer from '@/components/layoutComps/CocktailContainer/CocktailContainer';
import PostContainer from '@/components/layoutComps/PostContainer/PostContainer';
const Page = ({ params }) => {
    return (
        <div>
            <p>Cocktails con {params.bebida}</p>
            <PostContainer category={params.bebida}></PostContainer>
            {/* <CocktailContainer ingredient={params.bebida}></CocktailContainer> */}
        </div>
    );
};

export default Page;

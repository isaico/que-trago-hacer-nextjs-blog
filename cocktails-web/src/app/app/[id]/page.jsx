//renderiza detalles del objeto Posts
import BackButton from '@/components/UiComps/BackButton';
import Image from 'next/image';
import fetchCocktail from '@/utils/fetchCocktail';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
//utilizo searchParams para evitar modificaciones en la cadena y utilizarlo directamente
const Page = async ({ searchParams }) => {
    const data = await fetchCocktail(searchParams.title);
    return (
        <div>
            <BackButton>Volver</BackButton>
            {data ? (
                <div>
                    <h2>{data.name}</h2>
                    <ul>
                        {data.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>
                    <h2>{data.recepy}</h2>
                    {/* <PostCard item={searchParams} /> */}
                    <hr />
                    {/* <div>mostrar coktails collection </div> */}
                    <div>puedo sugerir que busquen con la app</div>
                    <div>puedo mostrar articulos relacionado</div>
                </div>
            ) : (
                <ErrorFetchData/>
            )}
        </div>
    );
};
export default Page;

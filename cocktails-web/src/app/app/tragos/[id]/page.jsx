// import { useSearchParams } from 'next/navigation'
//pagina que mostrara el trago y su receta
//por el momento solo muestra el titulo que se obtiene por el parametro pero debo usar ese params para buscarlo en la db
import Image from "next/image";
const PageTitle = async ({ searchParams }) => {
   
    return (
        <div>
            page:
            <p>titulo: {searchParams.title}</p>
            <p> desc: {searchParams.description}</p>
            <Image src={searchParams.image_url} width={500} height={500} alt={searchParams.alt}></Image>
            {/* <p>{params.id}</p> */}
            {/* <p>{params.id}</p> */}
        </div>
    );
};

export default PageTitle;

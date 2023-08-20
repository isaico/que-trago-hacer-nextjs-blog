// renderiza detalles de objeto  cocktail
import Image from 'next/image';
import Link from 'next/link';
const PageTitle = async ({ searchParams,params }) => {
    return (
        <div>

            {/* <Image
                src={searchParams.image_url}
                width={500}
                height={500}
                alt={searchParams.alt}
            ></Image> */}
            <p>titulo: {searchParams.name}</p>
            <p>receta: {searchParams.recepy}</p>
            <button>ver recomendaciones del bartender</button>
            <div>dropdown </div>
            
        </div>
    );
};

export default PageTitle;

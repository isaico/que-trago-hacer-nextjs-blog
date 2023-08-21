//renderiza detalles del objeto Posts
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PostCard from '@/components/UiComps/PostCardDetail';
//tengo que modificar la forma de recibir el objeto ya que queda la ruta sucia con el dato del objeto
const Page = ({ params }) => {
    console.log(params.id)
    const router = useRouter();
    return (
        <>
            <div>
                <button onClick={() => router.back()}>volver</button>
            </div>
            {/* <PostCard item={searchParams} /> */}
            <div>tarjeta temporal</div>
            <hr />
            <div>puedo sugerir que busquen con la app</div>
            <div>puedo mostrar articulos relacionado</div>
        </>
    );
};
export default Page;

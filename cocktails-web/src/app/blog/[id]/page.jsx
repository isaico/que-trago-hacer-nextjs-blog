//renderiza detalles del objeto Posts
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PostCard from '@/components/UiComps/PostCard';
const Page = ({ searchParams }) => {
    const router = useRouter();
    return (
        <>
            <div>
                <button onClick={() => router.back()}>volver</button>
            </div>
            <PostCard item={searchParams} />
            <hr />
            <div>puedo sugerir que busquen con la app</div>
            <div>puedo mostrar articulos relacionado</div>
        </>
    );
};
export default Page;

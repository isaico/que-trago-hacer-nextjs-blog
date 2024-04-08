import Link from 'next/link';
import Image from 'next/image';

export const Hero = ({ bgSrc }) => {
    return (
        <section>
            <div className="relative h-[60vh] w-screen bg-[url('/bottles-hero-webp')]">
                <Image
                    src={bgSrc}
                    alt="imagen de una estantería llena de botellas"
                    quality={50}
                    fill
                    placeholder="blur"
                    sizes="100vw"
                    className="object-cover w-full h-full"
                    priority
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full backdrop-brightness-50 rounded-lg">
                    <div className="text-white opacity-100 flex flex-col justify-center items-center w-full h-full max-w-7xl mx-auto text-center">
                        <h1 className="mb-4 px-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                            <span className="text-grad-main">
                                ¿Qué trago hacer?
                            </span>
                            , encuentra los mejores tragos y cocktails a tu
                            medida.
                        </h1>
                        <h2 className="mb-8 text-lg font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
                            Aprende las recetas de cócteles clásicos y modernos,
                            recetas de tragos fáciles de hacer en casa y también
                            consejos para prepararlos correctamente.
                        </h2>
                        <div className="py-8 ">
                            <Link
                                href="/blog"
                                className="bg-primary p-4 hover:shadow-md hover:shadow-purple-700 px-8 rounded-full text-lg text-gray-200 font-medium "
                            >
                                VER POSTS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-black  text-3xl md:text-5xl  mb-12 mt-16 text-center">
                En este blog encontrarás
            </h2>
        </section>
    );
};

import Link from 'next/link';
import Image from 'next/image';
import heroBg from '../../public/bottles-hero.jpg';
import { lazy, Suspense } from 'react';
import Loader from '@/components/UiComps/Loader';

const HomeBlogCards = lazy(() =>
    import('@/components/layoutComps/HomeBlogCards/HomeBlogCards')
);
export default function Home() {
    return (
        <main className="text-gray-500">
            <div className="relative h-[60vh] w-screen">
                <Image
                    src={heroBg}
                    alt="imagen de una estantería llena de botellas"
                    quality={100}
                    fill
                    placeholder="blur"
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    priority
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full backdrop-brightness-50 rounded-lg">
                    <div className="text-white opacity-100 text-center absolute top-1/2 left-0 right-0 -translate-y-1/2    max-w-screen-xl translate-x-1/2">
                        <div className=" -translate-x-[35%]">
                            <h1 className="mb-4 px-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                                <span className="text-grad-main">
                                    ¿Qué trago hacer?
                                </span>
                                , encuentra los mejores tragos y cocktails a tu
                                medida.
                            </h1>
                            <h2 className="mb-8 text-lg font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
                                Aprende las recetas de cócteles clásicos y
                                modernos, recetas de tragos fáciles de hacer en
                                casa y también consejos para prepararlos
                                correctamente.
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
            </div>
            <h2 className="text-black  text-3xl md:text-5xl  mb-12 mt-16 text-center">
                En este blog encontrarás
            </h2>
            <Suspense fallback={<Loader />}>
                <section className="">
                    <div className="pb-4 mx-auto max-w-screen-xl lg:pb-4">
                        <HomeBlogCards />
                        <Suspense fallback={<Loader />}>
                            <h2 className="text-black  text-3xl md:text-5xl  mb-28 mt-36 text-center border-b pb-8">
                                <span className="text-grad-main font-medium">
                                    "¿Qué trago hacer?"
                                </span>
                                es el blog ideal para los amantes de los tragos,
                                puedes ver todo nuestro contenido{' '}
                                <Link
                                    href="/blog"
                                    className="text-primary underline "
                                >
                                    aquí
                                </Link>
                            </h2>

                            <div className="bg-bg-white  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-md   ">
                                <h2 className="text-black  text-3xl md:text-5xl font-extrabold mb-6">
                                    Consejos para Preparar Tragos en Casa
                                </h2>
                                <p className="text-lg font-normal  mb-6 text-gray-500">
                                    Con estos consejos te convertirás en el
                                    experto de la cocteleria en casa.
                                </p>
                                <div>
                                    <ol className="grid md:grid-cols-2 list-decimal list-inside text-gray-500 gap-12">
                                        <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg h-full">
                                            <li className="border  rounded-xl p-4 text-xl bg-bg-white font-medium text-gray-700 h-full">
                                                Mide con Precisión
                                                <p className="text-lg font-normal pt-4 text-gray-500">
                                                    La precisión en las medidas
                                                    es clave para la
                                                    consistencia en tus bebidas.
                                                    Utiliza jiggers o medidores
                                                    para asegurarte de que estás
                                                    agregando la cantidad
                                                    correcta de ingredientes, lo
                                                    que garantiza que cada trago
                                                    sea perfecto.
                                                </p>
                                            </li>
                                        </div>
                                        <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg">
                                            <li className="border rounded-xl p-4 text-xl bg-bg-white  font-medium text-gray-700 h-full">
                                                Hielo, hielo y más hielo
                                                <p className="text-lg font-normal pt-4 text-gray-500">
                                                    La base de un buen trago es
                                                    una buena cantidad de hielo
                                                    para refrescar y diluir
                                                    correctamente, que nunca te
                                                    falte!
                                                </p>
                                            </li>
                                        </div>
                                        <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg">
                                            <li className="border rounded-xl  p-4 text-xl  bg-bg-white font-medium text-gray-700 h-full">
                                                Usa los utensilios básicos
                                                <p className="text-lg font-normal pt-4 text-gray-500">
                                                    Coctelera, colador uruga,
                                                    jigger, y bar spoon. Con
                                                    estos básicos podrás
                                                    preparar casi cualquier
                                                    trago.
                                                </p>
                                            </li>
                                        </div>
                                        <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg">
                                            <li className="border  rounded-xl p-4 text-lg  bg-bg-white font-medium text-gray-700 h-full">
                                                Aprende las Técnicas Básicas de
                                                Mezcla
                                                <p className="text-lg font-normal pt-4 text-gray-500">
                                                    Dominar técnicas como batir,
                                                    refrescar y macerar frutas
                                                    te ayudará a lograr la
                                                    textura y el equilibrio
                                                    adecuados en tus tragos.
                                                    Investiga y practica estas
                                                    habilidades para lograr
                                                    tragos difíciles.
                                                </p>
                                            </li>
                                        </div>
                                    </ol>
                                </div>
                            </div>
                        </Suspense>
                    </div>
                </section>
            </Suspense>
        </main>
    );
}

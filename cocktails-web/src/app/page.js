import Image from 'next/image';
import Link from 'next/link';
import RecommendedCards from '@/components/layoutComps/RecommendedCards/RecommendedCardsContainer';
import HomeBlogCards from '@/components/layoutComps/HomeBlogCards/HomeBlogCards';
export default function Home() {
    return (
        <main className="text-gray-500">
            {/* hero section */}
            <section className="bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dzyllqqxi/image/upload/v1692819606/pexels-chris-f-1283219_z11q9e.jpg')] bg-cover bg-gray-700 bg-blend-multiply w-screen h-[60vh] flex items-center justify-center">
                <div className="max-w-screen-xl text-center ">
                    <h1 className="mb-4 px-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        <span className="text-grad-main">
                            ¿Qué trago hacer?
                        </span>
                        , encuentra los mejores tragos y cocktails a tu medida.
                    </h1>
                    <h2 className="mb-8 text-lg font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
                        Aprende las recetas de cócteles clásicos y
                        modernos, recetas de tragos fáciles de hacer en casa y
                        también consejos para prepararlos correctamente.
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
            </section>
            {/* cards section */}
            <h2 className="text-black  text-3xl md:text-5xl  mb-12 mt-16 text-center">
                En este blog encontrarás
            </h2>
            <section className="">
                <div className="pb-4 mx-auto max-w-screen-xl lg:pb-4">
                    <HomeBlogCards />

                    <h2 className="text-black  text-3xl md:text-5xl  mb-28 mt-36 text-center border-b pb-8">
                        <span className="text-grad-main font-medium">
                            "¿Qué trago hacer?"
                        </span>
                        es el blog ideal para los amantes de los tragos, puedes
                        ver todo nuestro contenido{' '}
                        <Link href="/blog" className="text-primary underline ">
                            aquí
                        </Link>
                    </h2>

                    <div className="bg-bg-white  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-md   ">
                        <h2 className="text-black  text-3xl md:text-5xl font-extrabold mb-6">
                            Consejos para Preparar Tragos en Casa
                        </h2>
                        <p className="text-lg font-normal  mb-6 text-gray-500">
                            Con estos consejos te convertirás en el experto de
                            la cocteleria en casa.
                        </p>
                        <div>
                            <ol className="grid md:grid-cols-2 list-decimal list-inside text-gray-500 gap-12">
                                <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg">
                                    <li className="border  rounded-xl p-4 text-xl bg-bg-white font-medium text-gray-700">
                                        Practica medidas precisas
                                        <p className="text-lg font-normal pt-4 text-gray-500">
                                            Un ingrediente más o menos puede
                                            arruinar tu preparación, ¡así que
                                            mide con precisión los ingredientes!
                                        </p>
                                    </li>
                                </div>
                                <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg">
                                    <li className="border rounded-xl p-4 text-xl bg-bg-white  font-medium text-gray-700">
                                        Hielo, hielo y más hielo
                                        <p className="text-lg font-normal pt-4 text-gray-500">
                                            La base de un buen trago es una
                                            buena cantidad de hielo para
                                            refrescar y diluir correctamente,
                                            que nunca te falte!
                                        </p>
                                    </li>
                                </div>
                                <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg">
                                    <li className="border rounded-xl  p-4 text-xl  bg-bg-white font-medium text-gray-700">
                                        Usa los utensilios básicos
                                        <p className="text-lg font-normal pt-4 text-gray-500">
                                            Batidor, coctelera, colador, jigger,
                                            copa. Con estos básicos podrás
                                            preparar casi cualquier trago.
                                        </p>
                                    </li>
                                </div>
                                <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg">
                                    <li className="border  rounded-xl p-4 text-lg  bg-bg-white font-medium text-gray-700">
                                        Prueba diferentes tragos
                                        <p className="text-lg font-normal pt-4 text-gray-500">
                                            Prueba con diferentes bebidas,
                                            combinaciones y sabores. Sé creativo
                                            y combina diferentes elementos.
                                        </p>
                                    </li>
                                </div>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

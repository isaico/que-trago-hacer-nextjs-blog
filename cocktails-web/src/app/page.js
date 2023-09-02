import Image from 'next/image';
import Link from 'next/link';
import RecommendedCards from '@/components/layoutComps/RecommendedCards/RecommendedCardsContainer';
import HomeBlogCards from '@/components/layoutComps/HomeBlogCards/HomeBlogCards';
export default function Home() {
    return (
        <main className="text-gray-500">
            {/* hero section */}
            <section className="bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dzyllqqxi/image/upload/v1692819606/pexels-chris-f-1283219_z11q9e.jpg')] bg-cover bg-gray-700 bg-blend-multiply rounded-lg drop-shadow-lg my-8 ">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 px-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        ¿Qué trago hacer?, encuentra los mejores tragos y
                        cocktails a tu medida.
                    </h1>
                    <h2 className="mb-8 text-lg font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
                        Aquí encontrarás recetas de cócteles clásicos y
                        modernos, recetas de tragos faciles de hacer en casa y
                        tambien consejos para prepararlos correctamente.
                    </h2>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link href="/blog" className="group ">
                            <p className="bg-grad-main p-4  px-8 rounded-full text-lg text-gray-200 font-medium ease-in duration-200  group-hover:text-gray-900 group-hover:scale-105">
                                Ver publicaciones
                            </p>
                        </Link>
                        {/* <button className="bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center rounded-full text-md text-white px-4 py-2 border-2  hover:from-transparent hover:to-transparent hover:border border-gray-200">
                            <span>Usar buscador </span>
                            <svg
                                className="w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                        <a
                            href="#"
                            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-full border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                        >
                            Ver publicaciones
                        </a> */}
                    </div>
                </div>
            </section>
            {/* cards section */}
            <h2 className="text-black  text-3xl md:text-5xl  mb-12 mt-16 text-center">
                En nuestro blog encontrarás
            </h2>
            <section className="">
                <div className="pb-4 mx-auto max-w-screen-xl lg:pb-4">
                    <HomeBlogCards />

                    <h2 className="text-black  text-3xl md:text-5xl  mb-24 mt-16 text-center border-b pb-8">
                        <span className="text-grad-main font-medium">
                            "¿Qué trago hacer?"
                        </span>
                        es el blog ideal para los amantes de los tragos, puedes
                        ver todo nuestro contenido{' '}
                        <Link href="/blog" className="text-primary underline ">
                            aqui
                        </Link>
                    </h2>

                    <div className="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-md   ">
                        <h2 className="text-black  text-3xl md:text-5xl font-extrabold mb-6">
                            Consejos para Preparar Tragos en Casa
                        </h2>
                        <p className="text-lg font-normal text-gray-500  mb-4">
                            Con estos consejos te convertirás en el experto de
                            la coctelería en casa.
                        </p>
                        <div>
                            <ol className="grid md:grid-cols-2 list-decimal list-inside text-gray-500 gap-6">
                                <div className="my-6 p-1 bg-grad-3 rounded-xl shadow-lg">
                                    <li className="border border-gray-200 rounded-lg p-4 text-xl bg-gray-50 font-medium text-gray-700">
                                        Practica medidas precisas
                                        <p className="text-lg font-normal pt-4">
                                            Un ingrediente más o menos puede
                                            arruinar tu preparación, ¡así que
                                            mide con precisión los ingredientes!
                                        </p>
                                    </li>
                                </div>
                                <div className="my-6 p-1 bg-grad-3 rounded-xl shadow-lg">
                                    <li className="border botder-gray-200 rounded-lg p-4 text-xl bg-gray-50  font-medium text-gray-700">
                                        Hielo, hielo y más hielo
                                        <p className="text-lg font-normal pt-4 ">
                                            Un ingrediente más o menos puede
                                            arruinar tu preparación, ¡así que
                                            mide con precisión los ingredientes!
                                        </p>
                                    </li>
                                </div>
                                <div className="my-6 p-1 bg-grad-3 rounded-xl shadow-lg">
                                    <li className="border botder-gray-200 rounded-lg  p-4 text-xl  bg-gray-50 font-medium text-gray-700">
                                        Usa los utensilios básicos
                                        <p className="text-lg font-normal pt-4">
                                            Batidor, coctelera, colador, jigger,
                                            copa. Con estos básicos podrás
                                            preparar casi cualquier trago.
                                        </p>
                                    </li>
                                </div>
                                <div className="my-6 p-1 bg-grad-3 rounded-xl shadow-lg">
                                    <li className="border border-gray-200 rounded-lg p-4 text-lg  bg-gray-50 font-medium text-gray-700">
                                        Prueba diferentes tragos
                                        <p className="text-lg font-normal pt-4">
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

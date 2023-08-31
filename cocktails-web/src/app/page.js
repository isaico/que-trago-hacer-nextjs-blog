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
                        Este es un blog dedicado a los amantes de los tragos.
                        Aquí encontrarás recetas de cócteles clásicos y
                        modernos, recetas de tragos faciles de hacer en casa y
                        tambien consejos para prepararlos correctamente.
                    </h2>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <button className="bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center rounded-full text-md text-white px-4 py-2 border-2  hover:from-transparent hover:to-transparent hover:border border-gray-200">
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
                        </a>
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

                    <h2 className="text-black  text-3xl md:text-5xl  mb-12 mt-16 text-center border-b pb-8">
                        <span className="text-grad-main font-medium">
                            "¿Qué trago hacer?"
                        </span>
                        es el blog ideal para los amantes de los tragos, puedes
                        ver todo nuestro contenido{' '}
                        <Link href="/blog" className="text-primary underline ">
                            aqui
                        </Link>
                    </h2>
                    {/* <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gray-50  border border-gray-200  rounded-lg p-8 md:p-12 shadow-lg  ">
                            <Link
                                href="/blog"
                                className="bg-pink-100 text-secondary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2 "
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    className="w-2.5 h-2.5 mr-1.5"
                                >
                                    <path d="M14 4.5V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h5.5L14 4.5zm-3 0A1.5 1.5 0 019.5 3V1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h-2z" />
                                    <path d="M4 6.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7zm0-3a.5.5 0 01.5-.5H7a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5z" />
                                </svg>
                                Posts
                            </Link>
                            <h2 className="text-gray-900 text-3xl font-medium mb-6">
                                Historia de los Tragos
                            </h2>
                            <p className="text-lg font-normal text-gray-500  mb-4">
                                Los tragos tienen una larga historia que se
                                remonta a la antigua Grecia y Roma. Descubre
                                cómo evolucionaron los cócteles desde entonces.
                            </p>
                            <Link
                                href="#"
                                className="text-primary  hover:underline font-medium text-lg inline-flex items-center"
                            >
                                Ver articulo
                                <svg
                                    className="w-3.5 h-3.5 ml-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-gray-50 border border-gray-200  rounded-lg p-8 md:p-12 shadow-md ">
                            <Link
                                href="/blog"
                                className="bg-pink-100 text-secondary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2 "
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    className="w-2.5 h-2.5 mr-1.5"
                                >
                                    <path d="M14 4.5V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h5.5L14 4.5zm-3 0A1.5 1.5 0 019.5 3V1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h-2z" />
                                    <path d="M4 6.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7zm0-3a.5.5 0 01.5-.5H7a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5z" />
                                </svg>
                                Posts
                            </Link>
                            <h2 className="text-gray-900  text-3xl font-medium mb-6">
                                Recetas de Tragos Clásicos
                            </h2>
                            <p className="text-lg font-normal text-gray-500  mb-4">
                                Si eres un fanático de los tragos clásicos,
                                aprende a preparar estos cócteles que nunca
                                pasarán de moda.
                            </p>
                            <Link
                                href="#"
                                className="text-primary  hover:underline font-medium text-lg inline-flex items-center"
                            >
                                Ver articulo
                                <svg
                                    className="w-3.5 h-3.5 ml-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div> */}
                    <h2 className="text-black  text-3xl md:text-5xl font-extrabold mb-12 mt-16 text-center">
                        Articulos recomendados
                    </h2>
                    {/* <RecommendedCards field={[""]}></RecommendedCards> */}
                    <div className="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-md  ">
                        <h2 className="text-black  text-3xl md:text-5xl font-extrabold mb-6">
                            Consejos para Preparar Tragos en Casa
                        </h2>
                        <p className="text-lg font-normal text-gray-500  mb-4">
                            Con estos consejos te convertirás en el experto de
                            la coctelería en casa.
                        </p>
                        <div>
                            <ol className="grid md:grid-cols-2 list-decimal list-inside text-gray-600 gap-6">
                                <li className="border border-gray-200 rounded-lg p-4 text-xl bg-grad-main font-medium text-gray-100">
                                    Practica medidas precisas
                                    <p className="text-lg font-normal pt-4 text-gray-200">
                                        Un ingrediente más o menos puede
                                        arruinar tu preparación, ¡así que mide
                                        con precisión los ingredientes!
                                    </p>
                                </li>
                                <li className="border botder-gray-200 rounded-xl p-4 text-xl  bg-grad-main font-medium text-gray-100">
                                    Hielo, hielo y más hielo
                                    <p className="text-lg font-normal pt-4">
                                        Un ingrediente más o menos puede
                                        arruinar tu preparación, ¡así que mide
                                        con precisión los ingredientes!
                                    </p>
                                </li>
                                <li className="border botder-gray-200 rounded-xl p-4 text-xl  bg-grad-main font-medium text-gray-100">
                                    Usa los utensilios básicos
                                    <p className="text-lg font-normal pt-4">
                                        Batidor, coctelera, colador, jigger,
                                        copa. Con estos básicos podrás preparar
                                        casi cualquier trago.
                                    </p>
                                </li>
                                <li className="border border-gray-200 rounded-xl p-4 text-xl  bg-grad-main font-medium text-gray-100">
                                    Prueba diferentes tragos
                                    <p className="text-lg font-normal pt-4">
                                        Prueba con diferentes bebidas,
                                        combinaciones y sabores. Sé creativo y
                                        combina diferentes elementos.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        //       Get started by editing&nbsp;
        //       <code className="font-mono font-bold">src/app/page.js</code>
        //     </p>
        //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        //       <a
        //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         By{' '}
        //         <Image
        //           src="/vercel.svg"
        //           alt="Vercel Logo"
        //           className="dark:invert"
        //           width={100}
        //           height={24}
        //           priority
        //         />
        //       </a>
        //     </div>
        //   </div>

        //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        //     <Image
        //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        //       src="/next.svg"
        //       alt="Next.js Logo"
        //       width={180}
        //       height={37}
        //       priority
        //     />
        //   </div>

        //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        //     <a
        //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Docs{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Find in-depth information about Next.js features and API.
        //       </p>
        //     </a>

        //     <a
        //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Learn{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Learn about Next.js in an interactive course with&nbsp;quizzes!
        //       </p>
        //     </a>

        //     <a
        //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Templates{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Explore the Next.js 13 playground.
        //       </p>
        //     </a>

        //     <a
        //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Deploy{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Instantly deploy your Next.js site to a shareable URL with Vercel.
        //       </p>
        //     </a>
        //   </div>
        // </main>
    );
}

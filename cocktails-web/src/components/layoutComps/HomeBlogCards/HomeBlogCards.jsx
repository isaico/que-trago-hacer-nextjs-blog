import Link from 'next/link';
const HomeBlogCards = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50  border-2 border-primary  rounded-lg p-8 md:p-12 shadow-lg relative ">
                <Link
                    href="/blog"
                    className="bg-pink-100 text-secondary  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2 hover:scale-105"
                    
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
                    <span className="bg-pink-200 text-xs font-medium text-pink-900 text-center p-1 leading-none rounded-full px-2  absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-4 ">
                        Recomendado
                    </span>
                <h2 className="text-gray-900 text-3xl font-medium mb-6">
                    Historia de los Tragos
                </h2>
                <p className="text-lg font-normal text-gray-500  mb-4">
                    Los tragos tienen una larga historia que se remonta a la
                    antigua Grecia y Roma. Descubre cómo evolucionaron los
                    cócteles desde entonces.
                </p>
                <Link
                    href="#"
                    className="text-primary  hover:underline font-medium text-lg inline-flex items-center "
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </Link>
            </div>

            <div className="bg-gray-50 border border-gray-200  rounded-lg p-8 md:p-12 shadow-md ">
                <Link
                    href="/blog"
                    className="bg-pink-100 text-secondary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2 hover:scale-105 "
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
                    Si eres un fanático de los tragos clásicos, aprende a
                    preparar estos cócteles que nunca pasarán de moda.
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
            <div className="bg-gray-50  border border-gray-200  rounded-lg p-8 md:p-12 shadow-lg  ">
                <Link
                    href="/blog"
                    className="bg-pink-100 text-secondary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2 hover:scale-105"
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
                    Los tragos tienen una larga historia que se remonta a la
                    antigua Grecia y Roma. Descubre cómo evolucionaron los
                    cócteles desde entonces.
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
                    className="bg-pink-100 text-secondary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2 hover:scale-105"
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
                    Si eres un fanático de los tragos clásicos, aprende a
                    preparar estos cócteles que nunca pasarán de moda.
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
        </div>
    );
};

export default HomeBlogCards;

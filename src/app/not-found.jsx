'use client';
import { useRouter } from 'next/navigation';
const notFound = () => {
    const router = useRouter();
    return (
        <section className="bg-bg-white ">
            <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-xl text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-grad-main ">
                        404
                    </h1>
                    <div className="flex flex-col items-center">
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl flex ">
                            Ups! no se encontro la pagina!
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                            >
                                <path d="M20 13.09V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4 .46 0 .9 0 1.33-.06A5.94 5.94 0 0113 19v-.05c-.32.05-.65.05-1 .05-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23.65 0 1.27-.04 1.88-.11A5.986 5.986 0 0119 13c.34 0 .67.04 1 .09m-2-.64c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v2.81M12 9C8.13 9 6 7.5 6 7s2.13-2 6-2 6 1.5 6 2-2.13 2-6 2m8.41 10l2.13 2.12-1.42 1.42L19 20.41l-2.12 2.13-1.41-1.42L17.59 19l-2.12-2.12 1.41-1.41L19 17.59l2.12-2.12 1.42 1.41L20.41 19" />
                            </svg>
                        </p>
                        <div className="flex flex-col items-start gap-4 ">
                            
                            <div className="flex items-center justify-center">
                                <p>Puedes volver y seguir navegando</p>
                                <svg
                                    viewBox="0 0 21 21"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    className=" ml-1"
                                >
                                    <g
                                        fill="none"
                                        fillRule="evenodd"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6.499 6.498L3.5 9.5l3 3" />
                                        <path d="M8.5 15.5h5c2 0 3-1 3-3s-1-3-3-3h-10" />
                                    </g>
                                </svg>
                                <button
                                    onClick={() => router.back()}
                                    className="text-lg mx-8 rounded-full ml-2"
                                >
                                    Aquí
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default notFound;

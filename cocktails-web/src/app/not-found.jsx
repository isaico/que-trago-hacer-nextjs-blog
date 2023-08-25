'use client';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const notFound = () => {
    const router = useRouter();

    return (
        <section class="bg-bg-white ">
            <div class="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-xl text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-grad-main ">
                        404
                    </h1>
                    <div className="flex flex-col items-center">
                        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl flex ">
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
                            <div className="flex items-center justify-">
                                <p>
                                    Puedes intentar nuevamente y refescar la
                                    pagina
                                </p>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    className=" ml-1"
                                >
                                    <path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" />
                                </svg>
                                <Button
                                    onClick={() => router.refresh()}
                                    gradientDuoTone="purpleToPink"
                                    outline
                                    pill
                                    className="text-lg   ml-2 group"
                                >
                                    <p className="group-hover:text-white">
                                        Aqui
                                    </p>
                                </Button>
                            </div>
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
                                <Button
                                    onClick={() => router.back()}
                                    gradientDuoTone="purpleToPink"
                                    outline
                                    pill
                                    className="text-lg  ml-2 group"
                                >
                                    <p className="group-hover:text-white">
                                        Aqui
                                    </p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default notFound;

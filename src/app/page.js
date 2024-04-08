import Link from 'next/link';
import Image from 'next/image';
import heroBg from '../../public/bottles-hero.webp';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Hero } from '../components/layoutComps/Hero/Hero';

const Loader = dynamic(() => import('@/components/UiComps/Loader'));
const HomeAdvises = dynamic(() =>
    import('@/components/layoutComps/HomeAdvises/HomeAdvises')
);
const HomeBlogCards = dynamic(() =>
    import('@/components/layoutComps/HomeBlogCards/HomeBlogCards')
);
export default function Home() {
    return (
        <main className="text-gray-500">
            <Hero bgSrc={heroBg} />
            {/* <div className="relative h-[60vh] w-screen bg-[url('/bottles-hero-webp')]">
                <Image
                    src={heroBg}
                    alt="imagen de una estantería llena de botellas"
                    quality={50}
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
            </h2> */}
            <section className="">
                <div className="pb-4 mx-auto max-w-screen-xl lg:pb-4">
                    <Suspense fallback={<Loader />}>
                        <HomeBlogCards />
                    </Suspense>
                    <HomeAdvises />
                </div>
            </section>
        </main>
    );
}

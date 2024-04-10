import { Suspense } from 'react';
import dynamic from 'next/dynamic';
/* ------------------------------ lazy imports ------------------------------ */
const Hero = dynamic(() => import('@/components/layoutComps/Hero/Hero'));
const Loader = dynamic(() => import('@/components/UiComps/Loader'));
const HomeAdvises = dynamic(() =>
    import('@/components/layoutComps/HomeAdvises/HomeAdvises')
);
const HomeBlogCards = dynamic(() =>
    import('@/components/layoutComps/HomeBlogCards/HomeBlogCards')
);

/* ---------------------------------- head ---------------------------------- */
export const metadata = {
    keywords: ['tragos', 'trago', 'cocteleria', 'cocteles'],
    alternates: {
        canonical: '/',
    },
    twitter: {
        title: '¿Qué trago hacer? - Blog de cocteleria y tragos',
        description:
            'Descubre el mundo de la coctelería con este blog de recetas de cócteles. Desde tragos clásicos hasta modernos todos los secretos de la coctelería revelados',
    },
    openGraph: {
        title: '¿Qué trago hacer? - Blog de cocteleria y tragos',
        description:
            'Descubre el mundo de la coctelería con este blog de recetas de cócteles. Desde tragos clásicos hasta modernos todos los secretos de la coctelería revelados',
    },
};

export default function Home() {
    return (
        <main className="text-gray-500 w-full">
            <Hero />
            <section className="">
                <h2 className="text-black  text-3xl md:text-5xl  mb-12 mt-16 text-center">
                    En este blog encontrarás
                </h2>
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

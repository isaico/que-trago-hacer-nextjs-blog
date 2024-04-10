import DefaultLayout from './DefaultLayout';
import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('../components/layoutComps/NavBar/NavBar'));
const Footer = dynamic(() => import('@/components/layoutComps/Footer/Footer'));
const Banner = dynamic(() => import('@/components/UiComps/Banner'));
import { jost } from '@/utils/fonts';
import './globals.css';

export const metadata = {
    title: {
        default: '¿Qué trago hacer? - Blog de cocteleria y tragos',
    },
    description:
        'Descubre el mundo de la coctelería con este blog de recetas de cócteles. Desde tragos clásicos hasta modernos todos los secretos de la coctelería revelados',
    twitter: {
        card: 'summary_large_image',
    },
    referrer: 'origin-when-cross-origin',
    metadataBase: new URL(process.env.BASE_URL),
    
    creator: 'Isaias García',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={`${jost.className} `}>
                <NavBar />

                <DefaultLayout>{children}</DefaultLayout>

                <Banner />

                <Footer />
            </body>
        </html>
    );
}

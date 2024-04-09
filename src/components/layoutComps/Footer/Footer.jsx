import SocialIcons from '@/components/UiComps/SocialIcons';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/app/assets/qth-logo.webp';
export default function Footer() {
    const dateToString = new Date().toLocaleString('es-AR', {
        timeZone: 'UTC',
        year: 'numeric',
    });
    return (
        <footer className="bg-white w-full border-t">
            <div className=" w-full p-4 py-6 lg:py-8">
                

               
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-sm flex-col md:flex-row text-gray-500 sm:text-center dark:text-gray-400 flex gap-2 items-center">
                       
                        <p>
                            ©Copyright {dateToString}. ¿Qué trago hacer?, Todos
                            los derechos reservados. | Diseño y desarrollo por
                        </p>
                        <a
                            href="http://github.com/isaico"
                            target="_blank"
                            className="flex items-center"
                        >
                            <Image
                                src="https://res.cloudinary.com/dzyllqqxi/image/upload/v1692975511/avataaars_hrw2td.png"
                                width={20}
                                height={20}
                                alt="avatar animado de un hombre con buzo gris con lentes y sonriendo  mirando la cámara, con fondo celeste"
                                className="rounded-full pb-2 h-auto  w-auto"
                            />
                            <p className="underline decoration-blue-500 ">
                                Isaias Garcia - Full stack dev
                            </p>
                        </a>
                    </div>
                    <SocialIcons inFooter={true} />
                 
                </div>
            </div>
        </footer>
    );
}

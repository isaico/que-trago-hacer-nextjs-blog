import dynamic from 'next/dynamic';
import Image from 'next/image';
const ContactForm = dynamic(() =>
    import('@/components/layoutComps/ContactForm/ContactForm')
);
import bg from '.././assets/hombres-brindando.jpg';
/* ------------------------------ head metadata ----------------------------- */
export const metadata = {
    title: {
        default: '¿Qué trago hacer? - Blog de cocteleria y tragos - Contacto',
    },
    description:
        '¿Qué trago hacer? - Contactame para cualquier tipo de colaboración o promoción, deseas publicar tus productos o escribir en el blog? escríbeme...',
    robots: {
        index: false,
        follow: true,
        googleBot: { index: false, follow: true },
    },
};

const contact = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1  md:grid-cols-2 w-full ">
                <div className="flex flex-col justify-center items-center text-center md:px-20 justify-self-center relative  my-12">
                    <div className="flex flex-col text-center items-center justify-center px-12 ">
                        <h1 className="text-3xl md:text-6xl text-center p-4 mb-2  font-semibold text-grad-2 flex items-center gap-2">
                            Hablemos!
                            <span className="text-white text-4xl ">🥂🎉</span>
                        </h1>
                        <p className="text-md font-medium text-gray-600 mb-6 ">
                            Tienes alguna duda, pregunta o propuesta, no pierdas
                            el tiempo y contáctame con un solo clic!
                        </p>
                    </div>
                    <ContactForm />
                </div>

                <Image
                    src={bg}
                    alt="ilustración de dos personas charlando en una barra tomando algo"
                    // quality={50}

                    placeholder="blur"
                    sizes="100vw"
                    className="object-cover w-full h-full hidden md:block"
                    priority
                ></Image>

                {/* <div className="bg-[url(https://res.cloudinary.com/dzyllqqxi/image/upload/v1694714639/mejores-amigos-brindando-juntos-ilustrados_23-2148394377_cbsd5t.jpg)] w-full bg-cover bg-center h-full"></div> */}
            </div>
        </div>
    );
};

export default contact;

import Link from 'next/link';
const HomeAdvises = () => {
    return (
        <>
            <h2 className="text-black  text-3xl md:text-5xl  mb-28 mt-36 text-center border-b pb-8">
                <span className="text-grad-main font-medium">
                    "¿Qué trago hacer?"
                </span>
                es el blog ideal para los amantes de los tragos, puedes ver todo
                nuestro contenido{' '}
                <Link href="/blog" className="text-primary underline ">
                    aquí
                </Link>
            </h2>

            <div className="bg-bg-white  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-md   ">
                <h2 className="text-black  text-3xl md:text-5xl font-extrabold mb-6">
                    Consejos para Preparar Tragos en Casa
                </h2>
                <p className="text-lg font-normal  mb-6 text-gray-500">
                    Con estos consejos te convertirás en el experto de la
                    cocteleria en casa.
                </p>
                <div>
                    <ol className="grid md:grid-cols-2 list-decimal list-inside text-gray-500 gap-12">
                        <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg h-full">
                            <li className="border  rounded-xl p-4 text-xl bg-bg-white font-medium text-gray-700 h-full">
                                Mide con Precisión
                                <p className="text-lg font-normal pt-4 text-gray-500">
                                    La precisión en las medidas es clave para la
                                    consistencia en tus bebidas. Utiliza jiggers
                                    o medidores para asegurarte de que estás
                                    agregando la cantidad correcta de
                                    ingredientes, lo que garantiza que cada
                                    trago sea perfecto.
                                </p>
                            </li>
                        </div>
                        <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg">
                            <li className="border rounded-xl p-4 text-xl bg-bg-white  font-medium text-gray-700 h-full">
                                Hielo, hielo y más hielo
                                <p className="text-lg font-normal pt-4 text-gray-500">
                                    La base de un buen trago es una buena
                                    cantidad de hielo para refrescar y diluir
                                    correctamente, que nunca te falte!
                                </p>
                            </li>
                        </div>
                        <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg">
                            <li className="border rounded-xl  p-4 text-xl  bg-bg-white font-medium text-gray-700 h-full">
                                Usa los utensilios básicos
                                <p className="text-lg font-normal pt-4 text-gray-500">
                                    Coctelera, colador uruga, jigger, y bar
                                    spoon. Con estos básicos podrás preparar
                                    casi cualquier trago.
                                </p>
                            </li>
                        </div>
                        <div className=" p-0.5 bg-grad-3 rounded-xl shadow-lg">
                            <li className="border  rounded-xl p-4 text-lg  bg-bg-white font-medium text-gray-700 h-full">
                                Aprende las Técnicas Básicas de Mezcla
                                <p className="text-lg font-normal pt-4 text-gray-500">
                                    Dominar técnicas como batir, refrescar y
                                    macerar frutas te ayudará a lograr la
                                    textura y el equilibrio adecuados en tus
                                    tragos. Investiga y practica estas
                                    habilidades para lograr tragos difíciles.
                                </p>
                            </li>
                        </div>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default HomeAdvises;

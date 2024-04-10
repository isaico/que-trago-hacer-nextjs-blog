import Link from 'next/link';
const HomeAdvises = () => {
    return (
        <>
            <h3
                className="text-black  text-3xl md:text-5xl  mb-28 mt-36 text-center border-b pb-8"
                id="advises"
            >
                <span className="text-grad-main font-medium">
                    "¿Qué trago hacer?"
                </span>{' '}
                es el blog ideal para los amantes de los cocteles, sorprende a
                todos en tu siguiente reunion!,{' '}
                <Link
                    href="/blog/posts/Tragos-y-cocteles-la-guia-definitiva"
                    className="text-primary underline "
                >
                    aprende sobre cocteleria
                </Link>{' '}
                con nuestra guía.
            </h3>

            <div className="bg-bg-white  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-md   ">
                <h4 className="text-black  text-3xl md:text-5xl font-extrabold mb-6">
                    Consejos para Preparar Cocteles en Casa
                </h4>
                <p className="text-lg font-normal  mb-6 text-gray-500">
                    Con estos consejos te convertirás en el experto de la
                    cocteleria en casa.
                </p>
                <div>
                    <ol className="grid md:grid-cols-2 list-decimal list-inside text-gray-500 gap-12">
                        <li className="border rounded-xl p-4 text-xl bg-bg-white font-medium text-gray-100 h-full bg-grad-3 ">
                            Mide con Precisión
                            <div className="px-2 border bg-bg-white rounded-xl shadow-lg h-full mt-2">
                                <p className="text-lg font-normal pt-4 text-gray-500">
                                    La precisión en las medidas es clave para la
                                    consistencia en tus bebidas. Utiliza jiggers
                                    o medidores para asegurarte de que estás
                                    agregando la cantidad correcta de
                                    ingredientes, lo que garantiza que cada
                                    trago sea perfecto.
                                </p>
                            </div>
                        </li>
                        <li className="border rounded-xl p-4 text-xl bg-bg-white font-medium text-gray-100 h-full bg-grad-3">
                            Hielo, hielo y ...hielo
                            <div className=" px-2 border bg-bg-white rounded-xl shadow-lg h-full mt-2">
                                <p className="text-lg font-normal pt-4 text-gray-500">
                                    La base de un buen trago es una buena
                                    cantidad de hielo para refrescar y diluir
                                    correctamente, servir, y mantener frías tus
                                    bebidas, que nunca te falte!!
                                </p>
                            </div>
                        </li>
                        <li className="border rounded-xl p-4 text-xl bg-bg-white font-medium text-gray-100 h-full bg-grad-3">
                            Usa los utensilios básicos
                            <div className="px-2 border bg-bg-white rounded-xl shadow-lg h-full mt-2">
                                <p className="text-lg font-normal pt-4 text-gray-500">
                                    Coctelera, colador uruga, jigger, y bar
                                    spoon. Con estos básicos podrás preparar
                                    casi cualquier trago.
                                </p>
                            </div>
                        </li>
                        <li className="border rounded-xl p-4 text-xl bg-bg-white font-medium text-gray-100 h-full bg-grad-3">
                            Aprende las Técnicas Básicas de Mezcla
                            <div className="px-2 border bg-bg-white rounded-xl shadow-lg h-full mt-2">
                                <p className="text-lg font-normal pt-4 text-gray-500">
                                    Dominar técnicas como batir, refrescar y
                                    macerar frutas te ayudará a lograr la
                                    textura y el equilibrio adecuados en tus
                                    cocteles. Investiga y practica estas
                                    habilidades para lograr cocteles difíciles.
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default HomeAdvises;

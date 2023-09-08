import Image from 'next/image';
import Rating from '@/components/UiComps/Rating';
import { merriweather } from '@/utils/fonts';
import Link from 'next/link';
const CocktailCard = ({ cocktail, index, cocktailLength }) => {
    return (
        <div
            key={cocktail._id}
            className="my-6 p-0.5 bg-grad-3 rounded-xl shadow-lg"
            id={index}
        >
            <div className="bg-bg-white p-6 py-8 rounded-xl flex flex-col">
                <div className="flex  justify-between items-center align-middle pb-12">
                    <h3
                        className={`text-3xl font-normal  text-primary ${merriweather.className}`}
                    >
                        <span className="font-semibold text-gray-900">
                            #{cocktailLength - index}
                        </span>{' '}
                        {cocktail?.name}
                    </h3>
                    <div className="flex">
                        <h4 className="mx-2">Dificultad:</h4>
                        <Rating difficulty={cocktail.difficulty}></Rating>
                    </div>
                </div>
                <div className="">
                    <Image
                        loading="lazy"
                        src={cocktail.image_url}
                        alt={cocktail.alt}
                        width={350}
                        height={350}
                        className="float-left mr-8 mb-8 rounded-md w-auto h-auto"
                    ></Image>
                    {cocktail?.description && (
                        <div>
                            <h4 className="mb-4 font-medium">
                                Descripción del trago:
                            </h4>
                            <p
                                // dangerouslySetInnerHTML={{
                                //     __html: cocktail?.description,
                                // }}
                                className="text-lg"
                            >
                                {cocktail?.description}
                            </p>
                        </div>
                    )}
                    {cocktail?.history && (
                        <div>
                            <h4 className="mb-4 mt-8 font-medium">
                                Su origen e historia:
                            </h4>
                            <p className="text-lg">{cocktail?.history}</p>
                        </div>
                    )}
                </div>
                <div className="my-6">
                    <h4 className="text-2xl font-medium mb-4">
                        Ingredientes:{' '}
                    </h4>
                    <ul className="">
                        {cocktail?.ingredients.map((ing) => (
                            <li className="flex items-center mb-2">
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5 text-primary-light mr-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                {ing}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-6">
                    <h4 className="text-2xl font-medium mb-4">Receta: </h4>
                    <p>{cocktail?.recepy}</p>
                </div>
                {cocktail.tips && cocktail.tips.length > 0 ? (
                    <div className="mb-6">
                        <h4 className="mb-4 font-medium">Tips del bartender</h4>
                        <ul className="list-disc list-inside text-lg">
                            {cocktail.tips.map((tip, i) => (
                                <li key={i}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}
                {cocktail?.optional && (
                    <div className="mb-6">
                        <h4 className="mb-4 font-medium">Opcional</h4>
                        <p className="text-lg">{cocktail?.optional}</p>
                    </div>
                )}
                {cocktail?.links && cocktail.links.length > 0 ? (
                    <div className="mb-6">
                        <h4 className="text-xl font-base mb-4">
                            Conceptos que vas a necesitar:
                        </h4>
                        <ol className="flex flex-wrap ">
                            {cocktail.links.map((link) => (
                                <li className="bg-purple-50 border-2 border-purple-500 text-purple-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded-lg dark:bg-purple-900 dark:text-purple-300 flex items-center hover:cursor-pointer hover:scale-105 ">
                                    {link}
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        className="ml-2 w-6"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                </li>
                            ))}
                        </ol>
                    </div>
                ) : null}

                {/* <button className="w-full border-2 border-gray-900 flex items-center justify-center py-3 mt-4 hover:bg-primary-light hover:shadow-lg hover:translate-y-1 ease-in-out duration-100 text-gray-800 font-medium rounded-lg  bg-bg-white">
                    <Link
                        href={{
                            pathname: `/app/${cocktail.name}`,
                            query: { title: cocktail.name },
                        }}
                    >
                        <p className="flex items-center ">
                            Tips del bartender: {cocktail.name}
                            <svg
                                fill="none"
                                viewBox="0 0 15 15"
                                height="1em"
                                width="1em"
                                className="ml-2"
                            >
                                <path
                                    stroke="currentColor"
                                    d="M5.5 10V8.5m0 0v-5a1 1 0 012 0v4h3.353c.91 0 1.647.737 1.647 1.647V10A4.5 4.5 0 018 14.5h-.5a4 4 0 01-4-4 2 2 0 012-2zm3.5-3h2a2.5 2.5 0 000-5H4a2.5 2.5 0 000 5"
                                />
                            </svg>
                        </p>
                    </Link>
                </button> */}
            </div>
        </div>
    );
};

export default CocktailCard;

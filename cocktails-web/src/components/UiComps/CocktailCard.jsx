import Image from 'next/image';
import Rating from '@/components/UiComps/Rating';
import { merriweather } from '@/utils/fonts';
import Link from 'next/link';
const CocktailCard = ({ cocktail, index, cocktailLength }) => {
    return (
        <div className="my-6 p-0.5 bg-grad-3 rounded-xl shadow-lg" id={index}>
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
                            <h4 className="mb-4 font-medium underline decoration-primary-light underline-offset-2">
                                Descripción del trago:
                            </h4>
                            <p className="whitespace-pre-line indent-3 ">
                                {cocktail?.description}
                            </p>
                        </div>
                    )}
                    {cocktail?.history && (
                        <div>
                            <h4 className="mb-4 mt-8 font-medium underline decoration-primary-light underline-offset-2">
                                Su origen e historia:
                            </h4>
                            <p className=" whitespace-pre-line indent-3">
                                {cocktail?.history}
                            </p>
                        </div>
                    )}
                </div>
                <div className="my-6">
                    <h4 className="font-medium mb-4 underline decoration-primary-light underline-offset-2">
                        Ingredientes:{' '}
                    </h4>
                    <ul>
                        {cocktail?.ingredients.map((ing, i) => (
                            <li
                                className="flex items-center mb-2 italic font-medium"
                                key={i + 100}
                            >
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
                    <h4 className="font-medium mb-4 underline decoration-primary-light underline-offset-2">
                        Receta:{' '}
                    </h4>
                    <p>{cocktail?.recepy}</p>
                </div>
                {cocktail.tips && cocktail.tips.length > 0 ? (
                    <div className="mb-6">
                        <h4 className="mb-4 font-medium underline decoration-primary-light underline-offset-2">
                            Tips del bartender
                        </h4>
                        <ul className="list-disc list-inside ">
                            {cocktail.tips.map((tip, i) => (
                                <li key={i + 1000}>{tip} </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
                {cocktail?.optional && (
                    <div className="mb-6">
                        <h4 className="mb-4 font-medium underline decoration-primary-light underline-offset-2">
                            Opcional
                        </h4>
                        <p className="">{cocktail?.optional}</p>
                    </div>
                )}
                {cocktail?.links && cocktail.links.length > 0 ? (
                    <div className="mb-6">
                        <h4 className=" font-base font-medium mb-4">
                            Conceptos que vas a necesitar:
                        </h4>
                        <ol className="flex flex-wrap ">
                            {cocktail.links.map((link, i) => (
                                <li
                                    className="bg-purple-50 border-2 border-purple-500 text-purple-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-lg dark:bg-purple-900 dark:text-purple-300 flex items-center hover:cursor-pointer hover:scale-105"
                                    key={i + 2000}
                                >
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
            </div>
        </div>
    );
};

export default CocktailCard;

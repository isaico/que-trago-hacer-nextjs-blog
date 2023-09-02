import Image from 'next/image';

const CocktailCard = ({ cocktail, index, cocktailLength }) => {
    return (
        <div
            key={cocktail._id}
            className="my-6 p-0.5 bg-grad-3 rounded-xl shadow-lg"
        >
            <div className="bg-gray-50 p-6 py-8 rounded-xl flex flex-col">
                <h3 className="text-3xl font-medium  pb-8 text-gray-900">
                    <span className="font-medium text-gray-900">
                        #{cocktailLength - index}
                    </span>{' '}
                    {cocktail?.name}
                </h3>
                <div className="container">
                    <Image
                        loading="lazy"
                        src={cocktail.image_url}
                        alt={cocktail.alt}
                        width={250}
                        height={200}
                        className="float-left mr-8 rounded-md w-auto h-auto"
                    ></Image>
                    {cocktail?.description && (
                        <p
                            dangerouslySetInnerHTML={{
                                __html: cocktail?.description,
                            }}
                        >
                            {}
                        </p>
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
                <div>
                    <h4 className="text-2xl font-medium mb-4">Receta: </h4>
                    <p>{cocktail?.recepy}</p>
                </div>
                {cocktail?.tips && (
                    <div>
                        <h4 className="text-2xl font-medium mb-4">
                            Tip del bartender:{' '}
                        </h4>
                        <p>{cocktail?.tip}</p>
                    </div>
                )}
                {cocktail?.optional && (
                    <div>
                        <h4 className="text-2xl font-medium mb-4">
                            Opcional:{' '}
                        </h4>
                        <p>{cocktail?.optional}</p>
                    </div>
                )}

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

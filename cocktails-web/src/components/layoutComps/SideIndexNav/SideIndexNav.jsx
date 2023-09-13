'use client';
import Link from 'next/link';
const SideIndexNav = ({ cocktails, articles, ids }) => {
    let cocktailsNames = [];
    let articlesNames = [];
    for (let index = 0; index < cocktails.length; index++) {
        cocktailsNames.push(cocktails[index].name);
    }
    for (let index = 0; index < articles.length; index++) {
        articlesNames.push(articles[index]);
    }

    const handleScroll = (e) => {
        e.preventDefault();
        //obtengo el href del link y lo limpio para obtener e id del elemento y sus coordenadas
        const ref = e.currentTarget.href;
        const targetId = ref.replace(/.*\#/, '');
        const toString = targetId.toString();
        const elem = document.getElementById(`${toString}`);
        const coords = elem?.getBoundingClientRect().top;
        //-61 es por height de el navbar
        window.scrollBy({
            left: 0,
            top: coords - 61,
            behavior: 'smooth',
        });
    };

    return (
        <div className="flex justify-center items-center sticky top-[61px]  mx-12 ">
            <div className="grid justify-center w-full text-start break-all ">
                <h3 className="text-xl mb-4 font-medium">Tabla de contenido</h3>
                <div>
                    <ul className="list-disc text-base  ">
                        {ids?.map((item, i) => (
                            <li
                                key={i}
                                className=" hover:bg-gray-100 hover:text-primary rounded-lg py-0.5 "
                            >
                                <Link
                                    href={`#${item.id}`}
                                    onClick={handleScroll}
                                    replace
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        {cocktailsNames && cocktailsNames.length > 0 ? (
                            <li className="py-0.5 mt-2 border-t-2 border-primary-light">
                                <ol className="list-decimal list-inside">
                                    <h5 className="font-medium">
                                        Lista de tragos:
                                    </h5>
                                    {cocktailsNames.map((item, i) => (
                                        <li
                                            key={item}
                                            className="hover:bg-gray-100 rounded-lg  hover:text-primary "
                                        >
                                            <Link
                                                href={`#${i}`}
                                                onClick={handleScroll}
                                                replace
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ol>
                            </li>
                        ) : null}

                        {articlesNames && articlesNames.length > 0 ? (
                            <li className="py-0.5">
                                <ul className="list-[circle] list-inside ">
                                    <h5 className="font-medium">Lista de artículos:</h5>
                                    {/* <h5>Artículos: </h5> */}
                                    {articlesNames.map((article, i) => (
                                        <li
                                            key={i}
                                            className="hover:bg-gray-100  hover:text-primary rounded-lg"
                                        >
                                            <Link
                                                href={`#${article._id}`}
                                                onClick={handleScroll}
                                                replace
                                            >
                                                {article.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : null}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideIndexNav;

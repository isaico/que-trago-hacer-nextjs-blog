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
    // console.log(cocktailsNames)
    // console.log(ids);
    const handleScroll = (e) => {
        e.preventDefault();
        //obtengo el href del link y lo limpio para obtener e id del elemento y sus coordenadas
        const ref = e.currentTarget.href;
        const targetId = ref.replace(/.*\#/, '');
        const toString = targetId.toString()
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
        <div className="flex justify-center items-center sticky top-[61px]  ">
            <div className="justify-center w-full text-center h-[500px] bg-red-400">
                <h3 className="">Tabla de contenido</h3>
                <div>
                    {/* {ids.map((item, i) => (
                        <li key={i}>
                            <Link
                                href={`#${item.id}`}
                                // onClick={handleScroll}
                                replace
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))} */}
                    {/* <li>
                        <Link href={'#'} replace>
                            ir al titulo
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'#blog-desc'}
                            replace
                            onClick={handleScroll}
                        >
                            ir a la desc
                        </Link>
                    </li> */}
                    {articlesNames && articlesNames.length > 0 ? (
                        <ul>
                            <h5>lista de artículos</h5>
                            {articlesNames.map((article, i) => (
                                <li key={i}>
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
                    ) : null}
                    {cocktailsNames && cocktailsNames.length > 0 ? (
                        <ol>
                            <h5>Lista de tragos:</h5>
                            {cocktailsNames.map((item, i) => (
                                <li key={item}>
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
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default SideIndexNav;

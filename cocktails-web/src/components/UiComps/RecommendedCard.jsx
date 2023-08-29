import Link from "next/link"
import Image from "next/image";

const RecommendedCard = ({article}) => {
    return (
        <>
       
            <Link
                href={{
                    pathname: article.path,
                    query: { id: article.title.trim() },
                }}
                className="hover:opacity-80  "
            >
                <div className="relative w-[350px]">
                    <Image
                        className="rounded-lg  w-full h-full bg-bg-dark"
                        height={350}
                        width={350}
                        src={article.image_url}
                        alt=""
                    />
                    <div className="absolute top-0  w-full h-full backdrop-brightness-50 rounded-lg">
                        <div className="text-white opacity-100 text-center absolute top-1/2 left-0 right-0 -translate-y-1/2">
                            <h4 className="text-xl ">{article.title}</h4>
                            <p>{article.description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default RecommendedCard;

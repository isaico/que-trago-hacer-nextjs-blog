import Image from 'next/image';
import PostContainer from '../CocktailsContainer/CocktailsContainer';
import BackButton from '@/components/UiComps/BackButton';
import DefaultBreadcrumb from '@/components/UiComps/BreadCrumb';
import RecommendedCards from '../RecommendedCards/RecommendedCardsContainer';
import PostedBy from '@/components/UiComps/PostedBy';
import fetchCocktails from '@/utils/fetchCocktails';
import ArticleLayout from './ArticleLayout';
import { merriweather } from '@/utils/fonts';
import ArticleTitle from '@/components/UiComps/ArticleTitle';
// import { Merriweather } from 'next/font/google';
// const merriweather = Merriweather({
//     subsets: ['latin'],
//     weight: ['400', '700'],
//     style: ['normal'],
// });

const BlogLayout = async ({ blog }) => {
    let cocktails = [];
    //chequeo que el blog pida un array de cockteles
    if (blog.getCocktails) {
        //dentro de la funcion hay un switch que devolvera un array en cada caso dependiendo de la categoria
        cocktails = await fetchCocktails({
            blogCategory: blog.blogCategory,
            categoryId: blog.categoryId,
            cocktailsNames: blog.cocktailsNames,
        });
    }

    return (
        <article className="mt-12 flex flex-col  justify-end relative w-full">
            <div className="md:grid md:grid-cols-8 md:grid-flow-col md:gap-6 w-full flex flex-col">
                <div className=" flex flex-col justify-center justify-self-center mx-auto col-span-4 col-start-3">
                    <div className="absolute left-0 top-0">
                        <BackButton></BackButton>
                    </div>
                    <DefaultBreadcrumb
                        category={blog.blogCategory}
                        title={blog.title}
                    />
                    <div className="p-2 flex justify-between items-center ">
                        <PostedBy time={blog.createdAt}></PostedBy>

                        <span className="font-normal text-sm ">
                            Categoría:
                            <span className="bg-pink-50 text-primary text-xs mr-2 px-2.5 ml-0.5 py-0.5 rounded-full">
                                {blog.blogCategory}
                            </span>
                        </span>
                    </div>
                    <div className="text-xl leading-8 font-normal text-gray-700">
                        <h1
                            className={`lg:text-6xl text-2xl py-8 font-semibold text-grad-main text-center ${merriweather.className}`}
                        >
                            {blog?.title}
                        </h1>
                        <p className="pb-8 text-center leading-9">
                            {blog?.brief_desc}
                        </p>

                        <Image
                            src={blog?.image_url}
                            height={800}
                            width={800}
                            alt={blog?.alt}
                            className=" w-auto h-auto"
                        />
                        <div className="pt-16 pb-12">
                            <ArticleTitle>{blog?.title_desc}</ArticleTitle>

                            {blog?.description && (
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: blog?.description,
                                    }}
                                    className="leading-9"
                                ></p>
                            )}
                        </div>

                        {cocktails && cocktails.length > 0 ? (
                            <div>
                                <ArticleTitle>{blog?.title_posts}</ArticleTitle>

                                <PostContainer
                                    cocktails={cocktails}
                                ></PostContainer>
                            </div>
                        ) : null}
                        {blog.articles && blog.articles > 0 ? (
                            <ArticleLayout
                                articles={blog?.articles}
                            ></ArticleLayout>
                        ) : null}
                        {blog?.extra && (
                            <div className="py-8">
                                <h3 className="font-medium pb-2  text-gray-900">
                                    Extra
                                </h3>
                                <p
                                    className=""
                                    dangerouslySetInnerHTML={{
                                        __html: blog.extra,
                                    }}
                                ></p>
                            </div>
                        )}
                        {blog?.tips.length > 0 ? (
                            <div>
                                <h3 className="font-medium pb-2 text-gray-900">
                                    recomendaciones
                                </h3>
                                <ul className="list-disc list-inside">
                                    {blog?.tips.map((tip) => (
                                        <li>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                    {/* <div>articulo</div> */}
                </div>
                {/* <aside className="border-l-2 col-span-2  ">
                    <div className="h-[300px] bg-blue-400">algo</div>
                    <div className="flex justify-center items-center sticky top-16  ">
                        <div className="justify-center w-full text-center h-[500px] bg-red-400">
                            <h3 className="">Ultimos Articulos</h3>
                        </div>
                    </div>
                </aside> */}
                {/* <aside className="col-span-2 col-start-1">otro aside</aside> */}
            </div>

            <h3 className="text-2xl text-center my-20 mb-4">
                Artículos relacionados
            </h3>
            <RecommendedCards quantity={4} field={blog.recommendedPosts} />
        </article>
    );
};

export default BlogLayout;

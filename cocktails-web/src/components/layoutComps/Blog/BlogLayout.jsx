import Image from 'next/image';
import CocktailsContainer from '../CocktailsContainer/CocktailsContainer';
import BackButton from '@/components/UiComps/BackButton';
import DefaultBreadcrumb from '@/components/UiComps/BreadCrumb';
import RecommendedCards from '../RecommendedCards/RecommendedCardsContainer';
import PostedBy from '@/components/UiComps/PostedBy';
import fetchCocktails from '@/utils/fetchCocktails';
import ArticleLayout from '@/components/layoutComps/Article/ArticleLayout';
import { merriweather } from '@/utils/fonts';
import ArticleTitle from '@/components/UiComps/ArticleTitle';
import Affiliations from '../Affiliations/Affiliations';
import SideIndexNav from '../SideIndexNav/SideIndexNav';
import { buildIds } from '@/utils/buildIds';
const BlogLayout = async ({ blog }) => {
    let cocktails = [];
    let ids = buildIds({ blog });
    //chequeo que el blog pida un array de cócteles
    if (blog.getCocktails) {
        //dentro de la función hay un switch que devolverá un array en cada caso dependiendo de la categoría
        cocktails = await fetchCocktails({
            blogCategory: blog.blog_category,
            categoryId: blog.category_id,
            cocktailsNames: blog.cocktails_names,
        });
    }
    return (
        <article className="mt-12 flex flex-col  justify-end  w-full scroll-smooth">
            <div className="md:grid md:grid-cols-8 md:grid-flow-col md:gap-6 w-full flex flex-col ">
                <div className=" flex flex-col justify-center justify-self-center mx-auto col-span-4 col-start-3 max-w-4xl ">
                    <div className="absolute left-0 top-0">
                        <BackButton></BackButton>
                    </div>
                    <DefaultBreadcrumb
                        category={blog.blog_category}
                        title={blog.title}
                    />
                    <div className="p-2 flex justify-between items-center ">
                        <PostedBy time={blog.createdAt}></PostedBy>

                        <span className="font-normal text-sm ">
                            Categoría:
                            <span className="bg-pink-50 text-primary text-xs mr-2 px-2.5 ml-0.5 py-0.5 rounded-full">
                                {blog.blog_category}
                            </span>
                        </span>
                    </div>
                    <div className="text-xl leading-8 font-normal text-gray-700">
                        {blog.title && (
                            <div id="title">
                                <h1
                                    className={`lg:text-6xl text-2xl py-8 font-semibold text-grad-main text-center ${merriweather.className}`}
                                >
                                    {blog?.title}
                                </h1>
                                <p className="pb-8 text-center leading-9">
                                    {blog?.brief_desc}
                                </p>
                            </div>
                        )}

                        <Image
                            src={blog?.image_url}
                            height={1000}
                            width={1000}
                            alt={blog?.alt}
                            className=" w-auto h-auto"
                        />
                        {blog?.description && (
                            <div className="pt-16 pb-12" id="description">
                                <ArticleTitle id={'blog-desc'}>
                                    {blog?.title_desc}
                                </ArticleTitle>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: blog?.description,
                                    }}
                                    className="leading-9"
                                ></p>
                            </div>
                        )}

                        {cocktails && cocktails.length > 0 ? (
                            <div>
                                <ArticleTitle id="list_title">
                                    {blog?.list_title}
                                </ArticleTitle>

                                <CocktailsContainer
                                    cocktails={cocktails}
                                ></CocktailsContainer>
                            </div>
                        ) : null}
                        <h2>aca va articles</h2>
                        {blog?.articles && blog?.articles.length > 0 ? (
                            <ArticleLayout articles={blog?.articles} />
                        ) : null}

                        {blog?.tips.length > 0 ? (
                            <div id="tips">
                                <h3 className="font-medium pb-2 text-gray-900">
                                    Recomendaciones
                                </h3>
                                <ul className="list-disc list-inside">
                                    {blog?.tips.map((tip) => (
                                        <li>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
                <aside className=" col-span-2 col-start-7 ">
                    <div className="h-[300px] bg-blue-400">topics</div>
                    <SideIndexNav
                        cocktails={cocktails}
                        articles={blog.articles}
                        ids={ids}
                    ></SideIndexNav>
                </aside>
                {/* <aside className="col-span-2 col-start-1">otro aside</aside> */}
            </div>

            <Affiliations indexes={[]} />

            <div id="recommended">
                <h3 className="text-2xl text-center my-20 mb-4">
                    Artículos relacionados
                </h3>

                <RecommendedCards quantity={4} field={blog.recommended_posts} />
            </div>
        </article>
    );
};

export default BlogLayout;

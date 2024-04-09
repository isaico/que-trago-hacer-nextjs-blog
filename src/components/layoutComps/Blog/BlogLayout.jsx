import Image from 'next/image';
import fetchCocktails from '@/utils/fetchCocktails';
import { buildIds } from '@/utils/buildIds';
import { sanitize } from 'isomorphic-dompurify';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
// lazy/dynamic imports
const Loader = dynamic(() => import('@/components/UiComps/Loader'));
const CocktailsContainer = dynamic(() =>
    import('../CocktailsContainer/CocktailsContainer')
);
const BackButton = dynamic(() => import('@/components/UiComps/BackButton'));
const DefaultBreadcrumb = dynamic(() =>
    import('@/components/UiComps/BreadCrumb')
);
const RecommendedCards = dynamic(() =>
    import('../RecommendedCards/RecommendedCardsContainer')
);
const PostedBy = dynamic(() => import('@/components/UiComps/PostedBy'));
const ArticleLayout = dynamic(() =>
    import('@/components/layoutComps/Article/ArticleLayout')
);
const merriweather = dynamic(() => import('@/utils/fonts'));
const ArticleTitle = dynamic(() => import('@/components/UiComps/ArticleTitle'));
const Affiliations = dynamic(() => import('../Affiliations/Affiliations'));
const SideIndexNav = dynamic(() => import('../SideIndexNav/SideIndexNav'));


const BlogLayout = async ({ blog }) => {
    let cocktails = [];
    let ids = buildIds({ blog }); //obtengo los ids para el sidenav
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
        <main className="mt-12 flex flex-col  justify-end  w-full scroll-smooth relative">
            <div className="absolute left-4 top-2">
                <BackButton color="gray" />
            </div>
            <div className="w-full flex flex-col-reverse  md:flex-row  mt-16">
                <div className="flex md:basis-5/6 flex-col justify-center justify-self-center items-center w-full md:mx-auto p-2 relative">
                    <div className="text-base md:text-xl  leading-normal md:leading-8 font-normal text-gray-700  md:max-w-5xl w-full px-4">
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
                        {blog.title && (
                            <div id="title">
                                <h1
                                    className={`lg:text-6xl text-2xl py-8 font-semibold text-grad-main text-center ${merriweather.className}`}
                                >
                                    {blog?.title}
                                </h1>
                                <p
                                    className="pb-8  md:text-md text-center leading-normal md:leading-8  whitespace-pre-line"
                                    dangerouslySetInnerHTML={{
                                        __html: sanitize(blog?.brief_desc),
                                    }}
                                ></p>
                            </div>
                        )}
                        <div className="flex justify-center ">
                            <Image
                                src={blog?.image_url}
                                height={1000}
                                width={1000}
                                alt={blog?.alt}
                            />
                        </div>

                        {blog?.description && (
                            <div className="pt-16 pb-12" id="description">
                                <ArticleTitle>{blog?.title_desc}</ArticleTitle>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: sanitize(blog?.description),
                                    }}
                                    className="leading-normal md:leading-8 whitespace-pre-line mt-8"
                                ></p>
                            </div>
                        )}

                        {blog && blog.pilar !== true ? (
                            <>
                                {cocktails && cocktails.length > 0 ? (
                                    <article>
                                        <ArticleTitle id="list_title">
                                            {blog?.list_title}
                                        </ArticleTitle>

                                        <CocktailsContainer
                                            cocktails={cocktails}
                                        ></CocktailsContainer>
                                    </article>
                                ) : null}

                                {blog?.articles && blog?.articles.length > 0 ? (
                                    <ArticleLayout articles={blog?.articles} />
                                ) : null}
                            </>
                        ) : (
                            <ArticleLayout articles={blog?.articles} />
                        )}

                        {blog?.conclusion && (
                            <div id="conclusion" className="my-8">
                                <ArticleTitle>
                                    {blog.conclusion.title}
                                </ArticleTitle>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: sanitize(
                                            blog?.conclusion?.description
                                        ),
                                    }}
                                    className="leading-normal md:leading-8 whitespace-pre-line "
                                ></p>
                            </div>
                        )}
                        
                    </div>
                </div>

                <aside className="">
                    <SideIndexNav
                        cocktails={cocktails}
                        articles={blog.articles}
                        ids={ids}
                    />
                </aside>
            </div>
            <Suspense fallback={<Loader />}>
                <Affiliations />
                {blog.recommended_posts && (
                    <div id="recommended" className="text-center ">
                        <ArticleTitle>Publicaciones relacionadas</ArticleTitle>
                        <RecommendedCards field={blog.recommended_posts} />
                    </div>
                )}
            </Suspense>
        </main>
    );
};

export default BlogLayout;

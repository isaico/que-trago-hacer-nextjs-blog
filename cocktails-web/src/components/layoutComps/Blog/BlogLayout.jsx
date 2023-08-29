import React from 'react';
import Image from 'next/image';
import PostContainer from '../PostContainer/PostContainer';
import BackButton from '@/components/UiComps/BackButton';
import DefaultCarousel from '@/components/UiComps/Carousel';
import DefaultBreadcrumb from '@/components/UiComps/BreadCrumb';
import RecommendedCards from '../RecommendedCards/RecommendedCardsContainer';
import { getDate } from '@/utils/getDate';
const BlogLayout = ({ blog }) => {
    const date = getDate(blog.createdAt);
    return (
        <article className="mt-12 flex flex-col  justify-end relative w-full">
            <div className="md:grid md:grid-cols-8 md:grid-flow-col md:gap-6 w-full flex flex-col">
                <div className=" flex flex-col justify-center justify-self-center mx-auto col-span-4">
                    <DefaultBreadcrumb
                        category={blog.blogCategory}
                        title={blog.title}
                    />
                    <div className="p-2 flex justify-between items-center ">
                        <div className="flex items-center justify-start py-2">
                            <p className="text-sm ">Posted by:</p>
                            <a href="#" className="pl-2">
                                <Image
                                    src="https://res.cloudinary.com/dzyllqqxi/image/upload/v1692975511/avataaars_hrw2td.png"
                                    width={25}
                                    height={80}
                                    alt="avatar animado de un hombre con buzo gris con lentes y sonriendo  mirando la camara, con fondo celeste"
                                    className="rounded-full ring-2 ring-gray-300"
                                ></Image>
                            </a>
                            <p className="text-sm pl-2"> {date}</p>
                        </div>
                        <span className="font-normal text-sm ">
                            categoria:
                            <span className="bg-pink-50 text-primary text-xs mr-2 px-2.5 ml-0.5 py-0.5 rounded-full">
                                {blog.blogCategory}
                            </span>
                        </span>
                    </div>
                    <div className="text-xl leading-8 font-normal text-gray-700">
                        <h1 className="lg:text-6xl text-2xl py-8 font-semibold text-grad-main text-center">
                            {blog?.title}
                        </h1>

                        <p className="pb-6">{blog?.brief_desc}</p>

                        <Image
                            src={blog?.image_url}
                            height={500}
                            width={800}
                            alt={blog?.alt}
                            className="opacity-2"
                        />
                        <div className="pt-8 pb-12">
                            <h2 className="text-2xl font-medium text-gray-900 pb-4">
                                {blog?.title_desc}
                            </h2>
                            {/* <p className="">{blog?.description}</p> */}
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: blog?.description,
                                }}
                            ></p>
                        </div>

                        {blog.posts.length > 0 ? (
                            <div>
                                <h2 className="text-2xl font-medium text-gray-900 pb-2">
                                    {blog?.title_posts}
                                </h2>
                                <PostContainer
                                    posts={blog?.posts}
                                ></PostContainer>
                            </div>
                        ) : (
                            // blog con datos si la lista posts no existe
                            <div>{blog?.extra}</div>
                        )}
                    </div>
                    {/* <div>articulo</div> */}
                </div>
                <aside className="border-l-2 col-span-2  ">
                    <div className="h-[300px] bg-blue-400">algo</div>
                    <div className="flex justify-center items-center sticky top-16  ">
                        <div className="justify-center w-full text-center h-[500px] bg-red-400">
                            <h3 className="">Ultimos Articulos</h3>
                        </div>
                    </div>
                </aside>
                <aside className="col-span-2 col-start-1">otro aside</aside>
            </div>
            <div className="bg-gray-200 w-full h-52 pt-8">
                esto es un bloque dentro
            </div>
            <h3 className="text-2xl text-center">Articulos recomendados</h3>
            <RecommendedCards quantity={4} field={null} />
            <DefaultCarousel></DefaultCarousel>
        </article>
    );
};

export default BlogLayout;

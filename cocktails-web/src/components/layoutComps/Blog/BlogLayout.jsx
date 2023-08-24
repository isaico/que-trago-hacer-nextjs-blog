import React from 'react';
import Image from 'next/image';
import PostContainer from '../PostContainer/PostContainer';
import BackButton from '@/components/UiComps/BackButton';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
const BlogLayout = ({ blog }) => {
    return (
        <>
            <div>
                <BackButton/>
            </div>
            {blog ? (
                <div>
                    <Image
                        src={blog?.image_url}
                        height={500}
                        width={500}
                        alt={blog?.alt}
                    ></Image>
                    title:{blog?.title}
                    desc:{blog?.description}
                    <PostContainer posts={blog?.posts}></PostContainer>
                    <div> articulo relacionado dentro de blog ... </div>
                </div>
            ) : (
                <ErrorFetchData>error al obtener datos</ErrorFetchData>
            )}
        </>
    );
};

export default BlogLayout;

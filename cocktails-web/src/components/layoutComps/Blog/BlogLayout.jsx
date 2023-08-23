import React from 'react';
import Image from 'next/image';
import PostContainer from '../PostContainer/PostContainer';

const BlogLayout = ({ blog }) => {
    return (
        <>
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
                <div>error al obtener datos</div>
            )}
        </>
    );
};

export default BlogLayout;

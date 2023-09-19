import { ImageResponse } from 'next/server';
import fetchBlogs from '@/utils/fetchBlogs';

export const contentType = 'image/jpg';
export const size = { width: 350, height: 350 };

export default async function og() {
    const blogs = await fetchBlogs({});

    return new ImageResponse(
        blogs?.map((blog) => (
            <div>
                <img
                    src={
                        blog?.small_image_url + '&w=350&h=350&auto=format&q=75'
                    }
                    alt={blog?.alt}
                />
            </div>
        )),
        size
    );
}

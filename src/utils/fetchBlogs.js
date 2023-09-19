import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

const fetchBlogs = async (namesArray) => {
    try {
        connectDB();
        if (namesArray && namesArray.length > 0 !== undefined) {
            const resp = await Blog.find(
                { title: namesArray },
                'title brief_desc small_image_url alt blog_category category_id createdAt pilar featured'
            );
            const orderedResults = namesArray.map(item =>
                resp.find(result => result.title === item)
            );
            const data = JSON.parse(JSON.stringify(orderedResults));
            return data;
        } else {
            const resp = await Blog.find({});
            const data = JSON.parse(JSON.stringify(resp));
            return data;
        }
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
};

export default fetchBlogs;

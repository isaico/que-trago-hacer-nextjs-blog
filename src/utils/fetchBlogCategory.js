import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

const fetchBlogCategory = async (category) => {
    console.log("🚀 ~ fetchBlogCategory ~ category:", category)
    try {
        connectDB();
        //obtiene todos los post según la categoría del blog
        const resp = await Blog.find({ blog_category: category });
        const data = JSON.parse(JSON.stringify(resp));
        console.log("🚀 ~ fetchBlogCategory ~ data:", data)
        return data;
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
};

export default fetchBlogCategory;

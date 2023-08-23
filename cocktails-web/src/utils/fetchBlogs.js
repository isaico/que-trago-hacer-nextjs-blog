import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

const fetchBlogs = async () => {
    try {
        connectDB();
        // llamare a la coll "blog" y pedire un item segun su categoria
        const resp = await Blog.find({});
        const data = JSON.parse(JSON.stringify(resp));
        return data;
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
};

export default fetchBlogs;

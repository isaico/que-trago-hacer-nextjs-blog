import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

const fetchBlogs = async (field) => {
    try {
        connectDB();
        if (field && field.field !== undefined) {
            const resp = await Blog.find({field});
            const data = JSON.parse(JSON.stringify(resp));
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

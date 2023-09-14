import { NextResponse } from 'next/server';
import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';

export async function GET() {
    try {
        await connectDB();
        const resp = await Blog.find();
        return NextResponse.json(resp, { status: 200 });
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 500,
        });
    }
}
export async function POST(request, { params }) {
    try {
        await connectDB();
        const body = await request.json();
        const newBlog = new Blog(body);
        const resp = await newBlog.save();
        // pushBlogLink(resp); posible solucion para agregar link al momento de cargar data
        return NextResponse.json(resp, { status: 201 });
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 500,
        });
    }
}

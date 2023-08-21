import { NextResponse } from 'next/server';
import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';
//crud de posts...cuando yo clickee en el titulo de un articulo
// lo voy a enviar a /app/tragos/[nombre del trago]

export async function GET() {
    try {
        await connectDB();
        const resp = await Blog.find();
        console.log(resp);
        return NextResponse.json(resp);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 500,
        });
    }
    // return NextResponse.json({ data: resp }, { status: 201 });
}
export async function POST(request, { params }) {
    try {
        await connectDB();
        const body = await request.json();
        const newBlog = new Blog(body);
        const resp = await newBlog.save();
        console.log(resp)
        return NextResponse.json(resp,{ status: 201 });
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 500,
        });
    }
}

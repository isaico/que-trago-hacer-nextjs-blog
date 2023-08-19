import { NextResponse } from 'next/server';
import connectDB from '@/libs/mongodb';
import Posts from '@/models/posts';
//crud de posts...cuando yo clickee en el titulo de un articulo
// lo voy a enviar a /app/tragos/[nombre del trago]

export async function GET() {
    await connectDB();
    const resp = await Posts.find();
    console.log(resp);
    return NextResponse.json(resp);
    // return NextResponse.json({ data: resp }, { status: 201 });
}
export async function POST(request, { params }) {
    try {
        await connectDB();
        const body = await request.json();
        const newPost = new Posts(body);
        const resp = await newPost.save();
        console.log(resp)
        return NextResponse.json(resp);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 500,
        });
    }
}

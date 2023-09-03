import { NextResponse } from 'next/server';
import connectDB from '@/libs/mongodb';
import Cocktail from '@/models/cocktails';

export async function GET() {
    await connectDB();
    const resp = await Cocktail.find();
    console.log(resp);
    return NextResponse.json({ data: resp }, { status: 200 });
}
export async function POST(request) {
    await connectDB();
    const {data} = await request.json();
    console.log(data);
    const resp = await Cocktail.insertMany(data);
    console.log(resp)
    // const cocktail = new Cocktail(body);
    // const resp = await cocktail.save();
    return NextResponse.json(resp, { status: 201 });
}

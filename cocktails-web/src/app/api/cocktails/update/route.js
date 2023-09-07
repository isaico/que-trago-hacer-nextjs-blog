import { NextResponse } from 'next/server';
import connectDB from '@/libs/mongodb';
import Cocktail from '@/models/cocktails';

export async function POST(request) {
    await connectDB();
    const { data } = await request.json();
    console.log(data);
    const resp = await Cocktail.updateMany({}, { $set: { cocktails: data } });
    return NextResponse.json(resp, { status: 202 });
}

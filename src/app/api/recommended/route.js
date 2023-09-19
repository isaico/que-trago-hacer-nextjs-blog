import { NextResponse } from 'next/server';
import connectDB from '@/libs/mongodb';
import Recommended from '@/models/recommended';

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        const newRecommended = new Recommended(body);
        const resp = await newRecommended.save();
        return NextResponse.json(resp, { status: 201 });
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 500,
        });
    }
}

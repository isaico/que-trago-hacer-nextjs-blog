import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';


const fetchBlog = async (id) => {
    try {
        connectDB();
        // llamare a la coll "blog" y pedire un item segun su categoria
        console.log(id)
        const resp = await Blog.findOne({ categoryId: id });
        const data =  JSON.parse(JSON.stringify(resp))
        return data;
        
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }   
};

export default fetchBlog;

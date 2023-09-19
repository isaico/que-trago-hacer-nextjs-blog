import connectDB from '@/libs/mongodb';
import Pilar from '@/models/pilar';
import { NextResponse } from 'next/server';


const fetchPilar = async (id) => {
    try {
        connectDB();
        // llamare a la coll "pilar" y pedire un item segun su categoria
        const resp = await Pilar.findOne({ category_id: id });
        const data =  JSON.parse(JSON.stringify(resp))
        return data;
        
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }   
};

export default fetchPilar;

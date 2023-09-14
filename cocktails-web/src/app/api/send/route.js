import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const mailOptions = {
            from: body.email,
            to: 'isaico40@gmail.com',
            subject: body.subject,
            text: `Nombre:${body.name}. Mensaje:${body.message}`,
        };
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PW,
            },
        });
        const data = await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            });
        });
        console.log(data,"resp promise");
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}

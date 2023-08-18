import { NextResponse } from "next/server"
//crud de posts...cuando yo clickee en el titulo de un articulo
// lo voy a enviar a /app/tragos/[nombre del trago]

export function GET(){
    return NextResponse.json("texto")
}

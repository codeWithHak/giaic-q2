import { NextResponse } from "next/server";
import { comments } from "../data";

export async function GET (_req:Request, {params}:{params:{id:string}}){
    const {id} = params
    const comment = comments.find((comment)=>comment.id === parseInt(id))
    return NextResponse.json(comment)
}

// #Create a request to delete data in the comments 

// export async function DELETE (_req:Request, {params}:{params:{id:number}}){
//     const {id} = params
//     const comment = comments.filter((comment)=>comment.id === (id))
//     return NextResponse.json(comment)
    
// }
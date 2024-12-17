import { NextResponse } from "next/server";
import { comments } from "./data";

interface IComment {
  id: number;
  comment: string;
}

export async function GET() {
  return NextResponse.json(comments);
}

export async function POST(req:Request){
    const request = await req.json()
    const newReq = {
        id: comments.length + 1,
        comment:request.comment
    }
    comments.push(newReq)

    return NextResponse.json(newReq)
    
}
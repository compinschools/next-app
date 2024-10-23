import dbConnect from "@/lib/dbConnect";
import Todo from "@/lib/Models/todoModel";
import { NextResponse } from "next/server";

export const GET = async() => {

  await dbConnect();
  try {
    const todos = await Todo.find({});
    return NextResponse.json(todos, { status: 200});

  }
  catch (error) {
    return NextResponse.json({success: false}, { status: 400});
  } 

}

export const POST = async(req) => {
  await dbConnect();
  try{
    const body = await req.json();
    const todo = await Todo.create(body);
    return NextResponse.json({success:true}, { status: 201});
  }
  catch(error) {
    return NextResponse.json({success: false}, { status: 400});
  }
}
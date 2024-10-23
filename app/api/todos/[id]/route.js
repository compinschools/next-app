import dbConnect from "@/lib/dbConnect";
import Todo from "@/lib/Models/todoModel";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
  const {id} = params;

  await dbConnect();
  try{
    const todo = await Todo.findById(id);
    return NextResponse.json(todo, {status: 200});
  }
  catch (error) {
    return NextResponse.json({success:false}, {status: 400});
  }
}

export const DELETE = async (req,{params}) => {
  const {id} = params;
  await dbConnect();

  try {
    await Todo.findByIdAndDelete(id);
    return NextResponse.json({success:true},{status: 200});
  }
  catch (error) {
    return NextResponse.json({success:false}, {status: 400});
  }
}

export const PUT = async (req,{params}) => {
  const {id} = params;
  const body = await req.json();

  await dbConnect();
  try {
    await Todo.findByIdAndUpdate(id, body);
    return NextResponse.json({success:true}, {status: 200});
  }
  catch (error) {
    return NextResponse.json({success:false}, {status: 400});
  }
}
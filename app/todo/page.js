import TodoList from "@/components/client/TodoList";
import Header from "@/components/server/header";
import Image from "next/image";
import dbConnect from "@/lib/dbConnect";
import Todo from "@/lib/Models/todoModel"
export default async function Page() {

  async function onGet(id=undefined){
    "use server"
    await dbConnect();
    if(id){
      return JSON.parse(JSON.stringify(await Todo.findById(id)));
    } else {
      return JSON.parse(JSON.stringify(await Todo.find()));
    }
  }

  async function onCreate(todo) {
    "use server"
    await dbConnect();
    await Todo.create(todo);
    return {success: true};
  }

  async function onUpdate(todo){
    "use server"
    await dbConnect();
    await Todo.findByIdAndUpdate(todo._id,todo);
    return {success: true};
  }

  async function onDelete(id){
    "use server"
    await dbConnect();
    await Todo.findByIdAndDelete(id);
    return {success: true};
  }

  return (
    <>
      <Header currentPage="/todo" />
      <div className="p-2">
        <h1>Todo</h1>
        <TodoList onGet={onGet} onCreate={onCreate} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

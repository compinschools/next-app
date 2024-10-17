import TodoList from "@/components/client/TodoList";
import Header from "@/components/server/header";
import Image from "next/image";

export default async function Page() {

  return (
    <>
      <Header currentPage="/todo" />
      <div className="p-2">
        <h1>Todo</h1>
        <TodoList />
      </div>
    </>
  );
}

"use client"
import Todo from "./Todo";
import TodoForm from "./todoForm";
import { useEffect, useState } from "react";
export default function TodoList({onGet,onCreate,onUpdate,onDelete}) {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(0);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editCompleted, setEditCompleted] = useState(false);

  useEffect(() => { 
    console.log("Loading todos...");
    loadTodos();
  },[]);

  async function loadTodos(){
    setLoading(true);
    
    const todos = await onGet();
    setTodos(todos);
    setLoading(false);
  }

  async function onSave(todo){
    console.log("Saving...",todo);
    
    if(todo.id == undefined){
      await onCreate(todo);
      
      await loadTodos();
    } else {
      //this is an existing todo, find it and update it 
      await onUpdate({...todo,_id: todo.id});

      await loadTodos();
    }
    
    setShowForm(false);
    console.log("Saved...",todo);
  }

  async function onEdit(id) {
    console.log("Editing...",id);
    const todo = await onGet(id);
    console.log("editing todo",todo);
    setEditId(todo._id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setEditCompleted(todo.completed);
    setShowForm(true);
  }

  async function onDeleteInternal(id) {
    console.log("Deleting...",id);
    
    await onDelete(id);
    loadTodos();
  }

  function showAddForm(){
    setShowForm(true);
    setEditId(null);
    setEditTitle("");
    setEditCompleted(false);
  }

  useEffect(() => {
    console.log("todos",todos);
  },[todos]);

  return (
    <>
      {!loading && <>
        <input type="button" className="rounded-md bg-blue-950 pl-2 pr-2" onClick={() => {showAddForm()}} value="Add Todo" />
        {showForm && <TodoForm onSave={onSave} onCancel={() => setShowForm(false)} _id={editId} _title={editTitle} _description={editDescription} _completed={editCompleted} />}

        {!showForm && todos.map((todo) => <Todo key={todo._id} id={todo._id} title={todo.title} description={todo.description} completed={todo.completed} onEdit={onEdit} onDelete={onDeleteInternal} />)}
      </>
}
{loading && <h2>Loading...</h2>}

    </>
  );

}
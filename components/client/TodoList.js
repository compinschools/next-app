"use client"
import Todo from "./Todo";
import TodoForm from "./todoForm";
import { useEffect, useState } from "react";
export default function TodoList() {

  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(0);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editCompleted, setEditCompleted] = useState(false);

  function onSave(todo){
    console.log("Saving...",todo);
    if(todo.id === 0){
      //find the largest id and increment by 1
      let maxId = 0;
      todos.forEach((t) => {
        if(t.id > maxId){
          maxId = t.id;
        }
      });
      todo.id = maxId + 1;
      setTodos([...todos,todo]);
    } else {
      //this is an existing todo, find it and update it 
      let updatedTodos = todos.map((t) => {
        if(t.id === todo.id){
          return todo;
        } else {
          return t;
        }
      });
      setTodos(updatedTodos);
    }
    
    setShowForm(false);
    console.log("Saved...",todo);
  }

  function onEdit(id) {
    console.log("Editing...",id);
    let todo = todos.find((t) => t.id === id);
    setEditId(todo.id);
    setEditName(todo.name);
    setEditDescription(todo.description);
    setEditCompleted(todo.completed);
    setShowForm(true);
  }

  function onDelete(id) {
    console.log("Deleting...",id);
    let updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
  }

  useEffect(() => {
    console.log("todos",todos);
  },[todos]);

  return (
    <>
      <input type="button" className="rounded-md bg-blue-950 pl-2 pr-2" onClick={() => {setShowForm(!showForm)}} value="Add Todo" />
      {showForm && <TodoForm onSave={onSave} onCancel={() => setShowForm(false)} _id={editId} _name={editName} _description={editDescription} _completed={editCompleted} />}

      {!showForm && todos.map((todo) => <Todo key={todo.id} id={todo.id} name={todo.name} description={todo.description} completed={todo.completed} onEdit={onEdit} onDelete={onDelete} />)}


    </>
  );

}
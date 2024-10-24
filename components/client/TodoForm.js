"use client"
import { useState,useEffect } from "react";
export default function TodoForm({onSave,onCancel,_id,_title,_description,_completed}) {

  const [id, setId] = useState(_id);
  const [title, setTitle] = useState(_title);
  const [description, setDescription] = useState(_description);
  const [completed, setCompleted] = useState(_completed);

  // useEffect(() => {
  //   console.log("id",id);
  //   console.log("name",name);
  //   console.log("description",description);
  //   console.log("completed",completed);
  // },[id,name,description,completed]);

  function onSaveInternal(e){
    e.preventDefault();
    //console.log("Saving...",{id,name,description,completed});
    onSave({id,title,description,completed});
  }

  return (
    <form className="p-2">
      {/* fields will be name, description and completed (boolean) */}
      <div className="p-2">
        <label className="block">Title</label>
        <input className="text-black" type="text" id="title" name="title" onChange={(e) => {setTitle(e.target.value)}} value={title} />
      </div>
      <div className="p-2">
      <label className="block">Description</label>
      <input className="text-black" type="text" id="description" name="description" onChange={(e) => {setDescription(e.target.value)}} value={description} />
      </div>
      <div className="p-2">
      
      <input type="checkbox" id="completed" name="completed" onChange={(e) => {setCompleted(e.target.checked)}} checked={completed} />
      <label className="ml-2">Completed</label>
      </div>

      
      <input type="button" className="rounded-md bg-blue-950 pl-2 pr-2" onClick={(e) => {onSaveInternal(e)} } value="Save" />
      <input type="button" className="rounded-md bg-blue-950 pl-2 pr-2" onClick={() => {onCancel()}} value="Cancel" />
    </form>
  )
}
"use client"
import { useState,useEffect } from "react";
export default function TodoForm({onSave,onCancel,_id,_name,_description,_completed}) {

  const [id, setId] = useState(_id);
  const [name, setName] = useState(_name);
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
    onSave({id,name,description,completed});
  }

  return (
    <form className="p-2">
      {/* fields will be name, description and completed (boolean) */}
      <div className="p-2">
        <label className="block">Name</label>
        <input className="text-black" type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}} value={name} />
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
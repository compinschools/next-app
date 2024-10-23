export default function Todo({id,title,description,completed,onEdit,onDelete}){
    return (
        <div className="p-2 border-b border-slate-500">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{completed ? "Completed" : "Not Completed"}</p>

            <input value="edit" type="button" className="rounded-md bg-blue-950 pl-2 pr-2" onClick={(e) => {e.preventDefault(); onEdit(id)}} />
            <input value="delete" type="button" className="rounded-md bg-blue-950 pl-2 pr-2" onClick={(e) => {e.preventDefault(); onDelete(id)}} />

        </div>);
};
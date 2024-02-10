export function ToDo({id, text, completed, onDelete, onToggleCompleted}){

    return(
        <li>
            <input type="checkbox" name='lisince' checked={completed} onChange={()=>onToggleCompleted(id)}/>
            <p>{text}</p>
            <button type="button" onClick={()=>onDelete(id)}>Delete</button>
        </li>
    )
}
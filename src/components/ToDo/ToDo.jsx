import { Button } from "components/Button/Button"


export function ToDo({id, text, completed, onDelete, onToggleCompleted}){

    return(
        <li>
            <input type="checkbox" name='lisince' checked={completed} onChange={()=>onToggleCompleted(id)}/>
            <p>{text}</p>
            <Button type="button" onClick={()=>onDelete(id)}>Delete</Button>
        </li>
    )
}
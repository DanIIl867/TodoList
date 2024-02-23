import { Btn } from "components/Button/Button"
import {List, Input} from "./ToDo.styled"

export function ToDo({todoId, text, completed, onDelete, onToggleCompleted}){

    const handleDelete = () => {
        onDelete(todoId)
    }
    

    return(
        <List>
            <Input type="checkbox" name='lisince' checked={completed} onChange={()=>onToggleCompleted(todoId)}/>
            <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</p>
            <Btn type="button" onClick={handleDelete}>Delete</Btn>
        </List>
    )
}
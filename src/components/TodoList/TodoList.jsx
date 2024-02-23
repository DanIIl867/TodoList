import { ToDo } from '../ToDo/ToDo';


export function TodoList({toDos, onDelete, onToggleCompleted}){
    return(
        <ul>
            {toDos.map((toDo) => (
                <ToDo
                    key={toDo.id}
                    text={toDo.text}
                    completed={toDo.completed}
                    onDelete={onDelete}
                    todoId={toDo.id}
                    onToggleCompleted={onToggleCompleted}
                />
            ))}
        </ul>
    )
}
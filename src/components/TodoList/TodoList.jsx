import { ToDo } from '../ToDo/ToDo'

export function TodoList({toDos, id ,onDelete, onToggleCompleted}){
    return(
        <ul>
            {
                toDos.map((toDo) => (
                    <ToDo
                    key={toDo.id}
                    text={toDo.text}
                    completed={toDo.completed}
                    onDelete={onDelete}
                    id={id}
                    onToggleCompleted={onToggleCompleted}
                    />
            ))

            }
        </ul>
    )
}
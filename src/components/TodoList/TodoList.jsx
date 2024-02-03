import { ToDo } from '../ToDo/ToDo'

export function TodoList({toDos}){
    return(
        <ul>
            {
                toDos.map((toDo) => (
                    <ToDo
                    key={toDo.id}
                    text={toDo.text}
                    completed={toDo.completed}
                    />
            ))

            }
        </ul>
    )
}
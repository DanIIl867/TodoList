import { Container } from "./Info.styled"

export function Info({ToDos}) {
    const checkedTodos = ToDos.filter(todo => todo.completed === true).length
    const todosLength = ToDos.length
    
    return (
        <Container>
            <p>Всього завдань: {todosLength}</p>
            <p>Виконано: {checkedTodos}</p>
        </Container>
    )
}
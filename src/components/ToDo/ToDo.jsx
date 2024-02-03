export function ToDo({text, completed}){
    return(
        <li>
            <input type="checkbox" name='lisince' checked={completed}/>
            <p>{text}</p>
            <button type="button">Delete</button>
        </li>
    )
}
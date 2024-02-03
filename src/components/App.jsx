import { Component } from "react";
import { nanoid } from "nanoid";
import { TodoList } from "./TodoList/TodoList";
import initialTodos from '../todo.json'
import { TodoEditor } from "./TodoEditor/TodoEditor";

export class App extends Component{

  state={
    toDos: initialTodos,
    filter: '',
  }

  addToDo = (text) => {
    console.log(text)
    const newToDo = {
      text,
      completed: false,
      id: nanoid(),
    }

    this.setState((prevState)=>{
      return{
        toDos: [newToDo, ...prevState.toDos]
      }
    })
  }

  render(){
    return(
      <>
        <TodoEditor addToDo={this.addToDo}/>
        <TodoList toDos={this.state.toDos}/>
      </>
    )
  }
}
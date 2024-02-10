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

  deleteToDo = (todoId) => {
    this.setState(prevState => {
        return{
          todos: prevState.todos.filter(todo => todo.id !== todoId)
        }
      })
    }

    toggleCompleted = (todoId) => {
      this.setState(prevState => (
        {todos: prevState.todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo)}
      ))
    }

  render(){
    return(
      <>
        <TodoEditor addToDo={this.addToDo}/>
        <TodoList toDos={this.state.toDos} onDelete={this.deleteToDo} onToggleCompleted={this.toggleCompleted}/>
      </>
    )
  }
}
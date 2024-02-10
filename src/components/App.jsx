import { Component } from "react";
import { nanoid } from "nanoid";
import { TodoList } from "./TodoList/TodoList";
import initialTodos from '../todo.json'
import { TodoEditor } from "./TodoEditor/TodoEditor";
// import { Modal } from "../Modal/Modal";

export class App extends Component{

  state={
    toDos: initialTodos,
    filter: '',
    shovModal: false,
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

    toggleModal = () => {
      this.setState(prev=>({shovModal: !prev.shovModal}))
    }

  render(){
    return(
      <>
      {/* <button type="button" onClick={this.toggleModal}>Відкрити модалку</button>
        {this.state.shovModal && <Modal>
          <button type="button" onClick={this.toggleModal}>Закрити</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </Modal>} */}

        <TodoEditor addToDo={this.addToDo}/>
        <TodoList toDos={this.state.toDos} onDelete={this.deleteToDo} onToggleCompleted={this.toggleCompleted}/>
      </>
    )
  }
}
import { Component } from "react";
import { nanoid } from "nanoid";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { TodoList } from "./TodoList/TodoList";
import initialTodos from '../todo.json'
import { TodoEditor } from "./TodoEditor/TodoEditor";
import { Modal } from "./Modal/Modal";
import { Btn } from "./Button/Button";
import { Filter } from "./Filter/Filter";


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
    this.toggleModal()
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

    handleFilterChange = (e) => {
      this.setState({
        filter: e.currentTarget.value
      })
    }

  render(){
    return(
      <>
      <Btn type="button" onClick={this.toggleModal}><FaPlus/></Btn>
        {this.state.shovModal && <Modal onClose={this.toggleModal}>
          <Btn type="button" onClick={this.toggleModal}><IoMdClose/></Btn>
          <TodoEditor addToDo={this.addToDo}/>
        </Modal>}

        
        <TodoList toDos={this.state.toDos} onDelete={this.deleteToDo} onToggleCompleted={this.toggleCompleted}/>
      </>
    )
  }
}    
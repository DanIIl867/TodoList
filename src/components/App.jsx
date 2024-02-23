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
import { Info } from "./Info/Info"


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
    console.log(todoId)
    this.setState((prevState) => ({
        toDos: prevState.toDos.filter(todo => todo.id !== todoId)
      }))
    }

    toggleCompleted = (todoId) => {
      this.setState(prevState => ({
        toDos: prevState.toDos.map(todo => 
          todo.id === todoId ? {...todo, completed: !todo.completed} :  todo
        )
    }))
    }
    

    toggleModal = () => {
      this.setState(prev=>({shovModal: !prev.shovModal}))
    }

    handleFilterChange = (e) => {
      this.setState({
        filter: e.currentTarget.value
      })
    }

    visibleTodos = () => {
      return this.state.toDos.filter(todo => todo.text.toLowerCase().includes(this.state.filter.toLowerCase()))
    }

  render(){
    return(
      <>
      <Info ToDos={this.state.toDos}/>
      <Btn type="button" onClick={this.toggleModal}><FaPlus/></Btn>
        {this.state.shovModal && <Modal onClose={this.toggleModal}>
          <Btn type="button" onClick={this.toggleModal}><IoMdClose/></Btn>
          <TodoEditor addToDo={this.addToDo}/>
        </Modal>}
        
        <Filter handleFilterChange={this.handleFilterChange}/>     
        <TodoList toDos={this.visibleTodos()} onDelete={this.deleteToDo} onToggleCompleted={this.toggleCompleted} filter={this.state.filter}/>
      </>
    )
  }
}    
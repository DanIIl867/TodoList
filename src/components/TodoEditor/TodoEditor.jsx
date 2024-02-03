import { Component } from "react";

export class TodoEditor extends Component{

    state={
        goal: '',
    }

    onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(e.currentTarget.elements.goal.value)
        this.props.addToDo(e.currentTarget.elements.goal.value);
        this.setState({
            goal:''
        })
    }

    onTextareaClick =(e)=>{
        this.setState({
            goal: e.currentTarget.value
        })
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <textarea name="goal" value={this.state.goal} onChange={this.onTextareaClick}></textarea>
                <button type="submit">Create</button>
            </form>
        )
    }
}
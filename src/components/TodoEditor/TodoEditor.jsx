import { Component } from "react";
import {Editor, TextArea} from "./TodoEditor.styled";

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
            <Editor onSubmit={this.onFormSubmit}>
                <TextArea name="goal" value={this.state.goal} onChange={this.onTextareaClick}></TextArea>
                <button type="submit">Create</button>
            </Editor>
        )
    }
}
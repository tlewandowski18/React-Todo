import React, {Component} from "react";

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            task: "",
            id: "",
            completed: false
            
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value, id : Date.now()})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewTodo(this.state.task)
        this.setState({task: "", id: "", completed: false})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="task" value={this.state.task} onChange={this.handleChange} /><br />
                <button type="submit">Submit New Todo</button><br />
                <button onClick={this.props.clearCompleted}>Clear Completed Tasks</button>
            </form>
        )
    }
}

export default TodoForm
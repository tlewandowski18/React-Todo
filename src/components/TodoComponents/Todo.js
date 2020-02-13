import React from "react"

function Todo(props){
    return (
        <div id={props.todo.id} onClick={() => props.handleClick(props.todo.id)}>

            <p style={props.todo.completed ? {textDecorationLine: "line-through"} : null}>{props.todo.task}</p>
        </div>
    )
}
export default Todo
import React from "react"
import Todo from "./Todo"

function TodoList(props) {
    return (
        <div>
            {props.todos.map((todo, index) => {
                return (

                    <Todo 
                        key={index + 1} 
                        todo={todo} 
                        handleClick={props.markAsCompleted}/>
                )
            }

                
            )}
        </div>
    )
}

export default TodoList

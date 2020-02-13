import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: [
        {
          task: "Vacuum",
          id: 1,
          completed: false
        },
        {
          task: "Groceries",
          id: 2,
          completed: false
        },
        {
          task: "Clean Windows",
          id: 3,
          completed: false
        },
        {
          task: "Scrub Floors",
          id: 4,
          completed: false
        },
      ]
    }
  }

  addNewTodo = (todo) => {

    const newItem = {
      task: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({todoList: [...this.state.todoList, newItem]})
  }

  markAsCompleted = (todoId) => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTodo={this.addNewTodo} clearCompleted={this.clearCompleted}/>
        <TodoList todos={this.state.todoList} markAsCompleted={this.markAsCompleted}/>

      </div>
    );
  }
}

export default App;

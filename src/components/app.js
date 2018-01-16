import React from 'react';
import CreateTodo from '../components/create-todo';
import TodosList from '../components/todos-list';

var todos = [
  {
    task: 'make todoapp',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
]

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }
  createTask(task){
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({});
  }
  toggleTask(task){
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({});
  }
  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({});
  }
  deleteTask(taskToDelete){
    _.remove(this.state.todos, todo=>todo.task === taskToDelete);
    this.setState({});
  }
  render() {
    return(
      <div>
        <h1>React Todos App</h1>
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }
}

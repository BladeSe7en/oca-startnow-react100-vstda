import React, { Component } from 'react';
import { AddForm } from './components/add';
import { Item } from './components/item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    };

    this.addTodo = this.addTodo.bind(this);
    // this.handleCompleted = this.handleCompleted.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addTodo({ index, desc, priority }) {
    const todoAdd = {
      index,
      desc,
      priority
    };

    const newTodos = this.state.todoItems.slice();

    newTodos.push(todoAdd);

    this.setState({
      todoItems: newTodos
    });
    return todoAdd;
  }

  handleChange({ desc, priority, index }) {
    //update todo Items list using provided index
    const todoItems = [...this.state.todoItems];
    todoItems[index] = { index, desc, priority };
    this.setState({ todoItems });
  }

  handleDelete({ index }) {
    var todoItems = [...this.state.todoItems];
    todoItems.splice(index, 1);
    this.setState({ todoItems });
  }
  renderDefaultMessage() {
    if (this.state.todoItems.length < 1) {
      return (
        <div className="default-message" role="alert">
          <h2>Welcome to Very Simple Todo App!! </h2>
          <p>Get started now by adding a new todo on the left!</p>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Very Simple ToDo App</h1>
        <h3>Track all of the things</h3>
        <div className="row">
          <AddForm addTodo={this.addTodo} />

          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">View Todos</div>
              <div className="panel-body">
                {this.renderDefaultMessage()}
                {this.state.todoItems.map((item, index) => {
                  return (
                    <Item
                      index={index}
                      key={index}
                      desc={item.desc}
                      priority={item.priority}
                      date={item.date}
                      handleChange={this.handleChange}
                      handleDelete={this.handleDelete}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App

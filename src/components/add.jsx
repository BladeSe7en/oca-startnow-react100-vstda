import React, { Component } from 'react';

export class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: '',
      desc: '',
      priority: ''
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.addTodo(this.state);

    this.setState({
      index: '',
      desc: '',
      priority: ''
    });
  }

  handleChange(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="panel panel-default">
          <div className="panel-heading">Add New ToDo</div>
          <div className="panel-body">
            <div className="form-group">
              <label htmlFor="new-todo" /> I want to...
              <textarea
                className="create-todo-text form-control"
                id="new-todo"
                value={this.state.desc}
                onChange={this.handleChange('desc')}
                rows="3"
              />
            </div>
            <div className="form-group">
              <label htmlFor="priority" /> Select Priority
              <select
                className="create-todo-priority form-control"
                id="priority"
                value={this.state.priority}
                onChange={this.handleChange('priority')}
              >
                <option disabled>Select...</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
          </div>
          <div className="panel-footer">
            <div className="form-group">
              <button
                className="add btn btn-primary create-todo btn-block"
                onClick={this.handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


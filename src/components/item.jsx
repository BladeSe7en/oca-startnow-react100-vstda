import React, { Component } from 'react';
// import { EditForm } from './edit';

export class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.index,
            desc: this.props.desc,
            priority: this.props.priority,
            editing: false,
            completed: false
        };
    }

    getAlertClass() {
        if (this.state.completed === true) {
            return 'alert-success';
        }
        if (this.props.priority === '3') {
            return 'alert-danger';
        }
        if (this.props.priority === '2') {
            return 'alert-warning';
        }
        if (this.props.priority === '1') {
            return 'alert-info';
        }
    }

    handleCompleted() {
        !this.state.completed
            ? this.setState({ completed: true })
            : this.setState({ completed: false });

        if (this.state.completed === true) {
            this.getAlertClass();
        } else {
            this.getAlertClass();
        }
    }
    handleEdit() {
        this.setState({ editing: !this.state.editing });
    }
    handleSubmit() {
        this.setState({ editing: false });
        this.props.handleChange(this.state);
    }
    handleDelete() {
        this.props.handleDelete(this.state);
    }
    handleChange(key) {
        return e => this.setState({ [key]: e.target.value });
    }
    renderEdit() {
        if (!this.state.editing) {
            return;
        }

        return (
            <div className="edit-wrapper todo-item">
                <div className="form-group">
                    <label htmlFor="description" />Description
          <textarea
                        className="update-todo-text form-control create-todo-text"
                        value={this.state.desc}
                        onChange={this.handleChange('desc')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date" />Due date
          <input className="update-todo-date form-control" id="date" />
                    <label htmlFor="priority" /> Priority
          <select
                        className="form-control create-todo-priority"
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
                <button
                    className="create-todo update-todo btn btn-primary success"
                    onClick={this.handleSubmit.bind(this)}
                >
                    Save
        </button>
            </div>
        );
    }
    render() {
        return (
            <div className={'todo-item alert ' + this.getAlertClass()} role="alert">
                <label className="form-check-label">
                    <input type="checkbox" onClick={this.handleCompleted.bind(this)} />
                    {this.props.desc}
                </label>

                <i
                    className="glyphicon glyphicon-trash pull-right icon-right delete-todo"
                    onClick={this.handleDelete.bind(this)}
                />
                <i
                    className="edit-todo glyphicon glyphicon-edit icon-right pull-right"
                    onClick={this.handleEdit.bind(this)}
                />
                {this.renderEdit()}
            </div>
        );
    }
}


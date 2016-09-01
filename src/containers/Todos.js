import React, {Component} from 'react';

export default class Todos extends Component {

    addTodo() {
        let todo = this.refs.todoInput.value;
        this.props.addTodo(todo);
        this.refs.todoInput.value = "";
    }

    completeTodo(todo) {
        this.props.completeTodo(todo);
    }

    toggleTodos(filter) {
        this.props.toggleTodos(filter);
    }


    render() {
        return (
            <div>
                <h3>To Do List</h3>

                <div>
                    <input ref="todoInput" placeholder="Add a to do..."/>
                    <button onClick={() => this.addTodo()}>Add</button>
                </div>
                <ol>
                    {this.props.todos.map((todo, idx) => {
                        let {filter} = this.props;
                        if(filter == "all"
                            || (filter == "remaining" && !todo.complete)
                            || (filter == "complete" && todo.complete)) {
                            return (
                                <li key={idx}
                                    style={{textDecoration: todo.complete ? 'line-through' : ''}}
                                    onClick={() => this.completeTodo(todo.value)}>{todo.value}</li>
                            );
                        }
                    }, this)}
                </ol>
                <div>
                    <span>Toggle: </span>
                    <span style={{color: this.props.filter == "all" ? 'black' : 'blue', margin: 3}} onClick={() => this.toggleTodos("all")}>All</span>
                    <span style={{color: this.props.filter == "complete" ? 'black' : 'blue', margin: 3}} onClick={() => this.toggleTodos("complete")}>Complete</span>
                    <span style={{color: this.props.filter == "remaining" ? 'black' : 'blue', margin: 3}} onClick={() => this.toggleTodos("remaining")}>Remaining</span>
                </div>
            </div>
        );
    }
}

//
// todo = {
//     value: "buy milk",
//     complete: false
// }
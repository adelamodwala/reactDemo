import React, {Component} from 'react';

import TodoFilter from './TodoFilter';

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

                <div style={{margin: 10, marginLeft: 0}}>
                    <span>Filter: </span>
                    <TodoFilter selectedFilter={this.props.filter}
                                filter="all" title="All"
                                toggleTodos={(filter) => this.toggleTodos(filter)}/>
                    <TodoFilter selectedFilter={this.props.filter}
                                filter="complete" title="Complete"
                                toggleTodos={(filter) => this.toggleTodos(filter)}/>
                    <TodoFilter selectedFilter={this.props.filter}
                                filter="remaining" title="Remaining"
                                toggleTodos={(filter) => this.toggleTodos(filter)}/>
                </div>

                <div>
                    <input ref="todoInput" placeholder="Add a to do..."/>
                    <button onClick={() => this.addTodo()}>Add</button>
                </div>

                <ol>
                    {this.props.todos.map((todo, idx) => {
                        let {filter} = this.props;
                        if (filter == "all"
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
            </div>
        );
    }
}

//
// todo = {
//     value: "buy milk",
//     complete: false
// }
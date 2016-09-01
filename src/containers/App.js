import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../reducers/appActions';

import Todos  from './Todos';

class App extends Component {

    addTodo(todo) {
        this.props.actions.addTodo(todo);
    }

    completeTodo(todo) {
        this.props.actions.completeTodo(todo);
    }

    render() {
        return (
            <div>
                <Todos todos={this.props.todos}
                       addTodo={(todo) => this.addTodo(todo)}
                       completeTodo={(todo) => this.completeTodo(todo)}
                       toggleTodos={(filter) => this.props.actions.toggleTodos(filter)}
                       filter={this.props.filter}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.todosFilter
    }
}

function mapDispatchToProps(dispatch) {
    const {
        addTodo,
        completeTodo,
        toggleTodos
    } = appActions;
    const dispatchActions = bindActionCreators({addTodo, completeTodo, toggleTodos}, dispatch);
    return {
        dispatch,
        actions: dispatchActions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
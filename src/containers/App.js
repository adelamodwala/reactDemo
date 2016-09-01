import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../reducers/appActions';

import Counter  from './Counter';
import Todos  from './Todos';

class App extends Component {

    onBtnClick() {
        this.props.actions.userClick();
    }

    addTodo(todo) {
        this.props.actions.addTodo(todo);
    }

    completeTodo(todo) {
        this.props.actions.completeTodo(todo);
    }

    render() {
        return (
            <div>
                <Counter clicks={this.props.clicks} onBtnClick={() => this.onBtnClick() }/>
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
        clicks: state.counter,
        todos: state.todos,
        filter: state.todosFilter
    }
}

function mapDispatchToProps(dispatch) {
    const {userClick, addTodo, completeTodo, toggleTodos} = appActions;
    const dispatchActions = bindActionCreators({userClick, addTodo, completeTodo, toggleTodos}, dispatch);
    return {
        dispatch,
        actions: dispatchActions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
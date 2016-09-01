import { combineReducers } from 'redux';

function counter(state = 0, action) {
	switch(action.type) {
		case "USER_CLICK":
			return state + 1;
		default:
			return state;
	}
}

function todos(state = [], action) {
	switch(action.type) {
		case "ADD_TODO":
			return [...state, {value: action.todo, complete: false}];

		case "COMPLETE_TODO":
			let nextState = [...state];
			let todoIdx = nextState.findIndex(todo => todo.value == action.todo);
			nextState[todoIdx].complete = true;
			return nextState;

		default:
			return state;
	}
}

function todosFilter(state = "all", action) {
	switch(action.type) {
		case "TOGGLE_TODOS":
			return action.filter;

		default:
			return state;
	}
}

/**
 * Export our root reducer
 */
export default combineReducers({
	counter,
	todos,
	todosFilter
});

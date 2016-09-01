import { combineReducers } from 'redux';

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
	todos,
	todosFilter
});

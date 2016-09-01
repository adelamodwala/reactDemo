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

		default:
			return state;
	}
}

/**
 * Export our root reducer
 */
export default combineReducers({
	counter,
	todos
});

import { combineReducers } from 'redux';
import {default as counter} from './counterReducer';

/**
 * Export our root reducer
 * @param  {Object-Reducer} {auth reducer}
 * @return {Object-Reducer} root reducer
 */
export default combineReducers({
	counter
});

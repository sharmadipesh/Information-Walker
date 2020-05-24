import { combineReducers } from 'redux';

// reducer files
import steps from 'redux/reducers/Steps';


const appReducer = combineReducers({
	steps,
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;

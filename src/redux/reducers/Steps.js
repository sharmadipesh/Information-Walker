import { REDUX_SETUP,SAVE_BUSINESS_STEP,SAVE_USER_IMAGE } from 'redux/Types';

const initial_state = {
	redux_setup: false,
	businessDetails:null,
	userImage:null
};

export default (state = initial_state, action) => {
	switch (action.type) {
		case REDUX_SETUP:
			return {
				...state,
				redux_setup: action.payload,
			};
		case SAVE_BUSINESS_STEP:
			return {
				...state,
				businessDetails: action.payload,
			};
		case SAVE_USER_IMAGE:
			return {
				...state,
				userImage: action.payload,
			};
		default:
			return state;
	}
};

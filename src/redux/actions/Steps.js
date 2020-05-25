import { REDUX_SETUP,SAVE_BUSINESS_STEP } from 'redux/Types';

export function reduxSetupChecker(successCallback, errorCallback) {
	return async function(dispatch) {
		try {
			await dispatch({
				type: REDUX_SETUP,
				payload: true,
			});
			successCallback && successCallback();
		} catch (e) {
			console.error(e);
			errorCallback && errorCallback(e.response.data.message);
		}
	};
}

export function setBusinessDetails(data,successCallback, errorCallback) {
	return async function(dispatch) {
		try {
			await dispatch({
				type: SAVE_BUSINESS_STEP,
				payload: data,
			});
			successCallback && successCallback();
		} catch (e) {
			console.error(e);
			errorCallback && errorCallback(e.response.data.message);
		}
	};
}

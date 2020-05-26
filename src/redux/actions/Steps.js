import { REDUX_SETUP,SAVE_BUSINESS_STEP,SAVE_USER_IMAGE } from 'redux/Types';
import { axiosNoAuth } from 'config/axios-instances';

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

export function saveUserImage(data,successCallback, errorCallback) {
	return async function(dispatch) {
		try {
			await dispatch({
				type: SAVE_USER_IMAGE,
				payload: data,
			});
			successCallback && successCallback();
		} catch (e) {
			console.error(e);
			errorCallback && errorCallback(e.response.data.message);
		}
	};
}

export function googlePlaceFinder(data, successCallback, errorCallback) {
	return async function(dispatch) {
		try {
			// let response = await axiosNoAuth.post(`https://maps.googleapis.com/maps/api/place/findplacefromtext/output?${data}&key=AIzaSyD-5nu_oYJXDsoEXqp2AZIco8Di5VsWUBY`);
			// let response = await axiosNoAuth.post(`https://maps.googleapis.com/maps/api/place/findplacefromtext/output?$ahmedabad&key=AIzaSyBomP_m0sSUygCO57zsSkKyuOJtb6qNm50`);
			let response = await axiosNoAuth.get(`http://maps.google.com/maps/api/js?sensor=false`);



			console.log("dddd ",response);
			successCallback && successCallback();
		} catch (e) {
			console.error(e);
			errorCallback && errorCallback(e.response.data.message);
		}
	};
}
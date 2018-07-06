import types from './actionTypes.jsx'
import psalmApi from '../api/psalmApi.jsx'
import {filter} from "lodash";

export const resetPsalms = () => (dispatch) => dispatch({type: types.RESET_PSALMS});

export const loadPsalmsSuccess = (data) => ({type: types.LOAD_PSALMS_SUCCESS, ...data});
export const loadPsalmSuccess = (data, psalmId) => ({type: types.LOAD_PSALM_SUCCESS, psalmId: psalmId, ...data});
export const loadCurrentPsalmSuccess = (data, psalmId) => ({type: types.LOAD_CURRENT_PSALM_SUCCESS, psalmId: psalmId, ...data});

export const loadPsalms = (payload, catchFunction, thenFunction) => (dispatch) => {
    return psalmApi.catchError(psalmApi.getAll(payload), catchFunction, thenFunction, response => {
        dispatch(loadPsalmsSuccess(response));
        return response;
    });
};

export  const  loadPsalmFromStore = (psalm, payload, catchFunction, thenFunction) => (dispatch) => {
    dispatch(loadCurrentPsalmSuccess(psalm.data, psalm.id));
    return psalm.data
};

export const loadPsalm = (psalmId, payload, catchFunction, thenFunction) => (dispatch) => {
    return psalmApi.catchError(psalmApi.getAll(payload), catchFunction, thenFunction, response => {
        dispatch(loadPsalmSuccess(response, psalmId));
        return filter(response.data, ['slug', psalmId.id]).shift();
    });
};

import types from './actionTypes.jsx'
import psalmApi from '../api/psalmApi.jsx'
export const resetPsalms = () => (dispatch) => dispatch({type: types.RESET_PSALMS});
export const loadPsalmsSuccess = (data) => ({type: types.LOAD_PSALMS_SUCCESS, ...data});

export const loadPsalms = (payload, catchFunction, thenFunction) => (dispatch) => {
    return psalmApi.catchError(psalmApi.getAll(payload), catchFunction, thenFunction, response => {
        dispatch(loadPsalmsSuccess(response));
        return response;
    });
};
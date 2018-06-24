import types from './actionTypes.jsx'
import postApi from '../api/postApi.jsx'
export const resetPosts = () => (dispatch) => dispatch({type: types.RESET_POSTS});
export const loadPostsSuccess = (data) => ({type: types.LOAD_POSTS_SUCCESS, ...data});

export const loadPosts = (payload, catchFunction, thenFunction) => (dispatch) => {
    return postApi.catchError(postApi.getAll(payload), catchFunction, thenFunction, response => {
        dispatch(loadPostsSuccess(response));
        return response;
    });
};
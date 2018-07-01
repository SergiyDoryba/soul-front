import {cloneDeep} from 'lodash'
import types from '../actions/actionTypes.jsx'
import initialState from './initialState.jsx'

const postsReducer = (state = initialState.posts, action) => {
    let newState = null;
    let objIndex = null;
    switch (action.type) {
        case types.RESET_POSTS:
            return initialState.psalms;
        case types.LOAD_POSTS_SUCCESS:
            newState = cloneDeep(state);
            newState.posts = action.data;
            return newState;
        case types.LOAD_POST_SUCCESS:
            newState = cloneDeep(state);
            newState.data[action.post.id] = action.post;
            newState.posts.push(action.post.id);
            return newState;
        default:
            return state;
    }
};

export default postsReducer;

export const postsSelector = (state) => {
    return state.posts
};

import {cloneDeep, filter} from 'lodash'
import types from '../actions/actionTypes.jsx'
import initialState from './initialState.jsx'

const psalmsReducer = (state = initialState.psalms, action) => {
    let newState = null;
    let objIndex = null;
    switch (action.type) {
        case types.RESET_PSALMS:
            return initialState.psalms;
        case types.LOAD_PSALMS_SUCCESS:
            newState = cloneDeep(state);
            newState.psalms = action.data;
            // action.data.forEach(psalm => newState.data[psalm.id] = psalm)
            // newState.psalms = action.data.map(psalm => psalm.id);
            return newState;
        case types.LOAD_PSALM_SUCCESS:
            newState = cloneDeep(state);
            newState.psalms = action.data;
            newState.current = filter(action.data, ['id', parseInt(action.psalmId.id)]).shift()
            return newState;
        default:
            return state;
    }
};

export default psalmsReducer;

export const psalmSelector = (state, id) => {
    return {psalm: state.psalms.current}
};

export const psalmsSelector = (state) => {
    return state.psalms
};

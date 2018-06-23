const initialState = ''

export default function filterPsalms(state = initialState, action) {
    if (action.type === 'FIND_PSALMS') {
        return action.payload
    }
    return state;
}
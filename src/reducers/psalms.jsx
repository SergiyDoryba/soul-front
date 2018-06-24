const initialState = []

export default function psalms(state = initialState, action) {
    if (action.type === 'ADD_PSALM') {
        return [...state, action.payload]
    } else if (action.type === 'FETCH_PSALMS_SUCCESS') {
        return action.payload
    }
    return state;
}

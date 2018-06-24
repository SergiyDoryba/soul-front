const initialState = []

export default function posts(state = initialState, action) {
    if (action.type === 'ADD_POST') {
        return [...state, action.payload]
    } else if (action.type === 'FETCH_POSTS_SUCCESS') {
        return action.payload
    }
    return state;
}

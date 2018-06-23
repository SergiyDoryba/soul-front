import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import filterPsalms from './filterPsalms.jsx'
import psalms from './psalms.jsx'
import posts from './posts.jsx'


const rootReducer = combineReducers({
    routing: routerReducer,
    psalms,
    filterPsalms,
    posts,
});

export default rootReducer;
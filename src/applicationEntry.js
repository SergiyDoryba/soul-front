import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './routes.jsx'
import App from './app.jsx'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers/index.jsx'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './application.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

App.store = store;
window.app = App;

class Application extends React.Component {

    render() {
        return <Provider store={store}>
            <Routes/>
        </Provider>;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Application name='React'/>, document.getElementById('root'))}
);

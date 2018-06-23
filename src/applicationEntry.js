import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers/index.jsx'

import {ThemeProvider} from 'react-jss'
import theme from './theme.jsx'
import App from './components/App.jsx'

// TODO BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import '../public/assets/application.css'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

class ApplicationRoot extends Component {
    render() {
        return <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </ThemeProvider>;
    }
}
export default ApplicationRoot

ReactDom.render(<ApplicationRoot/>, document.getElementById('rootAppEntry'));

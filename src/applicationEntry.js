import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {ThemeProvider} from 'react-jss'
import theme from './theme.jsx'
import App from './components/App.jsx'
// TODO BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';

class ApplicationRoot extends Component {
    render() {
        return <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>;
    }
}
export default ApplicationRoot

ReactDom.render(<ApplicationRoot/>, document.getElementById('rootAppEntry'));

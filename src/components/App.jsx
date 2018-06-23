import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from '../routes.jsx'
import TopNav from './navigation/TopNav.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div className="main_block">
                    <TopNav/>
                    <hr/>
                    <Routes/>
                </div>
            </Router>
        );
    }
}

export default App;

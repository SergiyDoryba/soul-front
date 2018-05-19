import React, { Component } from 'react'
import TopNav from './navigation/TopNav.jsx';
import LeftNav from './navigation/LeftNav.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <TopNav/>
                <div className="container-fluid">
                    <div className="row">
                        <LeftNav/>
                    </div>
                </div>
            </div>);
    }
}

export default App;

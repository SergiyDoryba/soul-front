import React, { Component } from 'react'
import Psalms from './Psalms.jsx'

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Psalms/>
            </div>);
    }
}

export default App;

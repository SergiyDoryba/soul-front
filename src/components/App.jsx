import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from '../routes.jsx'
import TopNav from './navigation/TopNav.jsx';
// import LeftNav from './navigation/LeftNav.jsx';
//
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <TopNav/>
                    <br/>
                    <br/>
                    <hr/>
                    <Routes/>
                </div>
            </Router>
        );
//             <div>
//                 <TopNav/>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <LeftNav/>
//                     </div>
//                 </div>
//             </div>

    }
}

export default App;

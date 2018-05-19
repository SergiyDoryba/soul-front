import React, { Component } from 'react'

class Psalms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            psalms: []
        }
    }

    componentWillMount(){
      fetch('http://api.myjson.com/bins/hvo82')
        .then(res => res.json())
        .then(data => this.setState({ psalms: data }));
    }

    render() {
        const psalmsItems = this.state.psalms.map(psalm => (
            <li className="nav-item" key={psalm.id}>
                <a className="nav-link" href="#">{psalm.name_ua}</a>
            </li>
        ));
        return (<ul className="nav flex-column">
                    {psalmsItems}
                </ul>);
    }
}

export default Psalms;

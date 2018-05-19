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
            <div key={psalm.id}>
                <h3>{psalm.name_ua}</h3>
                <span>{psalmsItems}</span>
            </div>
        ));
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Psalms</h1>
                <div>{psalmsItems}</div>
            </div>);
    }
}

export default Psalms;

import React, { Component } from 'react'

class ButtomNav extends Component {
    componentWillMount(){
        console.log('mount TopNav');
    }

    render() {
        return (
            <div className="navigation-buttom">
                <h3>TopNav Place</h3>
            </div>);
    }
}

export default ButtomNav;
import React, { Component } from 'react'
import PsalmList from './list.jsx'

class Psalms extends Component {

    render() {
        return(<div className='row'>
            <div className='col-md-4'>
                <PsalmList/>
            </div>
            <div className='col-md-8'>

            </div>
        </div>)
    }
}

export default Psalms;

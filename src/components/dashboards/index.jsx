import React, { Component } from 'react'
import PsalmList from '../psalms/list.jsx'

class Dashboards extends Component {
    render() {
        return(<div className='row'>
            <div className='col-md-12'>
                <PsalmList/>
            </div>
        </div>)
    }
}

export default Dashboards;
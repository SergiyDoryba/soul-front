import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import * as psalmActions from '../../actions/psalmActions.jsx'
import {psalmsSelector} from '../../reducers/psalmsReducer.jsx'

class Psalms extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.loadPsalms();
    }
    render() {
        const psalmsItems = this.props.psalms.map(
            (psalm) => (
                <li className="list-group-item list-group-item-action" key={psalm.id}>
                    <a className="nav-link" href="#">
                        {psalm.name_ua}
                        {/*<Link to={{pathname: Paths.psalmPath({id: psalm.id}), state: {psalm: psalm}}} className="btn btn-default">show</Link>*/}
                    </a>
                </li>));
        return(<div className='row'>
            <div className='col-md-4'>
                <ul className="list-group">
                    {psalmsItems}
                </ul>
            </div>
            <div className='col-md-8'>

            </div>
        </div>)
    }
}

function mapStateToProps(state, ownProps) {
    return psalmsSelector(state);
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(psalmActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Psalms);

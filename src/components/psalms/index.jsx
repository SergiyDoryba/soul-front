import React, { Component } from 'react'
import {connect} from 'react-redux'
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
        console.log(this.props.psalms)
        // const psalmsItems = this.props.psalms.forEach((psalm) => (<li className="nav-item" key={psalm.id}><a className="nav-link" href="#">{psalm.name_ua}</a></li>));
        return(<div>
            <ul className="nav flex-column">
                Psalms
                {JSON.stringify(this.props.psalms)}
                {/*{psalmsItems}*/}
            </ul>
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

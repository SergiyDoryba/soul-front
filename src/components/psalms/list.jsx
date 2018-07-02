import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as psalmActions from '../../actions/psalmActions.jsx'
import {psalmsSelector} from '../../reducers/psalmsReducer.jsx'
import Psalm from './psalm.jsx'

class PsalmList extends Component {
    componentDidMount() {
        this.props.actions.loadPsalms();
    }
    render() {
        const styleBlock = {
            overflow: 'auto',
            maxHeight: '92vh',
            color: 'red',
            height: '100vh'
        }
        const psalmsItems = this.props.psalms.map((psalm) => (<Psalm key={psalm.id} psalm={psalm}/>));
        return(
            <ul className="list-group psalm-navigation" style={styleBlock}>
                {psalmsItems}
            </ul>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(PsalmList);
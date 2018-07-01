import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as psalmActions from '../../actions/psalmActions.jsx'
import {psalmSelector} from '../../reducers/psalmsReducer.jsx'
import PsalmList from './list.jsx'

class PsalmShow extends Component {
    componentDidMount() {
        if (!this.props.psalm) {
            this.props.actions.loadPsalm({id: this.props.match.params.id});
        }
    }

    render() {
        return(<div className='row'>
            <div className='col-md-4'>
                <PsalmList/>
            </div>
            <div className='col-md-8'>
                {JSON.stringify(this.props.psalm)}
            </div>
        </div>)
    }
}

function mapStateToProps(state, ownProps) {
    return psalmSelector(state, ownProps.match.params.id);
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(psalmActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PsalmShow);
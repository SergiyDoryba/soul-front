import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Collapse, { Panel } from 'rc-collapse'
import * as psalmActions from '../../actions/psalmActions.jsx'
import {psalmSelector} from '../../reducers/psalmsReducer.jsx'
import PsalmList from './list.jsx'

class PsalmShow extends Component {
    componentDidMount() {
        if(!this.props.psalm){
            this.props.actions.loadPsalm({id: this.props.match.params.id});
        }
    }

    render() {
        const psalmsItems = this.props.psalm ?
            this.props.psalm.psalms.map((psalm) => (
            <Panel key={psalm.id}
                   header={psalm.name}
                   headerClass="my-header-class">
                <span>Позиція Стара: {psalm.position_old}</span>
                <br />
                <span>позиція Нова: {psalm.position_new}</span>
                <br />
                <a href={psalm.link_url} target="_blank">{psalm.name}</a>
            </Panel>))
         : null
        return(<div className='row'>
            <div className='col-md-4'>
                <PsalmList/>
            </div>
            <div className='col-md-8'>
                <h3>{this.props.psalm ? this.props.psalm.name_ua : null}</h3>
                <Collapse accordion={false}>
                    {psalmsItems}
                </Collapse>
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
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Collapse, { Panel } from 'rc-collapse'
import * as psalmActions from '../../actions/psalmActions.jsx'
import {psalmSelector} from '../../reducers/psalmsReducer.jsx'
import PsalmList from './list.jsx'
import PanelItem from './panelItem.jsx'

class PsalmShow extends Component {

    componentDidMount() {
        if(!this.props.location.state){
            this.props.actions.loadPsalm({id: this.props.match.params.id});
        }
    }

    checkObject() {
        if (this.props.psalm == undefined && this.props.location.state == undefined)
            return null
        else if (this.props.psalm)
            return this.props.psalm
        else if (this.props.location.state)
            return this.props.location.state.psalm
    }

    render() {
        const psalmsItems = (this.checkObject()) ? this.checkObject().psalms.map((psalm) => (<PanelItem key={psalm.id} psalm={psalm}/>)) : null

        return(<div className='row'>
            <div className='col-md-4'>
                <PsalmList/>
            </div>
            <div className='col-md-8'>
                <h3>{this.checkObject() ? this.checkObject().name_ua : null}</h3>
                <ul className="list-group">
                    {psalmsItems}
                </ul>
                {/*<Collapse accordion={false}>*/}
                    {/*{psalmsItems}*/}
                {/*</Collapse>*/}
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
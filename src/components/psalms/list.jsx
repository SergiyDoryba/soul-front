import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as psalmActions from '../../actions/psalmActions.jsx'
import {psalmsSelector} from '../../reducers/psalmsReducer.jsx'
import Psalm from './psalm.jsx'
import Loader from '../common/loader.jsx'

class PsalmList extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        if (!this.props.psalms.length > 0) {
            this.props.actions.loadPsalms();
            this.setState({loading: false});
        }
    }

    render() {
      const styleBlock = {
        overflow: 'auto',
        maxHeight: '92vh',
        color: 'red',
        height: '100vh'
      }

      const psalmsItems = this.props.psalms.map((psalm) => (<Psalm key={psalm.id} psalm={psalm} activeElement={this.props.activeElement} />));
      let content = !this.props.psalms.length > 0 ? <Loader /> : <ul className="list-group psalm-navigation" style={styleBlock}>{psalmsItems}</ul>
      return content;
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
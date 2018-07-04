import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'

import * as psalmActions from '../../actions/psalmActions.jsx'
import Paths from '../../paths.jsx'

class Psalm extends React.Component {
    onClickPsalm() {
        this.props.actions.loadPsalmFromStore({id: this.props.psalm.slug, data: this.props.psalm.slug});
    }

    render () {
        return <li className="list-group-item list-group-item-action">
            <Link to={{pathname: Paths.psalmPath({id: this.props.psalm.slug}), state: {psalm: this.props.psalm}}} className="nav-link" onClick={this.onClickPsalm.bind(this)}>{this.props.psalm.name_ua}</Link>
        </li>;
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(psalmActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Psalm);

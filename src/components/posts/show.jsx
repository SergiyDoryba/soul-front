import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as postActions from '../../actions/postActions.jsx'

class PostShow extends Component {
    componentDidMount() {
        if (!this.props.post) {
            this.props.actions.loadPost({id: this.props.match.params.id});
        }
    }

    render() {
        return(<div>
            Show Post
            {JSON.stringify(this.props.post)}
        </div>)
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
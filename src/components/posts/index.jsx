import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as postActions from '../../actions/postActions.jsx'
import {postsSelector} from '../../reducers/postsReducer.jsx'

class Posts extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.loadPosts();
    }

    render() {
        console.log(this.props.posts)
        return(<div>
            <ul className="nav flex-column">
                Posts
                {JSON.stringify(this.props.posts)}

            </ul>
        </div>)
    }
}

function mapStateToProps(state, ownProps) {
    return postsSelector(state);
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
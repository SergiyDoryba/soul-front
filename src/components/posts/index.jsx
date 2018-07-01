import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Paths from "../../paths.jsx";
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
        const postItems = this.props.posts.map((post) => (
            <li className="list-group-item list-group-item-action" key={post.id}>
                <Link to={{pathname: Paths.postPath({id: post.id}), state: {post: post}}} className="nav-link">{post.title}</Link>
            </li>));
        return(<div className='row'>
            <div className='col-md-4'>
                <ul className="list-group">
                    {postItems}
                </ul>
            </div>
            <div className='col-md-8'>

            </div>
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
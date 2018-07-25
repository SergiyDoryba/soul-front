import React, { Component } from 'react'

class PanelItem extends Component {

    render() {
        return <li className="list-group-item list-group-item-action">
            <span>
                 {this.props.psalm.position_old} ({this.props.psalm.position_new}) </span>
            <a href={this.props.psalm.link_url} target="_blank">{this.props.psalm.name}</a>
         </li>
    }
}

export default PanelItem;

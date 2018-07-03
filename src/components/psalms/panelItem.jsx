import React, { Component } from 'react'
import { Panel } from 'rc-collapse'

class PanelItem extends Component {

    render() {
        return <li>
            <span>{this.props.psalm.position_old}(this.props.psalm.position_new) {this.props.psalm.name}</span>
            <a href={this.props.psalm.link_url} target="_blank">{this.props.psalm.name}</a>
        </li>

        // return(<Panel header={this.props.psalm.name}
        //               headerClass="my-header-class">
        //     <span>Позиція Стара: {this.props.psalm.position_old}</span>
        //     <br />
        //     <span>позиція Нова: {this.props.psalm.position_new}</span>
        //     <br />
        //     <a href={this.props.psalm.link_url} target="_blank">{this.props.psalm.name}</a>
        //  </Panel>)
    }
}

export default PanelItem;

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {IndexLinkContainer as LinkContainer} from 'react-router-bootstrap'


const NavbarLi = (props) => {
    const {active, activeKey, activeHref, onSelect, ...restProps} = props;
    return <li {...restProps}>{props.children}</li>;
};
class Navigation extends React.Component {
    render() {
        return <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" style={{backgroundColor: '#e3f2fd'}}>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Soul</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar>
                <Nav pullLeft>
                    <LinkContainer to="/psalms">
                        <NavItem href="/psalms">Psalms</NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <LinkContainer to="/about">
                        <NavItem href="/about">About</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/posts">
                        <NavItem href="/posts">Posts</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </nav>;
    }
}


export default Navigation;

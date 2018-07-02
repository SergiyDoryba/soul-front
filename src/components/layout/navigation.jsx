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
        return <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">for Soul</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <LinkContainer className="nav-item" to="/psalms">
                          <NavItem className="nav-link" href="/psalms">Psalms</NavItem>
                        </LinkContainer>
                        {/*<LinkContainer className="nav-item" to="/posts">*/}
                            {/*<NavItem className="nav-link" href="/posts">Posts</NavItem>*/}
                        {/*</LinkContainer>*/}
                        {/*<LinkContainer className="nav-item" to="/about">*/}
                            {/*<NavItem className="nav-link" href="/about">About</NavItem>*/}
                        {/*</LinkContainer>*/}
                    </ul>
                    {/*<form className="form-inline my-2 my-lg-0">*/}
                        {/*<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
                        {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                    {/*</form>*/}
                </div>
            </nav>
        </div>;
    }
}


export default Navigation;

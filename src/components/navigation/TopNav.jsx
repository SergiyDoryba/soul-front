import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {IndexLinkContainer as LinkContainer} from 'react-router-bootstrap'


const NavbarLi = (props) => {
    const {active, activeKey, activeHref, onSelect, ...restProps} = props;
    return <li {...restProps}>{props.children}</li>;
};

class TopNav extends Component {

    render() {
        return <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Soul</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar>
                <Nav pullRight>
                    <LinkContainer to="/psalms">
                        <NavItem href="/psalms">Psalms</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </Navbar>;


        return <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    {/*<Link to="/"><img src={require('logo.png')} alt="Soul"/></Link>*/}
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>

                <Nav pullRight>
                    <NavbarLi>
                        {/*<AutorizedUser user={this.props.auth.user} profile={this.props.profile}/>*/}
                    </NavbarLi>
                </Nav> :
                <Nav pullRight>
                    <LinkModal modal="SignIn">
                        <NavItem eventKey={3}>Sign In</NavItem>
                    </LinkModal>
                    <LinkModal modal="SignUp">
                        <NavItem eventKey={3}>Sign Up</NavItem>
                    </LinkModal>
                </Nav>
                <Nav pullRight>
                    {/*<LinkContainer to={Paths.adminPath()}>*/}
                        {/*<NavItem eventKey={2} href={Paths.adminPath()}>Admin</NavItem>*/}
                    {/*</LinkContainer>*/}
                    {/*<LinkContainer to={Paths.searchPath()}>*/}
                        {/*<NavItem href={Paths.searchPath()}>Search</NavItem>*/}
                    {/*</LinkContainer>*/}
                    {/*<LinkContainer to={Paths.accountPath()}>*/}
                        {/*<NavItem href={Paths.accountPath()}>Account</NavItem>*/}
                    {/*</LinkContainer>*/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>;

        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" style={{backgroundColor: '#e3f2fd'}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <Link to="/psalms">Psalms</Link>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <Link to="/posts">Posts</Link>
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        <Link to="/about">About</Link>
                    </NavItem>
                </Nav>
            </nav>
        );
    }
}

export default TopNav;
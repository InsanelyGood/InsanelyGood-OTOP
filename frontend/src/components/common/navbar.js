import React from 'react'
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap'

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render = () => {
        return (<div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">OTOPaholic</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href='/search'>Search</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/products">Product</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>);
    }
}

export default NavBar
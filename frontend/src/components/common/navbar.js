import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import '../../css/navbar.css'

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
    return <div>
        <Navbar className='top-navbar' dark={true} expand="md">
          <NavbarBrand href="/">OTOPaholic</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true} >
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink href="/north">north</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/central">central</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/south">south</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/northeast">northeast</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">all</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/search">
                  Search
                  <i className="fas fa-search" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart">cart</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users/login">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>;
  }
}

export default NavBar

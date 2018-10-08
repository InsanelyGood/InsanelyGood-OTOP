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
    return (<div>
      <Navbar dark="dark" expand="md">
        <NavbarBrand href="/">OTOPaholic</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar="navbar">
          <Nav className="ml-auto" navbar="navbar">
            <NavItem>
              <NavLink href='/north'>north</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/central'>central</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/south'>south</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/northeast'>northeast</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">all</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/search'>Search<i class="fas fa-search"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/cart'>cart</NavLink>
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

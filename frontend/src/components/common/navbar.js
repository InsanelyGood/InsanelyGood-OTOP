import React, { Fragment } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import {getUsername} from '../../api/user_infomation'
import Cookie from "js-cookie";
import "../../css/navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      firstname: ''
    };
  }

  async componentDidMount() {
    const info = await getUsername(Cookie.get('username'))
    this.setState({
      username: info.username,
      firstname: info.firstname
    })
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  onLogoutClicked = () => {
    Cookie.remove("username");
  };

  render = () => {
    return (
      <div>
        <Navbar className="top-navbar" dark={true} expand="md">
          <NavbarBrand href="/">OTOPaholic</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink href="#">NORTHEN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">CENTRAL</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">SOUTHEN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">NORTHEASTEN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">ALL</NavLink>
              </NavItem>
              {Cookie.get("username") ? (
                <Fragment>
                  <NavItem>
                    <NavLink href="/cart"><ion-icon name="ios-cart"></ion-icon>CART</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav caret>
                    <ion-icon name="md-contact"></ion-icon>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>HI, {this.state.firstname}</DropdownItem>
                      <DropdownItem className="cilckable" href="http://localhost:3000/users/information/" >Profile</DropdownItem>
                      <DropdownItem className="cilckable" href="http://localhost:3000/users/information/edit">Edit Profile</DropdownItem>
                      <DropdownItem className="cilckable" href="http://localhost:3000/users/information/edit">Change Password</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={this.onLogoutClicked} href="/">Log Out</DropdownItem>
                    </DropdownMenu>
                  </NavDropdown>
                  </NavItem>
                </Fragment>
              ) : (
                <NavItem>
                  <NavLink href="/users/login">Login</NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };
}

export default NavBar;

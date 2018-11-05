import React, { Fragment } from "react";
import {
  Navbar,
  NavbarBrand,
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
      dropdownUserOpen: false,
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

  toggleUser = () => {
    this.setState({
      dropdownUserOpen: !this.state.dropdownUserOpen
    });
  };

  toggleShop = () => {
    this.setState({
      dropdownShopOpen: !this.state.dropdownShopOpen
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
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>

              <NavItem>
                <NavDropdown isOpen={this.state.dropdownShopOpen} toggle={this.toggleShop}>
                <DropdownToggle nav caret>
                PRODUCTS
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="cilckable" href="http://localhost:3000/products" >ALL</DropdownItem>
                  <DropdownItem className="cilckable" href="#">NORTHEN</DropdownItem>
                  <DropdownItem className="cilckable" href="#">CENTRAL</DropdownItem>
                  <DropdownItem className="cilckable" href="#">SOUTHEN</DropdownItem>
                  <DropdownItem className="cilckable" href="#">NORTHEASTEN</DropdownItem>
                </DropdownMenu>
              </NavDropdown>
              </NavItem>
              {Cookie.get("username") ? (
                <Fragment>
                  <NavItem>
                    <NavLink href="/cart"><ion-icon name="ios-cart"></ion-icon>CART</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavDropdown isOpen={this.state.dropdownUserOpen} toggle={this.toggleUser}>
                    <DropdownToggle nav caret>
                    <ion-icon name="md-contact"></ion-icon>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>HI, {this.state.firstname}</DropdownItem>
                      <DropdownItem className="cilckable" href="http://localhost:3000/users/information/" >Profile</DropdownItem>
                      <DropdownItem className="cilckable" href="http://localhost:3000/users/information/edit">Edit Profile</DropdownItem>
                      <DropdownItem className="cilckable" href="http://localhost:3000/users/information/changePassword">Change Password</DropdownItem>
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

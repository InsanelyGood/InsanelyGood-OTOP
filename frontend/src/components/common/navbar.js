import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  NavbarToggler
} from "reactstrap";
import { getUsername } from "../../api/user_infomation";
import Cookie from "js-cookie";
import "../../css/navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      dropdownUserOpen: false,
      dropdownAdminOpen: false,
      firstname: "",
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  async componentDidMount() {
    if (Cookie.get("username")) {
      const info = await getUsername(Cookie.get("username"));
      this.setState({
        username: info.username,
        firstname: info.firstname
      });
    }
  }

  toggleUser = () => {
    this.setState({
      dropdownUserOpen: !this.state.dropdownUserOpen
    });
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggleAdmin = () => {
    this.setState({ dropdownAdminOpen: !this.state.dropdownAdminOpen });
  };

  // toggleShop = () => {
  //   this.setState({
  //     dropdownShopOpen: !this.state.dropdownShopOpen
  //   });
  // };

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  onUserMouseEnter = () => {
    this.setState({ dropdownUserOpen: true });
  };

  onUserMouseLeave = () => {
    this.setState({ dropdownUserOpen: false });
  };

  onAdminMouseEnter = () => {
    this.setState({ dropdownAdminOpen: true });
  };

  onAdminMouseLeave = () => {
    this.setState({ dropdownAdminOpen: false });
  };

  onLogoutClicked = () => {
    Cookie.remove("username");
    Cookie.remove("role");
  };

  toggleResponsive = () => {
    this.setState({ isOpen: true });
  };

  render = () => {
    return <div>
        <Navbar className="top-navbar" dark={true} expand="md">
          <NavbarBrand href="/">OTOPaholic</NavbarBrand>
          <NavbarToggler onClick={this.toggleResponsive} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              {Cookie.get("role") === "admin" && <NavItem>
                  <Dropdown onMouseOver={this.onAdminMouseEnter} onMouseLeave={this.onAdminMouseLeave} isOpen={this.state.dropdownAdminOpen} toggle={this.toggleAdmin}>
                    <DropdownToggle nav caret>
                      ADMIN
                    </DropdownToggle>
                    <DropdownMenu>
                      <Link className="clickable" to="/admin/orders">
                        <DropdownItem>ORDERS</DropdownItem>
                      </Link>
                      <Link className="clickable" to="/admin/products">
                        <DropdownItem>PRODUCTS</DropdownItem>
                      </Link>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>}
              <NavItem>
                <Dropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle nav caret>
                    PRODUCTS
                  </DropdownToggle>
                  <DropdownMenu>
                    {/* <DropdownItem className="cilckable" href="http://localhost:3000/products">
                      ALL
                    </DropdownItem>
                    <DropdownItem className="cilckable" href="#">
                      NORTHEN
                    </DropdownItem>
                    <DropdownItem className="cilckable" href="#">
                      CENTRAL
                    </DropdownItem>
                    <DropdownItem className="cilckable" href="#">
                      SOUTHEN
                    </DropdownItem>
                    <DropdownItem className="cilckable" href="#">
                      NORTHEASTEN
                    </DropdownItem> */}
                    <Link className="clickable" to = {{pathname: '/products', state: {renderState: '',types: []}}}>ALL</Link><br/>
                    <Link className="clickable" to = {{pathname: '/products', state: {renderState: 'filter',types: ['north']}}}>NORTHEN</Link><br/>
                    <Link className="clickable" to = {{pathname: '/products', state: {renderState: 'filter',types: ['central']}}}>CENTRAL</Link><br/>
                    <Link className="clickable" to = {{pathname: '/products', state: {renderState: 'filter',types: ['south']}}}>SOUTHEN</Link><br/>
                    <Link className="clickable" to = {{pathname: '/products', state: {renderState: 'filter',types: ['west']}}}>WESTEN</Link><br/>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              {Cookie.get("username") ? <Fragment>
                  <NavItem>
                    <NavLink href="/cart">
                      <ion-icon name="ios-cart" />
                      CART
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Dropdown onMouseOver={this.onUserMouseEnter} onMouseLeave={this.onUserMouseLeave} isOpen={this.state.dropdownUserOpen} toggle={this.toggleUser}>
                      <DropdownToggle nav caret>
                        <ion-icon name="md-contact" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>
                          HI, {this.state.firstname}
                        </DropdownItem>
                        <DropdownItem className="cilckable" href="http://localhost:3000/users/information/">
                          Profile
                        </DropdownItem>
                        <DropdownItem className="cilckable" href="http://localhost:3000/users/information/edit">
                          Edit Profile
                        </DropdownItem>
                        <DropdownItem className="cilckable" href="http://localhost:3000/users/information/changePassword">
                          Change Password
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={this.onLogoutClicked} href="/">
                          Log Out
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                </Fragment> : <NavItem>
                  <NavLink href="/users/login">Login</NavLink>
                </NavItem>}
            </Nav>
          </Collapse>
        </Navbar>
      </div>;
  };
}

export default NavBar;

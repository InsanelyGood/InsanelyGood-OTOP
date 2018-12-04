import React, { Component } from "react";
import { Button } from "reactstrap";
import "../css/purchase.css";
import logo from "../images/logo_black.jpg";
import { Link } from "react-router-dom";

class Purchased extends Component {
  render() {
    return (
      <div>
        <div className="container" align="center">
          <img className="logoBlack" src={logo} alt="OTOPAholic_LOGO" />
          <p className="pur">Thank you for your purchase.</p>
          <br />
          <Link to="/cart">
            <Button size="lg" className="buttonShop">
              My Cart
            </Button>
          </Link>{" "}
          <Link
            to={{
              pathname: "/products",
              state: { renderState: "", types: [] }
            }}
          >
            <Button size="lg" className="buttonHome">
              Shop more
            </Button>
          </Link>{" "}
        </div>
      </div>
    );
  }
}
export default Purchased;

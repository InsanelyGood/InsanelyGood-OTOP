import React from "react";
import styled from "styled-components";
import CartTable from "../components/cart/cart_table";
import { getProductCart } from "../api/user_cart";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const CartComponent = styled.div`
  padding-top: 5em;
`;
const RightDiv = styled.div`
  padding-top: 2em;
  text-align: right;
`;
const CheckoutButton = styled.button`
  margin-right: 3em;
  display: inline-block;
  border-radius: 4px;
  background-color: #57a9bb;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`;

const ShopMore = styled.button`
  margin-right: 1em;

  position: relative;
  background-color: #ff6666;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  color: #ffffff;
  padding: 10px;
  width: 200px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  &:after {
    content: "";
    background: #ff9999;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: []
    };
  }

  async componentDidMount() {
    this.setState({
      carts: await getProductCart(Cookies.get("username"))
    });
  }

  render() {
    return (
      <CartComponent>
        <h1>Your Cart</h1>
        <CartTable cartItem={this.state.carts} />
        <RightDiv className="container">
        <Link to='/products'>
          <ShopMore>Shopping More!!</ShopMore>
        </Link>
          <Link to="/">
            <CheckoutButton>
              <span>Checkout</span>
            </CheckoutButton>
          </Link>
        </RightDiv>
      </CartComponent>
    );
  }
}

export default Cart;
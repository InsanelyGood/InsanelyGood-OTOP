import React from "react";
import styled from "styled-components";
import CartTable from "../components/cart/cart_table";
import { getProductCart } from "../api/user_cart";
import Cookies from "js-cookie";

const CartComponent = styled.div`
  padding-top: 5em;
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
      </CartComponent>
    );
  }
}

export default Cart;

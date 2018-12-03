import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CartItem from './cart_item'

const Table = styled.table`
  width: 100%;
`;
const TDCenter = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;
const TH = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 18px;
`;
const THCenter = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 18px;
  text-align: center;
`;

class CartTable extends React.Component {
  renderItemInCart = () => {
    return this.props.cartItem.map(item => (
      <CartItem item={item} key={item.product._id} />
    ));
  };

  renderTotalPrice = () => {
    let total = 0;
    this.props.cartItem.map(
      item => (total += item.product.price * item.quantity)
    );
    return (
      <tr>
        <td />
        <td />
        <td>Total</td>
        <TDCenter>{total}</TDCenter>
      </tr>
    );
  };

  render() {
    return (
      <div className="container mt-5">
        <Table align="center">
          <thead>
            <tr>
              <TH width="25%">Name</TH>
              <THCenter width="25%">Price</THCenter>
              <THCenter width="25%">Quantity</THCenter>
              <THCenter width="25%">Total</THCenter>
            </tr>
          </thead>
          <tbody>
            {this.renderItemInCart()}
            {this.renderTotalPrice()}
          </tbody>
        </Table>
      </div>
    );
  }
}

CartTable.propTypes = {
  cartItem: PropTypes.array
};

CartTable.defaultProps = {
  cartItem: []
};

export default CartTable;

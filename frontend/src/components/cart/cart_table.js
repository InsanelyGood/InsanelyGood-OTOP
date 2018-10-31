import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Table = styled.table`
  width: 100%;
`;

class CartTable extends React.Component {
  renderItemInCart = () => {
    return this.props.cartItem.map(item => <tr key={item._id}>
      <td>Name</td>
      <td>{item.quantity}</td>
      <td>1000</td>
    </tr>)
  };

  render() {
    return (
      <div className="container">
        <Table align="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItemInCart()}
          </tbody>
        </Table>
      </div>
    );
  }
}

CartTable.propTypes = {
  cartItem: PropTypes.array
}

CartTable.defaultProps = {
  cartItem: []
}

export default CartTable;

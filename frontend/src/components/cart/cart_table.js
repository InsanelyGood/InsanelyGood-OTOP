import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

const Table = styled.table`
  width: 100%;
`;
const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
const TH = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;
const RemoveItem = styled.button`
  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
    transition: 0.75s;
  }
`;
const Image = styled.img`
  width: 30%;
  padding-right: 5px;
`;

class CartTable extends React.Component {
  renderItemInCart = () => {
    return this.props.cartItem.map(item => (
      <tr key={item.product._id}>
        <TD>
          <Image src={item.product.image} alt="No Image" />
          {item.product.name}
        </TD>
        <TD>{item.product.price}</TD>
        <TD>
          <form action="http://localhost:8000/users/cart/add" method="POST">
            <input type="number" defaultValue={item.quantity} name="quantity" />
            <input type="hidden" value={item.product.id} name="productID" />
            <input
              type="hidden"
              value={Cookies.get("username")}
              name="username"
            />
          </form>
        </TD>
        <TD>{item.product.price * item.quantity}</TD>
        <TD width="1px">
          <form action="http://localhost:8000/users/cart/remove" method="POST">
            <RemoveItem type="submit">&times;</RemoveItem>
            <input type="hidden" value={item.product.id} name="productID" />
            <input
              type="hidden"
              value={Cookies.get("username")}
              name="username"
            />
          </form>
        </TD>
      </tr>
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
        <TD>{total}</TD>
      </tr>
    );
  };

  render() {
    return (
      <div className="container">
        <Table align="center">
          <thead>
            <tr>
              <TH>Name</TH>
              <TH width="30px">Price</TH>
              <TH width="20px">Quantity</TH>
              <TH width="100px">Total</TH>
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

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
const RemoveItem = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  color: #999999;
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
const InputQuantity = styled.input`
  width: 50px;
  text-align: center;
`;
const QuantityDiv = styled.div`
  display: flex;
  justify-content: center;
  border-color: black;
`;
const QuantityButton = styled.button`
  background-color: transparent;
  border: none;
`;

class CartTable extends React.Component {
  renderUpdateQuantityComponent = (item, inputType) => {
    return (
      <form action="http://localhost:8000/users/cart/add" method="POST">
        {inputType}
        <input type="hidden" value={item.product.id} name="productID" />
        <input type="hidden" value={Cookies.get("username")} name="username" />
      </form>
    );
  };

  renderItemInCart = () => {
    return this.props.cartItem.map(item => (
      <tr key={item.product._id}>
        <TD>
          <Image src={item.product.image} alt="No Image" />
          {item.product.name}
        </TD>
        <TDCenter>{item.product.price}</TDCenter>
        <TDCenter>
          <QuantityDiv>
            {this.renderUpdateQuantityComponent(
              item,
              <div>
                <QuantityButton type="submit" disabled={item.quantity <= 1}>
                  <ion-icon name="remove-circle" />
                </QuantityButton>
                <input
                  type="hidden"
                  value={item.quantity - 1}
                  name="quantity"
                />
              </div>
            )}
            {this.renderUpdateQuantityComponent(
              item,
              <InputQuantity
                type="number"
                defaultValue={item.quantity}
                name="quantity"
              />
            )}
            {this.renderUpdateQuantityComponent(
              item,
              <div>
                <QuantityButton type="submit">
                  <ion-icon name="add-circle" />
                </QuantityButton>
                <input
                  type="hidden"
                  value={item.quantity + 1}
                  name="quantity"
                />
              </div>
            )}
          </QuantityDiv>
        </TDCenter>
        <TDCenter>{item.product.price * item.quantity}</TDCenter>
        <TDCenter width="1px">
          <form action="http://localhost:8000/users/cart/remove" method="POST">
            <RemoveItem type="submit">&times;</RemoveItem>
            <input type="hidden" value={item.product.id} name="productID" />
            <input
              type="hidden"
              value={Cookies.get("username")}
              name="username"
            />
          </form>
        </TDCenter>
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

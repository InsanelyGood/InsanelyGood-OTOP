import React from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { addCartItem, removeCartItem } from "../../api/user_cart";

const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
const TDCenter = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
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
  :hover {
    cursor: pointer;
  }
`;

class CartItem extends React.Component {
  state = {
    quantity: this.props.item.quantity
  };

  onQuantityChanged = e => {
    this.setState({ quantity: e.target.value });
  };

  reduceQuantity = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };

  addQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  handleCartAdd = async e => {
    if (e) e.preventDefault();
    const { item } = this.props;
    const data = {
      productID: item.product.id,
      username: Cookies.get("username"),
      quantity: this.state.quantity
    };
    const res = await addCartItem(data);
    if (res === 200) {
      window.location.reload();
    }
  };

  renderUpdateQuantityComponent = inputType => {
    return <form onSubmit={this.handleCartAdd}>{inputType}</form>;
  };

  handleCartRemove = async e => {
    e.preventDefault();
    const { item } = this.props;
    const data = {
      productID: item.product.id,
      username: Cookies.get("username")
    };
    const res = await removeCartItem(data);
    if (res === 200) {
      window.location.reload();
    }
  };

  render() {
    const { item } = this.props;
    return (
      <tr key={item.product._id}>
        <TD>
          <Image src={item.product.image} alt="No Image" />
          {item.product.name}
        </TD>
        <TDCenter>{item.product.price}</TDCenter>
        <TDCenter>
          <QuantityDiv>
            {this.renderUpdateQuantityComponent(
              <div>
                <QuantityButton
                  type="submit"
                  disabled={item.quantity <= 1}
                  onClick={this.reduceQuantity}
                >
                  <ion-icon name="remove-circle" />
                </QuantityButton>
              </div>
            )}
            {this.renderUpdateQuantityComponent(
              <InputQuantity
                type="number"
                defaultValue={item.quantity}
                name="quantity"
                onChange={this.onQuantityChanged}
              />
            )}
            {this.renderUpdateQuantityComponent(
              <div>
                <QuantityButton type="submit" onClick={this.addQuantity}>
                  <ion-icon name="add-circle" />
                </QuantityButton>
              </div>
            )}
          </QuantityDiv>
        </TDCenter>
        <TDCenter>{item.product.price * item.quantity}</TDCenter>
        <TDCenter width="1px">
          <form onSubmit={this.handleCartRemove}>
            <RemoveItem type="submit">&times;</RemoveItem>
          </form>
        </TDCenter>
      </tr>
    );
  }
}
CartItem.defaultProps = {
  item: {
    product: {
      _id: '',
      image: '',
      name: '',
      price: 0
    },
    quantity: 0
  }
};

export default CartItem;

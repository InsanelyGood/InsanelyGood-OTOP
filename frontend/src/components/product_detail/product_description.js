import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { addCartItem } from "../../api/user_cart";

const Name = styled.h2`
  margin-bottom: 50px;
`;
const Description = styled.div``;
const Price = styled.div``;
const Quantity = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Form = styled.form``;
const BBlock = styled.div`
  margin-right: 10px;
`;
const BLine = styled.div`
  display: flex;
`;

class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  handleValueChange = e => {
    this.setState({
      quantity: e.target.value
    });
  };

  handleCartAdd = async e => {
    e.preventDefault();
    const { productDetail } = this.props;
    const data = {
      quantity: this.state.quantity,
      productID: productDetail.id,
      username: Cookies.get("username")
    };
    const res = await addCartItem(data);
    if (res === 200) {
      window.location.href = "/cart";
    }
  };

  bnOnClick = async (e)=> {
    e.preventDefault();
    const data = {
      quantity: 1,
      productID: this.props.productDetail.id,
      username: Cookies.get("username")
    };
    const res = await addCartItem(data);
    if (res === 200) {
      window.location.href = "/checkout";
    }
  }

  render = () => {
    return (
      <div>
        <Name>{this.props.productDetail.name}</Name>
        <Description>
          Description: <br/> {this.props.productDetail.description}
        </Description>
        <Price>Price: <strong>{this.props.productDetail.price}$</strong></Price>
        <Form onSubmit={this.handleCartAdd}>
          <Quantity
            type="number"
            min="1"
            onChange={this.handleValueChange}
            value={this.state.quantity}
            name="quantity"
          />
          <br />
          <BLine>
            <BBlock>
              <Button color="warning" onClick={this.bnOnClick}>
                  Buy now
              </Button>
            </BBlock>
            <BBlock>
              <Button color="success" type="submit">
                Add to Cart
              </Button>
            </BBlock>
          </BLine>
        </Form>
      </div>
    );
  };
}

ProductDescription.propTypes = {
  productDetail: PropTypes.object
};

ProductDescription.defaultProps = {
  productDetail: {
    name: "",
    description: "",
    price: 0,
    id: ""
  }
};

export default ProductDescription;

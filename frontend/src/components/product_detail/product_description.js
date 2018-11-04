import React from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

const Name = styled.div``;
const Description = styled.div``;
const Price = styled.div``;

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

  render = () => {
    return (
      <div>
        <Name>Product: {this.props.productDetail.name}</Name>
        <Description>
          Description: {this.props.productDetail.description}
        </Description>
        <Price>Price: {this.props.productDetail.price}$</Price>
        <form action="http://localhost:8000/users/cart/add" method="POST">
          <input
            type="number"
            onChange={this.handleValueChange}
            value={this.state.quantity}
            name="quantity"
          />
          <button className="btn btn-success" type="submit">
            Add to Cart
          </button>
          <input
            type="hidden"
            value={this.props.productDetail.id}
            name="productID"
          />
          <input
            type="hidden"
            value={Cookies.get("username")}
            name="username"
          />
        </form>
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

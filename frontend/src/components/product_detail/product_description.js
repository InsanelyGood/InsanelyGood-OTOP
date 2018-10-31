import React from "react";
import styled from "styled-components";

const Name = styled.div``;
const Description = styled.div``;
const Price = styled.div``;
const HiddenInput = styled.input`
  display: none;
`;

class ProductDescription extends React.Component {
  render = () => {
    return (
      <div>
        <Name>Product: {this.props.productDetail.name}</Name>
        <Description>
          Description: {this.props.productDetail.description}
        </Description>
        <Price>Price: {this.props.productDetail.price}$</Price>
        <form action="http://localhost:8000/users/cart" method="POST">
          <HiddenInput type="text" value={this.props.productDetail.id} />
          <input type="number" value={1} name="quantity" />
          <input type="submit" value="Add to Cart" />
        </form>
      </div>
    );
  };
}

export default ProductDescription;

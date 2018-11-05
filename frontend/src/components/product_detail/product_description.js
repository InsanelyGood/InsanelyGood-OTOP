import React from "react";
import {Button} from 'reactstrap'
import styled from "styled-components";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

const Name = styled.h2`
  margin-bottom: 50px;
`;
const Description = styled.div``;
const Price = styled.div``;
const Quantity = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
`
const Form = styled.form`
`
const BBlock = styled.div`
  margin-right: 10px;
`
const BLine = styled.div`
  display: flex;
`

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
        <Form action="http://localhost:8000/users/cart/add" method="POST">
          <Quantity type="number" onChange={this.handleValueChange} value={this.state.quantity} name="quantity" />
          <br/>
          <BLine>
            <Form action="" method="">
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
              <input type="hidden" value={this.state.quantity} name="quantity"></input>
              <BBlock><Button color='warning' type='submit'>Buy now</Button></BBlock>
            </Form>
            <BBlock><Button color='success' type="submit">Add to Cart</Button></BBlock>
          </BLine>
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

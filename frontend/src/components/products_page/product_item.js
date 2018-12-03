import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Button} from 'reactstrap'
import Cookies from "js-cookie";
import { addCartItem } from '../../api/user_cart'

const Box = styled.div`
  margin: 20px;
  display: block;
`
const Img = styled.img`
  width: 65%;
  height: 160px;
  margin-bottom: 18px;
`
const Des = styled.div`
  padding-left: 40px;
  color: black;
`
const Name = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1px;
`
const Line = styled.div`
  display: flex;
`
const Btn = styled.div`
  margin-left: 21%;
`

const Price = styled.p`
  margin-bottom: 2px;
`

class ProductItem extends React.Component {

  handleCartAdd = async e => {
    e.preventDefault();
    const data = {
      quantity: 1,
      productID: this.props.product.id,
      username: Cookies.get("username")
    };
    const res = await addCartItem(data);
    if (res === 200) {
      window.location.href = "/checkout";
    }
  };

    render = () => {
        return (<Link to={"/products/" + this.props.product.id}>
        <Box>
          {/* <CardImg src={this.props.product_image} alt="error" /> */}
          <center><Img alt="error" src={this.props.product.image}/></center>
          <Des>
            <Name>{this.props.product.name}</Name>
            <Line>
            <Price>Price: <span>{this.props.product.price}</span></Price>
            <br/>
            <Btn>
            <Button color="success" size="sm" onClick={this.handleCartAdd}>Buy Now</Button>
            </Btn>
            </Line>
          </Des>
        </Box></Link>)
    }

}

export default ProductItem;
import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
const Detail = styled.p`
  overflow-wrap: break-word;
  margin-bottom: 1px;
`
const Price = styled.p`
  margin-bottom: 2px;
`

class ProductItem extends React.Component {

  onMouseOver = ()=> {
    
  }

  onMouseOut = ()=> {

  }

    render = () => {
        return (<Link to={"/products/" + this.props.product.id}>
        <Box>
          {/* <CardImg src={this.props.product_image} alt="error" /> */}
          <center><Img alt="error" src={this.props.product.image}/></center>
          <Des>
            <Name>{this.props.product.name}</Name>
            <Detail>{this.props.product.description}</Detail>
            <Price>Price: <span>{this.props.product.price}</span></Price>
          </Des>
        </Box></Link>)
    }

}

export default ProductItem;
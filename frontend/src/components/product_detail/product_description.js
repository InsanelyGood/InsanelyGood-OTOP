import React from 'react'
import styled from 'styled-components'

const Name = styled.div`

`
const Description = styled.div`

`
const Price = styled.div`

`
const ToCart = styled.button`
    
`

class ProductDescription extends React.Component {
    render = () => {
        return (<div>
            <Name>Product: {this.props.productDetail.name}</Name>
            <Description>Description: {this.props.productDetail.description}</Description>
            <Price>Price: {this.props.productDetail.price}$</Price>
            <ToCart>Add to Cart</ToCart>
        </div>)
    }
}

export default ProductDescription
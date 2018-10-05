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
            <Name>Product: Name1</Name>
            <Description>Description: this is product, name Name1</Description>
            <Price>Price: 100$</Price>
            <ToCart>Add to Cart</ToCart>
        </div>)
    }
}

export default ProductDescription
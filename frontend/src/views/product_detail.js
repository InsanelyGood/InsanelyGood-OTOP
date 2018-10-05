import React from 'react'
import NavBar from '../components/common/navbar';
import styled from 'styled-components'
import ProductImage from '../components/product_detail/product_image'
import ProductDescription from '../components/product_detail/product_description'

const Detail = styled.div`
    @media(min-width: 768px) {
        display: flex;
    }
    padding-top: 5em;
`
const DesDetail = styled.div`
    margin: auto;
`

class ProductDetail extends React.Component {
    render = () => {
        return (<div>
            <NavBar />
            <Detail className='container'>
            <div className='col-md-6'>
                <ProductImage />
            </div>
            <DesDetail className='col-md-6'>
                <ProductDescription />
                </DesDetail>
            </Detail>
        </div>)
    }
}

export default ProductDetail
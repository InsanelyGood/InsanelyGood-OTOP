import React, { Component } from 'react'
import ProductPanel from '../components/products_page/product_panel'
import ProductsCat from '../components/products_page/product_cat'
import { getProducts } from '../api/products_list'
import styled from 'styled-components'
import badge from '../images/product-page-badge.jpg'
const Row = styled.div`
    @media(max-width: 768px) {
        display: block;
    }
    padding-top: 30px;
    display: flex;
`

const Left = styled.div`
    @media(max-width: 768px) {
        width: 100%;
        height: 20%;
    }
    width: 520px;
`
const Img = styled.img`
    width: 96%;
    margin-top: 100px;
    margin-left: 35px;
    margin-right: 35px;
`

const Right = styled.div`
    @media(max-width: 768px) {
        width: 100%;
    }
    width: 80%;
`

class ProductsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            types: []
        }
    }

    async componentDidMount() {
        this.setState({
            products: await getProducts()
        })
    }

    productFilter = () => {
        if(this.state.types.length < 1) {
            return this.state.products
        }
        return this.state.products.filter((product) => this.state.types.includes(product.category))
    }

    changeTypes = (nTypes) => {
        this.setState({ types: nTypes }, this.productFilter)
    }

    render() {
        return(
            <div>
                <Img src={badge}></Img>
                <Row>
                    <Left><ProductsCat changeTypes={this.changeTypes}/></Left>
                    <Right>
                        <ProductPanel productsShow={this.productFilter()}/>
                    </Right>
                </Row>
            </div>
        )
    }
}

export default ProductsPage
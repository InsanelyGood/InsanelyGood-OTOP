import React, { Component } from 'react'
import ProductPanel from '../components/products_page/product_panel'
import ProductsCat from '../components/products_page/product_cat'
import { getProducts } from '../api/products_list'
import Navbar from '../components/common/navbar'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Left = styled.div`
    @media(max-width: 768px) {
        width: 100%;
    }
    width: 20%;
`
const Right = styled.div`
    @media(max-width: 768px) {
        width: 100%;
    }
    width: 80%;
`

class ProductsPage extends Component {

    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        this.setState({
            products: await getProducts()
        })
    }

    render() {
        return(
            <div>
                <Navbar/>
                <Left><ProductsCat/></Left>
                <Right><ProductPanel productsShow={this.state.products}/></Right>
            </div>
        )
    }
}

export default ProductsPage
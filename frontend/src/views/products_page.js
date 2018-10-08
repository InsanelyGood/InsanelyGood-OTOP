import React, { Component } from 'react'
import ProductPanel from '../components/products_page/product_panel'
import ProductsCat from '../components/products_page/product_cat'
import { getProducts } from '../api/products_list'
import Navbar from '../components/common/navbar'
import styled from 'styled-components'

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

    productFilter = (types) => {
        if(types.length < 1) {
            return this.state.products
        }
        return this.state.products.filter((product) => types.includes(product.category))
    }

    changeTypes = (nTypes) => {
        console.log(nTypes);
        this.setState({ types: nTypes })
        console.log(this.state.types);
        
    }

    render() {
        return(
            <div>
                <Navbar/>
                <Row>
                    <Left><ProductsCat changeTypes={this.changeTypes}/></Left>
                    <Right><ProductPanel productsShow={this.productFilter(this.state.types)}/></Right>
                </Row>
            </div>
        )
    }
}

export default ProductsPage
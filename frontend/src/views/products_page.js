import React, { Component } from 'react'
import ProductPanel from '../components/products_page/product_panel'
import ProductsCat from '../components/products_page/product_cat'
import { getProducts } from '../api/products_list'
import Navbar from '../components/common/navbar'
import { Row, Col } from 'reactstrap'

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
                <Row>
                    <Col md='3'><ProductsCat/></Col>
                    <Col md='9'><ProductPanel productsShow={this.state.products}/></Col>
                </Row>
            </div>
        )
    }
}

export default ProductsPage
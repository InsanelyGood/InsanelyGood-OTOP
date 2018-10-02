import React, { Component } from 'react'
import ProductsList from '../components/products_page/products_list';
import { getProducts } from '../api/products_list'

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
                <h1>Products List</h1>
                <ProductsList productsShow={this.state.products}/>
            </div>
        )
    }
}

export default ProductsPage
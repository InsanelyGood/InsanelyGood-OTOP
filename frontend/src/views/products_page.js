import React, { Component } from 'react'
import ProductsList from '../components/products_page/products_list';

class ProductsPage extends Component {
    render() {
        return(
            <div>
                <h1>Products List</h1>
                <ProductsList />
            </div>
        )
    }
}

export default ProductsPage
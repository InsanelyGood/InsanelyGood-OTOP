import React, { Component } from 'react'
import ProductItem from './components/products_page/product_item';

class Page extends Component {
    render() {
        return(
            <div>
                <h1>New Page</h1>
                <ProductItem />
            </div>
        )
    }
}

export default Page
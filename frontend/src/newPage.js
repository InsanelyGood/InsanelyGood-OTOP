import React, { Component } from 'react'
import ProductsList from './components/products_page/products_list';

class Page extends Component {
    render() {
        return(
            <div>
                <h1>New Page</h1>
                <ProductsList />
            </div>
        )
    }
}

export default Page
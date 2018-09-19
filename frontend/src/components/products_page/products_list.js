import React from 'react';
import ProductItem from './product_item';
import { getProducts } from '../../api/products_list'

class ProductsList extends React.Component {

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

    render = () => {
        return (
            <div className='modal-body row'>
                {this.state.products.map((product) => (<ProductItem key={product._id} product_name={product.name} product_image={product.image} product_des={product.description} product_price={product.price} />))}
            </div>
        );
    }
}

export default ProductsList;
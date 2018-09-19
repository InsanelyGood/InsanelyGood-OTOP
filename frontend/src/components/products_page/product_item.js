import React from 'react';
import '../../css/product_item.css';

class ProductItem extends React.Component {

    render = () => {
        return (
            <div className='col-md-4 col-sm-6 product-item'>
                <a href='/'>
                    <img
                        alt='error'
                        src={this.props.product_image}
                        className='product-card-image'
                    />
                </a>
                <a href='/' className='product-card-description'>
                    <p className='product-card-band'>{this.props.product_name}</p>
                    <p className='product-card-description'>{this.props.product_des}</p>
                    <p className='product-card-price'>Price: <span>{this.props.product_price}</span></p>
                </a>
            </div>
        );
    }

}

export default ProductItem;
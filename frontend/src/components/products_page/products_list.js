import React from 'react';
import ProductItem from './product_item';
import PropTypes from 'prop-types';

class ProductsList extends React.Component {
    render = () => {
        return (
            <div className='modal-body row'>
                {this.props.productsShow.map((product) => (<ProductItem key={product._id} product={product} />))}
            </div>
        );
    }
}

ProductsList.propTypes = {
    productsShow: PropTypes.array
}

ProductsList.defaultProps = {
    productsShow: []
}

export default ProductsList;
import React from 'react';
import ProductItem from './product_item';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Pane = styled.div`
    margin-top: 10px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
`

class ProductsList extends React.Component {
    render = () => {
        return (
            <Pane>{this.props.productsShow.map((product) => (<ProductItem key={product._id} product={product} />))}</Pane>
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
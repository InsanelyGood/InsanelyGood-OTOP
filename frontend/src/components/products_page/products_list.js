import React from 'react';
import ProductItem from './product_item';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const List = styled.div`
    margin-left: auto;
    margin-right: 2%;
    display: flex;
    flex-wrap: wrap;
`

const Item = styled.div`
    :hover {
        -webkit-box-shadow: 0px 5px 20px -5px black;
    }
    justify-content: center;
    width: 23%;
    height: 310px;
    margin-left: 2%;
    margin-top: 2%;
`

class ProductsList extends React.Component {
    render = () => {
        return (
            <List>{this.props.productsShow.map((product) => (<Item><ProductItem key={product._id} product={product}/></Item>))}</List>
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
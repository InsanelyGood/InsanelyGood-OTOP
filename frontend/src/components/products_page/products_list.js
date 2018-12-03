import React from 'react';
import ProductItem from './product_item';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const List = styled.div`
    @media(max-width: 1200px) {
        margin-left: 60px;
        margin-right: 62px;
    }
    @media(max-width: 1024px) {
        margin-left: 30px;
        margin-right: 32px;
    }
    @media(max-width: 960px) {
        margin-left: 15px;
        margin-right: 17px;
    }
    @media(max-width: 600px) {
        margin-left: 60px;
        margin-right: 62px;
    }
    margin-left: auto;
    margin-right: 2%;
    display: flex;
    flex-wrap: wrap;
`

const Item = styled.div`
    @media(max-width: 1400px) {
        width: 31%;
    }
    @media(max-width: 1200px) {
        width: 48%;
    }
    @media(max-width: 768px) {
        width: 48%;
    }
    @media(max-width: 600px) {
        width: 98%;
    }
    :hover {
        -webkit-box-shadow: 0px 5px 20px -5px black;
    }
    justify-content: center;
    width: 23%;
    height: 410px;
    margin-left: 2%;
    margin-top: 2%;
`

class ProductsList extends React.Component {
    render = () => {
        return (
            <List>{this.props.productsShow.map((product) => (<Item><ProductItem key={product.id} product={product}/></Item>))}</List>
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
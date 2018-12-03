import React, { Component } from 'react'
import ProductPanel from '../components/products_page/product_panel'
import ProductsCat from '../components/products_page/product_cat'
import { getProducts } from '../api/products_list'
import styled from 'styled-components'
import lBadge from '../images/large_badge.jpg'
import mBadge from '../images/medium_badge.jpg'

import CarouselProduct from '../components/carousel_home/carousal_product'

const Block = styled.div`
    height: 100%;
`

const Row = styled.div`
    @media(max-width: 768px) {
        display: block;
    }
    // padding-top: 1x;
    display: flex;
`

const Left = styled.div`
    @media(max-width: 768px) {
        width: 100%;
        height: 20%;
    }
    width: 470px;
`
const Img1 = styled.img`
    @media(min-width: 1120px) {
        width: 100%;
    }
    width: 0px;
    margin-top: 56px;
`
const Img2 = styled.img`
    @media(max-width: 1120px) {
        width: 100%;
    }
    width: 0px;;
    margin-top: 56px;
`

const Right = styled.div`
    width: 100%;
`
const FILTER_CASE = 'filter'
const SEARCH_CASE = 'search'

class ProductsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            types: this.props.location.state.types ? this.props.location.state.types: [],
            search: '',
            renderState: this.props.location.state.renderState ? this.props.location.state.renderState: ''
        }
    }

    async componentDidMount() {
        this.setState({
            products: await getProducts()
        })
    }

    componentDidUpdate = (prevProps)=> {
        if(prevProps.location.state.types != this.props.location.state.types) {
            this.setState({
                types: this.props.location.state.types,
                renderState: this.props.location.state.renderState
            })
        }
    }

    productFilter = () => {
        let filter = []
        if(this.state.types.length < 1) {
            return (<ProductPanel productsShow={this.state.products} />)
        }
        if(this.state.types == 'north' || this.state.types == 'central' || this.state.types == 'south' || this.state.types == 'west') {
            filter = this.state.products.filter(product =>
                this.state.types.includes(product.region)
              );
        } else {
            filter = this.state.products.filter(product =>
                this.state.types.includes(product.category)
              );
        }
        return (<ProductPanel productsShow={filter} />)
    }

    productSearch = () => {
        let products = this.state.products.filter(product =>
          this.checkProductName(
            this.state.search.toUpperCase(),
            product.name.toUpperCase()
          )
        );
        
        // if (products.length <= 0) {
        //     return <Noti>
        //       No Result For <SearchText>
        //         '{this.state.search}'
        //       </SearchText>
        //     </Noti>;
        // } else {
        //   return  <ProductPanel productsShow={products} />
        // }
        
        return  <ProductPanel productsShow={products} />
    }
    
    renderProductPanel = input_case => {
        switch (input_case) {
            case FILTER_CASE:
                return this.productFilter()
                
            case SEARCH_CASE:
                return this.productSearch()
            default:
                return (<ProductPanel productsShow={this.state.products} />)
        }
    }

    checkProductName = (search, product) => {
        let wow = []
        let search_length = search.length
        if(product.includes(' ')) {
            product = product.split(' ')
            wow = product.filter(p => p.substring(0, search_length) === search)
            
            return wow.length > 0
        } else {
            return product.substring(0, search_length) === search
        }
    }

    changeTypes = (nTypes) => {
        this.setState({ types: nTypes, renderState: FILTER_CASE })
    }

    changeSearchValue = (value) => {
        this.setState({
            search: value, renderState: SEARCH_CASE
        })
    }

    render() {
        return(
            <div>
                <Block>
                    <Img1 src={lBadge}></Img1>
                    {/* <CarouselProduct /> */}
                    <Img2 src={mBadge}></Img2>
                    <Row>
                        <Left><ProductsCat initialType={this.props.location.state.types} changeTypes={this.changeTypes} searchValue={this.changeSearchValue} /></Left>
                        <Right>
                            {this.renderProductPanel(this.state.renderState)}
                        </Right>
                    </Row>
                </Block>
            </div>
        )
    }
}

export default ProductsPage
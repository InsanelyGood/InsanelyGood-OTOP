import React, { Component } from 'react'
import ProductPanel from '../components/products_page/product_panel'
import ProductsCat from '../components/products_page/product_cat'
import { getProducts } from '../api/products_list'
import styled from 'styled-components'
import badge from '../images/product-page-badge.jpg'

const Block = styled.div`
    margin-left: 120px;
    margin-right: 120px;
`

const Row = styled.div`
    @media(max-width: 768px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 10px;
    }
    padding-top: 30px;
    display: flex;
`

const Left = styled.div`
    @media(max-width: 768px) {
        width: 100%;
        height: 20%;
    }
    width: 330px;
`
const Img = styled.img`
    @media(max-width: 768px) {
        margin-left: 16px;
        margin-right: auto;
    }
    width: 96%;
    margin-top: 100px;
    margin-left: 35px;
    margin-right: 35px;
`

const Right = styled.div`
    @media(max-width: 768px) {
        padding-top: 10px;
        width: 100%;
    }
    width: 80%;
`
const Noti = styled.p`
  text-align: center;
  color: red;
  font-size: 20px;
`;

const SearchText = styled.span`
  font-weight: bold;
  color: black;
  font-size: 23px;
`;

const FILTER_CASE = 'filter'
const SEARCH_CASE = 'search'

class ProductsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            types: [],
            search: '',
            renderState: ''
        }
    }

    async componentDidMount() {
        this.setState({
            products: await getProducts()
        })
    }

    productFilter = () => {
        if(this.state.types.length < 1) {
            return (<ProductPanel productsShow={this.state.products} />)
        }
        let filter = this.state.products.filter(product =>
          this.state.types.includes(product.category)
        );
        return (<ProductPanel productsShow={filter} />)
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

    productSearch = () => {
        let products = this.state.products.filter(product =>
          product.name
            .toUpperCase()
            .includes(this.state.search.toUpperCase())
        );
        
        if (products.length <= 0) {
            return <Noti>
              No Result For <SearchText>
                '{this.state.search}'
              </SearchText>
            </Noti>;
        } else {
          return <div className="container">
              <ProductPanel productsShow={products} />
            </div>;
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
                    <Img src={badge}></Img>
                    <Row>
                        <Left><ProductsCat changeTypes={this.changeTypes} searchValue={this.changeSearchValue} /></Left>
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
import React, { Component } from 'react'
import ProductPanel from '../components/products_page/product_panel'
import ProductsCat from '../components/products_page/product_cat'
import { getProducts } from '../api/products_list'
import styled from 'styled-components'
import badge from '../images/product-page-badge.jpg'

const Block = styled.div`
    margin-left: auto;
    margin-right: auto;
`

const Row = styled.div`
    @media(max-width: 768px) {
        display: block;
        padding-top: 10px;
        width: 100%;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
    @media (min-width: 1400px) {
        width: 1400px;
    }
    margin-right: auto;
    margin-left: auto;
    padding-top: 30px;
    display: flex;
`

const Left = styled.div`
    @media(max-width: 768px) {
        width: 100%;
        height: 20%;
    }
    width: 350px;
`
const Img = styled.img`
    width: 100%;
    margin-top: 60px;
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

    productSearch = () => {
        let products = this.state.products.filter(product =>
          this.checkProductName(
            this.state.search.toUpperCase(),
            product.name.toUpperCase()
          )
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
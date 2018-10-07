import React from 'react'
import Navbar from '../components/common/navbar'
import SearchComponent from '../components/search/search_component'
import ProductsList from '../components/products_page/products_list'
import { getProducts } from '../api/products_list'
import styled from 'styled-components'

const Noti = styled.p`
    text-align: center;
    color: red;
    font-size: 20px;
`

const SearchText = styled.span`
    font-weight: bold;
    color: black;
    font-size: 23px;
`

class Search extends React.Component {

    constructor() {
        super()
        this.state = {
            clicked: false,
            search: '',
            products: []
        }
    }

    async componentDidMount() {
        this.setState({
            products: await getProducts()
        })
    }

    onSearchButtonClicked = () => {
        this.setState({
            clicked: true
        })
    }

    callbackSearchValue = value => {
        this.setState({
            search: value
        })
        this.onSearchButtonClicked()
    }

    renderProductsList = () => {
        let products = this.state.products.filter(product => product.name.toUpperCase().includes(this.state.search.toUpperCase()))
        if (products.length <= 0) {
            return (
                <Noti>No Result For <SearchText>'{this.state.search}'</SearchText></Noti>
            )
        }
        else {
            return (
                <div className='container'>
                    <ProductsList productsShow={products} />
                </div>
            )
        }
    }

    render = () => {
        return (<div>
            <Navbar />
            <SearchComponent callbackValue={this.callbackSearchValue} />
            {(this.state.clicked) && this.renderProductsList()}
        </div>)
    }
}

export default Search
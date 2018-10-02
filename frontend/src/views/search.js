import React from 'react'
import Navbar from '../components/common/navbar'
import SearchComponent from '../components/search/search_component'
import ProductsList from '../components/products_page/products_list'
import {getProducts} from '../api/products_list'

class Search extends React.Component {

    constructor(){
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
        return (
            <ProductsList productsShow={products} />
        )
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
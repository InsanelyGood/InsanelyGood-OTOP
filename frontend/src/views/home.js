import React from 'react'
import CarousalHighlight from '../components/carousel_home/CarousalHighlight'
import Quote from '../components/carousel_home/Quote'
import ProductsList from '../components/products_page/products_list'
import { getProducts } from '../api/products_list';
import '../css/home.css'

class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        this.setState({
            products: await getProducts()
        })
    }

    render = () => {

        let random = this.state.products.slice(0, 4)
        return (
        <div>
            <CarousalHighlight />
            <div className='container'>
             <Quote />    
                <hr/>
                <br/>
                <h2>Highlight Products</h2>
                <p className="productList">
                <ProductsList productsShow={random} />
                </p>
        </div>
        </div>)
    }
}

export default Home

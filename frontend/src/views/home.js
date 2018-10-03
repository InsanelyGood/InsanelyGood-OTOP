import React from 'react'
import Navbar from '../components/common/navbar'
import CarousalHighlight from '../components/carousel_home/CarousalHighlight'
import ProductsList from '../components/products_page/products_list'
import { getProducts } from '../api/products_list';

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

        let random = this.state.products.slice(0, 3)
        return (<div>
            <Navbar />
            <CarousalHighlight />
            <div className='container'>
            <h1>Highlight Products</h1>
            <ProductsList productsShow={random} />
            </div>
        </div>)
    }
}

export default Home
import React, {Component} from 'react'
import ProductsList from './products_list'
import Sort from '../sort/sort_component'
import styled from 'styled-components'

const Block = styled.div`
    width: 100%;
`
const Head = styled.div`
    background-color: black;
    height: 70px;
`
const Text = styled.h2`
    font-weight: bold;
    color: white;
    padding-left: 20px;
    padding-top: 15px;
    float: left;
`

const Content = styled.div`
    margin-left: auto;
    margin-right: auto;
`
const SortBlock = styled.div`
    margin: 15px;
    float: right;
`

class ProductPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortType: '',
        }
    }

    changeSortType = (type)=> {
        this.setState({
            sortType: type
        })
        
    }

    sort = ()=> {
        switch(this.state.sortType) {
            case 'price':
                let priceSorted = this.props.productsShow.sort((a,b)=> {
                    return a.price - b.price
                })
                return <ProductsList productsShow={priceSorted}></ProductsList>
            case 'name':
                let nameSorted = this.props.productsShow.sort((a,b)=> {
                    return (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0;
                })
                return <ProductsList productsShow={nameSorted}></ProductsList>
            default:
                return <ProductsList productsShow={this.props.productsShow}></ProductsList>

        }
    }
    
    render() {
        return(
            <Block>
                <Head>
                    <Text>Products</Text>
                    <SortBlock><Sort changeSortType={this.changeSortType}/></SortBlock>
                </Head>
                <Content>{this.sort()}</Content>
            </Block>
        )
    }
}

export default ProductPanel
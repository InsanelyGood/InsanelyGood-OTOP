import React, {Component} from 'react'
import ProductsList from './products_list'
import styled from 'styled-components'

const Block = styled.div`
    -webkit-box-shadow:0px 5px 25px -5px black;
    margin: 40px;
`
const Head = styled.div`
    background-color: black;
    width: inherit;
    height: 70px;
`
const Text = styled.h1`
    font-weight: bold;
    color: white;
    padding-left: 20px;
    padding-top: 10px;

`

const Content = styled.div`
    margin: 30px;
`

class ProductPanel extends Component {
    
    render() {
        return(
            <Block>
                <Head>
                    <Text>Products</Text>
                </Head>
                <Content><ProductsList productsShow={this.props.productsShow}/></Content>
            </Block>
        )
    }
}

export default ProductPanel
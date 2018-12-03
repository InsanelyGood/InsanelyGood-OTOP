import React, {Component} from 'react'
import ProductsList from './products_list'
import Sort from '../sort/sort_component'
import styled from 'styled-components'
import emote from '../../images/emote.png'
import { Pagination } from 'antd';
import 'antd/lib/pagination/style/css';

const Block = styled.div`
    width: 100%;
`
const Head = styled.div`
    background-color: black;
    height: 70px;
    border-left: solid grey;
    display: flex;
`
const Text = styled.h2`
    font-weight: bold;
    color: white;
    padding-left: 20px;
    padding-top: 15px;   display: flex;
    float: left;
`
const SortBlock = styled.div`
    margin: 15px;
    float: right;
`
const Scroll = styled.div`
    margin-left: auto;
    margin-right: auto;
    color: white;
    padding-top: 18px;
`

const AlertBlock = styled.div`
    margin-top: 50px;
    text-align: center;
    display: block;
`
const Alert = styled.div`
    margin-left: auto;
    margin-right: auto;
    color: grey;
    font-size: 25px;
`

class ProductPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortType: '',
            pNum: this.props.productsShow.length,
            current: 1,
        }
    }

    componentDidUpdate = (prevProps)=> {
        if(prevProps.productsShow != this.props.productsShow) {
            this.setState({
                pNum: this.props.productsShow.length
            })
        }
    }

    onChange = (page)=> {
        this.setState({
            current: page
        })
    }

    

    changeSortType = (type)=> {
        this.setState({
            sortType: type
        })
    }

    // generate = (a)=> {
    //     return (<Item>{a.map(product => product)}</Item>)
    // }

    generate = ()=> {
        if(this.props.productsShow.length <= 0) return (
            <AlertBlock>
                <img alt='Error' src={emote}/>
                <br/>
                <br/>
                <Alert>Sorry no match product found</Alert>
            </AlertBlock>
        ) 
        else return this.sort()
    }

    sort = ()=> {
        let sorted = []
        switch(this.state.sortType) {
            case 'price':
                sorted = this.props.productsShow.sort((a,b)=> {
                    return a.price - b.price
                })
            case 'name':
                sorted = this.props.productsShow.sort((a,b)=> {
                    return (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0;
                })
            default:
                sorted = this.props.productsShow
                
        }

        return this.cutPages(sorted)

    }

    cutPages = (sorted_array)=> {
        let last_item = (12*this.state.current)
        let fisrt_item = last_item - 12

        let sliced_array = sorted_array.slice(fisrt_item, last_item)
        
        return <ProductsList productsShow={sliced_array}></ProductsList>
    }
    
    render() {
        return(
            <Block>
                <Head>
                    <Text>Products</Text>
                    <Scroll><Pagination current={this.state.current} pageSize={12} onChange={this.onChange} total={this.state.pNum}></Pagination></Scroll>
                    <SortBlock><Sort changeSortType={this.changeSortType}/></SortBlock>
                </Head>
                {this.generate()}
            </Block>
        )
    }
}

export default ProductPanel
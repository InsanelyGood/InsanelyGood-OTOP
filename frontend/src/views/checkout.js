import React, { Component } from 'react';
import CheckoutComponent from '../components/checkout/checkout_component'
import styled from 'styled-components'
import '../css/purchase.css'

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
    text-align: center;

`

class Checkout extends Component{
    render(){
        return <div>
            <br/>
            <br/>
            <Head>
                <Text>CHECKOUT</Text>
            </Head>
            <CheckoutComponent/>
          </div>;
    }
}
export default Checkout
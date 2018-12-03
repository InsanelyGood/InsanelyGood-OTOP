import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../css/purchase.css'
import logo from '../images/logo_black.jpg'

class Purchased extends Component{
    render(){
        return <div>
            <div className='container' align="center">
            <img className="logoBlack" src={logo} alt="OTOPAholic_LOGO" ></img>
            <p className="pur">
            Thank you for your purchase.
            </p>
            
            <br/>
            <Button size="lg" href="/cart" className="buttonShop">Your Cart</Button>{' '}
            <Button size="lg" href="/products" className="buttonHome">Shop more</Button>{' '}
            </div>
          </div>
    }
}
export default Purchased
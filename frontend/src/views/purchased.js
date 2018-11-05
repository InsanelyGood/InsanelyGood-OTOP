import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../css/purchase.css'

class Purchased extends Component{
    render(){
        return <div>
            <div className='container' align="center">
            <p className="pur">
            Thank you for your purchase.
            </p>
            {/* <p className="heart">♡♡♡</p> */}
            <br/>
            <Button size="lg" href="/" className="buttonBack">Home</Button>{' '}
            </div>
          </div>
    }
}
export default Purchased
import React, { Component } from 'react';
import Navbar from '../components/common/navbar'
import TabComponent from '../components/login/tabs'

class Login extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <TabComponent />
            </div>
        )
    }
}
export default Login
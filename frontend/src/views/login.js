import React, { Component } from 'react';
import TabComponent from '../components/login/tabs'

class Login extends Component{
    render(){
        return <div>
            <TabComponent defaultTab={'1'} />
          </div>;
    }
}
export default Login
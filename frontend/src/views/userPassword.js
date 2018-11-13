import React, { Component } from 'react';
import UserPassword from '../components/user_information/userPassword'
import '../css/userInfo.css'

class UserInfo extends Component{
    render(){
        return <div>
            <div className='container userComponent' align="center">
            <UserPassword />
            </div>
          </div>
    }
}
export default UserInfo
import React, { Component } from 'react';
import UserPassword from '../components/user_information/userPassword'

class UserInfo extends Component{
    render(){
        return <div>
            <div className='container' align="center">
            <UserPassword />
            </div>
          </div>
    }
}
export default UserInfo
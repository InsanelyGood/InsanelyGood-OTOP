import React, { Component } from 'react';
import { Button } from 'reactstrap';
import UserInfomation from '../components/user_information/userInfo'

class UserInfo extends Component{
    render(){
        return <div>
            <div className='container' align="center">
            <UserInfomation />
            </div>
          </div>
    }
}
export default UserInfo
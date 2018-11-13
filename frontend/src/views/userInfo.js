import React, { Component } from 'react';
import UserInfomation from '../components/user_information/userInfo'
import '../css/userInfo.css'

class UserInfo extends Component{
    render(){
        return <div>
            <div className='container userComponent' align="center" >
            <UserInfomation />
            </div>
          </div>
    }
}
export default UserInfo
import React, { Component } from 'react';
import UserEdit from '../components/user_information/userEdit'
import '../css/userInfo.css'

class UserInfoEdit extends Component{
    render(){
        return <div>
            <div className='container userComponent' align="center">
            <UserEdit />
            </div>
          </div>
    }
}
export default UserInfoEdit
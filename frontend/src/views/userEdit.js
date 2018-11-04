import React, { Component } from 'react';
import UserEdit from '../components/user_information/userEdit'

class UserInfoEdit extends Component{
    render(){
        return <div>
            <div className='container' align="center">
            <UserEdit />
            </div>
          </div>
    }
}
export default UserInfoEdit
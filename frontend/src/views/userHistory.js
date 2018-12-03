import React, { Component } from 'react';
import TabComponent from '../components/user_information/tab_user'
import '../css/userInfo.css'

class UserHistory extends Component{
    render(){
        return <div>
            <div className='container userComponent' align="center" >
            <TabComponent defaultTab={'2'} />
            </div>
          </div>
    }
}
export default UserHistory
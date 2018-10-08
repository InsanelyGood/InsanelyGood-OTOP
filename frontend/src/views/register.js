import React, { Component } from 'react';
import Navbar from '../components/common/navbar'
import TabComponent from '../components/login/tabs'

class Register extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TabComponent defaultTab={'2'} />
      </div>
    )
  }
}
export default Register;
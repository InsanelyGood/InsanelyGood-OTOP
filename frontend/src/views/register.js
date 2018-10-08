import React, { Component } from 'react';
import TabComponent from '../components/login/tabs'

class Register extends Component {
  render() {
    return (
      <div>
        <TabComponent defaultTab={'2'} />
      </div>
    )
  }
}
export default Register;
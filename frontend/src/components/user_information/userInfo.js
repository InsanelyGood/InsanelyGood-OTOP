import React from 'react';
import {Button} from 'reactstrap';
import '../../css/userInfo.css'
import { getUsername } from '../../api/user_infomation'
import Cookies from 'js-cookie';


class UserInfomation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      telephoneNumber: '',
      address: ''
    };
  }

  async componentDidMount() {
    const info = await getUsername(Cookies.get('username'))
    this.setState({
      username: info.username,
      firstName: info.firstname,
      lastName: info.lastname,
      email: info.email,
      telephoneNumber: info.telephoneNumber,
      address: info.address
    })
  }
  render() {
    return (
        <div>
                <div className="info">
                  <br />
                  <p>
                    <label>Firstname</label>
                    <input className="boxInput" type="text" name="firstName" value={this.state.firstName} readOnly="readonly"></input>
                  </p>
                  <br />
                  <p>
                    <label>Lastname</label>
                    <input className="boxInput" type="text" name="lastName" value={this.state.lastName} readOnly="readonly"></input>
                  </p>
                  <br />
                  <p>
                    <label>Username</label>
                    <input className="boxInput" type="text" name="username" value={this.state.username} readOnly="readonly"></input>
                  </p>
                  <br />
                  <p>
                    <label>Address(Default)</label>
                    <textarea type="text" name="address" value={this.state.address} readOnly="readonly"></textarea>
                  </p>
                  <br />
                  <p>
                    <label>Email</label>
                    <input className="boxInput" type="email" name="email" value={this.state.email} readOnly="readonly"></input>
                  </p>
                  <br />
                  <p>
                    <label>Contact Number</label>
                    <input className="boxInput" type="text" name="telephoneNumber" value={this.state.telephoneNumber} readOnly="readonly"></input>
                  </p>
                </div>
                <br />
                <p>
                  <Button className="buttonEdit" href="http://localhost:3000/users/information/edit"><span>Edit Profile</span></Button>
                </p> 
        </div>  
    );
  }
}

export default UserInfomation;
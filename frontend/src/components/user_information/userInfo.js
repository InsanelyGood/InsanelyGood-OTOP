import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import '../../css/userInfo.css'
import { getUsername } from '../../api/user_infomation'
import classnames from 'classnames';
import Cookies from 'js-cookie';


class UserInfomation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
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

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="container locate col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-3 ">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className="info">

                  <br />
                  <p>
                    <label>Firstname</label>
                    <input className="boxInput" type="text" name="firstName" value={this.state.firstName} readOnly="readonly"></input>
                  </p>
                  <p>
                    <label>Lastname</label>
                    <input className="boxInput" type="text" name="lastName" value={this.state.lastName} readOnly="readonly"></input>
                  </p>
                  <p>
                    <label>Username</label>
                    <input className="boxInput" type="text" name="username" value={this.state.username} readOnly="readonly"></input>
                  </p>
                  <p>
                    <label>Address(Default)</label>
                    <textarea type="text" name="address" value={this.state.address} readOnly="readonly"></textarea>
                  </p>
                  <p>
                    <label>Email</label>
                    <input className="boxInput" type="email" name="email" value={this.state.email} readOnly="readonly"></input>
                  </p>
                  <p>
                    <label>Contact Number</label>
                    <input className="boxInput" type="text" name="telephoneNumber" value={this.state.telephoneNumber} readOnly="readonly"></input>
                  </p>
                </div>
                <p>
                  <Button className="buttonEdit" href="http://localhost:3000/users/information/edit"><span>Edit Profile</span></Button>
                </p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default UserInfomation;
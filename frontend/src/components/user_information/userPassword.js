import React from 'react';
import { TabContent, TabPane,  Nav, NavItem, NavLink,Button,Row, Col } from 'reactstrap';
import '../../css/userInfo.css'
import classnames from 'classnames';
import Cookies from 'js-cookie';
import { getUsername, setUsername } from '../../api/user_infomation'


class UserPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      email: '',
      username: '',
      password: '',
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
        address: info.address,
        password: info.password
    }, () => console.log(this.state.password))
  }

  handleInputChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

handleSubmit = event => {
    setUsername(this.state.username, {
        email: this.state.email,
        username: this.state.username,
        // password: this.state.password,
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        telephoneNumber: this.state.telephoneNumber,
        address: this.state.address  
    })
}

  toggle = tab => {
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
              Change Password
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className="info">
                    <br/>
                <p> 
                <label>Username</label>
                    <input type="text" name="username" value={this.state.username} readOnly="readonly"></input>
                </p>
                <editable>
                <p>
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleInputChange} placeholder={this.state.password} value={this.state.password}></input>
                </p>
                <p>
                <label>Confirm Password</label>
                <input type="password" name="password" onChange={this.handleInputChange} placeholder={this.state.password} value={this.state.password}></input>
                </p>
                
                </editable>
                </div>
                <p>
                <Button className="buttonEdit" href="http://localhost:3000/users/information/" onClick={this.handleSubmit}><span>Save</span></Button>
                </p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>

      </div>
    );
  }

}


export default UserPassword;
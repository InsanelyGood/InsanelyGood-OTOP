import React from 'react';
import { TabContent, TabPane,  Nav, NavItem, NavLink,Button,Row, Col,Input,FormFeedback } from 'reactstrap';
import '../../css/userInfo.css'
import classnames from 'classnames';
import Cookies from 'js-cookie';
import { getUsername,setNewPassword } from '../../api/user_infomation'


class UserPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      username: '',
      oldPassword: '',
      newPassword1: '',
      newPassword2:'',
      invalidConfirmPassword: ''
    };
  }

  async componentDidMount() {
    const info = await getUsername(Cookies.get('username'))
    this.setState({
        username: info.username,
    }, () => console.log(this.state.password))
  }

  handleInputChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

handleSubmit = event => {
    if(this.state.newPassword1 === this.state.newPassword2){
        var a = document.getElementById("mylink")
        a.setAttribute('href', "http://localhost:3000/users/information/");
        window.location.href = 'http://localhost:3000/users/information/';
        setNewPassword({
            username: this.state.username,
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword1,
        })
        this.setState({invalidConfirmPassword: false})
    }
    else{
        this.setState({invalidConfirmPassword: true})
        document.getElementById("mylink").onclick = function() {
        window.location.href = " ";
        };
    }
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
                <div className="info changePass">
                    <br/>
                <p> 
                <label>Username</label>
                    <input type="text" name="username" value={this.state.username} readOnly="readonly"></input>
                </p>
                <editable>
                <p>
                <label>Old Password</label>
                <input type="password" name="oldPassword" onChange={this.handleInputChange} placeholder={this.state.password} value={this.state.password}></input>
                </p>
                <p>
                <label>New Password</label>
                <input type="password" name="newPassword1" onChange={this.handleInputChange} placeholder={this.state.password} value={this.state.password}></input>
                </p>
                <p>
                <label>Confirm New Password</label>
                </p>
                {/* <input type="password" name="newPassword2" onChange={this.handleInputChange} placeholder={this.state.password} value={this.state.password}></input> */}
                {
                    this.state.invalidConfirmPassword &&
                    <alert >
                          <Input invalid type="password" name="newPassword2" onChange={this.handleInputChange} placeholder={this.state.password} value={this.state.password}/>
                        <FormFeedback>Comfirm password is not same.</FormFeedback>
                    </alert>
                }
                {
                    !this.state.invalidConfirmPassword &&
                    <alert >
                        <Input type="password" name="newPassword2" onChange={this.handleInputChange} placeholder={this.state.password} value={this.state.password}/>
                    </alert>
                }
                
                </editable>
                </div>
                <p>
                <Button className="buttonSave" id="mylink" onClick={this.handleSubmit} ><span>Save</span></Button>
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
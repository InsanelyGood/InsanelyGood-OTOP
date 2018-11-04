import React from 'react';
import { TabContent, TabPane, FormFeedback, Nav, NavItem,Input,Label, NavLink,Button,Row, Col } from 'reactstrap';
import '../../css/userInfo.css'
import classnames from 'classnames';
import Cookies from 'js-cookie';
import { getUsername } from '../../api/user_infomation'



class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      contactNumber: '',
      address: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleContactNumbChange = this.handleContactNumbChange.bind(this);
    // this.handleContactAddressChange = this.handleContactAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const info = await getUsername(Cookies.get('username'))
    this.setState({
        username: info.username,
        firstName: info.firstname,
        lastName: info.lastname,
        email: info.email,
        contactNumber: info.contactNumber,
        address: info.address,
        password: info.password
    })
  }

  handleEmailChange = event => {
    this.setState({
        email: event.target.value,
    });
};

handleUserChange = event => {
    this.setState({
        username: event.target.value,
    });
};

handlePassChange = event => {
    this.setState({
        password: event.target.value
    });
}

handleAddressChange = event => {
    this.setState({
        address: event.target.value,
    });
};

handleFirstNameChange = event => {
    this.setState({
        firstName: event.target.value,
    });
};

handleLastNameChange = event => {
    this.setState({
        lastName: event.target.value,
    });
};

handleContactNumbChange = event => {
    this.setState({
        contactNumber: event.target.value,
    });
};

handleSubmit = event => {
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.address);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.contactNumber);

    if (this.state.username === '') {
        this.setState({ notHaveUsername: true });
    }
    else {
        this.setState({ notHaveUsername: false })
    }

    if (this.state.email === '') {
        this.setState({ notHaveEmail: true });
    }
    else {
        this.setState({ notHaveEmail: false })
    }

    if (this.state.password === '') {
        this.setState({ notHavePassword: true });
    } else {
        this.setState({ notHavePassword: false })
    }

    if (this.state.address === '') {
        this.setState({ notHaveAddress: true });
    } else {
        this.setState({ notHaveAddress: false })
    }

    if (this.state.firstName === '') {
        this.setState({ notHaveFirstName: true });
    } else {
        this.setState({ notHaveFirstName: false })
    }

    if (this.state.lastName === '') {
        this.setState({ notHaveLastName: true });
    } else {
        this.setState({ notHaveLastName: false })
    }

    if (this.state.contactNumber === '') {
        this.setState({ notHaveContectNum: true });
    } else {
        this.setState({ notHaveContectNum: false })
    }
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
                    <br/>
                <editable>
                <p>
                <label>Firstname</label>
                {
                    this.state.notHaveFirstName &&
                    <alert >
                        <input type="text" name="firstName"  onChange={this.setState.firstName} placeholder={this.state.firstName}></input>
                        <FormFeedback>Please enter first name.</FormFeedback>
                    </alert>
                }
                {
                    !this.state.notHaveFirstName &&
                    <alert >
                        <input type="text" name="firstName"  onChange={this.handleFirstNameChange} placeholder={this.state.firstName}></input>
                    </alert>
                }
                
                </p>
                <p>
                <label>Lastname</label>
                <input type="text" name="lastName" onChange={this.handleLastNameChange} placeholder={this.state.lastName}></input>
                </p>
                <p>
                <label>Username</label>
                <input type="text" name="username" onChange={this.handleUserChange} placeholder={this.state.username}></input>
                </p>
                <p>
                <label>Password</label>
                <input type="password" name="password" onChange={this.handlePassChange} placeholder={this.state.password}></input>
                </p>
                <p>
                <label>Address(Default)</label>
                <textarea type="text" name="address" onChange={this.handleAddressChange} placeholder={this.state.address} ></textarea>
                </p>
                <p>
                <label>Email</label>
                <input type="email" name="email" onChange={this.handleEmailChange} placeholder={this.state.email}></input>
                </p>
                <p>
                <label>Contact Number</label>
                <input type="text" name="contactNumber" onChange={this.handleContactNumbChange} placeholder={this.state.contactNumber}></input>
                </p>
                </editable>
                </div>
                <p>
                <Button className="buttonEdit" href="http://localhost:3000/users/information/"><span>Save</span></Button>
                </p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>

      </div>
    );
  }
}

export default UserEdit;
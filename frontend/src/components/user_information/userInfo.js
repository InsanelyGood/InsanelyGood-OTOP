import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,Button,Row, Col } from 'reactstrap';
import '../../css/userInfo.css'
import classnames from 'classnames';


class UserInfomation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
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
      <div className="container locate">
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
                <p>
                <label>Firstname</label>
                <input type="text" name="firstName" value="Kwankaew" readOnly="readonly"></input>
                <label>Lastname</label>
                <input type="text" name="lastName" value="Uttama" readOnly="readonly"></input>
                </p>
                <p>
                <label>Email</label>
                <input type="text" name="email" value="abc@ku.th" readOnly="readonly"></input>
                <label>Contact Number</label>
                <input type="text" name="contactNumber" value="081234567" readOnly="readonly"></input>
                </p>
                <p>
                <label>Address</label>
                {/* <input type="text" name="address" value="My address" readOnly="readonly"></input> */}
                <textarea type="text" name="address" value="My address" readOnly="readonly"></textarea>
                </p>
                </div>
                <p>
                <Button className="buttonEdit" ><span>Edit Profile </span></Button>
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
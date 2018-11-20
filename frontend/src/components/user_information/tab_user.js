import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import UserInfomation from '../../components/user_information/userInfo'
import UserHistory from '../../components/user_information/user_history'
import styled from 'styled-components'
import '../../css/login&regis.css'

const Form = styled.div`
    
    // padding: 5% 37% 20% 30%;
`
const AllContent = styled.div`
    padding: 5em;
    margin: auto;
    a {
        color: black;
    },
    a:hover {
        color: black;
    }
`

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    componentDidMount() {
        if (this.props.defaultTab === '2') {
            this.setState({ activeTab: '2' })
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
            <AllContent className='col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-3'>   
                    <Nav tabs>
                        <NavItem>
                            <NavLink xs="6"
                                href='/users/information'
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink xs="6"
                                href='/users/information/history'
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Purchase History
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col xs="12">
                                    <UserInfomation />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col xs="12">
                                   <UserHistory/>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
            </AllContent>
        );
    }
}
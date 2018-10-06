import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import LoginComponent from '../../components/login/login_component'
import RegisComponent from '../../components/login/regis_component'
import styled from 'styled-components'

const Form = styled.div`
    
    // padding: 5% 37% 20% 30%;
`
const LoginContent = styled.div`
    margin: auto;
`

export default class Example extends React.Component {
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
            <LoginContent className='col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-3'>
                <Form className='container'>
                

                    <Nav tabs>
                        <NavItem>
                            <NavLink xs="6"
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink xs="6"
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Create New Account
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col xs="12">
                                    <LoginComponent />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col xs="12">
                                    <RegisComponent />
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                
                </Form>
            </LoginContent>
        );
    }
}
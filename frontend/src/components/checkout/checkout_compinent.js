import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, CardText, CardTitle, Input, ListGroupItem, FormGroup, Label, Row, Col, Button } from 'reactstrap';
import Cookies from 'js-cookie'
import { getOrders } from '../../api/order_list';

const Right = styled.div`
    @media(max-width: 768px) {
        padding-top: 10px;
        width: 100%;
    }
    width: 80%;
`
const Form = styled.div`
    
    // padding: 5% 37% 20% 30%;
`
const LoginContent = styled.div`
    padding: 5em;
    margin: auto;
    a {
        color: black;
    },
    a:hover {
        color: black;
    }
`
class OrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: ''
        }
    }

    async componentDidMount() {
        this.setState({
            username: await getOrders(Cookies.get("username"))
        })
    }

    render() {
        return (
            <LoginContent className='col-sm-4 col-sm-offset-2 col-md-12 col-md-offset-3'>
                <Form className='container'>
                    <Row>
                        <Col md="6">
                            <Card body>
                                <CardTitle>Order List</CardTitle>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card body>
                                <CardTitle>Payment Detail</CardTitle>
                                <br></br>
                                <CardText>Address</CardText>
                                <Input type="textarea"></Input>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Default Address
                                    </Label>
                                </FormGroup>
                                <br></br>
                                <Button onClick={this.handleSubmit}>Confirm</Button>
                            </Card>
                        </Col>

                    </Row>
                </Form>
            </LoginContent>
        )
    }
}

export default OrderList
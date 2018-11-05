import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, CardText, CardTitle, Form, Input, FormGroup, Row, Col, Table, Button } from 'reactstrap';
import Cookies from 'js-cookie'
import { getOrders } from '../../api/order_list';
import ProductCart from './product_cart'

// const AddAddressButton = styled.button`
//   margin-right: 3em;
//   display: inline-block;
//   border-radius: 4px;
//   background-color: #57a9bb;
//   border: none;
//   color: #ffffff;
//   text-align: center;
//   font-size: 20px;
//   padding: 10px;
//   width: 150px;
//   transition: all 0.5s;
//   cursor: pointer;
//   margin: 5px;
//   size: small;

//   span {
//     cursor: pointer;
//     display: inline-block;
//     position: relative;
//     transition: 0.5s;
//   }

//   span:after {
//     content: "\00bb";
//     position: absolute;
//     opacity: 0;
//     top: 0;
//     right: -90px;
//     transition: 0.5s;
//   }

//   &:hover span {
//     padding-right: 25px;
//   }

//   &:hover span:after {
//     opacity: 1;
//     right: 0;
//   }
// `;

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
            address: '',
            username: {},
            total: 0,
            status: 'OrderCreated',
            readOnly: true
        }
    }

    async componentDidMount() {
        const checkout = await getOrders(Cookies.get("username"))
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        this.setState(
          {
            username: checkout,
            address: checkout.address,
            total: checkout.products
              .map(
                item => (item.product.price * item.quantity)
              )
              .reduce(reducer)
          },
          () => console.log(this.state.total)
        );
    }

    calculateTotal = () => {
        let total = 0;
        this.state.username.products.map(
            item => (total += item.product.price * item.quantity)
        );
        return total
    } 

    renderTotalPrice = () => {
        
       let total = this.calculateTotal()
        return (
            <tr>
                <td />
                <td />
                <td>Total</td>
                <td>{total}</td>
            </tr>
        );
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleEdit = async event => {
        this.setState({
            readOnly: false
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
                                <Table borderless>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    {this.state.username.products && this.state.username.products.map(product => <ProductCart cartItem={product} />)}
                                    {this.state.username.products && this.renderTotalPrice()}
                                </Table>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card body>
                                <CardTitle>Payment Detail</CardTitle>
                                <br></br>
                                <CardText>Default address</CardText>
                                <Input type="textarea" name="address" onChange={this.handleInputChange} readOnly={this.state.readOnly} value={this.state.address}></Input>
                                <FormGroup>
                                    <Button className="float-right" size="sm" onClick={this.handleEdit}>Edit address</Button>
                                </FormGroup>
                                <form action={"http://localhost:8000/orders/"+Cookies.get('username')+"/create"} method="POST">
                                <Button type='submit'>Confirm</Button>
                                <input type="hidden" value={(this.state.username.products && this.state.username.products.join(':')) || ''} name="purchasedList"></input>
                                <input type="hidden" value={this.state.total} name="totalPrice"></input>
                                <input type="hidden" value={this.state.status} name="status"></input>
                                <input type="hidden" value={this.state.address === '' ? this.state.username.address : this.state.address} name="shippingAddress"></input>
                                </form>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </LoginContent>
        )
    }
}

export default OrderList
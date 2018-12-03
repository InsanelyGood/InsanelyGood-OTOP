import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Form, Input, FormGroup, Table, Button, FormFeedback } from 'reactstrap';
import Cookies from 'js-cookie'
import { setNewOrder, getOrders } from '../../api/checkout';
import ProductCart from './product_cart'
import '../../css/checkout.css'

const CheckoutContent = styled.div`
    padding: 2em;
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
            readOnly: true,
            addressInvalid: false
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

    handleCheckout = async e => {
        e.preventDefault();
        if (this.state.address !== '' || this.state.username.address !== '') {
            this.setState({ addressInvalid: false })
            const data = {
                purchasedList: this.state.username.products,
                totalPrice: this.state.total,
                status: this.state.status,
                shippingAddress: this.state.address === '' ? this.state.username.address : this.state.address
            };

            const res = await setNewOrder(Cookies.get('username'), data);
            if (res === 200) {
                window.location.href = '/purchased'
            }
        }
        else{
            this.setState({ addressInvalid: true })
        }
    }

    handleEdit = async event => {
        this.setState({
            readOnly: false
        })
    }


    render = () => {
        return (
            <CheckoutContent className='col-sm-4 col-sm-offset-2 col-md-7 col-md-offset-3'>
                <Form className='container'>
                    <h4>Product List</h4>
                    <Card className="card" body>
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
                    <br></br>
                    <br></br>
                    <h4>Payment Detail</h4>
                    <Card body>
                        <h5>Address</h5>
                        {
                            this.state.addressInvalid &&
                            <alert >
                                <Input invalid className="textaddress" type="textarea" name="address" onChange={this.handleInputChange} readOnly={this.state.readOnly} value={this.state.address} />
                                <FormFeedback>Invalid address. Try again</FormFeedback>
                            </alert>
                        }
                        {
                            !this.state.addressInvalid &&
                            <alert >
                                <Input className="textaddress" type="textarea" name="address" onChange={this.handleInputChange} readOnly={this.state.readOnly} value={this.state.address} />
                            </alert>
                        }

                        <FormGroup>
                            <Button className="float-right" size="sm" onClick={this.handleEdit}><ion-icon ios="ios-create" md="md-create"></ion-icon></Button>
                        </FormGroup>
                    </Card>
                    <br></br>
                    <br></br>
                    <form onSubmit={this.handleCheckout}>
                        <Button className="confirmBtn" type='submit' size="lg" block>Confirm</Button>
                    </form>
                </Form>
            </CheckoutContent>
        )
    }
}

export default OrderList
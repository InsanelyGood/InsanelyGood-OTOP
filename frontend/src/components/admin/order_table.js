import React from "react";
import {Table, TH} from './admin_styled'
import { getOrders } from "../../api/orders_list";
import OrderItem from "./order_item";

class OrderTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  async componentDidMount() {
    this.setState({
      orders: await getOrders()
    }, ()=> console.log(this.state.orders)
    );
  }

  handleSortByPrice = () => {
    let sortPrice = this.state.orders.sort(
      (first, second) => first.totalPrice - second.totalPrice
    );
    this.setState({ orders: sortPrice });
  };

  handleSortByDate = () => {
    let sortDate = this.state.orders.sort(
      (first, second) => new Date(first.dateTime) - new Date(second.dateTime)
    );
    this.setState({ orders: sortDate });
  };

  render() {
    return (
      <div className="container mt-5">
        <Table align="center">
          <thead>
            <tr>
              <TH>OrderID</TH>
              <TH onClick={this.handleSortByPrice}>Price</TH>
              <TH onClick={this.handleSortByDate}>Date</TH>
              <TH>Status</TH>
            </tr>
          </thead>
          <tbody>
            {this.state.orders &&
              this.state.orders.map(order => (
                <OrderItem key={order._id} detail={order} />
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

OrderTable.defaultProps = {
  second:{
    totalPrice: 0
  },
  first:{
    totalPrice: 0
  }
}

export default OrderTable;

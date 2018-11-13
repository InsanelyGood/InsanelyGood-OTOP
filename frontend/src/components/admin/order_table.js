import React from "react";
import styled from "styled-components";
import { getOrders } from "../../api/orders_list";
import OrderItem from "./order_item";

const Table = styled.table`
  width: 100%;
`;
const TH = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 18px;
  text-align: center;
`;

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
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <Table align="center">
          <thead>
            <tr>
              <TH>OrderID</TH>
              <TH>Price</TH>
              <TH>Date</TH>
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

export default OrderTable;

import React from "react";
import styled from "styled-components";
import OrderTable from "../components/admin/order_table";

const Component = styled.div`
  padding-top: 5em;
  padding-bottom: 5em;
`;

class Admin extends React.Component {
  render() {
    return (
      <Component className="container">
        <h2>Order</h2>
        <OrderTable />
      </Component>
    );
  }
}

export default Admin;

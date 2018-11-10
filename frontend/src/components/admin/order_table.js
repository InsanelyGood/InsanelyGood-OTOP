import React from "react";
import styled from "styled-components";

const TH = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 18px;
`;

class OrderTable extends React.Component {
  render() {
    return <div className="container mt-5">
        <table align="center">
          <tr>
            <TH>OrderID</TH>
            <TH>Price</TH>
            <TH>Date</TH>
            <TH>Status</TH>
          </tr>
        </table>
      </div>;
  }
}

export default OrderTable;

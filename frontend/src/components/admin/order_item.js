import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TD = styled.td`
  width: 250px;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;
const TR = styled.tr`
  &:hover {
    color: green;
    font-weight: bold;
  }
`;

class OrderItem extends React.Component {

  renderOrderDetail = () => {
    console.log('555');
  }

  render() {
    const { detail } = this.props;
    return (
      <TR onClick={this.renderOrderDetail}>
        <TD>{detail._id}</TD>
        <TD>{detail.totalPrice}</TD>
        <TD>{detail.dateTime}</TD>
        <TD>{detail.status}</TD>
      </TR>
    );
  }
}

OrderItem.propTypes = {
  detail: PropTypes.object
};

OrderItem.defaultProps = {
  detail: {}
};

export default OrderItem;

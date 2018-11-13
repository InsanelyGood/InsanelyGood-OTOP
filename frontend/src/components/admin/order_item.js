import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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
    cursor: pointer;
  }
`;

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      status: ""
    };
  }

  componentDidMount() {
    this.setState({
      status: this.props.detail.status
    });
  }

  renderOrderDetail = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleStatusChange = e => {
    this.setState({
      status: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const data = new FormData(e.target);
    console.log("data", this.props.detail.status);
    fetch("http://localhost:8000/orders/" + this.props.detail._id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: this.state.status })
    }).then(() => {
      this.setState({ modal: false });
      window.location.reload();
    });
  };

  render() {
    const { detail } = this.props;
    return (
      <TR onClick={this.renderOrderDetail}>
        <TD>{detail._id}</TD>
        <TD>{detail.totalPrice}</TD>
        <TD>{detail.dateTime}</TD>
        <TD>{detail.status}</TD>
        <Modal
          isOpen={this.state.modal}
          size="lg"
          toggle={this.renderOrderDetail}
          centered
        >
          <ModalHeader toggle={this.renderOrderDetail}>Order</ModalHeader>
          <ModalBody>
            <form id="orderForm" onSubmit={this.handleSubmit}>
              <select name="status" onChange={this.handleStatusChange}>
                <option
                  value="orderCreated"
                  selected={detail.status === "orderCreated"}
                >
                  orderCreated
                </option>
                <option
                  value="adminAccepted"
                  selected={detail.status === "adminAccepted"}
                >
                  adminAccepted
                </option>
              </select>
            </form>
          </ModalBody>
          <ModalFooter>
            <button>Delete Order</button>
            <button form="orderForm">Update Order</button>
            <button>Cancle</button>
          </ModalFooter>
        </Modal>
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

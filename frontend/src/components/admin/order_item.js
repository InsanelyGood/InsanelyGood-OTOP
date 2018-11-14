import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

const TD = styled.td`
  width: 250px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;
const TR = styled.tr`
  &:hover {
    box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    cursor: pointer;
  }
`;
const DeleteButton = styled.button`
  position: absolute;
  left: 3%;
`;
const Status = styled.div`
  display: inline-block;
  color: white;
  border-radius: 20px;
  padding-left: 7px;
  padding-right: 7px;
`;

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      status: props.detail.status
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     status: this.props.detail.status
  //   });
  // }

  renderOrderDetail = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleNested = () => {
    this.setState({
      nestedModal: !this.state.nestedModal
    });
  };

  handleStatusChange = e => {
    this.setState({
      status: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
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

  handleDelete = () => {
    fetch("http://localhost:8000/orders/" + this.props.detail._id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
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
        <TD>
          {detail.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </TD>
        <TD>{new Date(detail.dateTime).toUTCString()}</TD>
        <TD>
          <Status
            style={{
              backgroundColor:
                detail.status === "orderCreated" ? "#388ea8" : "#91E31F"
            }}
          >
            {detail.status}
          </Status>
        </TD>
        <Modal
          isOpen={this.state.modal}
          size="lg"
          toggle={this.renderOrderDetail}
          centered
        >
          <ModalHeader toggle={this.renderOrderDetail}>Order</ModalHeader>
          <ModalBody>
            <p>Name: {detail.userId}</p>
            <p>Address: {detail.shippingAddress}</p>
            <p>
              Products:{" "}
              {detail.purchasedList.map(
                item => item.productID + " " + item.quantity
              )}
            </p>
            <p>Total Price: {detail.totalPrice}</p>
            <form id="orderForm" onSubmit={this.handleSubmit}>
              <select
                name="status"
                defaultValue={detail.status}
                onChange={this.handleStatusChange}
              >
                <option value="orderCreated">orderCreated</option>
                <option value="adminAccepted">adminAccepted</option>
              </select>
            </form>
          </ModalBody>
          <ModalFooter>
            <DeleteButton
              className="btn btn-danger"
              onClick={this.toggleNested}
            >
              Delete Order
            </DeleteButton>
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              centered
            >
              <ModalHeader>Confirm delete</ModalHeader>
              <ModalBody>Delete this order?</ModalBody>
              <ModalFooter>
                <button className="btn btn-success" onClick={this.handleDelete}>
                  Yes
                </button>
                <button className="btn btn-danger" onClick={this.toggleNested}>
                  No
                </button>
              </ModalFooter>
            </Modal>
            <button className="btn btn-success" form="orderForm">
              Update Order
            </button>
            <button
              className="btn btn-secondary"
              onClick={this.renderOrderDetail}
            >
              Cancel
            </button>
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

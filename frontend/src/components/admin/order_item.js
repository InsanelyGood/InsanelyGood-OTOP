import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  getDetailOfOrder,
  setNewStatus,
  deleteOrder
} from "../../api/orders_list";
import { Table, TH, TD, TR } from "./admin_styled";

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
const TotalPrice = styled.p`
  text-align: right;
  margin-right: 1em;
`;

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      details: {
        purchasedList: []
      },
      status: props.detail.status
    };
  }

  async componentDidMount() {
    this.setState({
      details: await getDetailOfOrder(this.props.detail._id)
    });
  }

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

  handleSubmit = async e => {
    e.preventDefault();
    const data = {
      status: this.state.status
    };
    const res = await setNewStatus(this.props.detail._id, data);
    if (res === 200) {
      this.setState({ modal: false });
      window.location.reload();
    }
  };

  handleDelete = async () => {
    const res = await deleteOrder(this.props.detail._id);
    if(res === 200) {
      this.setState({ modal: false });
      window.location.reload();
    }
  };

  renderProductsTable = () => {
    return (
      <Table>
        <thead>
          <tr>
            <TH>Name</TH>
            <TH>Price</TH>
            <TH>Quantity</TH>
            <TH>Total</TH>
          </tr>
        </thead>
        <tbody>
          {this.state.details !== {} &&
            this.state.details.purchasedList.map(item => (
              <tr key={item.product._id}>
                <TD>{item.product.name}</TD>
                <TD>{item.product.price}</TD>
                <TD>{item.quantity}</TD>
                <TD>{item.product.price * item.quantity}</TD>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  };

  render() {
    const { detail } = this.props;
    const { details } = this.state;

    return (
      <TR onClick={this.renderOrderDetail}>
        <TD>{detail._id.substring(detail._id.length - 5)}</TD>
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
            <p>Name: {details.firstname + "  " + details.lastname}</p>
            <p>Address: {details.shippingAddress}</p>
            <form id="orderForm" onSubmit={this.handleSubmit}>
              <label style={{ paddingRight: "10px" }}>Status:</label>
              <select
                name="status"
                defaultValue={detail.status}
                onChange={this.handleStatusChange}
              >
                <option value="orderCreated">orderCreated</option>
                <option value="adminAccepted">adminAccepted</option>
              </select>
            </form>
            <p>Products:</p>
            {this.renderProductsTable()}
            <TotalPrice>
              <strong>Total Price:</strong> {detail.totalPrice}
            </TotalPrice>
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

OrderItem.defaultProps = {
  detail:{
    name: '',
    price: 0,
    image: '',
    description: '',
    category: '',
    status: '',
    _id:'11111111111',
    totalPrice: 100
  }
}

export default OrderItem;

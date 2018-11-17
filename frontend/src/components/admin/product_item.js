import React from "react";
import styled from "styled-components";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import { TD, TDLeft, TR } from "./admin_styled";

const Img = styled.img`
  margin-bottom: 1em;
  width: 150px;
  heigth: 100px;
`;

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    const { detail } = props;
    this.state = {
      modal: false,
      nestedModal: false,
      name: detail.name,
      image: detail.image,
      price: detail.price,
      description: detail.description,
      category: detail.category,
      region: detail.region
    };
  }

  renderProductDetail = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleImageChange = e => {
    this.setState({ image: e.target.value });
  };

  handlePriceChange = e => {
    this.setState({ price: e.target.value });
  };

  handleDesChange = e => {
    this.setState({ description: e.target.value });
  };

  handleCatChange = e => {
    this.setState({ category: e.target.value });
  };

  handleRegionChange = e => {
    this.setState({ region: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:8000/products/" + this.props.detail._id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        product: {
          name: this.state.name,
          image: this.state.image,
          price: this.state.price,
          description: this.state.description,
          category: this.state.category,
          region: this.state.region
        }
      })
    }).then(() => {
      this.setState({ modal: false });
      window.location.reload();
    });
  };

  render() {
    const { detail } = this.props;
    return (
      <TR onClick={this.renderProductDetail}>
        <TDLeft>{detail.name}</TDLeft>
        <TD>{detail.region}</TD>
        <TD>{detail.price}</TD>
        <Modal
          isOpen={this.state.modal}
          toggle={this.renderProductDetail}
          centered
        >
          <ModalHeader>Edit Product</ModalHeader>
          <ModalBody>
            <Img src={this.state.image} />
            <Form id="productForm" onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label sm={3}>Name: </Label>
                <Col sm={9}>
                  <Input
                    type="text"
                    defaultValue={detail.name}
                    onChange={this.handleNameChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Image Url: </Label>
                <Col sm={9}>
                  <Input
                    type="url"
                    defaultValue={detail.image}
                    onChange={this.handleImageChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Price: </Label>
                <Col sm={9}>
                  <Input
                    type="number"
                    defaultValue={detail.price}
                    onChange={this.handlePriceChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Description: </Label>
                <Col sm={9}>
                  <Input
                    type="textarea"
                    defaultValue={detail.description}
                    onChange={this.handleDesChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Category: </Label>
                <Col sm={9}>
                  <Input
                    type="text"
                    defaultValue={detail.category}
                    onChange={this.handleCatChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Region: </Label>
                <Col sm={9}>
                  <Input
                    type="select"
                    defaultValue={detail.region}
                    onChange={this.handleRegionChange}
                  >
                    <option value="north">North</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                    <option value="south">South</option>
                    <option value="central">Central</option>
                  </Input>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" form="productForm">
              Update
            </button>
            <button
              className="btn btn-danger"
              onClick={this.renderProductDetail}
            >
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </TR>
    );
  }
}

export default ProductItem;

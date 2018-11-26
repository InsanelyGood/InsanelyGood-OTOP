import React from "react";
import styled from "styled-components";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Img = styled.img`
  margin-bottom: 1em;
  width: 150px;
  heigth: 100px;
`;

class ProductAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: "Didn't add",
      name: "Didn't add",
      image: "Didn't add",
      price: 0,
      description: "Didn't add",
      category: "Didn't add",
      region: "North"
    };
  }

  renderModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleIDChange = e => {
    this.setState({ id: e.target.value });
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
    fetch("http://localhost:8000/products/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        image: this.state.image,
        price: this.state.price,
        description: this.state.description,
        category: this.state.category,
        region: this.state.region
      })
    }).then(() => {
      this.setState({ modal: false });
      window.location.reload();
    });
  };

  render() {
    return (
      <div>
        <Button color="info" onClick={this.renderModal}>New Product</Button>
        <Modal isOpen={this.state.modal} toggle={this.renderModal} centered>
          <ModalHeader>New Product</ModalHeader>
          <ModalBody>
            <Img src={this.state.image} alt='Wait for image...' />
            <Form id="productForm" onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label sm={3}>ID: </Label>
                <Col sm={9}>
                  <Input type="text" onChange={this.handleIDChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Name: </Label>
                <Col sm={9}>
                  <Input type="text" onChange={this.handleNameChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Image Url: </Label>
                <Col sm={9}>
                  <Input type="url" onChange={this.handleImageChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Price: </Label>
                <Col sm={9}>
                  <Input type="number" onChange={this.handlePriceChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Description: </Label>
                <Col sm={9}>
                  <Input type="textarea" onChange={this.handleDesChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Category: </Label>
                <Col sm={9}>
                  <Input type="text" onChange={this.handleCatChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Region: </Label>
                <Col sm={9}>
                  <Input type="select" onChange={this.handleRegionChange}>
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
              Add
            </button>
            <button className="btn btn-danger" onClick={this.renderModal}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProductAdd;

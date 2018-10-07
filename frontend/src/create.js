import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
    this.onClick = this.onClick.bind(this) //เวลาเรียกใช้ method ใน class
    this.onClickDelete = this.onClickDelete.bind(this)
  }
  onClick() {
    this.setState({
      num: (this.state.num) + 1
    })
  }
  onClickDelete() {
    this.setState({
      num: (this.state.num) - 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <p className="App-intro">
          {this.state.num}
        </p>
        <button onClick={this.onClick}>OK
      </button>
        <button onClick={this.onClickDelete}>Delete
      </button>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">
            Large button
    </Button>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary">Default button</Button>
          <Button>Default button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small">
            Small button
    </Button>
          <Button bsSize="small">Small button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="xsmall">
            Extra small button
    </Button>
          <Button bsSize="xsmall">Extra small button</Button>
        </ButtonToolbar>
      </div>
    )
  }
}
export default Create

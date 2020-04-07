import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

class FormStepOne extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={this.props.user.name}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={this.props.user.email}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Street Address"
              name="street"
              value={this.props.user.street}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Suite"
              name="suite"
              value={this.props.user.suite}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              value={this.props.user.city}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              placeholder="Zipcode"
              name="zipcode"
              value={this.props.user.zipcode}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
        </Form>
        <div>
          <Button onClick={this.props.handleNext} style={{ float: "right" }}>
            Next >>
          </Button>
        </div>
      </Container>
    );
  }
}

export default FormStepOne;

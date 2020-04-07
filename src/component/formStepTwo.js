import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";

class FormStepTwo extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="User Name"
              name="username"
              value={this.props.user.username}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Control
                type="number"
                placeholder="Phone"
                name="phone"
                value={this.props.user.phone}
                onChange={this.props.handleChange}
              ></Form.Control>
            </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Website"
              name="website"
              value={this.props.user.website}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Company Name"
              name="companyname"
              value={this.props.user.companyname}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Catch Phrase"
              name="catchPhrase"
              value={this.props.user.catchPhrase}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="BS"
              name="bs"
              value={this.props.user.bs}
              onChange={this.props.handleChange}
            ></Form.Control>
          </Form.Group>
        </Form>
        <div>
          <Button onClick={this.props.handlePrevious}> &lt;&lt; Back </Button>
          <Button onClick={this.props.handleSubmit} style={{ float: "right" }}>
            {" "}
            Submit{" "}
          </Button>
        </div>
      </Container>
    );
  }
}

export default FormStepTwo;

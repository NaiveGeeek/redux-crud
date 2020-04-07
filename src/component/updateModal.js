import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { updateUserRequest } from "../action/action";
import { connect } from "react-redux";

class UpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      name: this.props.user.name,
      username: this.props.user.username,
      email: this.props.user.email,
      street: this.props.user.address.street,
      suite: this.props.user.address.suite,
      city: this.props.user.address.city,
      zipcode: this.props.user.address.zipcode,
      phone: this.props.user.phone,
      website: this.props.user.website,
      companyname: this.props.user.company.name,
      catchPhrase: this.props.user.company.catchPhrase,
      bs: this.props.user.company.bs,
    };
   
  }
  handleChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = () => {
    const data = {
      id:this.state.id,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      address: {
        street: this.state.street,
        suite: this.state.suite,
        city: this.state.city,
        zipcode: this.state.zipcode,
      },
      phone: this.state.phone,
      website: this.state.website,
      company: {
        name: this.state.companyname,
        catchPhrase: this.state.catchPhrase,
        bs: this.state.bs,
      },
    };
    this.props.updateUser(this.state.id,data);
    this.props.handleClose();
  };
  render() {
    return (
      <Modal show={this.props.open} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street Address"
                name="street"
                value={this.state.street}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Suite</Form.Label>
              <Form.Control
                type="text"
                placeholder="Suite"
                name="suite"
                value={this.state.suite}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Zipcode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zipcode"
                name="zipcode"
                value={this.state.zipcode}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="User Name"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Website"
                name="website"
                value={this.state.website}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Name"
                name="companyname"
                value={this.state.companyname}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Catch Phrase</Form.Label>
              <Form.Control
                type="text"
                placeholder="Catch Phrase"
                name="catchPhrase"
                value={this.state.catchPhrase}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>BS</Form.Label>
              <Form.Control
                type="text"
                placeholder="BS"
                name="bs"
                value={this.state.bs}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
          </Form>
          <div>
            <Button onClick={this.props.handleClose} style={{ float: "left" }}>
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} style={{ float: "right" }}>
              Save
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
const mapDispatchToProps = dispatch => {
  const updateUser = (id,data) => dispatch(updateUserRequest(id,data));
  return {updateUser};
};
export default connect(null,mapDispatchToProps)(UpdateModal);

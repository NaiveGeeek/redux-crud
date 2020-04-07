import React, { Component } from "react";
import FormStepOne from "./formStepOne";
import FormStepTwo from "./formStepTwo";
import { Modal } from "react-bootstrap";
import { addUserRequest } from "../action/action";
import { connect } from "react-redux";
const Increment = 1;
const firstStep = 1;
const secondStep = 2;

class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      user: {
        name: "",
        username: "",
        email: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        phone: "",
        website: "",
        companyname: "",
        catchPhrase: "",
        bs: "",
      },
    };
  }
  handleChange = (event) => {
    const target = event.target;
    this.setState((prevState) => ({
      user: { ...prevState.user, [target.name]: target.value },
    }));
  };

  handleNext = () => {
    let newCurrentStep = this.state.currentStep + Increment;
    this.setState({
      currentStep: newCurrentStep,
    });
  };
  handlePrevious = () => {
    let newCurrentStep = this.state.currentStep - Increment;
    this.setState({
      currentStep: newCurrentStep,
    });
  };

  showElement = () => {
    if (this.state.currentStep === firstStep) {
      return (
        <FormStepOne
          user={this.state.user}
          handleNext={this.handleNext}
          handleChange={this.handleChange}
        />
      );
    } else if (this.state.currentStep === secondStep) {
      return (
        <FormStepTwo
          user={this.state.user}
          handlePrevious={this.handlePrevious}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      );
    }else{
        return null;
    }
  };

  handleSubmit = () => {
    const data = {
      name: this.state.user.name,
      username: this.state.user.username,
      email: this.state.user.email,
      address: {
        street: this.state.user.street,
        suite: this.state.user.suite,
        city: this.state.user.city,
        zipcode: this.state.user.zipcode,
      },
      phone: this.state.user.phone,
      website: this.state.user.website,
      company: {
        name: this.state.user.companyname,
        catchPhrase: this.state.user.catchPhrase,
        bs: this.state.user.bs,
      },
    };
    this.props.addUser(data);
    this.props.handleClose();
  };
 
  render() {
    return (
     <Modal show={this.props.open} onHide={this.props.handleClose}>
         <Modal.Header closeButton>
             <Modal.Title>Add User</Modal.Title>
         </Modal.Header>
         <Modal.Body>
             {this.showElement()}
         </Modal.Body> 
     </Modal>
    );
  }
}
const mapDispatchToProps = dispatch => {  
  const addUser = data => dispatch(addUserRequest(data));
  return { addUser};
};

export default connect(null,mapDispatchToProps)(FormModal);

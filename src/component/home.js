import React, { Component} from "react";
import { Button, Container, Table } from "react-bootstrap";
import FormModal from "./formModal";
import {
  deletUserRequest,
  fetchAllUser,
} from "../action/action";
import { connect } from "react-redux";
import "../styles/home.css";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import UpdateModal from "./updateModal";
import LoadingOverlay from "react-loading-overlay";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adduser: false,
      edituser: false,
    };
    this.userData = {};
  }
  openadduserModal = () => {
    this.setState({
      adduser: true,
    });
  };
  closeadduserModal = () => {
    this.setState({
      adduser: false,
    });
  };
  openUpdateUserModal = () => {
    this.setState({
      edituser: true,
    });
  };
  closeUpdateUserModal = () => {
    this.setState({
      edituser: false,
    });
  };

  handleEditClick=(id)=>{
   let user =[];
   user = this.props.users.filter((element)=>{
        return element.id === id;
   });
   if(user.length>0){
    this.userData = user[0];
    this.openUpdateUserModal();
   }
  }
  handleDeleteClick=(id)=>{
   this.props.deleteUser(id);
   }
  getTableRows = () => {
    const elemets = this.props.users.map((element) => {
      return (
        <tr key={element.id}>
          <th>{element.name}</th>
          <th>{element.username}</th>
          <th>{element.phone}</th>
          <th>{element.email}</th>
          <th>
            {element.address.street},{element.address.suite},{" "}
            {element.address.city}
          </th>
          <th>{element.website}</th>
          <th>{element.company.name}</th>
          <th>
            <FaPencilAlt className="edit-user" onClick={()=>{this.handleEditClick(element.id)}}></FaPencilAlt>
            <FaTrashAlt className="delete-user" onClick={()=>{this.handleDeleteClick(element.id)}}></FaTrashAlt>
          </th>
        </tr>
      );
    });
    return elemets;
  };

  componentDidMount() {
    this.props.getUserData();
  }
  render() {
    return (
      <LoadingOverlay active={this.props.loading} spinner text="Loading....">
       <Container style={{minHeight:"100vh"}}>
        <div className="main-container">
          <div>
            <h2 className="align-text-center"> USER-CRUD </h2>
          </div>
          <div className="title-container">
            <p className="sub-title" style={{ float: "left" }}>
              User Details{" "}
            </p>
            <Button onClick={this.openadduserModal} style={{ float: "right" }}>
              {" "}
              + Add User
            </Button>
          </div>
          <div className="table-container">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Webiste</th>
                  <th>Company</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{this.getTableRows()}</tbody>
            </Table>
          </div>
        </div>
        {this.state.adduser ? (
          <FormModal
            open={this.state.adduser}
            handleClose={this.closeadduserModal}
          ></FormModal>
        ) : null}
        {this.state.edituser ? (
          <UpdateModal
            user={this.userData}
            open={this.state.edituser}
            handleClose={this.closeUpdateUserModal}
          ></UpdateModal>
        ) : null}
      </Container> 
      </LoadingOverlay>
      
    );
  }
}
const mapStateToProps = (state) => {
  const { users, loading } = state;
  return { users,loading };
};
const mapDispatchToProps = (dispatch) => {
  const getUserData = () => dispatch(fetchAllUser());
  const deleteUser = (id) => dispatch(deletUserRequest(id));
  return { getUserData, deleteUser};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

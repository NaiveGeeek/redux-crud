import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_ALL_USER,
  START_ASYNC_REQUEST,
  STOP_ASYNC_REQUEST,
} from "./actiontypes";
import { toast } from 'react-toastify';
import Axios from "axios";
const corsUrl = "https://cors-anywhere.herokuapp.com/";
const httpUrl = "https://jsonplaceholder.typicode.com/users";

export const addUser = (data) => ({
  type: ADD_USER,
  payload: {
    data: data,
  },
});

export const updateUser = (id, data) => ({
  type: UPDATE_USER,
  payload: {
    id: id,
    data: data,
  },
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: { id: id },
});

export const getAllUSer = (data) => ({
  type: GET_ALL_USER,
  payload: {
    data: data,
  },
});


export const startApiRequest = ()=>({
  type:START_ASYNC_REQUEST,
  payload:true
});


export const stopApiRequest = ()=>({
  type:STOP_ASYNC_REQUEST,
  payload:false
});

export const fetchAllUser = () => {
  return (dispatch) => {
    dispatch(startApiRequest());
    Axios.get(corsUrl + httpUrl)
      .then((response) => {
        dispatch(getAllUSer(response.data));
        dispatch(stopApiRequest());
        
      })
      .catch(() => {
        dispatch(stopApiRequest());
        toast.error("Something went wrong !!!");

      });
  };
};

export const deletUserRequest = (id) => {
  return (dispatch) => {
    dispatch(startApiRequest());
    Axios.delete(corsUrl + httpUrl + `/:${id}`)
      .then((response) => {
        dispatch(deleteUser(id));
        dispatch(stopApiRequest());
        toast.success("User Deleted Succesfully !!!")
      })
      .catch(() => {
        dispatch(stopApiRequest());
        toast.error("Something went wrong !!!");
      });
  };
};

export const updateUserRequest = (id, data) => {
  return (dispatch) => {
    dispatch(startApiRequest());
    Axios.put(corsUrl + httpUrl + `/:${id}`, data)
      .then((response) => {
        dispatch(updateUser(id, data));
        dispatch(stopApiRequest());
        toast.success("user updated Successfully !!!");
      })
      .catch(() => {
        dispatch(updateUser(id, data));
        dispatch(stopApiRequest());
        toast.success("user updated Successfully !!!");
      });
  };
};

export const addUserRequest = (data)=>{
 const newData = {id:Date.now(),...data};
 return (dispatch) => {
    dispatch(startApiRequest());
    Axios.post(corsUrl + httpUrl, data)
      .then((response) => {
        dispatch(addUser(newData));
        dispatch(stopApiRequest());
        toast.success("user added Successfully !!!");

      })
      .catch(() => {
        dispatch(stopApiRequest());
        toast.error("Something went wrong !!!");
      });
  };
};

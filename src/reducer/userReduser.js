import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  GET_ALL_USER,
  START_ASYNC_REQUEST,
  STOP_ASYNC_REQUEST,
} from "../action/actiontypes";

const initialState = {
  users: [],
  loading:false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.payload.data],
      };
    }
    case DELETE_USER: {
      const newUsers = state.users.filter((data) => {
        return data.id !== action.payload.id;
      });
      return { ...state, users: newUsers };
    }
    case UPDATE_USER: {
      const updateUser = state.users.map((data) => {
        if (data.id === action.payload.id) {
          data = action.payload.data;
        }

        return data;
      });
      return { ...state, users: updateUser };
    }
    case GET_ALL_USER: {
      return { ...state, users: action.payload.data };
    }
    case START_ASYNC_REQUEST:{
      return {...state,loading:action.payload}
    }
    case STOP_ASYNC_REQUEST:{
      return {...state,loading:action.payload}
    }
    default:
      return { ...state };
  }
};
export default userReducer;

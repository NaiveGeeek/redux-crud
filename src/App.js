import React from "react";
import "./App.css";
import Home from "./component/home";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Home></Home>
    </Provider>
  );
}

export default App;

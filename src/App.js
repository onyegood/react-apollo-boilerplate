import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRoutes from "./routes";

const App = () => {
  return (
    <>
      <ToastContainer />
      <MainRoutes />
    </>
  );
};

export default App;

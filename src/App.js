import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import HomePage from "./Components/pages/HomePage/HomePage";
import Login from "./Components/pages/LoginPage/Login";
import classes from "./App.module.css";


function App() {
  return (
   
    <div className="App">
   
      <p className={classes.app}>try this</p>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
      </Routes>
      </div>
  );
}

export default App;

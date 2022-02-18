import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import './App.css';


import HomePage from "./Components/pages/HomePage/HomePage";
import Login from "./Components/pages/LoginPage/Login";

function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
      </Routes>
      </div>
  );
}

export default App;

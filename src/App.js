import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import Login from "./Components/pages/LoginPage/Login";
import classes from "./App.module.css";
import LandingPage from "./Components/pages/LandingPage/LandingPage";
import './App.css'


function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
      </div>
  );
}

export default App;

import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import './App.css';
import Landing from "./Components/Landing";
import Login from "./Components/Login";

function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
      </Routes>
      </div>
  );
}

export default App;

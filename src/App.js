import { Routes, Route} from "react-router-dom";
import * as React from "react";
import Login from "./Components/pages/LoginPage/Login";
import LandingPage from "./Components/pages/LandingPage/LandingPage";
import './App.css'
import SignUp from "./Components/pages/SignUpPage/SignUp";
import ForgotPassword from "./Components/pages/ForgotPassword/ForgotPassword";


function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      </Routes>
      </div>
  );
}

export default App;

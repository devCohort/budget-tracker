import { Routes, Route} from "react-router-dom";
import * as React from "react";
import LandingPage from "./Components/pages/LandingPage/LandingPage";
import './App.css'
import ForgotPassword from "./Components/pages/ForgotPassword/ForgotPassword";
import Login from "./Components/pages/LoginPage/Login"
import SignUp from "./Components/pages/SignUpPage/SignUp"
import ResetPassword from "./Components/pages/ResetPassword/ResetPassword";
import PasswordSuccess from "./Components/pages/PasswordSuccess/passwordSuccess";


function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
       <Route path="login" element={<Login/>} />
       <Route path="signUp*" element={<SignUp/>} />
       <Route path="forgotPassword" element={<ForgotPassword/>} />
       <Route path="resetPassword" element={<ResetPassword/>} />
       <Route path="passwordSuccess" element={<PasswordSuccess/>} />
      </Routes>
  
      </div>
  );
}

export default App;

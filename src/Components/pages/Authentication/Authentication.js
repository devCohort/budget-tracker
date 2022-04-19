import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import classes from './Authentication.module.css'
import logo from "../../../assets/images/logo.png"
import ellipse from "../../../assets/images/ellipse.png"

function Authentication() {
  return (
    <div className={classes.authentication}>
      <div className={classes.loginBox}>
      <img className={classes.logo} src={logo} alt="logo" />
            <img className={classes.ellipse} src={ellipse} alt="ellipse" />
            <h1 className={classes.h1}>Track!t</h1>
            <Link to="navBar">navBar</Link>
            <Link to="login">signUp</Link>
            <Link to="forgotPassword">signUp</Link>
      </div>
      <div className={classes.rightBox}>
       <Outlet/>
      </div>
    </div>
  )
}

export default Authentication
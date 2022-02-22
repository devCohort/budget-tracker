import React from 'react'
import classes from './Logo.module.css'
import logo from "../../../assets/images/logo.png"
import ellipse from "../../../assets/images/ellipse.png"

function Logo() {
  return (
    <div className={classes.logoBox}>
         <img className={classes.logo} src={logo} alt="logo" />
            <img src={ellipse} alt="ellipse" />
            <h1 className={classes.h1}>Track!t</h1>
    </div>
  )
}

export default Logo
import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../UI/Title/Title'
import classes from './passwordSuccess.module.css'
import Logo from '../../UI/Logo/Logo'


function ResetPassword() {
  return (
    <div className={classes.signUp}>
      <div className={classes.logoBox}>
        <Logo/>
      </div>
      <div className={classes.rightBox}>
            <Title title="Successful Password Reset"/>
            <form className={classes.form}>
              <p className={classes.text}>You can now use your password to Login to your account</p>
           <button className={classes.submitBox}>Login</button>      
        </form>
        </div>
    </div>
  )
}

export default ResetPassword
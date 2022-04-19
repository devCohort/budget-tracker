import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../UI/Title/Title'
import classes from './ResetPassword.module.css'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import Logo from '../../UI/Logo/Logo'
import SubmitButton from '../../UI/SubmitButton/SubmitButton'

function ResetPassword() {
  return (
    <div className={classes.signUp}>
      <div className={classes.logoBox}>
        <Logo/>
      </div>
      <div className={classes.rightBox}>
            <Title title="Forgot Password"/>
            <form className={classes.form}>
            <input  className={classes.input}type="password" name="newPassword" id="" placeholder='New Password' />
            <input  className={classes.input}type="password" name="confirmPassword" id="" placeholder='Confirm New Password' />
           <SubmitButton/>      
        </form>
        </div>
    </div>
  )
}

export default ResetPassword
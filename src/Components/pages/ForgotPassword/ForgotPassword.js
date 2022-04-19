import React from 'react'
import { Link} from 'react-router-dom'
import Title from '../../UI/Title/Title'
import classes from './ForgotPassword.module.css'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import Logo from '../../UI/Logo/Logo'


function ForgotPassword() {
 

  return (
    <div className={classes.signUp}>
      <div className={classes.logoBox}>
        <Logo/>
      </div>
      <div className={classes.rightBox}>
            <Title title="Forgot Password"/>
            <form className={classes.form}>
            <input  className={classes.input}type="email" name="email" id="" placeholder='Email Address' />
          
           <button className={classes.submitBox} type="submit">Submit</button>
            <div className={classes.remember}>
                <div className={classes.back}>
                    <IoArrowBackCircleOutline className={classes.backIcon}/>
                    <Link to="/login" className={classes.signLink}>Back to Login</Link> 
                    
                </div>
            </div>       
        </form>
        </div>
    </div>
  )
}

export default ForgotPassword
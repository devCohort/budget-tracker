import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ButtonGroup from '../../UI/Button Group/ButtonGroup'
import Logo from '../../UI/Logo/Logo'
import Title from '../../UI/Title/Title'
import classes from './SignUpPage.module.css'

function SignUp() {

  const [passIcon,setPassIcon]=useState(true) 


  return (
    <div className={classes.signUp}>
        <div className={classes.loginBox}> <Logo/> </div>
        <div className={classes.rightBox}>
            <Title title="Sign Up"/>
            <ButtonGroup/>
            <div className={classes.or}>-OR-</div>

            <form>
          <input  className={classes.input}type="text" name="name" id="" placeholder='Full Name' />
          <input  className={classes.input}type="email" name="email" id="" placeholder='Email Address' />
          <input className={classes.input} type="password" name="password" id="" placeholder="Password"/>   
          <div className={classes.passIconBox}>
            {passIcon
            ?
            <AiFillEye className={classes.passwordEye} onClick={()=>setPassIcon(false)}/>
            :
            <AiFillEyeInvisible className={classes.passwordEye} onClick={()=>setPassIcon(true)}/>
          }
          </div>
          <button className={classes.submit} type="submit">Log in</button>
          <div className={classes.remember}>
            <div>
              Already have an Account?   <Link to="/login" className={classes.signLink}>Sign in</Link> 
            </div>
          </div>       
        </form>
        </div>
    </div>
  )
}

export default SignUp
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from '../../UI/Button Group/ButtonGroup';
import Title from '../../UI/Title/Title';
import classes from './LoginPage.module.css'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import Logo from '../../UI/Logo/Logo';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';


function Login() {

const [passIcon,setPassIcon]=useState(true) 


  return (
  <div className={classes.login}>
      <div className={classes.logoBox}>
        <Logo/>
      </div>
      <div className={classes.rightBox}>
        <Title title="Log in"/>
       <ButtonGroup/>
        <div className={classes.or}>-OR-</div>
        <form>
          <input  className={classes.input}type="email" name="email" id="" placeholder='Email Address' />
          <input className={classes.input} type="password" name="password" id="" placeholder="Password"/>
          <div className={classes.remember}>
            <div className={classes.checkBox}>
            <input className={classes.check}type="checkbox" name="" id="" />
            <label>Remember me</label> 
            </div>
            {passIcon
            ?
            <AiFillEye className={classes.passwordEye} onClick={()=>setPassIcon(false)}/>
            :
            <AiFillEyeInvisible className={classes.passwordEye} onClick={()=>setPassIcon(true)}/>
          }
          
          </div>
         <SubmitButton/>
          <div className={classes.remember}>
            <div>
              Don't have an Account?<Link to="/signUp" className={classes.signLink}>Sign Up</Link> 
            </div>
            <div><Link to="/forgotPassword">Forgot Password</Link></div>
          </div>       
        </form>
        </div>
  </div>)
}

export default Login;

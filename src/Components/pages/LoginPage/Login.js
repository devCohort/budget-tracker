import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../UI/Logo/Logo';
import classes from './LoginPage.module.css'

function Login() {
  return (
  <div className={classes.login}>
      <div className={classes.loginLogo}><Logo/></div>
      <div className={classes.rightBox}> 
        <h1>Login</h1>
        <div className={classes.buttonGroup}>
          <button className={classes.button}>facebook</button>
          <button className={classes.button}>google</button>
        </div>
        <div className={classes.or}>-OR-</div>
        <form>
          <input  className={classes.input}type="email" name="email" id="" placeholder='Email Address' />
          <input className={classes.input} type="password" name="password" id="" placeholder="Password"/>
          <div className={classes.remember}>
            <div className={classes.checkBox}>
            <input className={classes.check}type="checkbox" name="" id="" />
            <label>Remember me</label> 
            </div>
          </div>
          <button className={classes.submit} type="submit">Log in</button>
          <div className={classes.remember}>
            <div>
              Don't have an Account?<Link to="/signUp" className={classes.signLink}>Sign Up</Link> 
            </div>
            <div>Forgot Password</div>
          </div>       
        </form>
      </div>
  </div>)
}

export default Login;

import React from 'react';

function Login() {
  return (<div className="login">
      <h1>Login</h1>
      <div className="buttons">
        <button>google</button>
        <button>facebook</button>
      </div>
      <div className="middleSection">
        -OR-
      </div>
      <form>
        <div >
          <input type="email" placeholder='Email Address' />
        </div>
        <div >
          <input type="password" placeholder='Password' />
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          Remember me
        </div>
        <div className="">
          <button>Log in</button>
        </div>
      </form>
      <div>
        <p>Don't have an account yet? Sign Up</p>
        <p>Forgot your password</p>
      </div>
  </div>)
}

export default Login;

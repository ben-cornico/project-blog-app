import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <form className='login-form'>
            <p className='app-title'>BLOGAG</p>
            <input type="text" name="username" id="username" placeholder='Username or Email'/>
            <input type="password" name="password" id="password" placeholder='Enter Password'/>
            <button type='submit' className='btn-login'>LOGIN</button>
        </form>
        <p>Don't have an account? Register now!</p>
    </div>
  )
}

export default Login
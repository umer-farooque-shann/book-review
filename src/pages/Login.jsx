import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Account from '../assets/account.png';
import Password from '../assets/password.png';
import Eye from '../assets/eye.png';
import Google from '../assets/google.png';
import Apple from '../assets/apple.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';

const Login = () => {
  return (
    <>
      <header>
        <div className='header_align cr_space'>
            <div className='header_left'>  
                <NavLink exact to="/" ><img src={Logo} className="logo" alt="logo" /></NavLink>
            </div>
            <div className='header_right-login'>  
                <a>New User? <span>Sign Up </span></a>
            </div>
            
        </div>
    </header>
    <div className='main login-main'>
      <div className='login-card'>
        <div>
          <h5>Welcome Back</h5>
          <h6>Login to Continue</h6>
        </div>
        <form className='login-form-container pt-4'>
          <div className='login-form'>
            <img src={Account} className="search-img" alt="search" />
            <input placeholder='Enter Username' />
           
          </div>
          <div className='login-form'>
            <img src={Password} className="icon-img" alt="password" />
            <input placeholder='Enter Password' />
            <img src={Eye} className="icon-img" alt="eye" />
          </div>
          <button className='btn login_btn'>Login</button>
        </form>
        <div className='pt-3'>
          <h6 className='text-secondary' style={{ textDecoration: 'underline' }}>Forgot password </h6>
          <h6 className='text-white pt-4'>Login with </h6>
        </div>
        <div className='social login-social'>
                <img src={Google} className="social-img" alt="social-img" />
                <img src={Apple} className="social-img" alt="social-img" />
                <img src={Facebook} className="social-img" alt="social-img" />
                <img src={Twitter} className="social-img" alt="social-img" />
        </div>

      </div>

    </div>
    
    </>
  )
}

export default Login

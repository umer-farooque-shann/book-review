import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Account from '../assets/account.png';
import Password from '../assets/password.png';
import Eye from '../assets/eye.png';
import Google from '../assets/google.png';
import Apple from '../assets/apple.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import AuthService from '../services/AuthService';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            if (password !== confirmPassword) {
                console.error('Passwords do not match');
                // Handle password mismatch error
                return;
            }
            // Call the signup service method
            await AuthService.signup(name, email, password, confirmPassword);
            // Assume signup was successful and navigate to login
            navigate("/book-review/");
        } catch (error) {
            console.error('Signup failed:', error);
            // Handle signup failure, show error message or perform any other action
        }
    };

    return (
        <div>
            <header>
                <div className='header_align cr_space'>
                    <div className='header_left'>
                        <NavLink to="/"><img src={Logo} className="logo" alt="logo" /></NavLink>
                    </div>
                    <div className='header_right-login'>
                        <NavLink to="/book-review/">Already have an account? <span>Login</span></NavLink>
                    </div>
                </div>
            </header>
            <div className='main login-main'>
                <div className='login-card'>
                    <div>
                        <h5>Sign Up</h5>
                        <h6>Create your account</h6>
                    </div>
                    <form className='login-form-container pt-4' onSubmit={handleSignup}>
                        <div className='login-form'>
                            <img src={Account} className="search-img" alt="search" />
                            <input placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='login-form'>
                            <img src={Account} className="search-img" alt="search" />
                            <input placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='login-form'>
                            <img src={Password} className="icon-img" alt="password" />
                            <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <img src={Eye} className="icon-img" alt="eye" />
                        </div>
                        <div className='login-form'>
                            <img src={Password} className="icon-img" alt="password" />
                            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <img src={Eye} className="icon-img" alt="eye" />
                        </div>
                        <button type="submit" className='btn login_btn'>Sign Up</button>
                    </form>
                    <div className='pt-3'>
                        <NavLink to="/book-review/"><h6 className='text-secondary' style={{ textDecoration: 'underline' }}>Already have an account? </h6></NavLink>
                        <h6 className='text-white pt-4'>Sign up with </h6>
                    </div>
                    <div className='social login-social'>
                        <img src={Google} className="social-img" alt="social-img" />
                        <img src={Apple} className="social-img" alt="social-img" />
                        <img src={Facebook} className="social-img" alt="social-img" />
                        <img src={Twitter} className="social-img" alt="social-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

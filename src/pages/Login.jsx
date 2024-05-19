import React, { useState } from 'react';
import { NavLink,useNavigate,Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Account from '../assets/account.png';
import Password from '../assets/password.png';
import Eye from '../assets/eye.png';
import Google from '../assets/google.png';
import Apple from '../assets/apple.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import AuthService from '../services/AuthService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const notify = () => {
        toast.error("Invalid Credentials");
      };
    

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await AuthService.login(email, password); 
           
            if (data.isAdmin) {
                navigate("/book-review/admin");
            } else {
                if (data.isFirstTimeLogin) {
                    navigate("/book-review/Intrest");
                } else {
                    navigate("/book-review/home"); 
                }
            }
        } catch (error) {
            console.error('Login failed:', error);
            notify()
        }
    };

    return (
        <>
        <ToastContainer />
            <header>
                <div className='header_align cr_space'>
                    <div className='header_left'>
                        <NavLink to="/" ><img src={Logo} className="logo" alt="logo" /></NavLink>
                    </div>
                    <div className='header_right-login'>
                        <Link to="/book-review/signup" style={{textDecoration:"none"}}>New User? <span>Sign Up </span></Link>
                    </div>
                </div>
            </header>
            <div className='main login-main'>
                <div className='login-card'>
                    <div>
                        <h5>Welcome Back</h5>
                        <h6>Login to Continue</h6>
                    </div>
                    <form className='login-form-container pt-4' onSubmit={handleLogin}>
                        <div className='login-form'>
                            <img src={Account} className="search-img" alt="search" />
                            <input placeholder='Enter Username' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='login-form'>
                            <img src={Password} className="icon-img" alt="password" />
                            <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <img src={Eye} className="icon-img" alt="eye" />
                        </div>
                        <button type="submit" className='btn login_btn'>Login</button>
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
    );
}

export default Login;

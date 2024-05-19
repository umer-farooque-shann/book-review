import React, { useState } from 'react';
import { NavLink, useLocation,useNavigate } from 'react-router-dom';
import '../components/header.css';
import Logo from '../assets/logo.png';
import User1 from '../assets/user1.png';

const AdminNav = () => {
        const navigate   = useNavigate()
        const location = useLocation();
        const isProfilePage = location.pathname === '/profile';
      
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
      
        const toggleSidebar = () => {
          setIsSidebarOpen(!isSidebarOpen);
          document.body.classList.toggle('open_sidebar', !isSidebarOpen);
        };
      
        const closeSidebar = () => {
          setIsSidebarOpen(false);
          document.body.classList.remove('open_sidebar');
        };

        const logout = ()=>{
          localStorage.clear()
          navigate("/book-review/")

        }
      
  return (
    <header>
    <div className='header_align cr_space'>
      <div className='header_left'>  
        <NavLink exact="true" to="/book-review/admin" ><img src={Logo} className="logo" alt="logo" /></NavLink>
      </div>
      <div className='header_right'>  
       
       <button className='log-out-admin' onClick={logout}>LogOut</button>
        
      </div>
      <div className="menu" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
  )
}

export default AdminNav
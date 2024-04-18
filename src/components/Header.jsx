// Header.js

import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../components/header.css';
import Logo from '../assets/logo21.png';
import User1 from '../assets/user1.png';

const Header = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  // State to track whether the sidebar is open or not
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Add or remove the class from the body
    document.body.classList.toggle('open_sidebar', !isSidebarOpen);
  };

  // Function to close the sidebar when a NavLink is clicked
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.classList.remove('open_sidebar');
  };

  return (
    <header>
      <div className='header_align cr_space'>
        <div className='header_left'>  
          <NavLink exact to="/" ><img src={Logo} className="logo" alt="logo" /></NavLink>
        </div>
        <div className='header_right'>  
          <div className='header_nav'>
            <NavLink exact to="/" activeClassName="active" onClick={closeSidebar}>Home</NavLink>
            <NavLink to="/My_books" activeClassName="active" onClick={closeSidebar}>My Books</NavLink>
            <div className='dropdown'>
              <a className='dropdown-header'>Community</a>
              <div className='dropdown-options'>
                <NavLink exact to="/Group"  className='option' onClick={closeSidebar}>Group</NavLink>
                <NavLink exact to="/Quates"  className='option' onClick={closeSidebar}>Quotes</NavLink>
                <NavLink exact to="/Author"  className='option' onClick={closeSidebar}>Ask the Author</NavLink>
                <NavLink exact to="/People"  className='option' onClick={closeSidebar}>People</NavLink>
              </div>
            </div>
            <NavLink to="/Contact_us" activeClassName="active" onClick={closeSidebar}>Contact Us</NavLink>
          </div>
          {/* Conditionally render header_buttons */}
          {!isProfilePage && (
            <div  className='header_buttons'>
              <NavLink to="/login" className='btn' activeClassName="active">Login</NavLink>
              <button className='btn sign_btn'>Sign up</button>
              <NavLink to="/profile">
                <img src={User1} className="profile-icon" alt="profile-icon" />
              </NavLink>
            </div>
          )}
          
        </div>
        <div className="menu" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;

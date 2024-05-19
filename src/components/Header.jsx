import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../components/header.css';
import Logo from '../assets/logo.png';
import User1 from '../assets/user1.png';

const Header = () => {
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

  return (
    <header>
      <div className='header_align cr_space'>
        <div className='header_left'>  
          <NavLink exact="true" to="/book-review/home" ><img src={Logo} className="logo" alt="logo" /></NavLink>
        </div>
        <div className='header_right'>  
          <div className='header_nav'>
            <NavLink exact="true" to="/book-review/home" activeClassName="active" onClick={closeSidebar}>Home</NavLink>
            <NavLink to="/book-review/My_books" activeClassName="active" onClick={closeSidebar}>My Books</NavLink>
            <div className='dropdown'>
              <a className='dropdown-header'>Community</a>
              <div className='dropdown-options'>
                <NavLink exact="true" to="/book-review/group"  className='option' onClick={closeSidebar}>Virtual Book club</NavLink>
                <NavLink exact="true" to="/book-review/Quates"  className='option' onClick={closeSidebar}>Quotes</NavLink>
                <NavLink exact="true" to="/book-review/Author"  className='option' onClick={closeSidebar}>Ask the Author</NavLink>
                <NavLink exact="true" to="/book-review/People"  className='option' onClick={closeSidebar}>People</NavLink>
              </div>
            </div>
            <NavLink to="/book-review/Contact_us" activeClassName="active" onClick={closeSidebar}>Contact Us</NavLink>
          </div>
          {/* Conditionally render header_buttons */}
          {!isProfilePage && (
            <div  className='header_buttons'>
              {/* <NavLink to="/book-review/login" className='btn' activeClassName="active">Login</NavLink>
              <button className='btn sign_btn'>Sign up</button>  */}
              <NavLink onClick={closeSidebar} to="/book-review/Profile">
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

// footer.js

import React from 'react';
import { NavLink} from 'react-router-dom';
import '../components/footer.css';
import Logo from '../assets/logo.png';
import Google from '../assets/google.png';
import Apple from '../assets/apple.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Appstore from '../assets/appstore.png';
import Playstore from '../assets/playstore.png';

const Footer = () => {
  return (
    <footer>
      <div className=' cr_space'>
        <div className='footer_row'>
          <div className='footer-left'>
            <div className='footer-col'>
              <h5 className='font-weight-600 text-secondary mb-3'>Company</h5>
              <ul className='footer-ul'>
                <li>About us</li>
                <li>Careers</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Interest Based Ads</li>
                <li>Ads Preferences</li>
                <li>Help</li>
              </ul>
            </div>
            <div className='footer-col'>
              <h5 className='font-weight-600 text-secondary mb-3'>work with us</h5>
              <ul className='footer-ul'>
                <li>Authors</li>
                <li>Advertise</li>
                <li>Author & Ads blog</li>
                <li>API</li>
              </ul>
            </div>
            <div className='footer-col'>
              <h5 className='font-weight-600 text-secondary mb-4'>contact</h5>
              <div className='social login-social fit-content' style={{ padding:'0' }}>
                  <img src={Google} className="social-img" alt="social-img" />
                  <img src={Apple} className="social-img" alt="social-img" />
                  <img src={Facebook} className="social-img" alt="social-img" />
                  <img src={Twitter} className="social-img" alt="social-img" />
              </div>
              <h5 className='font-weight-600 text-secondary mt-4 mb-3 pt-2'>support</h5>
              <ul className='footer-ul'>
                <li>FAQ</li>
                <li>Search Guide </li>
              </ul>
            </div>
          </div>
          <div className='footer-right'>
              <NavLink exact to="/book-review/home" ><img src={Logo} className="logo" alt="logo" /></NavLink>
              <div className='flex-align2 g3' style={{ flexWrap:'wrap' }}>
                <img src={Appstore} className="store" alt="appstore" />
                <img src={Playstore} className="store" alt="playestore" />
              </div>
          </div>
        </div>
        <h6 className='text-center cr_space font-weight-400 pt-4'>Copyright © YYYY - YYYY Company name. All rights reserved</h6>
    
      
      </div>
    </footer>
  );
};

export default Footer;

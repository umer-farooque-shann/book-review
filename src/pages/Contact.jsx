import React, { useState } from 'react';
import Header from '../components/Header';
import Phone from '../assets/phone.png';
import Mail from '../assets/mail.png';
import Account from '../assets/account.png';
import Password from '../assets/password.png';
import Eye from '../assets/eye.png';
import Footer from '../components/Footer';


const Contact = () => {


  return (
    <>
      <Header />
      <div className='main contact-page'>
        <div className='book-row cr_space pb-4'>
          
          
          <div className='contact-row max-w--1200'>
            <div className='contact-left'>
              <h2 className='text-secondary mb-4'>CONTACT US</h2>
              {/* <h4 className='font-weight-600 pb-3'>Let’s Get in Touch</h4> */}
              <h6 className='font-weight-500'>Not sure what you need? The team at
              Square Events will be happy to listen to
              you and suggest event ideas you
              hadn,t considered.</h6>
              <div className='flex-align3 g2 pt-3'>
                <img
                  src={Mail}
                  className='circle-img'
                 
                  
                />
                <h6 className='font-weight-400'>companyname@gmail.com</h6>

              </div>
              <div className='flex-align3 g2 pt-3'>
                <img
                  src={Phone}
                  className='circle-img'
                 
                  
                />
                <h6 className='font-weight-400'>Support: (+98) 123 456 7890</h6>

              </div>
            </div>
            <div className='contact-right'>
                <div className='card-main contact-card'>
                    

                    <form className='contact-form-container pt-4'>
                      <div className='contact-form col-6'>
                        <h6 className='pb-1 d-flex font-weight-500'>Full Name</h6>
                        <input placeholder='Enter name' />
                      </div>
                      <div className='contact-form col-6'>
                        <h6 className='pb-1 d-flex font-weight-500'>Company</h6>
                        <input placeholder='Company name' />
                      </div>
                      <div className='contact-form col-6'>
                        <h6 className='pb-1 d-flex font-weight-500'>Email</h6>
                        <input placeholder='example@gmail.com' />
                      </div>
                      <div className='contact-form col-6'>
                        <h6 className='pb-1 d-flex font-weight-500'>Phone number</h6>
                        <input type='text' placeholder='+1 (555) 000 - 0000' />
                      </div>
                      <div className='contact-form col-12'>
                        <h6 className='pb-1 d-flex font-weight-500'>Address</h6>
                        <input placeholder='Type Your Address ' />
                      </div>
                      <div className='contact-form col-12'>
                        <h6 className='pb-1 d-flex font-weight-500'>Your Message</h6>
                        <textarea placeholder='Type Your Message here' ></textarea>
                      </div>
                      <div className='contact-form col-12'>
                        <button button className='btn' style={{ boxShadow: 'none', background:'var(--secondary)', color:'var(--white)', fontWeight:'300' }}>Send Message</button>
                      </div>
                    </form>
                </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;

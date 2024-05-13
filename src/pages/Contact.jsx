import React, { useState } from 'react';
import axiosInstance from '../services/axiosInterceptor';
import Header from '../components/Header';
import Phone from '../assets/phone.png';
import Mail from '../assets/mail.png';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/book/contactpost', formData);
      alert('Thank you for Your Response');
      // Reset the form
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phoneNumber: '',
        address: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <Header />
      <div className='main contact-page'>
        <div className='book-row cr_space pb-4'>
          <div className='contact-row max-w--1200'>
            <div className='contact-left'>
              <h2 className='text-secondary mb-4'>CONTACT US</h2>
              <h6 className='font-weight-500'>
                Not sure what you need? The team at Square Events will be happy to listen to you and suggest event ideas you hadn't considered.
              </h6>
              <div className='flex-align3 g2 pt-3'>
                <img src={Mail} className='circle-img' alt='Email' />
                <h6 className='font-weight-400'>companyname@gmail.com</h6>
              </div>
              <div className='flex-align3 g2 pt-3'>
                <img src={Phone} className='circle-img' alt='Phone' />
                <h6 className='font-weight-400'>Support: (+98) 123 456 7890</h6>
              </div>
            </div>
            <div className='contact-right'>
              <div className='card-main contact-card'>
                <form className='contact-form-container pt-4' onSubmit={handleSubmit}>
                  <div className='contact-form col-6'>
                    <h6 className='pb-1 d-flex font-weight-500'>Full Name</h6>
                    <input
                      type='text'
                      name='fullName'
                      placeholder='Enter name'
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='contact-form col-6'>
                    <h6 className='pb-1 d-flex font-weight-500'>Company</h6>
                    <input
                      type='text'
                      name='company'
                      placeholder='Company name'
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='contact-form col-6'>
                    <h6 className='pb-1 d-flex font-weight-500'>Email</h6>
                    <input
                      type='email'
                      name='email'
                      placeholder='example@gmail.com'
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='contact-form col-6'>
                    <h6 className='pb-1 d-flex font-weight-500'>Phone number</h6>
                    <input
                      type='text'
                      name='phoneNumber'
                      placeholder='+1 (555) 000 - 0000'
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='contact-form col-12'>
                    <h6 className='pb-1 d-flex font-weight-500'>Address</h6>
                    <input
                      type='text'
                      name='address'
                      placeholder='Type Your Address'
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='contact-form col-12'>
                    <h6 className='pb-1 d-flex font-weight-500'>Your Message</h6>
                    <textarea
                      name='message'
                      placeholder='Type Your Message here'
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className='contact-form col-12'>
                    <button
                      type='submit'
                      className='btn'
                      style={{
                        boxShadow: 'none',
                        background: 'var(--secondary)',
                        color: 'var(--white)',
                        fontWeight: '300'
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

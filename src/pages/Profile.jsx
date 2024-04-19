import React from 'react';

import Header from '../components/Header'; 
import { NavLink } from 'react-router-dom';

import Logo from '../assets/logo.png';


import Edit from '../assets/edit.png';
import Profile_img from '../assets/profile.png';
import Gift from '../assets/gift.png';
import Sug1 from '../assets/sug1.png';
import Plus from '../assets/plus-circle.png';
import Footer from '../components/Footer';
import Statistics from '../assets/statistics.png';
import Premium from '../assets/premium.png';





const Profile = () => {


  
  
  return (
    <>
      <Header />
      <div className='main profile-page'>
        
        <div className='book-row cr_space'>
          <div className='head2 text-center' style={{ marginBottom:'20px' }}>
              <h2 className='text-secondary'>Profile</h2>
              <div className='right-search'>
                <button button className='btn' style={{ boxShadow: 'none', background:'var(--secondary)', color:'var(--white)', fontWeight:'300', borderRadius:'40px' }}>
                  Edit Profile
                  <img src={Edit} className="edit-img" alt="edit" style={{ marginLeft:'15px' }} />

                </button>
              </div>

          </div>
          <div className='col-f max-w--1200 pt-2 pb-2'>
            <div className='card-main'>
              
              <div className='profile-card-left'>
                <div className='profile-card-left-1'>
                  <img src={Profile_img} className="profile-img" alt="profile" style={{ width:'100%' }} />
                  <h6>Details</h6>
                  <p className='pt-1'>Male, City, Country</p>
                  <div className='flex-align3'>
                    <img src={Gift} className="edit-img" alt="gift" style={{ marginRight:'10px' }} />
                    <p>Birth Day :</p>
                    <p>DD/MM/YYYY</p>
                  </div>

                </div>
                <div className='profile-card-left-2'>
                  <div>
                    <h6>User Name</h6>
                    <div className='card-3-row pt-3'>
                      <div className='col-4-card'>
                        <h6 className='text-white'>100</h6>
                        <p>Books</p>
                      </div>
                      <div className='col-4-card'>
                        <h6 className='text-white'>1,245</h6>
                        <p>Friend’s</p>
                      </div>
                      <div className='col-4-card'>
                        <h6 className='text-white'>8</h6>
                        <p>Following</p>
                      </div>

                    </div>
                  </div>
                  <div className='pt-3'>
                    <h6>Details</h6>
                    <p className=''>Joined in Month DD YEAR</p>
                    <div className='flex-align3 g1 pt-2'>
                      <p className='font-weight-500'>Favorite </p>
                      <p  className='text-secondary font-weight-500'>GENRES</p>
                    </div>
                    <p >Romance, Mystery/Thriller, Fantasy, Science Fiction, +5 More</p>
                  </div>
                  <div className='pt-3'>
                    <h6>My BookShelves</h6>
                    <div className='card-3-row pt-2'>
                      <div className='col-4-card' style={{ background:'var(--secondary)' }}>
                        <h6 className='text-white'>Read</h6>
                        <p className='text-white'>(01)</p>
                      </div>
                      <div className='col-4-card' style={{ background:'var(--secondary)' }}>
                        <h6 className='text-white'>Currently Reading</h6>
                        <p className='text-white'>(01)</p>
                      </div>
                      <div className='col-4-card' style={{ background:'var(--secondary)' }}>
                        <h6 className='text-white'>To Read</h6>
                        <p className='text-white'>(01)</p>
                      </div>
                      

                    </div>
                  </div>



                </div>
              </div>
              <div className='profile-card-right'>
                <div className='slide-books'>
                    <div className='add-book-card'>
                      <img src={Sug1} className="books" alt="books" />
                      <img src={Plus} className="plus-img" alt="search" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className='col-f max-w--1200 pt-4  pb-2'>
            <div className='head pb-2'>
              <h6 className='text-secondary'>Reading</h6>

            </div>
            <div className='card-main reading-card'>
              
                <div className='flex-align reading-card-1  g4'>
                  <img src={Sug1} className="books-ad" alt="books" />  
                  <div>
                    <h3 className='font-weight-600'>BOOK NAME</h3>
                    <h6 className='font-weight-500'>Author Name</h6>
                    <div className='Stars' style={{ '--rating': '4' }}></div>

                  </div>
                </div>
                <div className='flex-align g2 g2reading-card-2'>
                  <div className='range-track'>
                    <div className='range-thumb' style={{ width:'83%' }}>

                    </div>
                  </div>
                  <p>83%</p>
                </div>
                <div className='reading-card-3'>
                  <button button className='btn' style={{ boxShadow: 'none', background:'var(--secondary)', color:'var(--white)', fontWeight:'300' }}>
                  Continue
                  </button>
                </div>
                

            </div>
          </div>
          <div className='col-2-row max-w--1200 pt-4'>
            <div className='head pb-2'>
              <h6 className='text-secondary'>This Week Statistics </h6>

            </div>
            <div className='stati-card-container'>
              <div className='stati-card-container-left'>
                <img src={Statistics} className="stati-img" alt="statistics"/>
              </div>
              <div className='card-main stati-card-container-right'>
                <div className='go-premium'>
                  <img src={Logo} className="logo2" alt="logo" />
                  <h5 className='text-secondary'>Go Premium</h5>
                  <p className='pb-4'>Explore 25k+ Books with lifetime membership</p>
                  <button className='btn' style={{ boxShadow: 'none', background:'var(--secondary)', color:'var(--white)', fontWeight:'300', borderRadius:'40px' }}>
                  Get Access
                  </button>
                </div>
                <img src={Premium} className="premium-img" alt="premium"/>
                  
              </div>

            </div>
          </div>
          <div className='col-2-row max-w--1200 pt-4 pb-4'>
            <NavLink to="/login">
            <button className='btn' style={{ boxShadow: 'none', background:'var(--secondary)', color:'var(--white)', fontWeight:'300', float:'right' }}>
                  Logout
            </button>
            </NavLink>
          </div>
          
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Profile
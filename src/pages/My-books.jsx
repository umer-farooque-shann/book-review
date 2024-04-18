import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header'; 
import { NavLink, useLocation } from 'react-router-dom';


import Search from '../assets/search.png';
import Plus from '../assets/plus-circle.png';


import Sug1 from '../assets/sug1.png';
import Sug2 from '../assets/sug2.png';
import Sug3 from '../assets/sug3.png';
import Sug4 from '../assets/sug4.png';









const My_books = () => {

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    rtl: false 
  };
  if (window.innerWidth < 768) {
    sliderSettings.slidesToShow = 2.5;
  }else if (window.innerWidth < 990) {
    sliderSettings.slidesToShow = 3.5;
  } else if (window.innerWidth < 1200) {
    sliderSettings.slidesToShow = 5;
  } else {
    sliderSettings.slidesToShow = 6;
  }
  
  
  return (
    <>
      <Header />
      <div className='main'>
        
        <div className='book-row cr_space'>
          <div className='head2 text-center' style={{ marginBottom:'20px' }}>
              <h2 className='text-secondary'>My Books</h2>
              <div className='search right-search'>
                <img src={Search} className="search-img" alt="search" />
                <input placeholder='Search Your Books' />
              </div>

          </div>
          <div className='col-280'>
            <div className='card-main sticky-100'>
              <div>
                <h6>Book Shelves</h6>
              </div>
              <div>
                <div className='flex-align g2'>
                  <p>All</p>
                  <p>(0)</p>
                </div>
                <div className='flex-align g2'>
                  <p>Read</p>
                  <p>(0)</p>
                </div>
                <div className='flex-align g2'>
                  <p>Currently Reading</p>
                  <p>(0)</p>
                </div>
                <div className='flex-align g2'>
                  <p>Want to Read</p>
                  <p>(0)</p>
                </div>
              </div>
              <div className='flex-align3 g2' style={{ flexWrap:'nowrap' }}>
                <button className='btn' style={{ boxShadow: 'none', width:'100%', fontWeight:'400', color:'var(--black)' }}>All Self</button>
                <button button className='btn' style={{ boxShadow: 'none', background:'var(--secondary)', color:'var(--white)', fontWeight:'300' }}>Add</button>
              </div>
              <hr/>
              <div>
                <h6>Reading Activities</h6>
              </div>
              <div>
                <p>Draft</p>
                <p>Highlights</p>
                <p>Notes</p>
                <p>Reading Challenge</p>
                <p>Your Reading Stats</p>
                <p>Your Reading Stats</p>
              </div>
              <hr/>
              <div>
                <h6>Tools</h6>
              </div>
              <div>
                <p>Find Duplicates</p>
                <p>Widgets</p>
                <p>Import</p>
                <p>Export</p>
              </div>



            </div>
          </div>
          <div className='col-280-f'>
            <div className='head' style={{ paddingLeft:'10px' }}>
              <h6 className='text-secondary'>Added Books</h6>

            </div>
            
            <div className="books-row">
              <Slider {...sliderSettings}>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug1} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug2} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug3} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug4} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug1} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug2} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug1} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug2} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug3} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug4} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug1} className="books" alt="books" />
                </NavLink>
                <NavLink to="/book-review/Book_details" className='slide-books'>
                  <img src={Sug2} className="books" alt="books" />
                </NavLink>
               
              </Slider>
            </div>
            <div className="books-row">
                <div className='slide-books slide-books2'>
                  <div className='add-book-card'>
                    <img src={Sug1} className="books" alt="books" />
                    <img src={Plus} className="plus-img" alt="search" />
                  </div>
                  <h6 className='text-center text-secondary' style={{ fontWeight:'500' }}>Add Your Books</h6>
                </div>
            </div>

          </div>
         
        </div>
      </div>
    </>
  )
}

export default My_books

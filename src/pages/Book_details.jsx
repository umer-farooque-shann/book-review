
import React, { useState } from 'react';
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink, useLocation } from 'react-router-dom';

import Search from '../assets/search.png';
import Filter from '../assets/filter.png';

import Arrow_down from '../assets/arrow-down-white.png';
import Like from '../assets/like.png';
import Comment_icon from '../assets/comment.png';
import More from '../assets/more.png';


import Star from '../assets/star.png';
import Arrow_right_white from '../assets/arrow-right-white.png';



import User2 from '../assets/user2.png';
import User1 from '../assets/user1.png';
import User3 from '../assets/user3.png';

import Sug1 from '../assets/sug1.png';
import Sug2 from '../assets/sug2.png';
import Sug3 from '../assets/sug3.png';
import Sug4 from '../assets/sug4.png';


const Book_details = () => {


  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const [isReviewModalOpen, setReviewModalOpen] = useState(false);

  // Function to toggle the review modal
  const toggleReviewModal = () => {
    setReviewModalOpen(!isReviewModalOpen);
  }


  const closeModal = () => {
    setReviewModalOpen(false);
  };


  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    rtl: false
  };
  if (window.innerWidth < 768) {
    sliderSettings.slidesToShow = 2.2;
  } else if (window.innerWidth < 990) {
    sliderSettings.slidesToShow = 3.5;
  } else if (window.innerWidth < 1200) {
    sliderSettings.slidesToShow = 5;
  } else {
    sliderSettings.slidesToShow = 6;
  }


  return (
    <>
      <Header />
      <div className='main book-details'>
        <div className='search'>
          <img src={Search} className="search-img" alt="search" />
          <input placeholder='Search Your Books' />
          <img src={Filter} className="filter-img" alt="filter" />
        </div>
        <div className='home-row cr_space'>

          <div className='col-340 book-details-left'>
            <div className='book-details-left-card sticky-100'>
              <div>
                <img src={Sug1} className="book-dertail-img" alt="books" />
              </div>
              <div className='details-dropdown'>
                <div className='details-dropdown-left'>
                  Currently Reading
                </div>
                <div className='details-dropdown-right'>
                  <img src={Arrow_down} className="arrow-down" alt="arrow-down" />
                </div>
                <div className='details-dropdown-content'>
                  <a>Currently Reading</a>
                  <a>Currently Reading</a>
                  <a>Currently Reading</a>
                </div>
              </div>
              <button className='btn mt-3' activeClassName="active" style={{ borderRadius: '40px', width: '100%', }}>Want to Read</button>
              {/* <div className='Stars star-lg  pt-4 pb-2' style={{ '--rating': '0', justifyContent:'center' }}></div> */}
              <div className="rating2 pb-2">
                {[5, 4, 3, 2, 1].map((value) => (
                  <React.Fragment key={value}>
                    <input
                      type="radio"
                      id={`star${value}`}
                      name="rating"
                      value={value}
                      checked={rating === value}
                      onChange={() => handleRatingChange(value)}
                    />
                    <label className="star" htmlFor={`star${value}`} title={getTitle(value)} aria-hidden="true"></label>
                  </React.Fragment>
                ))}
              </div>
              <div className='dropdown dropdown-3' style={{ margin: '15px auto' }}>
                <a className='dropdown-header'>Book Statics</a>
                <div className='dropdown-options' >
                  <a className='option'>csds</a>
                  <a className='option'>csds</a>
                </div>
              </div>




            </div>
          </div>
          <div className='col-300-f'>
            <div className='head'>
              <h2 className='text-secondary'>Book Name</h2>
              <h6>Author Name</h6>
            </div>
            <div className='flex-align3 g2'>
              <div className='Stars' style={{ '--rating': 5 }}></div>
              <div>
                <span>4.5</span>
                <span className='text-gray' style={{ paddingLeft: '10px' }}>654 Ratings . 756 Reviews</span>
              </div>


            </div>
            <div className='mt-3 mb-3'>
              <p>lacu s, Praesent malesuada scelerisque ex faucibus cursus libero, amet, leo. diam risus eu ex. lacus, Ut urna odio quis nisi dui. Ut sit hendrerit convallis.</p>
              <p className='pt-2'>Ut porta Donec placerat nibh Nullam vitae sit tortor. Donec vitae gravida Donec laoreet maximus Nullam massa tincidunt non dolor adipiscing odio risus Quisque </p>
              <p className='pt-2'>tincidunt Donec turpis tortor. vel id tincidunt massa lacus elit Sed convallis. at porta venenatis turpis In non, vitae Lorem urna. Sed placerat felis, Morbi </p>
              <p className='pt-2'>tincidunt In ex. Donec Sed non Cras malesuada lobortis, non. nibh Cras vehicula, porta faucibus tincidunt lacus, Donec ex viverra tempor viverra commodo vel </p>
            </div>
            <div className='genres d-flex g4 pt-3'>
              <h6 className='text-secondary font-weight-500' style={{ paddingRight: '20px' }}>Genres</h6>
              <div>
                <div className='flex-align3 g2'>
                  <h6 className='third-badge'>Genres 1</h6>
                  <h6 className='third-badge'>Genres 1</h6>
                  <h6 className='third-badge'>Genres 1</h6>
                  <h6 className='third-badge'>Genres 1</h6>
                  <h6 className='third-badge'>Genres 1</h6>
                  <h6 className='third-badge'>Genres 1</h6>
                  <h6 className='third-badge'>Genres 1</h6>
                  <h6 className='third-badge'>Genres 1</h6>
                </div>
                <h6 className='font-weight-500 text-gray pt-2 cursor-pointer' style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Show all</h6>

              </div>

            </div>
            <div className='pt-4 pb-2'>
              <div>
                <h6 className='font-weight-400'>No.of Pages, Hardcover </h6>
              </div>
              <div className='flex-align3 g3 pt-1'>
                <h6 className='font-weight-400'>Publication </h6>
                <h6 className='font-weight-400'> MM/DD/YYYY</h6>
              </div>
            </div>
            <div className='pt-4 pb-4'>
              <h5 className='font-weight-500'>This Edition</h5>
              <div className='pt-2'>
                <div className='flex-align3 g3 pt-1'>
                  <h6 className='font-weight-500 text-gray' style={{ minWidth: '200px' }}>Format</h6>
                  <h6 className='font-weight-500 text-gray'>No.of Pages, Hardcover</h6>
                </div>
                <div className='flex-align3 g3 pt-1'>
                  <h6 className='font-weight-500 text-gray' style={{ minWidth: '200px' }}>Expected Publication</h6>
                  <h6 className='font-weight-500 text-gray'>MM/DD/YYYY, By (Book Store Name)</h6>
                </div>
                <div className='flex-align3 g3 pt-1'>
                  <h6 className='font-weight-500 text-gray' style={{ minWidth: '200px' }}>ISBN</h6>
                  <h6 className='font-weight-500 text-gray'>123456789000 (ISBN10: 125088425X)</h6>
                </div>
                <div className='flex-align3 g3 pt-1'>
                  <h6 className='font-weight-500 text-gray' style={{ minWidth: '200px' }}>Language</h6>
                  <h6 className='font-weight-500 text-gray'>English</h6>
                </div>
              </div>
            </div>
            <div className="books-row pt-4 pb-4">
              <h5 className='font-weight-500 pb-2'>More Edition</h5>
              <Slider {...sliderSettings}>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug1} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-400 text-dark'>eBook</h6>
                    <h6 className='font-weight-400 text-dark'>Edition Name</h6>
                    <h6 className='font-weight-400 text-dark'>Year</h6>

                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug2} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-400 text-dark'>eBook</h6>
                    <h6 className='font-weight-400 text-dark'>Edition Name</h6>
                    <h6 className='font-weight-400 text-dark'>Year</h6>

                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug3} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-400 text-dark'>eBook</h6>
                    <h6 className='font-weight-400 text-dark'>Edition Name</h6>
                    <h6 className='font-weight-400 text-dark'>Year</h6>

                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug4} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-400 text-dark'>eBook</h6>
                    <h6 className='font-weight-400 text-dark'>Edition Name</h6>
                    <h6 className='font-weight-400 text-dark'>Year</h6>

                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug1} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-400 text-dark'>eBook</h6>
                    <h6 className='font-weight-400 text-dark'>Edition Name</h6>
                    <h6 className='font-weight-400 text-dark'>Year</h6>

                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug2} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-400 text-dark'>eBook</h6>
                    <h6 className='font-weight-400 text-dark'>Edition Name</h6>
                    <h6 className='font-weight-400 text-dark'>Year</h6>

                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug3} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-400 text-dark'>eBook</h6>
                    <h6 className='font-weight-400 text-dark'>Edition Name</h6>
                    <h6 className='font-weight-400 text-dark'>Year</h6>

                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug4} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-400 text-dark'>eBook</h6>
                    <h6 className='font-weight-400 text-dark'>Edition Name</h6>
                    <h6 className='font-weight-400 text-dark'>Year</h6>

                  </div>
                </NavLink>




              </Slider>
              <h6 className='font-weight-500 text-gray pt-2' style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Show all Editions</h6>

            </div>
            <div className='status pt-4'>
              <div className='flex-align3 g2 pb-4' style={{ flexWrap: 'nowrap' }}>
                <div className='status-dep'>
                  <img src={User1} className="" alt="user" />
                  <img src={User2} className="" alt="user" />
                  <img src={User3} className="" alt="user" />
                  <img src={User2} className="" alt="user" />
                </div>
                <p>481 people are currently reading</p>
              </div>
              <div className='flex-align3 g2 pb-4' style={{ flexWrap: 'nowrap' }}>
                <div className='status-dep'>
                  <img src={User1} className="" alt="user" />
                  <img src={User2} className="" alt="user" />
                  <img src={User3} className="" alt="user" />
                  <img src={User2} className="" alt="user" />
                </div>
                <p>189k people want to read</p>
              </div>

            </div>
            <div className='pt-2'>
              <h6 className='font-weight-600 text-secondary pt-2' style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>More Information's</h6>
              <div className='gray-border'></div>
              <h3 className='font-weight-500'>About the Author</h3>

              <div className='author-card pt-4'>
                <div className='author-card-left'>
                  <img src={User2} className="" alt="user" />
                </div>
                <div className='author-card-right'>
                  <div className='autor-card-head'>
                    <div>
                      <h3>Author Name</h3>
                      <div className='flex-align3 g3 pt-1'>
                        <h6 className='font-weight-400'>No.of Books</h6>
                        <h6 className='font-weight-400'>No.of Followers</h6>
                      </div>
                    </div>
                    <button button className='btn' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300', borderRadius: '40px', minWidth: '150px' }}>
                      Follow
                    </button>
                  </div>
                  <div className='mt-3 mb-3'>
                    <p>lacu s, Praesent malesuada scelerisque ex faucibus cursus libero, amet, leo. diam risus eu ex. lacus, Ut urna odio quis nisi dui. Ut sit hendrerit convallis.</p>
                    <p className='pt-2'>Ut porta Donec placerat nibh Nullam vitae sit tortor. Donec vitae gravida Donec laoreet maximus Nullam massa tincidunt non dolor adipiscing odio risus Quisque </p>
                    <p className='pt-2'>tincidunt Donec turpis tortor. vel id tincidunt massa lacus elit Sed convallis. at porta venenatis turpis In non, vitae Lorem urna. Sed placerat felis, Morbi </p>
                    <p className='pt-2'>tincidunt In ex. Donec Sed non Cras malesuada lobortis, non. nibh Cras vehicula, porta faucibus tincidunt lacus, Donec ex viverra tempor viverra commodo vel </p>
                  </div>
                </div>

              </div>

            </div>



          </div>
          <div className='gray-border'></div>
          <div className='review-row w-100'>
            <div className='col-6-cr text-center'>
              <h2 className='saccramento  text-secondary pb-4 mb-2'>Rating & Reviews</h2>
              <img src={User2} className="w-80-px" alt="user" />
              <h2 className='saccramento font-weight-600 pt-1'>What Do You Think</h2>
              <div className='flex-align2 g4 pt-2'>
                <div>
                  <div className='Stars star-lg' style={{ '--rating': '0', justifyContent: 'center' }}></div>
                  <h6 className='font-weight-400'>Rate This Book</h6>
                </div>
                <button button className='btn' onClick={toggleReviewModal} style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300' }}>

                  Write a review

                </button>


              </div>



            </div>
            <div className='col-6-cr text-center'>
              <h2 className='saccramento  text-secondary pb-3'>Community Reviews</h2>
              <div className='flex-align2 g2'>
                <div className='Stars' style={{ '--rating': 5 }}></div>
                <div>
                  <span>4.5</span>
                  <span className='text-gray' style={{ paddingLeft: '10px' }}>654 Ratings . 756 Reviews</span>
                </div>

              </div>
              <div className='mt-4'>
                <div className='flex-align2 g2 reading-card-2 pb-4'>
                  <h6 className='font-weight-500'>5 stars</h6>
                  <div className='range-track' style={{ background: 'rgba(217, 217, 217, 1)', width: '400px' }}>
                    <div className='range-thumb' style={{ width: '100%' }}>
                    </div>
                  </div>
                </div>
                <div className='flex-align2 g2 reading-card-2 pb-4'>
                  <h6 className='font-weight-500'>4 stars</h6>
                  <div className='range-track' style={{ background: 'rgba(217, 217, 217, 1)', width: '400px' }}>
                    <div className='range-thumb' style={{ width: '80%' }}>
                    </div>
                  </div>
                </div>
                <div className='flex-align2 g2 reading-card-2 pb-4'>
                  <h6 className='font-weight-500'>3 stars</h6>
                  <div className='range-track' style={{ background: 'rgba(217, 217, 217, 1)', width: '400px' }}>
                    <div className='range-thumb' style={{ width: '50%' }}>
                    </div>
                  </div>
                </div>
                <div className='flex-align2 g2 reading-card-2 pb-4'>
                  <h6 className='font-weight-500'>2 stars</h6>
                  <div className='range-track' style={{ background: 'rgba(217, 217, 217, 1)', width: '400px' }}>
                    <div className='range-thumb' style={{ width: '30%', background: '#FF9F00' }}>
                    </div>
                  </div>
                </div>
                <div className='flex-align2 g2 reading-card-2 pb-4'>
                  <h6 className='font-weight-500'>1 stars</h6>
                  <div className='range-track' style={{ background: 'rgba(217, 217, 217, 1)', width: '400px' }}>
                    <div className='range-thumb' style={{ width: '10%', background: '#FF0000' }}>
                    </div>
                  </div>
                </div>
              </div>



            </div>

          </div>
          <div className='gray-border'></div>

          <div className='pt-2 w-100'>
            <div className='w-100 mb-4 pb-4'>
              <h2 className='saccramento  text-secondary pb-1'>Readers Reviews</h2>
              <p>Displaying 1 - 10 of 68 reviews</p>

            </div>
            <div className='author-card pt-4 mb-4'>
              <div className='review-card-left d-flex g2'>
                <div className='text-center'>
                  <div className='flex-align2 g4 mb-2'>
                    <img src={User2} className="w-100-px" alt="user" />
                    <div className='text-left'>
                      <h5 className='font-weight-500 mb-1'>User Name</h5>
                      <p className='text-gray'>0,000 Reviews</p>
                      <p className='text-gray'>102 Followers</p>
                    </div>
                  </div>
                  <div className='Stars' style={{ '--rating': 4 }}></div>
                  <button button className='btn mt-2' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300', borderRadius: '40px' }}>
                    Follow
                  </button>
                </div>

              </div>
              <div className='review-card-right'>
                <div className='autor-card-head'>
                  <div>
                    <h6 className='text-gray font-weight-500 pb-4'>Month DD, YYYY</h6>
                    <h6 className='font-weight-400 mb-2'>ipsum ex sapien Lorem varius libero, placerat Cras nec dui Donec In ex felis, volutpat sit amet, varius tincidunt non tortor. elit. Morbi turpis venenatis dui </h6>
                    <h6 className='font-weight-400 mb-2'>Ut commodo elit adipiscing hendrerit non non elementum id id cursus non odio vel tincidunt quam at, ac sit Nam at, malesuada non placerat Nunc urna ex. eget </h6>
                    <h6 className='font-weight-400 mb-2'>Nullam tincidunt lorem. ipsum Donec fringilla Vestibulum sit consectetur Nam dui. hendrerit vitae turpis lorem. Quisque placerat ex. Cras massa ex ex nisl. ex </h6>

                    <div className='flex-align3 g4 pt-1'>
                      <h6 className='font-weight-400 text-gray'>54 Likes</h6>
                      <h6 className='font-weight-400 flex-align3 g1'>
                        <img src={Like} className="arrow-down" alt="arrow-down" />
                        Like
                      </h6>
                      <h6 className='font-weight-400 flex-align3 g1'>
                        <img src={Comment_icon} className="arrow-down" alt="arrow-down" />
                        Comment
                      </h6>


                    </div>
                  </div>

                </div>

              </div>

            </div>
            <div className='author-card pt-4 mb-4'>
              <div className='review-card-left d-flex g2'>
                <div className='text-center'>
                  <div className='flex-align2 g4 mb-2'>
                    <img src={User2} className="w-100-px" alt="user" />
                    <div className='text-left'>
                      <h5 className='font-weight-500 mb-1'>User Name</h5>
                      <p className='text-gray'>0,000 Reviews</p>
                      <p className='text-gray'>102 Followers</p>
                    </div>
                  </div>
                  <div className='Stars' style={{ '--rating': 4 }}></div>
                  <button button className='btn mt-2' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300', borderRadius: '40px' }}>
                    Follow
                  </button>
                </div>

              </div>
              <div className='review-card-right'>
                <div className='autor-card-head'>
                  <div>
                    <h6 className='text-gray font-weight-500 pb-4'>Month DD, YYYY</h6>
                    <h6 className='font-weight-400 mb-2'>ipsum ex sapien Lorem varius libero, placerat Cras nec dui Donec In ex felis, volutpat sit amet, varius tincidunt non tortor. elit. Morbi turpis venenatis dui </h6>
                    <h6 className='font-weight-400 mb-2'>Ut commodo elit adipiscing hendrerit non non elementum id id cursus non odio vel tincidunt quam at, ac sit Nam at, malesuada non placerat Nunc urna ex. eget </h6>
                    <h6 className='font-weight-400 mb-2'>Nullam tincidunt lorem. ipsum Donec fringilla Vestibulum sit consectetur Nam dui. hendrerit vitae turpis lorem. Quisque placerat ex. Cras massa ex ex nisl. ex </h6>

                    <div className='flex-align3 g4 pt-1'>
                      <h6 className='font-weight-400 text-gray'>54 Likes</h6>
                      <h6 className='font-weight-400 flex-align3 g1'>
                        <img src={Like} className="arrow-down" alt="arrow-down" />
                        Like
                      </h6>
                      <h6 className='font-weight-400 flex-align3 g1'>
                        <img src={Comment_icon} className="arrow-down" alt="arrow-down" />
                        Comment
                      </h6>


                    </div>
                  </div>

                </div>

              </div>

            </div>
            <div className='author-card pt-4 mb-4'>
              <div className='review-card-left d-flex g2'>
                <div className='text-center'>
                  <div className='flex-align2 g4 mb-2'>
                    <img src={User2} className="w-100-px" alt="user" />
                    <div className='text-left'>
                      <h5 className='font-weight-500 mb-1'>User Name</h5>
                      <p className='text-gray'>0,000 Reviews</p>
                      <p className='text-gray'>102 Followers</p>
                    </div>
                  </div>
                  <div className='Stars' style={{ '--rating': 4 }}></div>
                  <button button className='btn mt-2' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300', borderRadius: '40px' }}>
                    Follow
                  </button>
                </div>

              </div>
              <div className='review-card-right'>
                <div className='autor-card-head'>
                  <div>
                    <h6 className='text-gray font-weight-500 pb-4'>Month DD, YYYY</h6>
                    <h6 className='font-weight-400 mb-2'>ipsum ex sapien Lorem varius libero, placerat Cras nec dui Donec In ex felis, volutpat sit amet, varius tincidunt non tortor. elit. Morbi turpis venenatis dui </h6>
                    <h6 className='font-weight-400 mb-2'>Ut commodo elit adipiscing hendrerit non non elementum id id cursus non odio vel tincidunt quam at, ac sit Nam at, malesuada non placerat Nunc urna ex. eget </h6>
                    <h6 className='font-weight-400 mb-2'>Nullam tincidunt lorem. ipsum Donec fringilla Vestibulum sit consectetur Nam dui. hendrerit vitae turpis lorem. Quisque placerat ex. Cras massa ex ex nisl. ex </h6>

                    <div className='flex-align3 g4 pt-1'>
                      <h6 className='font-weight-400 text-gray'>54 Likes</h6>
                      <h6 className='font-weight-400 flex-align3 g1'>
                        <img src={Like} className="arrow-down" alt="arrow-down" />
                        Like
                      </h6>
                      <h6 className='font-weight-400 flex-align3 g1'>
                        <img src={Comment_icon} className="arrow-down" alt="arrow-down" />
                        Comment
                      </h6>


                    </div>
                  </div>

                </div>

              </div>

            </div>
            <div className='author-card pt-4 mb-4'>
              <div className='review-card-left d-flex g2'>
                <div className='text-center'>
                  <div className='flex-align2 g4 mb-2'>
                    <img src={User2} className="w-100-px" alt="user" />
                    <div className='text-left'>
                      <h5 className='font-weight-500 mb-1'>User Name</h5>
                      <p className='text-gray'>0,000 Reviews</p>
                      <p className='text-gray'>102 Followers</p>
                    </div>
                  </div>
                  <div className='Stars' style={{ '--rating': 4 }}></div>
                  <button button className='btn mt-2' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300', borderRadius: '40px' }}>
                    Follow
                  </button>
                </div>

              </div>
              <div className='review-card-right'>
                <div className='autor-card-head'>
                  <div>
                    <h6 className='text-gray font-weight-500 pb-4'>Month DD, YYYY</h6>
                    <h6 className='font-weight-400 mb-2'>ipsum ex sapien Lorem varius libero, placerat Cras nec dui Donec In ex felis, volutpat sit amet, varius tincidunt non tortor. elit. Morbi turpis venenatis dui </h6>
                    <h6 className='font-weight-400 mb-2'>Ut commodo elit adipiscing hendrerit non non elementum id id cursus non odio vel tincidunt quam at, ac sit Nam at, malesuada non placerat Nunc urna ex. eget </h6>
                    <h6 className='font-weight-400 mb-2'>Nullam tincidunt lorem. ipsum Donec fringilla Vestibulum sit consectetur Nam dui. hendrerit vitae turpis lorem. Quisque placerat ex. Cras massa ex ex nisl. ex </h6>

                    <div className='flex-align3 g4 pt-1'>
                      <h6 className='font-weight-400 text-gray'>54 Likes</h6>
                      <h6 className='font-weight-400 flex-align3 g1'>
                        <img src={Like} className="arrow-down" alt="arrow-down" />
                        Like
                      </h6>
                      <h6 className='font-weight-400 flex-align3 g1'>
                        <img src={Comment_icon} className="arrow-down" alt="arrow-down" />
                        Comment
                      </h6>


                    </div>
                  </div>

                </div>

              </div>

            </div>
            <div className='author-card pt-4 mb-4'>
              <div className='review-card-left d-flex g2'>
                <div className='text-center'>
                  <div className='flex-align2 g4 mb-2'>
                    <img src={User2} className="w-100-px" alt="user" />
                    <div className='text-left'>
                      <h5 className='font-weight-500 mb-1'>User Name</h5>
                      <p className='text-gray'>0,000 Reviews</p>
                      <p className='text-gray'>102 Followers</p>
                    </div>
                  </div>
                  <div className='Stars' style={{ '--rating': 4 }}></div>
                  <button button className='btn mt-2' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300', borderRadius: '40px' }}>
                    Follow
                  </button>
                </div>

              </div>
              <div className='review-card-right'>
                <div className='autor-card-head'>
                  <div>
                    <h6 className='text-gray font-weight-500 pb-4'>Month DD, YYYY</h6>
                    <h6 className='font-weight-400 mb-2'>ipsum ex sapien Lorem varius libero, placerat Cras nec dui Donec In ex felis, volutpat sit amet, varius tincidunt non tortor. elit. Morbi turpis venenatis dui </h6>
                    <h6 className='font-weight-400 mb-2'>Ut commodo elit adipiscing hendrerit non non elementum id id cursus non odio vel tincidunt quam at, ac sit Nam at, malesuada non placerat Nunc urna ex. eget </h6>
                    <h6 className='font-weight-400 mb-2'>Nullam tincidunt lorem. ipsum Donec fringilla Vestibulum sit consectetur Nam dui. hendrerit vitae turpis lorem. Quisque placerat ex. Cras massa ex ex nisl. ex </h6>

                    <div className='flex-align3 g4 pt-1'>
                      <h6 className='font-weight-400 text-gray'>54 Likes</h6>
                      <h6 className='font-weight-400 flex-align3 g1'>
                        <img src={Like} className="arrow-down" alt="arrow-down" />
                        Like
                      </h6>
                      <h6 className='font-weight-400 flex-align3 g1'>
                        <img src={Comment_icon} className="arrow-down" alt="arrow-down" />
                        Comment
                      </h6>


                    </div>
                  </div>

                </div>

              </div>

            </div>
            <div className='w-100 pt-4'>
              <button button className='btn mx-auto' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300', borderRadius: '40px' }}>
                More reviews & ratings
                <img src={Arrow_right_white} className="edit-img" alt="arrow" style={{ marginLeft: '10px' }} />

              </button>
            </div>


          </div>
          <div className='pt-2 pb-4 w-100'>
            <div className='gray-border'></div>
            <h3 className='font-weight-500'>Readers also <span className='text-secondary'>Enjoyed</span></h3>
            <div className='pt-3'>
              <Slider {...sliderSettings}>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug1} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-500 text-dark'>Book Name</h6>
                    <h6 className='font-weight-400 text-dark'>Author Name</h6>
                    <div className='flex-align3 dots-sep g1'>
                      <h6 className='font-weight-500 text-gray flex-align g1'>
                        4.5
                        <img src={Star} className="star" alt="rating" />
                      </h6>

                      <h6 className='font-weight-500 text-gray'>3.318</h6>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug2} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-500 text-dark'>Book Name</h6>
                    <h6 className='font-weight-400 text-dark'>Author Name</h6>
                    <div className='flex-align3 dots-sep g1'>
                      <h6 className='font-weight-500 text-gray flex-align g1'>
                        4.5
                        <img src={Star} className="star" alt="rating" />
                      </h6>

                      <h6 className='font-weight-500 text-gray'>3.318</h6>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug3} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-500 text-dark'>Book Name</h6>
                    <h6 className='font-weight-400 text-dark'>Author Name</h6>
                    <div className='flex-align3 dots-sep g1'>
                      <h6 className='font-weight-500 text-gray flex-align g1'>
                        4.5
                        <img src={Star} className="star" alt="rating" />
                      </h6>

                      <h6 className='font-weight-500 text-gray'>3.318</h6>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug4} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-500 text-dark'>Book Name</h6>
                    <h6 className='font-weight-400 text-dark'>Author Name</h6>
                    <div className='flex-align3 dots-sep g1'>
                      <h6 className='font-weight-500 text-gray flex-align g1'>
                        4.5
                        <img src={Star} className="star" alt="rating" />
                      </h6>

                      <h6 className='font-weight-500 text-gray'>3.318</h6>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug1} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-500 text-dark'>Book Name</h6>
                    <h6 className='font-weight-400 text-dark'>Author Name</h6>
                    <div className='flex-align3 dots-sep g1'>
                      <h6 className='font-weight-500 text-gray flex-align g1'>
                        4.5
                        <img src={Star} className="star" alt="rating" />
                      </h6>

                      <h6 className='font-weight-500 text-gray'>3.318</h6>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug2} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-500 text-dark'>Book Name</h6>
                    <h6 className='font-weight-400 text-dark'>Author Name</h6>
                    <div className='flex-align3 dots-sep g1'>
                      <h6 className='font-weight-500 text-gray flex-align g1'>
                        4.5
                        <img src={Star} className="star" alt="rating" />
                      </h6>

                      <h6 className='font-weight-500 text-gray'>3.318</h6>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug3} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-500 text-dark'>Book Name</h6>
                    <h6 className='font-weight-400 text-dark'>Author Name</h6>
                    <div className='flex-align3 dots-sep g1'>
                      <h6 className='font-weight-500 text-gray flex-align g1'>
                        4.5
                        <img src={Star} className="star" alt="rating" />
                      </h6>

                      <h6 className='font-weight-500 text-gray'>3.318</h6>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/Book_details" className='slide-books'>
                  <img src={Sug4} className="books" alt="books" />
                  <div className='p-2'>
                    <h6 className='font-weight-500 text-dark'>Book Name</h6>
                    <h6 className='font-weight-400 text-dark'>Author Name</h6>
                    <div className='flex-align3 dots-sep g1'>
                      <h6 className='font-weight-500 text-gray flex-align g1'>
                        4.5
                        <img src={Star} className="star" alt="rating" />
                      </h6>

                      <h6 className='font-weight-500 text-gray'>3.318</h6>
                    </div>
                  </div>
                </NavLink>


              </Slider>
            </div>
            <div className=''>
              <button button className='btn' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300', borderRadius: '40px' }}>
                All Similar books
                <img src={Arrow_right_white} className="edit-img" alt="arrow" style={{ marginLeft: '10px' }} />

              </button>
            </div>

          </div>

        </div>
      </div>
      <div id="reviewModal" className={`review-modal ${isReviewModalOpen ? 'open' : ''}`}>
        <div className='card-main'>
          <div className='modal_close' onClick={closeModal}>Close</div>
          <div className='book-details-left-card sticky-100'>
            <h3 className='text-secondary font-weight-600 mb-4'>Write a Review</h3>
            <div>
              <img src={Sug1} className="book-dertail-img" alt="books" />
            </div>
            <h5 class="text-secondary">Book Name</h5>
            <h6 className='font-weight-500 '>Author Name</h6>
            {/* <div className='Stars star-lg   pb-2' style={{ '--rating': '0', justifyContent:'center' }}></div> */}
            <div className="rating2">
              {[5, 4, 3, 2, 1].map((value) => (
                <React.Fragment key={value}>
                  <input
                    type="radio"
                    id={`star${value}`}
                    name="rating"
                    value={value}
                    checked={rating === value}
                    onChange={() => handleRatingChange(value)}
                  />
                  <label className="star" htmlFor={`star${value}`} title={getTitle(value)} aria-hidden="true"></label>
                </React.Fragment>
              ))}
            </div>
            <div className='flex-align2 g3' >
              <div className='contact-form'>
                <h6 className='pb-1 d-flex font-weight-500'>Reviews </h6>
                <textarea placeholder='Write your review about this book' ></textarea>
              </div>
              <button button className='btn' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300' }}>Publish review</button>
            </div>


          </div>
        </div>

      </div>
    </>
  )
}
const getTitle = (value) => {
  switch (value) {
    case 5:
      return 'Awesome';
    case 4:
      return 'Great';
    case 3:
      return 'Very good';
    case 2:
      return 'Good';
    case 1:
      return 'Bad';
    default:
      return '';
  }
};


export default Book_details

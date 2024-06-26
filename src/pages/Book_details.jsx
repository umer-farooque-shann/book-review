import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink, useParams } from 'react-router-dom';
import Search from '../assets/search.png';
import Filter from '../assets/filter.png';
import Arrow_down from '../assets/arrow-down-white.png';
import Like from '../assets/like.png';
import Comment_icon from '../assets/comment.png';
import Star from '../assets/star.png';
import Arrow_right_white from '../assets/arrow-right-white.png';
import User2 from '../assets/user2.png';
import User1 from '../assets/user1.png';
import User3 from '../assets/user3.png';
import Sug1 from '../assets/sug1.png';
import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../services/axiosInterceptor';
import Spinner from '../components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Book_details = () => {

  const [rating, setRating] = useState(0);
  const { slug } = useParams();
  const [book, setBook] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [averageRating, setAverageRating] = useState(null);
  const [usersCount, setUsersCount] = useState(null);
  const [dropdownText, setDropdownText] = useState('Currently Reading');
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {

        const response = await axiosInstance.get(`/api/book/getReviews/${slug}/reviews?limit=10`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [slug]);
  useEffect(() => {
    const fetchBookBySlug = async () => {
      try {
        const response = await axiosInstance.get(`/api/book/v1/book/${slug}`);
        setBook(response.data.book);
        setRecommendations(response.data.recommendations);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBookBySlug();
  }, [slug]);

  const handleWantToRead = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      const response = await axiosInstance.post('/api/book/add-book-to-user', {
        userId: userId,
        bookId: book._id
      });
      if (response.status === 200 || response.status === 201) {
        notifyWant()
      } else {
        console.error('Failed to add book to collection');
      }
    } catch (error) {
      console.error('Error adding book to collection:', error);
    }
  };


  const handleInputChange = (event) => {
    setReviewText(event.target.value);
  };

  const notify = (text) => {
    toast.success(text);
  };
  const notifyWant  = () => {
    toast.success("Added To Your Collection");
  };


  const handleRatingChange = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;

      const response = await axiosInstance.post(`/api/book/book/${slug}/review`, {
        userId: userId,
        rating: rating,
        reviewText: reviewText
      });
      if (response.status === 201 || response.status === 200) {
        setRating(rating);
        notify("Review updated successfully");
      } else {
        console.error('Failed to update rating and review');
      }
    } catch (error) {
      console.error('Error updating rating and review:', error);
    }
  };

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await axiosInstance.get(`/api/book/book/${slug}/rating`);
        if (response.status === 200) {
          setRating(response.data.rating);
        } else {
          console.error('Failed to fetch rating');
        }
      } catch (error) {
        console.error('Error fetching rating:', error);
      }
    };

    fetchRating();
  }, [slug]);


  useEffect(() => {
    const fetchAverageRating = async () => {
      try {
        const response = await axiosInstance.get(`/api/book/books/${slug}/average-rating`);
        setAverageRating(response.data.averageRating);
        setUsersCount(response.data.usersCount);
      } catch (error) {
        console.error('Error fetching average rating:', error);
      }
    };

    fetchAverageRating();
  }, [slug]); //

  const [isReviewModalOpen, setReviewModalOpen] = useState(false);

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

  const handleDropdownClick = async (listType) => {
    try {
      const response = await axiosInstance.post(`/api/book/${listType}/${book.slug}`);
      setDropdownText(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <ToastContainer />
      <Header />
      <div className='main book-details'>
        <div className='search'>
          <img src={Search} className="search-img" alt="search" />
          <input placeholder='Search Your Books' />
          <img src={Filter} className="filter-img" alt="filter" />
        </div>
        {book ? (
          <div className='home-row cr_space'>

            <div className='col-340 book-details-left'>
              <div className='book-details-left-card sticky-100'>
                <div>
                  <img src={`http://localhost:7000/${book.image}`} className="book-dertail-img" alt="books" />
                </div>
                <div className='details-dropdown'>
                  <div className='details-dropdown-left'>
                    {dropdownText}
                  </div>
                  <div className='details-dropdown-right'>
                    <img src={Arrow_down} className="arrow-down" alt="arrow-down" />
                  </div>
                  <div className='details-dropdown-content'>
                    <ul style={{ listStyle: "none", width: "100% !important", textAlign: "center", cursor: "pointer" }}>
                      <li onClick={() => handleDropdownClick('read')}><a>Read</a></li>
                      <li onClick={() => handleDropdownClick('currentlyReading')}><a>Currently Reading</a></li>
                      <li onClick={() => handleDropdownClick('wantToRead')}><a>Want to read</a></li>
                    </ul>
                  </div>
                </div>
                <button className='btn mt-3' activeClassName="active" style={{ borderRadius: '40px', width: '100%', }} onClick={handleWantToRead}>Want to Read</button>
                {/* <div className='Stars star-lg  pt-4 pb-2' style={{ '--rating': '0', justifyContent:'center' }}></div> */}
                <div className="rating2 pb-2">
                  {[5, 4, 3, 2, 1].map((ratingValue) => (
                    <React.Fragment key={ratingValue}>
                      <input
                        type="radio"
                        id={`star${ratingValue}`}
                        name="rating"
                        value={ratingValue}
                        checked={rating === ratingValue}
                        onChange={() => handleRatingChange(ratingValue)}
                      />
                      <label
                        className={`star ${ratingValue <= rating ? 'filled' : 'empty'}`}
                        htmlFor={`star${ratingValue}`}
                        title={getTitle(ratingValue)}
                        aria-hidden="true"
                      >

                      </label>
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
                <h2 className='text-secondary'>{book.title}</h2>
                <h6>{book.author}</h6>
              </div>
              <div className='flex-align3 g2'>
                <div className='Stars' style={{ '--rating': averageRating }}></div>
                <div>
                  <span>{averageRating}</span>
                  <span className='text-gray' style={{ paddingLeft: '10px' }}>{usersCount} Ratings . 756 Reviews</span>
                </div>


              </div>
              <div className='mt-3 mb-3'>
                <p>{book.description}</p>

              </div>
              <div className='genres d-flex g4 pt-3'>
                <h6 className='text-secondary font-weight-500' style={{ paddingRight: '20px' }}>Genres</h6>
                <div>
                  <div className='flex-align3 g2'>
                    {book.genres.map((genre, index) => (
                      <h6 className='third-badge' key={index}>{genre}</h6>
                    ))}
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
                <h5 className='font-weight-500 pb-2'>Readers also enjoyed</h5>
                <Slider {...sliderSettings}>
                  {recommendations.map((recommendation) => (
                    <NavLink to={`/book-review/Book_details/${recommendation.slug}`} className='slide-books'>
                      <img src={`http://localhost:7000/${recommendation.image}`} className="books" alt="books" />
                      <div className='p-2'>
                        <h6 className='font-weight-400 text-dark'>eBook</h6>
                      </div>
                    </NavLink>
                  ))}
                </Slider>
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
                        <h3>{book.author}</h3>
                        <div className='flex-align3 g3 pt-1'>
                          <h6 className='font-weight-400'>No.of Books</h6>
                          <h6 className='font-weight-400'>No.of Followers</h6>
                        </div>
                      </div>
                      <button button className='btn' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300', borderRadius: '40px', minWidth: '150px' }}>
                        Follow
                      </button>
                    </div>
                    {/* <div className='mt-3 mb-3'>
                      <p>lacu s, Praesent malesuada scelerisque ex faucibus cursus libero, amet, leo. diam risus eu ex. lacus, Ut urna odio quis nisi dui. Ut sit hendrerit convallis.</p>
                      <p className='pt-2'>Ut porta Donec placerat nibh Nullam vitae sit tortor. Donec vitae gravida Donec laoreet maximus Nullam massa tincidunt non dolor adipiscing odio risus Quisque </p>
                      <p className='pt-2'>tincidunt Donec turpis tortor. vel id tincidunt massa lacus elit Sed convallis. at porta venenatis turpis In non, vitae Lorem urna. Sed placerat felis, Morbi </p>
                      <p className='pt-2'>tincidunt In ex. Donec Sed non Cras malesuada lobortis, non. nibh Cras vehicula, porta faucibus tincidunt lacus, Donec ex viverra tempor viverra commodo vel </p>
                    </div> */}
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

              {reviews.map((review, index) => (
                <div className='author-card pt-4 mb-4'>
                  <div className='review-card-left d-flex g2'>
                    <div className='text-center'>
                      <div className='flex-align2 g4 mb-2'>
                        <img src={User2} className="w-100-px" alt="user" />
                        <div className='text-left'>
                          <h5 className='font-weight-500 mb-1'>{review.userName}</h5>
                          <p className='text-gray'>0,000 Reviews</p>
                          <p className='text-gray'>102 Followers</p>
                        </div>
                      </div>
                      <div className='Stars' style={{ '--rating': review.rating }}></div>
                      <button button className='btn mt-2' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300', borderRadius: '40px' }}>
                        Follow
                      </button>
                    </div>

                  </div>
                  <div className='review-card-right'>
                    <div className='autor-card-head'>
                      <div>
                        <h6 className='text-gray font-weight-500 pb-4'>Month DD, YYYY</h6>
                        <h6 className='font-weight-400 mb-2'>{review.reviewText}</h6>
                       

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
              ))}

              {/* This is comment place */}

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

                  {recommendations.map((recommendation) => (
                    <NavLink to={`/book-review/Book_details/${recommendation.slug}`} className='slide-books'>
                      <img src={`http://localhost:7000/${recommendation.image}`} className="books" alt="books" />
                      <div className='p-2'>
                        <h6 className='font-weight-500 text-dark'>{recommendation.title}</h6>
                        <div className='flex-align3 dots-sep g1'>
                          <h6 className='font-weight-500 text-gray flex-align g1'>
                            4.5
                            <img src={Star} className="star" alt="rating" />
                          </h6>

                          <h6 className='font-weight-500 text-gray'>3.318</h6>
                        </div>
                      </div>
                    </NavLink>
                  ))}
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
        ) : (
          <div><Spinner /></div>
        )}
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
                <textarea
                  placeholder="Write your review about this book"
                  value={reviewText}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button onClick={handleRatingChange} className='btn' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300' }}>Publish review</button>
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

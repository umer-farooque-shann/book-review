import React, { useState, useEffect } from 'react';
import axiosInstance from '../services/axiosInterceptor';
import { Link } from "react-router-dom"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../assets/search.png';
import Filter from '../assets/filter.png';
import Banner1 from '../assets/banner1.png';
import Banner2 from '../assets/banner2.png';
import Google from '../assets/google.png';
import Apple from '../assets/apple.png';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import User1 from '../assets/user1.png';
import Spinner from '../components/Spinner';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get('/api/book/book-recommendation');
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div><Spinner/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <Header />
      <div className='main'>
        <div className='search'>
          <img src={Search} className="search-img" alt="search" />
          <input placeholder='Search Your Books' />
          <img src={Filter} className="filter-img" alt="filter" />
        </div>
        <div className='home-row cr_space'>

          <div className='col-250'>
            <div className='card-main'>
              <div>
                <h6>2024 READING CHALLENGE</h6>
                <p className='pt-1'>Challenge Your Self to Read More This Year</p>
              </div>
              <div className='banner-container'>
                <img src={Banner1} className="banner" alt="banner" />
              </div>
              <div>
                <p>I Want to Read</p>
                <div className='count pt-1'>
                  <span>+</span>
                  <h6>12</h6>
                  <span>-</span>
                </div>
              </div>
              <p>You Can Change Your Goal at Any Time</p>
              <h6>THE BOOK SHELVES</h6>
              <div>
                <div className='flex-align g2'>
                  <p>Want to Read</p>
                  <p>(0)</p>
                </div>
                <div className='flex-align g2'>
                  <p>Currently Reading</p>
                  <p>(0)</p>
                </div>
                <div className='flex-align g2'>
                  <p>Completed</p>
                  <p>(0)</p>
                </div>
              </div>
              <div className='social'>
                <img src={Google} className="social-img" alt="social-img" />
                <img src={Apple} className="social-img" alt="social-img" />
                <img src={Instagram} className="social-img" alt="social-img" />
                <img src={Facebook} className="social-img" alt="social-img" />
                <img src={Twitter} className="social-img" alt="social-img" />
              </div>



            </div>
          </div>
          <div className='col-250-f'>
            <div className='head text-center'>
              <h4>Trending Books</h4>

            </div>
            <div className='grid-container pt-2'>
              <div className='grid-card grid-card1 '>
                <div className='mob-flex'>
                  <img src={User1} className="user" alt="user" />
                  <div>
                    <h4>BOOK NAME</h4>
                    <h5>Author Name</h5>
                    <h5>Lorem</h5>
                  </div>
                </div>
                <div className='Stars stars-2' style={{ '--rating': '4' }}></div>


              </div>
              <div className='grid-card grid-card2 '>
                <div className='flex-align2 g4'>
                  <img src={User1} className="user" alt="user" />
                  <div>
                    <h4>BOOK NAME</h4>
                    <h5>Author Name</h5>
                    <h5>Lorem</h5>
                  </div>
                </div>
                <div className='Stars stars-2' style={{ '--rating': '4' }}></div>


              </div>
              <div className='grid-card grid-card3 '>
                <div className='flex-align2 g2'>
                  <img src={User1} className="user" alt="user" />
                  <div>
                    <h4>BOOK NAME</h4>
                    <h5>Author Name</h5>
                    <h5>Lorem</h5>
                  </div>
                </div>
                <div className='Stars stars-2' style={{ '--rating': '4' }}></div>


              </div>
              <div className='grid-card grid-card4 '>
                <div className='flex-align2 g2'>
                  <img src={User1} className="user" alt="user" />
                  <div>
                    <h4>BOOK NAME</h4>
                    <h5>Author Name</h5>
                    <h5>Lorem</h5>
                  </div>
                </div>
                <div className='Stars stars-2' style={{ '--rating': '4' }}></div>


              </div>
              <div className='grid-card grid-card5 '>
                <div className='flex-align2 g2'>
                  <img src={User1} className="user" alt="user" />
                  <div>
                    <h4>BOOK NAME</h4>
                    <h5>Author Name</h5>
                    <h5>Lorem</h5>
                  </div>
                </div>
                <div className='Stars stars-2' style={{ '--rating': '4' }}></div>


              </div>
              <div className='grid-card grid-card6 '>
                <div className='flex-align2 g2'>
                  <img src={User1} className="user" alt="user" />
                  <div>
                    <h4>BOOK NAME</h4>
                    <h5>Author Name</h5>
                    <h5>Lorem</h5>
                  </div>
                </div>
                <div className='Stars stars-2' style={{ '--rating': '4' }}></div>
              </div>
            </div>
            <div className="suggestion-row">
              <div className='head'>
                <h4>Suggestions </h4>
              </div>
              <div className='row-4'>
                {books.length === 0 ? (
                  <div>No books found.</div>
                ) : (
                  books.map((book) => (
                    <div className='col-3' key={book._id}>
                      {book.image && (
                        <Link to={`/book-review/Book_details/${book.slug}`}>
                          <img src={`http://localhost:7000/${book.image}`} className="suggestion" alt={book.title} />
                        </Link>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
          <div className='col-250'>
            <div className='card-main'>
              <div>
                <h6>WELCOME TO LOGO NAME</h6>
                <p className='pt-1'>Meet your favorite book, find your reading community, and manage your reading life.</p>
              </div>
              <div className='banner-container'>
                <h4>LOGO NAME</h4>
                <img src={Banner2} className="banner" alt="banner" />
                <p>Announcing the Best Books of 2024</p>

              </div>
              <h6>WORK WITH US</h6>
              <div>
                <p>Authors</p>
                <p>Advertise</p>
                <p>Authors & Ads Blog</p>
                <p>API</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home

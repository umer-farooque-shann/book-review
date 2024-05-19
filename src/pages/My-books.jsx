import React,{useState,useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Search from '../assets/search.png';
import Plus from '../assets/plus-circle.png';
import Sug1 from '../assets/sug1.png';
import axiosInstance from '../services/axiosInterceptor';
import { ImCross } from "react-icons/im";


const My_books = () => {
  const navigate = useNavigate()
  const [userBooks, setUserBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserBooks = async () => {
      try {
        const response = await axiosInstance.get('/api/book/get-user-book');
        setUserBooks(response.data.books);
        console.log(response.data.books); // Add this line to check the fetched books
      } catch (error) {
        console.error('Error fetching user books:', error);
      }
    };
  
    fetchUserBooks();
  }, []);
  const handleDelete = async (slug) => {
    try {
      await axiosInstance.delete(`/api/book/deleteBook/${slug}`);
      setBooks(books.filter(book => book.slug !== slug));
    } catch (error) {
      console.error('Error deleting book:', error);
      setError('Failed to delete book');
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    rtl: false
  };
  if (window.innerWidth < 768) {
    sliderSettings.slidesToShow = 2.5;
  } else if (window.innerWidth < 990) {
    sliderSettings.slidesToShow = 3.5;
  } else if (window.innerWidth < 1200) {
    sliderSettings.slidesToShow = 5;
  } else {
    sliderSettings.slidesToShow = 6;
  }

  const home = ()=> navigate("/book-review/home")


  return (
    <>
      <Header />
      <div className='main'>

        <div className='book-row cr_space'>
          <div className='head2 text-center' style={{ marginBottom: '20px' }}>
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
              <div className='flex-align3 g2' style={{ flexWrap: 'nowrap' }}>
                <button className='btn' style={{ boxShadow: 'none', width: '100%', fontWeight: '400', color: 'var(--black)' }}>All Self</button>
                <button button className='btn' style={{ boxShadow: 'none', background: 'var(--secondary)', color: 'var(--white)', fontWeight: '300' }}>Add</button>
              </div>
              <hr />
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
              <hr />
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
            <div className='head' style={{ paddingLeft: '10px' }}>
              <h6 className='text-secondary'>Added Books</h6>

            </div>
            {error && <div>Error: {error}</div>}
            <div className="books-row">
              <Slider {...sliderSettings}>
                {userBooks.map((book, index) => (
                  <NavLink key={index} to={`/book-review/Book_details/${book.slug}`} className='slide-books'>
                    <img src={`http://localhost:7000/${book.image}`} className="books" alt={book.title} />
                    <p style={{position:"absolute",top:"0",right:"0" ,color:'#265073'}} onClick={() => handleDelete(book.slug)} ><ImCross/></p>
                  </NavLink>
                ))}
              </Slider>
            </div>
            <div className="books-row">
              <div className='slide-books slide-books2'>
                <div className='add-book-card'>
                  <img src={Sug1} className="books" alt="books" />
                  <img onClick={home} src={Plus} className="plus-img" alt="search" />
                </div>
                <h6 className='text-center text-secondary' style={{ fontWeight: '500' }}>Add Your Books</h6>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default My_books

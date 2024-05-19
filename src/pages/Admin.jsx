import React, { useState, useEffect } from 'react';
import AdminNav from '../components/AdminNav';
import axiosInstance from '../services/axiosInterceptor';
import { IoMdAdd } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Admin = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [bookCount, setBookCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axiosInstance.get('/api/book/getAllRequests');
        setRequests(response.data);
        console.log(response.data);

      } catch (error) {
        console.error(error);
        setError('Failed to fetch requests');

      }
    };

    fetchRequests();
  }, []);


  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axiosInstance.get('/api/book/get-count-data');
      setBookCount(response.data.bookCount);
      setUserCount(response.data.userCount);
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axiosInstance.delete(`/api/book/deleteContact/${id}`);
      fetchContacts();
      alert('Contact deleted successfully');
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Failed to delete contact. Please try again later.');
    }
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axiosInstance.get('/api/book/contactget');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
    fetchContacts();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('description', description);
      formData.append('image', image);
      formData.append('genres', JSON.stringify(genres));

      const response = await axiosInstance.post('/api/book/add_book', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Book Added Successfully")
    } catch (error) {
      console.error(error);
      setError('Failed to add book');
    } finally {
      setLoading(false);
    }
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleAddGenre = () => {
    if (selectedGenre.trim() !== '' && !genres.includes(selectedGenre)) {
      setGenres([...genres, selectedGenre.trim()]);
      setSelectedGenre('');
    }
  };

  const handleRemoveGenre = (genreToRemove) => {
    setGenres(genres.filter(genre => genre !== genreToRemove));
  };

  return (
    <div>
      <AdminNav />

      <div className='adm-main'>

        <div>
          <h2 style={{ paddingTop: "100px" }} className='book-new'>Add New Books</h2>
          {error && <p>{error}</p>}
          <form onSubmit={handleFormSubmit} className='admin-form'>
            <div className='wid-1'>
              <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div>
                <label>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
              </div>
            </div>
            <div>
              <label>Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <label>Genres</label>
            <div style={{ display: 'flex', gap: '10px' }}>


              <select style={{ borderRadius: "5px" }} onChange={handleGenreChange} value={selectedGenre}>
                <option value="">Select Genre</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="fantasy">Fantasy</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="biography">Biography</option>
                <option value="india">India</option>
                <option value="inspirational">Inspirational</option>
                <option value="autobiography">Autobiography</option>
                <option value="indian-literature">Indian Literature</option>
                <option value="art">Art</option>
                <option value="Business">Business</option>
                <option value="Chick Lit">Chick Lit</option>
                <option value="Children's">Children's</option>
                <option value="Christian">Christian</option>
                <option value="Classics">Classics</option>
                <option value="Comics">Comics</option>
                <option value="Contemporary">Contemporary</option>
                <option value="Cookbooks">Cookbooks</option>
                <option value="Crime">Crime</option>
                <option value="Gay and Lesbian">Gay and Lesbian</option>
                <option value="Graphic Novels">Graphic Novels</option>
                <option value="Historical Fiction">Historical Fiction</option>
                <option value="History">History</option>
                <option value="Horror">Horror</option>
                <option value="Humor and Comedy">Humor and Comedy</option>
                <option value="Manga">Manga</option>
                <option value="Memoir">Memoir</option>
                <option value="Music">Music</option>
                <option value="Mystery">Mystery</option>
                <option value="Paranormal">Paranormal</option>
                <option value="Philosophy">Philosophy</option>
                <option value="Poetry">Poetry</option>
                <option value="Psychology">Psychology</option>
                <option value="Religion">Religion</option>
                <option value="Romance">Romance</option>
                <option value="Science">Science</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Self Help">Self Help</option>
                <option value="Suspense">Suspense</option>
                <option value="Spirituality">Spirituality</option>
                <option value="Sports">Sports</option>
                <option value="Thriller">Thriller</option>
                <option value="Travel">Travel</option>
                <option value="Young Adult">Young Adult</option>
              </select>

              <button className='admin-btn' type="button" onClick={handleAddGenre}><IoMdAdd /></button>
            </div>
            <div>
              <label>Selected Genres</label>
              <ul style={{ display: "flex", gap: '5px', flexWrap: "wrap", width: "30rem", listStyle: "none" }}>
                {genres.map(genre => (
                  <li key={genre} style={{ display: "flex", gap: "10px", alignItems: "center", background: "inherit", borderRadius: "5px", padding: "5px", border: 'solid 1px #111' }}>
                    <p>{genre}</p>
                    <button type="button" onClick={() => handleRemoveGenre(genre)} className='rm-btn'><ImCross /></button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label>Image:</label>
              <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
            </div>
            <button style={{ padding: "10px", margin: '5px' }} type="submit" disabled={loading}>Add Book</button>
          </form>
        </div>
        <div className='count-wrap'>
          <div className='count-data'>
            <p>{bookCount}<span>Books</span></p>

          </div>
          <div className='count-data'>
            <p>{userCount}<span>Users</span></p>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }} className='book-new'>Request From User</h1>
      <div className='admin-req'>
        {requests.map((request, index) => (
          <div style={{ border: "1px solid #111", padding: '10px',display:"flex" }}>

            <div>
              <div>
                <strong>User Name:</strong> {request.user.name}
              </div>
              <div>
                <strong>Request Data:</strong> {request.requestDetails}
              </div>
              <div>
                <strong>Request Date:</strong> {request.user.email}
              </div>
              <div>
                <strong>Request Date:</strong> {new Date(request.createdAt).toLocaleDateString()}
              </div>
            </div>
            <div>
            <button type="button"   className='rm-btn'><ImCross /></button>
            </div>


          </div>

        ))}

      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Contact from Users</h1>
        {contacts.map(contact => (

          <div className='card-main mt-4' key={contact._id}>
            <div className='group-card-row'>
              <div className='group-card-left'>

              </div>
              <div className='group-card-right'>
                <h5 className='font-weight-500'>{contact.fullName}</h5>
                <div className='flex-align3 g2 pt-1 pb-3'>
                  <span>{contact.email}</span>
                  <span>{contact.address}</span>
                </div>
                <p > {contact.message}</p>
                <button style={{ background: "inherit", padding: "5px", borderRadius: '5px' }} onClick={() => handleDeleteContact(contact._id)}>Remove <span style={{ color: 'red' }}><ImCross /></span></button>
              </div>
            </div>
          </div>
        ))}



      </div>
    </div>
  );
};

export default Admin;

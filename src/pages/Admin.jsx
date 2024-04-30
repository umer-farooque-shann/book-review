import React, { useState } from 'react';
import Header from '../components/Header';
import axiosInstance from '../services/axiosInterceptor';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      console.log(response.data);
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
      <Header />
      <h2 style={{ paddingTop: "100px" }}>Add Book</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Genres:</label>

          <select onChange={handleGenreChange} value={selectedGenre}>
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

          <button type="button" onClick={handleAddGenre}>Add Genre</button>
        </div>
        <div>
          <label>Selected Genres:</label>
          <ul>
            {genres.map(genre => (
              <li key={genre}>
                {genre}
                <button type="button" onClick={() => handleRemoveGenre(genre)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        </div>
        <button type="submit" disabled={loading}>Add Book</button>
      </form>
    </div>
  );
};

export default Admin;

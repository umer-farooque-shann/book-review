import React, { useState } from 'react';


const Genres = ({ genres, onSubmit }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreSelection = (genre) => {
    setSelectedGenres((prevGenres) => {
      if (prevGenres.includes(genre)) {
        return prevGenres.filter((selectedGenre) => selectedGenre !== genre);
      } else {
        return [...prevGenres, genre];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(selectedGenres);
    } else {
      console.error('onSubmit is not a function');
    }
  };

  


  return (
    <div>
    
      <form onSubmit={handleSubmit} style={{ width: 'fit-content', margin: '0 auto' }}>
        <div className='genre-form'>
          {genres.map((genre, index) => (
            <div key={genre} className={`genre-main ${index % 2 === 0 ? 'first-row' : 'second-row'}`}>
              <input
                type="checkbox"
                value={genre}
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreSelection(genre)}
              />
              <label>{genre}</label>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '200px' }}>
          <button type="submit" className='genre-btn'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Genres;

// Intrest.js
import React, { useState } from 'react';
import Genres from './Genres';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axiosInterceptor';

const Intrest = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genres = [
        'fiction',
        'non-fiction',
        'fantasy',
        'sci-fi',
        'biography',
        'india',
        'inspirational',
        'autobiography',
        'indian-literature',
        'art',
        'Business',
        'Chick Lit',
        "Children's",
        'Christian',
        'Classics',
        'Comics',
        'Contemporary',
        'Cookbooks',
        'Crime',
        'Gay and Lesbian',
        'Graphic Novels',
        'Historical Fiction',
        'History',
        'Horror',
        'Humor and Comedy',
        'Manga',
        'Memoir',
        'Music',
        'Mystery',
        'Paranormal',
        'Philosophy',
        'Poetry',
        'Psychology',
        'Religion',
        'Romance',
        'Science',
        'Science Fiction',
        'Self Help',
        'Suspense',
        'Spirituality',
        'Sports',
        'Thriller',
        'Travel',
        'Young Adult'
    ];
    const navigate = useNavigate();

    const handleSubmit = async (selectedGenres, e) => {
        
        
        try {
            // Make a PUT request to your backend endpoint
            await axiosInstance.put('/api/auth/preferredGenres', { genres: selectedGenres });
            console.log('Selected genres:', selectedGenres);
            navigate("/book-review/home");
        } catch (error) {
            console.error('Error submitting preferred genres:', error);
            // Handle error
        }
    };

    return (
        <div style={{ overflow: "hidden" }}>
            <h4 style={{ textAlign: "center", padding: '20px' }}>Welcome! Select Your Preferred Genres</h4>
            <div>
                <Genres genres={genres} onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Intrest;

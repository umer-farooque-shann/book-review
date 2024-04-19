
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import My_books from './pages/My-books';
import Profile from './pages/Profile';
import Book_details from './pages/Book_details';
import Group from './pages/Group';
import Quates from './pages/Quates';
import Author from './pages/Author';
import People from './pages/People';
import Contact_us from './pages/Contact';


import Login from './pages/Login';



import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const body = document.querySelector('body');
      if (window.scrollY > 0) {
        body.classList.add('scrolled'); // Adding class when scrolled
      } else {
        body.classList.remove('scrolled'); // Removing class when not scrolled
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/book-review/" element={<Home />} />
        <Route path='/book-review/login' element={<Login />} /> 
        <Route path='/book-review/My_books' element={<My_books />} /> 
        <Route path='/book-review/Profile' element={<Profile />} /> 
        <Route path='/book-review/Book_details' element={<Book_details />} /> 
        <Route path='/book-review/Group' element={<Group />} />
        <Route path='/book-review/Quates' element={<Quates />} /> 
        <Route path='/book-review/Author' element={<Author />} /> 
        <Route path='/book-review/People' element={<People />} /> 
        <Route path='/book-review/Contact_us' element={<Contact_us />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

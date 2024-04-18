
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
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/My_books' element={<My_books />} /> 
        <Route path='/Profile' element={<Profile />} /> 
        <Route path='/Book_details' element={<Book_details />} /> 
        <Route path='/Group' element={<Group />} />
        <Route path='/Quates' element={<Quates />} /> 
        <Route path='/Author' element={<Author />} /> 
        <Route path='/People' element={<People />} /> 
        <Route path='/Contact_us' element={<Contact_us />} /> 






      </Routes>
    </BrowserRouter>
  );
}

export default App;

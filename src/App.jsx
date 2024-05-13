import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Admin from './pages/Admin';
import Intrest from './pages/Intrest';
import Signup from './pages/Signup';
import RequestPage from './pages/RequestPage';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const firstTimeLogin = localStorage.getItem('isFirstTimeLogin');
    const admin = localStorage.getItem('isAdmin');

    if (token) {
      setIsLoggedIn(true);
    }

    if (firstTimeLogin === 'false') {
      setIsFirstTimeLogin(false);
    }

    if (admin === 'true') {
      setIsAdmin(true);
    }
  }, []);



  // Protected Route Component
  const PrivateRoute = ({ element, path }) => {
    return isLoggedIn ? element : <Navigate to="/book-review/home" />;
  };

  // Interest Route Component
  const InterestRoute = ({ element, path }) => {
    return isFirstTimeLogin ? element : <Navigate to="/book-review/" />;
  };

  // Admin Route Component
  const AdminRoute = ({ element, path }) => {
    return isAdmin ? element : <Navigate to="/book-review/admin" />;
  };

  return (
    <Router>
      <Routes>
        <Route path='/book-review/signup' element={<Signup />} />
        <Route path='/book-review/' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/book-review/admin' element={<AdminRoute element={<Admin />} />} />
        <Route path='/book-review/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/book-review/my_books' element={<PrivateRoute element={<My_books />} />} />
        <Route path='/book-review/profile' element={<PrivateRoute element={<Profile setIsLoggedIn={setIsLoggedIn}/>} />} />
        <Route path='/book-review/book_details/:slug' element={<PrivateRoute element={<Book_details />} />} />
        <Route path='/book-review/group' element={<PrivateRoute element={<Group />} />} />
        <Route path='/book-review/quates' element={<PrivateRoute element={<Quates />} />} />
        <Route path='/book-review/author' element={<PrivateRoute element={<Author />} />} />
        <Route path='/book-review/people' element={<PrivateRoute element={<People />} />} />
        <Route path='/book-review/contact_us' element={<PrivateRoute element={<Contact_us />} />} />
        <Route path='/book-review/intrest' element={<InterestRoute element={<Intrest />} />} />
        <Route path='/book-review/request' element={<PrivateRoute element={<RequestPage />} />} />
      </Routes>
    </Router>
  );
};

export default App;

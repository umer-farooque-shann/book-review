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
import Club from './pages/Club';
import './App.css';

const AdminRoute = ({ element, userRole }) => {
  return userRole === 'admin' ? (
    element
  ) : (
    <Navigate to="/book-review/" replace />
  );
};

const ProtectedRoute = ({ element, userRole }) => {
  const allowedRoles = ['user', 'admin'];
  return allowedRoles.includes(userRole) ? (
    element
  ) : (
    <Navigate to="/book-review/" replace />
  );
};

const App = () => {
  const userRole = localStorage.getItem('isAdmin') === 'true' ? 'admin' : 'user'; // or fetch from your auth context/provider
  console.log(userRole);

  return (
    <Router>
      <Routes>
        <Route path='/book-review/signup' element={<Signup />} />
        <Route path='/book-review/' element={<Login />} />
        <Route path='/book-review/admin' element={<AdminRoute element={<Admin />} userRole={userRole} />} />
        <Route path='/book-review/home' element={<ProtectedRoute element={<Home />} userRole={userRole} />} />
        <Route path='/book-review/my_books' element={<ProtectedRoute element={<My_books />} userRole={userRole} />} />
        <Route path='/book-review/profile' element={<ProtectedRoute element={<Profile />} userRole={userRole} />} />
        <Route path='/book-review/book_details/:slug' element={<ProtectedRoute element={<Book_details />} userRole={userRole} />} />
        <Route path='/book-review/group' element={<ProtectedRoute element={<Group />} userRole={userRole} />} />
        <Route path='/book-review/quates' element={<ProtectedRoute element={<Quates />} userRole={userRole} />} />
        <Route path='/book-review/author' element={<ProtectedRoute element={<Author />} userRole={userRole} />} />
        <Route path='/book-review/people' element={<ProtectedRoute element={<People />} userRole={userRole} />} />
        <Route path='/book-review/contact_us' element={<ProtectedRoute element={<Contact_us />} userRole={userRole} />} />
        <Route path='/book-review/intrest' element={<ProtectedRoute element={<Intrest />} userRole={userRole} />} />
        <Route path='/book-review/request' element={<ProtectedRoute element={<RequestPage />} userRole={userRole} />} />
        <Route path='/book-review/club/:roomId' element={<ProtectedRoute element={<Club />} userRole={userRole} />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import axiosInstance from '../services/axiosInterceptor';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RequestPage = () => {
  const [requestDetails, setRequestDetails] = useState('');
  const [error, setError] = useState(null);

  // Function to handle form submission for creating a new request
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/book/createRequest', { requestDetails });
      alert("request Send Successfully")
    } catch (error) {
      console.error('Error creating request:', error);
      setError('Failed to create request. Please try again later.');
    }
  };



  return (
    <div>
      <Header />
      <div style={{ paddingTop: '5rem' }} className='req-main'>
        <h2 style={{ color: '#265073' }}>Create New Request</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <textarea className='test-request' value={requestDetails} onChange={(e) => setRequestDetails(e.target.value)} /><br/>
          <button type="submit" className='req-btn'>Submit Request</button>
        </form>

        <h2 style={{ color: "#265073" }}>All Requests</h2>
        <div>
          <p>Request Should be send using this format</p>

          <p>Title:""</p>
          <p> Genere:""</p>
          <p>Author:"",</p>
          <p>Description:""</p>


        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RequestPage;

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Plus from '../assets/plus-circle.png';
import Group2 from '../assets/group.png';
import Footer from '../components/Footer';
import { Link } from "react-router-dom"
import axiosInstance from '../services/axiosInterceptor';


const Group = () => {



  const [userGroups, setUserGroups] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/room/groups')
      .then(response => {
        setUserGroups(response.data);
      })
      .catch(error => {
        console.error('Error fetching user groups:', error);
      });
  }, []);



  const [showCreateClubInput, setShowCreateClubInput] = useState(false);
  const [newClubName, setNewClubName] = useState('');

  const handleCreateClubClick = () => {
    setShowCreateClubInput(true);
  };

  const handleInputChange = (e) => {
    setNewClubName(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post('/api/room/create', { name: newClubName });
      console.log('New Club Created:', response.data);
      setShowCreateClubInput(false);
      // Optionally, you can add logic to handle the success response here
    } catch (error) {
      console.error('Error creating club:', error);
      // Optionally, you can add logic to handle the error here
    }
  };
  return (
    <>
      <Header />
      <div className='main Group-page'>
        <div className='book-row cr_space pb-4'>
          <div className='head2 text-center' style={{ marginBottom: '20px' }}>
            <h2 className='text-secondary'>Virtual Book Club</h2>
            <div className='right-search'>
              <button
                className='btn'
                style={{
                  boxShadow: 'none',
                  background: 'var(--secondary)',
                  color: 'var(--white)',
                  fontWeight: '300',
                  borderRadius: '40px',
                }}
                onClick={handleCreateClubClick}
              >
                Create Club
                <img
                  src={Plus}
                  className='circle-img'
                  alt='Add'
                  style={{ marginLeft: '10px' }}
                />
              </button>
            </div>
            {showCreateClubInput && (
              <div className='create-club-input' style={{ marginTop: '20px' }}>
                <input
                  type='text'
                  placeholder='Enter Club Name'
                  value={newClubName}
                  onChange={handleInputChange}
                  style={{
                    marginRight: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid var(--secondary)',
                  }}
                />
                <button
                  className='btn'
                  onClick={handleSubmit}
                  style={{
                    background: 'var(--secondary)',
                    color: 'var(--white)',
                    fontWeight: '300',
                    borderRadius: '40px',
                  }}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
          <div
            className='flex-align3 g3 w-100 d-flex pt-4 mt-4 pb-4 mb-4'
            style={{ justifyContent: 'center' }}
          >
            <div className='search bottom-shadow' style={{ margin: '0' }}>
              <input
                placeholder='Club Name'
                style={{ textAlign: 'left' }}
              />
            </div>
            <button
              className='btn bottom-shadow'
              style={{
                background: 'var(--secondary)',
                color: 'var(--white)',
                fontWeight: '300',
                borderRadius: '50px',
                height: '50px',
              }}
            >
              Search Group
            </button>
          </div>
          <div className='col-400-f'>
            <div>
              {userGroups.map((group) => (
                <div className='card-main mt-4' key={group._id}>
                  <Link
                    to={`/book-review/club/${group._id}`}
                    style={{ textDecoration: 'none', color: '#111' }}
                  >
                    <div
                      className='group-card-row'
                      style={{ cursor: 'pointer' }}
                    >
                      <div className='group-card-left'>
                        <img
                          src={Group2}
                          className='group-img'
                          alt='Group'
                        />
                      </div>

                      <div className='group-card-right'>
                        <h5 className='font-weight-500'>{group.name}</h5>
                        <p>
                          amet, Cras nisi at Nullam elit. tincidunt hendrerit
                          at, Ut vitae Donec viverra elit ullamcorper libero,
                          vitae ex. ipsum facilisis odio Donec Lorem ex Donec In
                          amet, Cras nisi at Nullam elit. tincidunt hendrerit
                          at, Ut vitae Donec viverra elit ullamcorper libero,
                          vitae ex. ipsum facilisis odio Donec Lorem ex Donec In
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className='col-400'>
            <div className='card-main sticky-100'>
              <div>
                <h5 className='font-weight-600'>Browse Groups by Tags</h5>
              </div>
              <div className='details-dropdown pt-2'>
                <div
                  className='details-dropdown-left bottom-shadow'
                  style={{ background: 'white' }}
                >
                  <input
                    placeholder='Tag Name'
                    style={{
                      background: 'initial',
                      border: 'none',
                      outline: 'none',
                      padding: '0 10px',
                    }}
                  />
                </div>
                <div
                  className='details-dropdown-right bottom-shadow'
                  style={{ background: 'white' }}
                >
                  Search
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Group;

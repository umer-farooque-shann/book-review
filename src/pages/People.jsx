import React, { useState ,useEffect} from 'react';
import Header from '../components/Header';
import Plus from '../assets/plus-circle.png';
import User1 from '../assets/user1.png';
import Footer from '../components/Footer';
import axiosInstance from '../services/axiosInterceptor';

const People = () => {
  const [activeTab, setActiveTab] = useState('week');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axiosInstance.get('/api/getUsersWithSimilarGenres');
        setUsers(response.data);
     
      } catch (error) {
        setError(error.response ? error.response.data.message : 'An error occurred');
      }
    };

    fetchPeople();
  }, []);



  const followUser = async (userId) => {
    try {
      const response = await axiosInstance.post('/api/followUser', { followUserId: userId });
      console.log(response.data.message); // Log success message
      // Now you can update the UI to reflect the follow action
      setUsers(users.map(user => user._id === userId ? { ...user, isFollowed: true } : user));
    } catch (error) {
      console.error('Error following user:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  const unfollowUser = async (userId) => {
    try {
      const response = await axiosInstance.post('/api/unfollowUser', { unfollowUserId: userId });
      console.log(response.data.message); // Log success message
      // Now you can update the UI to reflect the unfollow action
      setUsers(users.map(user => user._id === userId ? { ...user, isFollowed: false } : user));
    } catch (error) {
      console.error('Error unfollowing user:', error);
      // Handle error, such as displaying an error message to the user
    }
  };


  return (
    <>
      <Header />
      <div className='main people-page'>
        <div className='book-row cr_space pb-4'>
          <div className='head2 text-center  mb-4 pb-4'>
            <h2 className='text-secondary'>Most popular 100 reviewers this week in Country Name</h2>
          </div>
          
          <div className='col-280-f'>
            <div className='tab-head'>
              <h6
                className={`tab-btn ${activeTab === 'week' ? 'active' : ''}`}
                onClick={() => handleTabClick('week')}
              >
                This Week
              </h6>
              <h6
                className={`tab-btn ${activeTab === 'month' ? 'active' : ''}`}
                onClick={() => handleTabClick('month')}
              >
                This Month
              </h6>
              <h6
                className={`tab-btn ${activeTab === 'last' ? 'active' : ''}`}
                onClick={() => handleTabClick('last')}
              >
                Last 12 Month
              </h6>
              <h6
                className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => handleTabClick('all')}
              >
                All Time
              </h6>
              
            </div>
            <div className='tab-content' style={{ display: activeTab === 'week' ? 'block' : 'none' }}>
              <div className='col-2-row'>
              {users.length > 0 ? (
                    users.map((user) => (
                <div className='col-6-cr'>

                
                  <div className='card-main'>
                    <div className='group-card-row'>
                      <div className='group-card-left'>
                        <img
                          src={User1}
                          className='group-img'
                          alt='Group'
                        />
                      </div>
                      <div className='group-card-right flex-align'>
                        <div>
                          <h5 className='font-weight-600'>{user.name}</h5>
                          <h6 className='pt-1 font-weight-500 text-gray'>{user.dateOfJoined}</h6>
                          <div className='flex-align3 g2 pt-1'>
                            <span className='text-secondary font-weight-500'> </span>
                            <span className='text-secondary font-weight-500'>{user.followers?.length || 0} Friends</span>
                          </div>
                        </div>
                        <div className='fit-content'>
                        {user.isFollowed ? (
                            <button
                              className='btn bottom-shadow'
                              style={{
                                background: 'var(--secondary)',
                                color: 'var(--white)',
                                fontWeight: '300'
                              }}
                              onClick={() => unfollowUser(user._id)}
                            >
                              Unfollow
                            </button>
                          ) : (
                            <button
                              className='btn bottom-shadow'
                              style={{
                                background: 'var(--secondary)',
                                color: 'var(--white)',
                                fontWeight: '300'
                              }}
                              onClick={() => followUser(user._id)}
                            >
                              Follow
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                 

                </div>
                   ))
                  ) : (
                    <p>No users found with similar genres.</p>
                  )}
              </div>
              
            </div>
            <div className='tab-content' style={{ display: activeTab === 'month' ? 'block' : 'none' }}>
              <div className='col-2-row'>
                  <div className='col-6-cr'>
                    <div className='card-main'>
                      <div className='group-card-row'>
                        <div className='group-card-left'>
                          <img
                            src={User1}
                            className='group-img'
                            alt='Group'
                          />
                        </div>
                        <div className='group-card-right flex-align'>
                          <div>
                            <h5 className='font-weight-600'>Name</h5>
                            <h6 className='pt-1 font-weight-500 text-gray'>Location (city, state)</h6>
                            <div className='flex-align3 g2 pt-1'>
                              <span className='text-secondary font-weight-500'>1,342  Books, </span>
                              <span className='text-secondary font-weight-500'>2345 Friends</span>
                            </div>
                          </div>
                          <div className='fit-content'>
                            <button
                              className='btn bottom-shadow'
                              style={{
                                background: 'var(--secondary)',
                                color: 'var(--white)',
                                fontWeight: '300'
                              }}
                            >
                              Follow
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
              </div>
            </div>
            <div className='tab-content' style={{ display: activeTab === 'last' ? 'block' : 'none' }}>
              <div className='col-2-row'>
                  <div className='col-6-cr'>
                    <div className='card-main'>
                      <div className='group-card-row'>
                        <div className='group-card-left'>
                          <img
                            src={User1}
                            className='group-img'
                            alt='Group'
                          />
                        </div>
                        <div className='group-card-right flex-align'>
                          <div>
                            <h5 className='font-weight-600'>Name</h5>
                            <h6 className='pt-1 font-weight-500 text-gray'>Location (city, state)</h6>
                            <div className='flex-align3 g2 pt-1'>
                              <span className='text-secondary font-weight-500'>1,342  Books, </span>
                              <span className='text-secondary font-weight-500'>2345 Friends</span>
                            </div>
                          </div>
                          <div className='fit-content'>
                            <button
                              className='btn bottom-shadow'
                              style={{
                                background: 'var(--secondary)',
                                color: 'var(--white)',
                                fontWeight: '300'
                              }}
                            >
                              Follow
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
              </div>
            </div>
            <div className='tab-content' style={{ display: activeTab === 'all' ? 'block' : 'none' }}>
              <div className='col-2-row'>
                  <div className='col-6-cr'>
                    <div className='card-main'>
                      <div className='group-card-row'>
                        <div className='group-card-left'>
                          <img
                            src={User1}
                            className='group-img'
                            alt='Group'
                          />
                        </div>
                        <div className='group-card-right flex-align'>
                          <div>
                            <h5 className='font-weight-600'>Name</h5>
                            <h6 className='pt-1 font-weight-500 text-gray'>Location (city, state)</h6>
                            <div className='flex-align3 g2 pt-1'>
                              <span className='text-secondary font-weight-500'>1,342  Books, </span>
                              <span className='text-secondary font-weight-500'>2345 Friends</span>
                            </div>
                          </div>
                          <div className='fit-content'>
                            <button
                              className='btn bottom-shadow'
                              style={{
                                background: 'var(--secondary)',
                                color: 'var(--white)',
                                fontWeight: '300'
                              }}
                            >
                              Follow
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
              </div>
            </div>


          </div>
          <div className='col-280' style={{  marginTop:'45px' }}>
            <div className='card-main sticky-100'>
              <div>
                <h5 className='font-weight-600'>MEET PEOPLE</h5>
              </div>
              <div>
                <h6 className='pt-2 text-left font-weight-500'>Top Readers</h6>
                <h6 className='pt-2 text-left font-weight-500'>Top Reviewers</h6>
                <h6 className='pt-2 text-left font-weight-500 text-secondary'>Most Popular Reviewers</h6>
                <h6 className='pt-2 text-left font-weight-500'>Most Followed</h6>
                <h6 className='pt-2 text-left font-weight-500'>Top Librarians</h6>


              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default People;

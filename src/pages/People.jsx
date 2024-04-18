import React, { useState } from 'react';
import Header from '../components/Header';
import Plus from '../assets/plus-circle.png';
import User1 from '../assets/user1.png';

const People = () => {
  const [activeTab, setActiveTab] = useState('week');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
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
    </>
  );
};

export default People;

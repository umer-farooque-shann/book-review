import React, { useState } from 'react';
import Header from '../components/Header';
import Plus from '../assets/plus-circle.png';
import User1 from '../assets/user1.png';
import Footer from '../components/Footer';

const Quates = () => {
  const [activeTab, setActiveTab] = useState('popular');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Header />
      <div className='main quates-page'>
        <div className='book-row cr_space pb-4'>
        <div className='head2 text-center' style={{ marginBottom: '20px' }}>
            <h2 className='text-secondary'>popular  Quote's </h2>
            <div className='right-search flex-align3'>
              <button
                className='btn'
                style={{
                  boxShadow: 'none',
                  background: 'var(--secondary)',
                  color: 'var(--white)',
                  fontWeight: '300',
                  borderRadius: '40px',
                }}
              >
                My Quotes
                
              </button>
              <button
                className='btn'
                style={{
                  boxShadow: 'none',
                  background: 'var(--secondary)',
                  color: 'var(--white)',
                  fontWeight: '300',
                  borderRadius: '40px',
                }}
              >
                Add a Quotes
                <img
                  src={Plus}
                  className='circle-img'
                  alt='Add'
                  style={{ marginLeft: '10px' }}
                />
              </button>
            </div>
          </div>
          <div
            className='flex-align3 g3 w-100 d-flex pt-4 mt-4 pb-4 mb-4'
            style={{ justifyContent: 'center' }}
          >
            <div className='search bottom-shadow' style={{ margin: '0' }}>
              <input
                placeholder='Find Quote by Keywords, Author'
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
            <div className='tab-head'>
              <h6
                className={`tab-btn ${activeTab === 'popular' ? 'active' : ''}`}
                onClick={() => handleTabClick('popular')}
              >
                popular
              </h6>
              <h6
                className={`tab-btn ${activeTab === 'recent' ? 'active' : ''}`}
                onClick={() => handleTabClick('recent')}
              >
                recent
              </h6>
              <h6
                className={`tab-btn ${activeTab === 'new' ? 'active' : ''}`}
                onClick={() => handleTabClick('new')}
              >
                new
              </h6>
              <h6
                className={`tab-btn ${activeTab === 'friends' ? 'active' : ''}`}
                onClick={() => handleTabClick('friends')}
              >
                Friends
              </h6>
              <h6
                className={`tab-btn ${activeTab === 'authors' ? 'active' : ''}`}
                onClick={() => handleTabClick('authors')}
              >
                Authors
              </h6>
            </div>
            <div className='tab-content' style={{ display: activeTab === 'popular' ? 'block' : 'none' }}>
              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“Be yourself; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“Be yourself; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“Be yourself; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“Be yourself; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“Be yourself; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“Be yourself; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“Be yourself; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='tab-content' style={{ display: activeTab === 'recent' ? 'block' : 'none' }}>
              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“ye; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-content' style={{ display: activeTab === 'new' ? 'block' : 'none' }}>
              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“new; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-content' style={{ display: activeTab === 'friends' ? 'block' : 'none' }}>
              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“friends; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-content' style={{ display: activeTab === 'authors' ? 'block' : 'none' }}>
              <div className='card-main mt-4'>
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
                      <h5 className='font-weight-500'>“authors; everyone else is already taken.”</h5>
                      <h6 className='pt-2 font-weight-500'>- Oscar Wilde</h6>
                      <div className='flex-align3 g2 pt-1' style={{ flexWrap:'nowrap' }}>
                        <span className='text-gray'>tags:</span>
                        <span className='text-secondary'>tag names, tag names, tag names, tag names, tag names,  tag names, tag names, tag names</span>
                      </div>
                    </div>
                    <div className='column-direction'>
                      <button
                        className='btn bottom-shadow'
                        style={{
                          background: 'var(--secondary)',
                          color: 'var(--white)',
                          fontWeight: '300'
                        }}
                      >
                        Like
                      </button>
                      <span className='text-gray font-weight-500'>3242 Likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='col-400' style={{  marginTop:'45px' }}>
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
              <div className='badge-container mt-1'>
                <div className='secondary-badge'>Tag1</div>
                <div className='secondary-badge'>Tag2</div>
                <div className='secondary-badge'>Tag3</div>
                <div className='secondary-badge'>Tag4</div>
                <div className='secondary-badge'>Tag5</div>
                <div className='secondary-badge'>Tag6</div>
                <div className='secondary-badge'>Tag7</div>
                <div className='secondary-badge'>Tag7</div>
                <div className='secondary-badge'>Tag9</div>
                <div className='secondary-badge'>Tag1</div>
                <div className='secondary-badge'>Tag2</div>
                <div className='secondary-badge'>Tag3</div>
                <div className='secondary-badge'>Tag4</div>
                <div className='secondary-badge'>Tag5</div>
                <div className='secondary-badge'>Tag6</div>
                <div className='secondary-badge'>Tag7</div>
                <div className='secondary-badge'>Tag7</div>
                <div className='secondary-badge'>Tag9</div>
                <div className='secondary-badge'>Tag7</div>
                <div className='secondary-badge'>Tag9</div>
    


              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Quates;

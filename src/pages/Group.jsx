import React from 'react';
import Header from '../components/Header';
import Plus from '../assets/plus-circle.png';
import Group2 from '../assets/group.png';
import Footer from '../components/Footer';


const Group = () => {
  return (
    <>
      <Header />
      <div className='main Group-page'>
        <div className='book-row cr_space pb-4'>
          <div className='head2 text-center' style={{ marginBottom: '20px' }}>
            <h2 className='text-secondary'>Groups</h2>
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
              >
                Create Group
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
                placeholder='Group Name,  Book Name, Author Name'
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
              <h6>Featured Groups</h6>
              <div className='card-main mt-4'>
                <div className='group-card-row'>
                  <div className='group-card-left'>
                    <img
                        src={Group2}
                        className='group-img'
                        alt='Group'
                      />
                  </div>
                  <div className='group-card-right'>
                    <h5 className='font-weight-500'>Group Name (Official or Unofficial)</h5>
                    <div className='flex-align3 g2 pt-1 pb-3'>
                      <span>234234 Members</span>
                      <span>Active  an 02 hours ago</span>
                    </div>
                    <p >amet, Cras nisi at Nullam elit. tincidunt hendrerit at, Ut vitae Donec viverra elit ullamcorper libero, vitae ex. ipsum facilisis odio Donec Lorem ex Donec In amet, Cras nisi at Nullam elit. tincidunt hendrerit at, Ut vitae Donec viverra elit ullamcorper libero, vitae ex. ipsum facilisis odio Donec Lorem ex Donec In </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-4 mt-4'>
              <h6>Popular Groups</h6>
              <div className='card-main mt-4'>
                <div className='group-card-row'>
                  <div className='group-card-left'>
                    <img
                        src={Group2}
                        className='group-img'
                        alt='Group'
                      />
                  </div>
                  <div className='group-card-right'>
                    <h5 className='font-weight-500'>Group Name (Official or Unofficial)</h5>
                    <div className='flex-align3 g2 pt-1 pb-3'>
                      <span>234234 Members</span>
                      <span>Active  an 02 hours ago</span>
                    </div>
                    <p >amet, Cras nisi at Nullam elit. tincidunt hendrerit at, Ut vitae Donec viverra elit ullamcorper libero, vitae ex. ipsum facilisis odio Donec Lorem ex Donec In amet, Cras nisi at Nullam elit. tincidunt hendrerit at, Ut vitae Donec viverra elit ullamcorper libero, vitae ex. ipsum facilisis odio Donec Lorem ex Donec In </p>
                  </div>
                </div>
              </div>
              <div className='card-main mt-4'>
                <div className='group-card-row'>
                  <div className='group-card-left'>
                    <img
                        src={Group2}
                        className='group-img'
                        alt='Group'
                      />
                  </div>
                  <div className='group-card-right'>
                    <h5 className='font-weight-500'>Group Name (Official or Unofficial)</h5>
                    <div className='flex-align3 g2 pt-1 pb-3'>
                      <span>234234 Members</span>
                      <span>Active  an 02 hours ago</span>
                    </div>
                    <p >amet, Cras nisi at Nullam elit. tincidunt hendrerit at, Ut vitae Donec viverra elit ullamcorper libero, vitae ex. ipsum facilisis odio Donec Lorem ex Donec In amet, Cras nisi at Nullam elit. tincidunt hendrerit at, Ut vitae Donec viverra elit ullamcorper libero, vitae ex. ipsum facilisis odio Donec Lorem ex Donec In </p>
                  </div>
                </div>
              </div>
              <div className='card-main mt-4'>
                <div className='group-card-row'>
                  <div className='group-card-left'>
                    <img
                        src={Group2}
                        className='group-img'
                        alt='Group'
                      />
                  </div>
                  <div className='group-card-right'>
                    <h5 className='font-weight-500'>Group Name (Official or Unofficial)</h5>
                    <div className='flex-align3 g2 pt-1 pb-3'>
                      <span>234234 Members</span>
                      <span>Active  an 02 hours ago</span>
                    </div>
                    <p >amet, Cras nisi at Nullam elit. tincidunt hendrerit at, Ut vitae Donec viverra elit ullamcorper libero, vitae ex. ipsum facilisis odio Donec Lorem ex Donec In amet, Cras nisi at Nullam elit. tincidunt hendrerit at, Ut vitae Donec viverra elit ullamcorper libero, vitae ex. ipsum facilisis odio Donec Lorem ex Donec In </p>
                  </div>
                </div>
              </div>
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

export default Group;

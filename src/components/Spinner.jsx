import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="sweet-loading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BeatLoader loading={loading} css={override} size={10} color="#36D7B7" />
    </div>
  );
};

export default Spinner;

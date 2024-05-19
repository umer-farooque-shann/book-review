import React from 'react';

const CallingInterface = ({ endCall }) => {
    return (
        <div className="calling-interface" style={{background:"#fff",borderRadius:"5px"}}>
            <h2 className="calling-header">Call in Progress.........</h2>
            
            <div className="call-controls">
                <button className="end-call-btn" onClick={endCall}>End Call</button>
            </div>
        </div>
    );
};

export default CallingInterface;

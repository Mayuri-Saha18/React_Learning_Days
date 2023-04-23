import React from 'react';

const status = ({ onClear }) => {
  return (
    <div>
    <button style={{border:"1px solid black"}} className='ClearBtn' onClick={onClear}>Clear Completed</button>
    </div>
  );
};

export default status;
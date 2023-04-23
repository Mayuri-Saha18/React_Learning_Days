import React from 'react';


const FilterTodo = ({ onFilter }) => {
  return (
    <div className='FilterBtn'>
      <button style={{border:"1px solid black",marginLeft:"20px"}} onClick={() => onFilter('all')}>All</button>
      <button style={{border:"1px solid black",marginLeft:"20px"}} onClick={() => onFilter('active')}>Active</button>
      <button style={{border:"1px solid black",marginLeft:"20px"}} onClick={() => onFilter('completed')}>Completed</button>
    </div>
  );
};


export default FilterTodo;
import React, { useState } from 'react';


const AddTodo = ({ onAdd }) => {
const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form style={{border:"1px solid black"}} className='todoForm' onSubmit={handleSubmit}>
      <input style={{border:"1px solid black"}} placeholder='Enter Todo' type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button style={{border:"1px solid black",marginLeft:"20px"}} type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
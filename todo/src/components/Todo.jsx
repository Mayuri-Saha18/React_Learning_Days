import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const Todo = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <div className='TODO'>

      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span>{todo.title}</span>
      
       <IconButton edge="end" aria-label="delete"  onClick={() => onDelete(todo.id)}> <DeleteIcon />
       </IconButton >

      <IconButton edge="end" aria-label="edit" onClick={() => onEdit(todo.id)}> <EditIcon />
      </IconButton>
    </div>
  );
};

export default Todo;

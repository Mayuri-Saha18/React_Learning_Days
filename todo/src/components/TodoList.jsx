import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
    
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TodoList;
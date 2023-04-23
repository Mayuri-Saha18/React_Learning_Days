import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/Filter';
import ClearCompleted from './components/Status';
import { addTodo, toggleTodo, deleteTodo, editTodo, filterTodo, clearCompleted } from './redux/action';
import "./App.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const App = () => {
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('all');
  const TotalLength = useSelector(state => state.todos);
  const numItems = TotalLength.length;

  const todos = useSelector(state => {
    switch (filter) {
      case 'active':
        return state.todos.filter(todo => !todo.completed);
      case 'completed':
        return state.todos.filter(todo => todo.completed);
      default:
        return state.todos;
    }
  });
  const dispatch = useDispatch();

  const handleAddTodo = title => {
    dispatch(addTodo({
      id: Date.now(),
      title,
      completed: false,
    }));
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = id => {
    setEditId(id);
  };

  const handleSaveTodo = (id, title) => {
    dispatch(editTodo(id, title));
    setEditId(null);
  };

  const handleCancelEdit = () => {
    setEditId(null);
  };

  const handleFilterTodo = filter => {
    setFilter(filter);
    dispatch(filterTodo(filter));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
    {/* <div className='app'> */}

         <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" align="center">TODO</Typography>
            </Toolbar>
        </AppBar>


      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} onEdit={handleEditTodo} editId={editId} onSave={handleSaveTodo} onCancelEdit={handleCancelEdit} />
        <FilterTodo onFilter={handleFilterTodo} />
      <ClearCompleted style={{border:"1px solid black"}} onClear={handleClearCompleted} />
      <p>Total Items:- {numItems}</p>
{/* </div> */}
</Grid>
      </Box>
    </ChakraProvider>
);
};

export default App;

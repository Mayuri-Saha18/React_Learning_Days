import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO, FILTER_TODO, CLEAR_COMPLETED } from './action';

const initialState = {
todos: [],
filter: 'all',
};

const todoReducer = (state = initialState, action) => {
switch (action.type) {
case ADD_TODO:
return {
...state,
todos: [...state.todos, action.payload],
};
case TOGGLE_TODO:
return {
...state,
todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo),
};
case DELETE_TODO:
return {
...state,
todos: state.todos.filter(todo => todo.id !== action.payload),
};
case EDIT_TODO:
  return {
    ...state,
    todos: state.todos.map(todo =>
      todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
    )
  };
case FILTER_TODO:
return {
...state,
filter: action.payload,
};
case CLEAR_COMPLETED:
return {
...state,
todos: state.todos.filter(todo => !todo.completed),
};
default:
return state;
}
};

export default todoReducer;
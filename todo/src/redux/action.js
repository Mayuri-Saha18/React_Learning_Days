export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const FILTER_TODO = 'FILTER_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo,
    });
    
    export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: id,
    });
    
    export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: id,
    });
    
    export const editTodo = (id, title) => ({
    type: EDIT_TODO,
    payload: { id, title },
    });
    
    export const filterTodo = filter => ({
    type: FILTER_TODO,
    payload: filter,
    });
    
    export const clearCompleted = () => ({
    type: CLEAR_COMPLETED,
    });

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType";
  
  const initialState = {
    isLoggedIn: false,
    error: null
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          error: null
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          error: null
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoggedIn: false,
          error: action.error
        };
      default:
        return state;
    }
  };
import * as types from "./actionType";

const initialState = {
  adminData: [],
  isError: false,
  isLoading: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_DATA_SUCCESS:
      return { ...state, isLoading: false, adminData: payload };
    case types.GET_DATA_ERROR:
      return { ...state, isError: true };
    case types.ADD_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.ADD_DATA_SUCCESS:
      return { ...state, isLoading: false };
    case types.ADD_DATA_ERROR:
      return { ...state, isError: true };
    case types.UPDATE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.UPDATE_DATA_SUCCESS:
      return { ...state, payload };
    case types.UPDATE_DATA_ERROR:
      return { ...state, isError: true };
    case types.DELETE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.DELETE_DATA_SUCCESS:
      return { ...state };
    case types.DELETE_DATA_ERROR:
      return { ...state, isError: true };
    default:
      return state;
  }
};
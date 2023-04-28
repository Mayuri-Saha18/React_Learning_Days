import * as types from "./actiontype";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DATA_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_DATA_SUCCESS:
      return { ...state, isLoading: false, products: payload, isError: false };

    case types.GET_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export { reducer };

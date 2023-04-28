import * as types from "./actiontype";
import axios from "axios";

const getTask = (value) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
    )
    .then((res) => {
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_DATA_ERROR, payload: err });
    });
};

export { getTask };

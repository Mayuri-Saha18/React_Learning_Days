import axios from "axios"
import * as types from "./actionType"

const getDataRequest = () => {
    return {
        type: types.GET_DATA_REQUEST
    }
}

const getDataSuccess = (payload) => {
    return {
        type: types.GET_DATA_SUCCESS,
        payload
    }
}

const getDataError = () => {
    return {
        type: types.GET_DATA_ERROR
    }
}

const addDataRequest = () => {
    return {
        type: types.ADD_DATA_REQUEST
    }
}

const addDataSuccess = () => {
    return {
        type: types.ADD_DATA_SUCCESS
    }
}

const addDataError = () => {
    return {
        type: types.ADD_DATA_ERROR
    }
}

const updateDataRequest = () => {
    return {
        type: types.UPDATE_DATA_REQUEST
    }
}

const updateDataSuccess = (payload) => {
    return {
        type: types.UPDATE_DATA_SUCCESS,
        payload
    }
}

const updateDataError = () => {
    return {
        type: types.UPDATE_DATA_ERROR
    }
}

const deleteDataRequest = () => {
    return {
        type: types.DELETE_DATA_REQUEST
    }
}

const deleteDataSuccess = () => {
    return {
        type: types.DELETE_DATA_SUCCESS
    }
}

const deleteDataError = () => {
    return {
        type: types.DELETE_DATA_ERROR
    }
}

const getAllData = (dispatch) => {
    dispatch(getDataRequest());
    axios
        .get("https://mock-9-server.vercel.app/books")
        .then((res) => {
            dispatch(getDataSuccess(res.data))
            console.log(res.data);
        })
        .catch((err) => {
            dispatch(getDataError())
        });
}

const addData = (newData) => (dispatch) => {
    dispatch(addDataRequest());
    return axios
        .post("https://mock-9-server.vercel.app/books", newData)
        .then(() => {
            dispatch(addDataSuccess());

        })
        .catch((err) => {
            dispatch(addDataError());
        })
}

const updateData = (id, editData) => (dispatch) => {
    dispatch(updateDataRequest());
    return axios
        .patch(`https://mock-9-server.vercel.app/books/${id}`, editData)
        .then((res) => {
            dispatch(updateDataSuccess(res.data));
        })
        .catch((err) => {
            dispatch(updateDataError())
        })
}

const deleteData = (id) => (dispatch) => {
    dispatch(deleteDataRequest())
    return axios
        .delete(`https://mock-9-server.vercel.app/books/${id}`)
        .then(() => {
            dispatch(deleteDataSuccess());
        })
        .catch((err) => {
            dispatch(deleteDataError());
        })
}


export { getDataRequest, getDataSuccess, getDataError, addDataError, addDataSuccess, addDataRequest, updateDataError, updateDataRequest, updateDataSuccess, deleteDataError, deleteDataRequest, deleteDataSuccess, getAllData, addData, updateData, deleteData }

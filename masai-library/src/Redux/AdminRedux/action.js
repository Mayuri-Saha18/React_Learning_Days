import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE,
    
});



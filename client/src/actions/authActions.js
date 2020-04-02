import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCESS,
    REGISTER_FAIL
} from './types';

//CHECK TOKEN AND LOAD USER: Make a request to api/auth.js
export const loadUser =  () => (dispatch, getState) => {
    //User loading
    dispatch({type: USER_LOADING});

    //Get token from localstorage
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'Content-type' : 'application/json'
        }
    }

    //if token, add to headers
    if(token) {
        config.headers['x-auth-toke'] = token;
    }

    axios.get('get/auth/user',config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: AUTH_ERROR
            });
        });

}
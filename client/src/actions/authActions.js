import { returnErrors } from './errorActions'
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

    axios
        .get('get/auth/user',tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });

};

//Register new user
export const register = ({username, password}) => dispatch => {
    //headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    //request body
    const body = JSON.stringify({username, password});

    axios.post('api/user',body, config)
        .then(res => dispatch({
            type: REGISTER_SUCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        })
}


export const tokenConfig = getState => {
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

        return config;
}
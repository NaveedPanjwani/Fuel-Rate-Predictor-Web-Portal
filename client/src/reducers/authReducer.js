import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCESS,
    REGISTER_FAIL  
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function(state = initialState, action) {
    switch(action.type){
        //trying to get the user from the backend 
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        
        case USER_LOADED:   
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        
        case LOGIN_SUCCESS:
        case REGISTER_SUCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            };

        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false, 
                isLoading: false
            }
        default:
            return state;          
    }
}
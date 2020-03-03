import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../constants'
import axios from 'axios'
import { returnErrors } from '../actions/errorAction'

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({type: USER_LOADING});

    axios.get('/user', tokenConfig(getState))
        .then( res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }

        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        }

        );
}

// Register user
export const register = ({userName, pass1, /*pass2,*/ userEmail}) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // Request body
    const body = JSON.stringify({userName, pass1, /*pass2,*/ userEmail});
    
    axios.post('/user/register', body, config)
        .then( res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({ type: REGISTER_FAIL });

        });
}

// Login user
export const login = ({userName, pass1}) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // Request body
    const body = JSON.stringify({userName, pass1});
    
    axios.post('/user/login', body, config)
        .then( res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({ type: LOGIN_FAIL });

        });
}


// Logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

// Setup config/headers and token
export const tokenConfig = getState => {
    // Get token from local storage
    const token = getState().user.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // If token, add to headers
    if(token){
        config.headers['x-auth-token'] = token;
    }

    return config;
}

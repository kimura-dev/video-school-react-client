import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const registerUser = (userData, history)  => dispatch => {
  axios
      .post('/api/users', userData)
      .then(res => history.push('/login'))
      .catch(err => 
        // since this is an ajax call and we are waiting we need to call dispatch - Redux Thunk
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        })
      
      );
};

// Login - Get User Token
export const  loginUser = (userData) => dispatch => {
  axios.post('/api/auth/login', userData)
    .then(res => {
      // Save to localStorage
      const token = res.data.authToken;
      // Set token to localStorage
      localStorage.setItem('jwtToken', token);
      // Set token to auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log(err));
}

// Set Logged in User
export const setCurrentUser = (decoded) =>  {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// Log user out
export const logoutUser = () => dispatch => {
  // Remove the token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {API_BASE_URL} from '../config';
import { GET_ERRORS, SET_CURRENT_USER, PURCHASE_COURSE } from './types';




export const purchaseCourse = (id, token) => dispatch => {
  // dispatch(setCourseLoading());
  axios
    .post(`${API_BASE_URL}/course/${id}/purchase/${token}`)
    .then(res => {
      dispatch({
        type: PURCHASE_COURSE,
        payload: res.data
      })
    })
    .catch(err => console.log(err));

}

export const refreshUserLogin = (history) => dispatch => {
  axios.post(`${API_BASE_URL}/auth/refresh`)
  .then(res => {
    // Save to localStorage
    const token = res.data.authToken;
    // Set token to localStorage
    localStorage.setItem('jwtToken', token)
    // Set token to auth header
    setAuthToken(token);
    // Decode token to get user data
    const decoded = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));
  })
  .catch(err => history.push('/login'));
}

export const refreshUserData = (username) => dispatch => {
  axios.get(`${API_BASE_URL}/users/${username}`)
    .then(res => {
      let user = res.data;
    
      dispatch(setCurrentUser(user))
      // dispatch(setCurrentUser);
    })
    .catch(err => console.log(err));
}

export const registerUser = (userData, history)  => dispatch => {
  axios
      .post(`${API_BASE_URL}/users`, userData)
      .then(res => history.push('/login'))
      .catch(err => 
        // since this is an ajax call and we are waiting we need to call dispatch - Redux Thunk
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );

};

// Login - Get User Token
export const  loginUser = (userData) => dispatch => {
  axios.post(`${API_BASE_URL}/auth/login`, userData)
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
  //   .catch(err => dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data.message
  //   })
  // );
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
  // history.push('/login') 
  // Remove the token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser(null));
}
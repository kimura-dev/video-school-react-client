import axios from 'axios';
import {
   GET_AUTHORED_COURSES, 
   GET_PURCHASED_COURSES, 
   GET_ALL_COURSES, 
   COURSE_LOADING, 
   GET_ERRORS
  } from './types';

  export const createCourse = (courseData, history)  => dispatch => {
    axios
        .post('/api/course', courseData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
          // since this is an ajax call and we are waiting we need to call dispatch - Redux Thunk
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data.message
          })
        
        )
        .catch(err => console.log(`${err.response.data.location} ${err.response.data.message}`));
  };
  

// Get Authored Courses
export const getAuthoredCourses = () => dispatch => {
  dispatch(setCourseLoading());
  axios.get('/api/author/:username')
    .then(res => 
      dispatch({
        type: GET_AUTHORED_COURSES,
        // payload is all the data
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Get Purchased Courses
export const getPurchasedCourses = () => dispatch => {
  dispatch(setCourseLoading());
  axios.get('/api/:username/courses')
    .then(res => 
      dispatch({
        type: GET_PURCHASED_COURSES,
        // payload is all the data
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Get All Course 
export const getAllCourses = () => dispatch => {
  dispatch(setCourseLoading());
  axios.get('/api/course')
    .then(res => 
      dispatch({
        type: GET_ALL_COURSES,
        payload: res.data
      })
    )
    // .catch(err => dispatch({
    //   type: GET_ERRORS,
    //   payload: {}
    // }))
    .catch(err => console.log(err))
}

// Course Loading
export const setCourseLoading = () => {
  return {
    type: COURSE_LOADING
  }
}
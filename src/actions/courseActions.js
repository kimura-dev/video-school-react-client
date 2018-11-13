import axios from 'axios';
import {
  CREATE_COURSE,
  GET_COURSE,
  GET_ALL_COURSES, 
  GET_AUTHORED_COURSES, 
  GET_PURCHASED_COURSES, 
  EDIT_COURSE,
  DELETE_COURSE,
  COURSE_LOADING,
  COURSE_PREVIEW_URL, 
  GET_ERRORS,
  UPDATE_NEW_COURSE
  } from './types';

  // Create Course
export const createCourse = (courseData, history)  => dispatch => {
  axios
      .post('/api/course', courseData)
      .then(res => 
        dispatch({
          type: CREATE_COURSE,
          history: history.push('/dashboard'),
          payload: res.data
        })
      )
      .catch(err => 
        // since this is an ajax call and we are waiting we need to call dispatch - Redux Thunk
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        })
      
      )
      .catch(err => console.log(err));
};

// export const createCourse = (courseData, history)  => dispatch => {
//   axios
//       .post('/api/course', courseData)
//       .then(res => history.push('/dashboard'))
//       .catch(err => 
//         // since this is an ajax call and we are waiting we need to call dispatch - Redux Thunk
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data.message
//         })
      
//       )
//       .catch(err => console.log(`${err.response.data.location} ${err.response.data.message}`));
// };

//Update a new Course
export const updateNewCourse = (newData) => dispatch => {
  dispatch({
    type: UPDATE_NEW_COURSE,
    payload: newData
  })
}

//Play Course Preview
export const coursePreviewUrl = (url) => dispatch => {
  dispatch({
    type: COURSE_PREVIEW_URL,
    payload: url
  })
}
  
// Get A Course 
export const getCourse = (id) => dispatch => {
  dispatch(setCourseLoading());
  axios.get(`/api/course/${id}`)
    .then(res => 
      dispatch({
        type: GET_COURSE,
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

// Get Authored Courses
export const getAuthoredCourses = () => dispatch => {
  dispatch(setCourseLoading());
  axios.get('/api/author/:username')
    .then(res => 
      dispatch({
        type: GET_AUTHORED_COURSES,
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
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Edit Course
export const editCourse = (id) => dispatch => {
  dispatch(setCourseLoading());
  axios.put(`/api/courses/${id}`)
    .then(res => 
      dispatch({
        type: EDIT_COURSE,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Delete Course
export const deleteCourse = (id) => dispatch => {
  dispatch(setCourseLoading());
  axios.delete(`/api/courses/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_COURSE,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}


// Course Loading
export const setCourseLoading = () => {
  return {
    type: COURSE_LOADING
  }
}
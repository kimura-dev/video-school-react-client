import axios from 'axios';
import {API_BASE_URL} from '../config';
import {
  CREATE_COURSE,
  GET_COURSE,
  GET_ALL_COURSES, 
  GET_AUTHORED_COURSES, 
  GET_PURCHASED_COURSES, 
  GET_PURCHASE_TOKEN,
  EDIT_COURSE,
  DELETE_COURSE,
  COURSE_LOADING,
  SET_CURRENT_COURSE, 
  GET_ERRORS,
  UPDATE_NEW_COURSE,
  SELECTED_COURSE_FIELD_CHANGE,
  SET_COURSE_LOADED
  } from './types';




  export const setCourseLoaded = (boolean) => dispatch => {
    dispatch({
      type: SET_COURSE_LOADED,
      payload: boolean
    })
  }

  export const getPurchaseToken = (course, user) => dispatch => {
    dispatch({
      type: GET_PURCHASE_TOKEN,
      payload: 'Token PlaceHolder'
    })
  }

  // Create Course
export const createCourse = (courseData, history)  => dispatch => {
  axios
      .post(`${API_BASE_URL}/course`, courseData)
      .then(res => 
        dispatch({
          type: CREATE_COURSE,
          history: history.push('/dashboard'),
          payload: res.data
        })
      )
      .catch(err => 
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};

//Update a new Course
export const updateNewCourse = (newData) => dispatch => {
  dispatch({
    type: UPDATE_NEW_COURSE,
    payload: newData
  })
}


//Set Current Course
export const setCurrentCourse = (course) => dispatch => {
    dispatch({
      type: SET_CURRENT_COURSE,
      // history: history.push('/dashboard'),
      payload: course
    })
}

export const selectedCourseFieldChange = (name, value) => dispatch => {
  dispatch({
    type: SELECTED_COURSE_FIELD_CHANGE,
    name,
    value
  })
}
  
// Get A Course 
export const getCourse = (id) => dispatch => {
  dispatch(setCourseLoading());
  axios.get(`${API_BASE_URL}/course/${id}`)
    .then(res => 
      dispatch({
        type: GET_COURSE,
        payload: res.data
      })
    )
    // .catch(err => 
    //   dispatch({
    //     type: GET_ERRORS,
    //     payload: err.response.data
    //   })
    // )

    .catch(err => console.log(err))
};

// Get All Course 
export const getAllCourses = () => dispatch => {

  axios.get(`${API_BASE_URL}/course`)
    .then(res => {
      // console.log(res.data)

      dispatch({
        type: GET_ALL_COURSES,
        payload: res.data
      })
    }
      
)
   
    .catch(err => console.log(err))
}

// Get Authored Courses
export const getAuthoredCourses = (username) => dispatch => {
  dispatch(setCourseLoading());
  axios.get(`${API_BASE_URL}/course/author/${username}`)
    .then(res => 
      dispatch({
        type: GET_AUTHORED_COURSES,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Get Purchased Courses
export const getPurchasedCourses = (username) => dispatch => {
  dispatch(setCourseLoading());
  axios.get(`${API_BASE_URL}/users/${username}/courses`)
    .then(res => 
      dispatch({
        type: GET_PURCHASED_COURSES,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Edit Course
export const editCourse = (course, history) => dispatch => {
  dispatch(setCourseLoading());  

  axios.put(`${API_BASE_URL}/course/${course._id}`, course)
    .then(res => 
      dispatch({
        type: EDIT_COURSE,
        history: history.push('/dashboard'),
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Delete Course
export const deleteCourse = (id) => dispatch => {
  dispatch(setCourseLoading());
  axios.delete(`${API_BASE_URL}/course/${id}`)
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
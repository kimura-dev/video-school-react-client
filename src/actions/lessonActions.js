import axios from 'axios';
import {
   GET_LESSON, 
   GET_ALL_LESSONS,
   EDIT_LESSON,
   LESSON_LOADING, 
   GET_ERRORS
  } from './types';


 
  
// Get A Lesson
export const getLesson = (id) => dispatch => {
  dispatch(setLessonLoading());
  axios.get(`/api/lesson/${id}`)
    .then(res => 
      dispatch({
        type: GET_LESSON,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}
  

// Get All Lessons 
export const getAllLessons = () => dispatch => {
  dispatch(setLessonLoading());
  axios.get('/api/lesson')
    .then(res => 
      dispatch({
        type: GET_ALL_LESSONS,
        payload: res.data
      })
    )
    // .catch(err => dispatch({
    //   type: GET_ERRORS,
    //   payload: {}
    // }))
    .catch(err => console.log(err))
}

// Edit A Lesson
export const editLesson = (id) => dispatch => {
  dispatch(setLessonLoading());
  axios.put(`/api/lesson/${id}`)
    .then(res => 
      dispatch({
        type: EDIT_LESSON,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}


// Lesson Loading
export const setLessonLoading = () => {
  return {
    type: LESSON_LOADING
  }
}